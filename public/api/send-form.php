<?php
/**
 * Endpoint Brevo — réception des formulaires (contact + devis web/data/ia)
 *
 * Lit la clé API depuis la variable d'environnement Hostinger : BREVO_API_KEY
 * Envoie l'email à : muniernael@gmail.com
 *
 * Variables d'env requises côté Hostinger (hPanel → Sites → Variables d'environnement) :
 *   - BREVO_API_KEY        : clé API Brevo (obligatoire)
 *   - BREVO_SENDER_EMAIL   : email expéditeur validé sur Brevo (optionnel, défaut : contact@nalconsulting.fr)
 *   - BREVO_TO_EMAIL       : destinataire (optionnel, défaut : muniernael@gmail.com)
 */

// ─── Sécurité : seulement POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// ─── Anti-spam basique (honeypot facultatif)
if (!empty($_POST['_gotcha'] ?? '')) {
    // Bot détecté — on fait semblant que c'est OK
    header('Location: /merci');
    exit;
}

// ─── Lecture de la config
$apiKey      = getenv('BREVO_API_KEY') ?: ($_ENV['BREVO_API_KEY'] ?? '');
$senderEmail = getenv('BREVO_SENDER_EMAIL') ?: ($_ENV['BREVO_SENDER_EMAIL'] ?? 'contact@nalconsulting.fr');
$senderName  = 'Nal Consulting — Site';
$toEmail     = getenv('BREVO_TO_EMAIL') ?: ($_ENV['BREVO_TO_EMAIL'] ?? 'muniernael@gmail.com');
$toName      = 'Nael Munier';

if (empty($apiKey)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => 'Configuration manquante : BREVO_API_KEY']);
    exit;
}

// ─── Détermination du type de formulaire
$service = strtolower(trim($_POST['service'] ?? 'contact'));
$allowedServices = ['contact', 'web', 'data', 'ia'];
if (!in_array($service, $allowedServices, true)) {
    $service = 'contact';
}

$labels = [
    'contact' => ['emoji' => '✉️',  'name' => 'Message contact',          'color' => '#6B91D4'],
    'web'     => ['emoji' => '🌐',  'name' => 'Devis — Site internet',    'color' => '#A0B4DE'],
    'data'    => ['emoji' => '📊',  'name' => 'Devis — Data & Reporting', 'color' => '#6B91D4'],
    'ia'      => ['emoji' => '🤖',  'name' => 'Devis — Automatisation IA','color' => '#4a70c0'],
];
$meta = $labels[$service];

// ─── Helpers
function clean($s) {
    return trim((string)$s);
}
function esc($s) {
    return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
}
function fmtField($label, $value) {
    if ($value === null || $value === '' || (is_array($value) && empty($value))) {
        return '';
    }
    if (is_array($value)) {
        $value = implode(', ', $value);
    }
    $value = nl2br(esc($value));
    return "<tr><td style=\"padding:8px 14px;background:#f0f4f9;border-radius:6px 0 0 6px;font-weight:600;color:#1a1f2e;width:170px;vertical-align:top;\">{$label}</td>"
         . "<td style=\"padding:8px 14px;background:#fff;border:1px solid #e4ebf4;border-left:none;border-radius:0 6px 6px 0;color:#1a1f2e;\">{$value}</td></tr>";
}

// ─── Extraction des champs (communs)
$prenom      = clean($_POST['prenom']      ?? '');
$nom         = clean($_POST['nom']         ?? '');
$email       = clean($_POST['email']       ?? '');
$telephone   = clean($_POST['telephone']   ?? '');
$entreprise  = clean($_POST['entreprise']  ?? '');
$budget      = clean($_POST['budget']      ?? '');
$description = clean($_POST['description'] ?? '');
$message     = clean($_POST['message']     ?? ''); // form contact

// Validation minimale
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => 'Email invalide']);
    exit;
}

$fullName = trim("$prenom $nom") ?: 'Anonyme';

// ─── Construction du contenu HTML selon le service
$rowsHtml = '';
$rowsHtml .= fmtField('Nom complet', $fullName);
$rowsHtml .= fmtField('Email',       $email);
$rowsHtml .= fmtField('Téléphone',   $telephone);
$rowsHtml .= fmtField('Entreprise',  $entreprise);

if ($service === 'contact') {
    $rowsHtml .= fmtField('Message', $message);
} elseif ($service === 'web') {
    $rowsHtml .= fmtField('Type de site', $_POST['type_site'] ?? '');
    $rowsHtml .= fmtField('Objectif',     $_POST['objectif']  ?? '');
    $rowsHtml .= fmtField('Nb de pages',  $_POST['nb_pages']  ?? '');
    $rowsHtml .= fmtField('SEO',          $_POST['seo']       ?? '');
    $rowsHtml .= fmtField('Budget',       $budget);
    $rowsHtml .= fmtField('Description',  $description);
} elseif ($service === 'data') {
    $rowsHtml .= fmtField('Sources de données', $_POST['sources']   ?? []);
    $rowsHtml .= fmtField('Outil souhaité',     $_POST['outil']     ?? '');
    $rowsHtml .= fmtField('Volume de données',  $_POST['volume']    ?? '');
    $rowsHtml .= fmtField('Fréquence',          $_POST['frequence'] ?? '');
    $rowsHtml .= fmtField('Budget',             $budget);
    $rowsHtml .= fmtField('Description',        $description);
} elseif ($service === 'ia') {
    $rowsHtml .= fmtField('Type d\'automatisation', $_POST['type_auto']      ?? '');
    $rowsHtml .= fmtField('Tâche à automatiser',    $_POST['tache']          ?? '');
    $rowsHtml .= fmtField('Volume mensuel',         $_POST['volume_mensuel'] ?? '');
    $rowsHtml .= fmtField('Budget',                 $budget);
    $rowsHtml .= fmtField('Intégrations',           $_POST['integrations']   ?? []);
    $rowsHtml .= fmtField('Description',            $description);
}

$dateNow = date('d/m/Y H:i');

$htmlContent = <<<HTML
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:24px;background:#f0f4f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1f2e;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(13,24,48,.08);">
    <div style="padding:28px 32px;background:linear-gradient(135deg,#0d1830 0%,#1a2e50 60%,#243d6b 100%);color:#ffffff;">
      <div style="display:inline-block;padding:4px 12px;background:rgba(160,180,222,.18);border:1px solid rgba(160,180,222,.35);border-radius:999px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#d6e6ff;margin-bottom:14px;">Nal Consulting</div>
      <h1 style="margin:0;font-size:22px;font-weight:800;letter-spacing:-.02em;">{$meta['emoji']} {$meta['name']}</h1>
      <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,.65);">Reçu le {$dateNow}</p>
    </div>
    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:separate;border-spacing:0 6px;font-size:14px;line-height:1.5;">
        {$rowsHtml}
      </table>
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e4ebf4;text-align:center;font-size:12px;color:#6b7a99;">
        Email envoyé automatiquement depuis le formulaire <strong>nalconsulting.fr</strong><br>
        Répondez directement à cet email pour contacter {$fullName}.
      </div>
    </div>
  </div>
</body>
</html>
HTML;

// Version texte fallback
$textContent = "{$meta['name']}\n"
             . str_repeat('-', 40) . "\n"
             . "Nom : {$fullName}\n"
             . "Email : {$email}\n"
             . ($telephone  ? "Téléphone : {$telephone}\n"   : '')
             . ($entreprise ? "Entreprise : {$entreprise}\n" : '')
             . "\n" . ($message ?: $description) . "\n";

// ─── Construction du payload Brevo
$subject = "[Nal Consulting] {$meta['name']} — {$fullName}";

$payload = [
    'sender'      => ['name' => $senderName, 'email' => $senderEmail],
    'to'          => [['email' => $toEmail, 'name' => $toName]],
    'replyTo'     => ['email' => $email, 'name' => $fullName],
    'subject'     => $subject,
    'htmlContent' => $htmlContent,
    'textContent' => $textContent,
    'tags'        => ['site-nalconsulting', "service-{$service}"],
];

// ─── Appel API Brevo
$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_HTTPHEADER     => [
        'Accept: application/json',
        'Content-Type: application/json',
        'api-key: ' . $apiKey,
    ],
    CURLOPT_TIMEOUT        => 12,
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

// ─── Gestion de la réponse
$isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

if ($httpCode >= 200 && $httpCode < 300) {
    if ($isAjax) {
        header('Content-Type: application/json');
        echo json_encode(['ok' => true]);
    } else {
        header('Location: /merci');
    }
    exit;
} else {
    // Log côté serveur (n'expose pas la clé dans la réponse)
    error_log("[Brevo] HTTP {$httpCode} — {$curlErr} — Response: {$response}");
    http_response_code(502);
    if ($isAjax) {
        header('Content-Type: application/json');
        echo json_encode(['ok' => false, 'error' => 'Erreur envoi email']);
    } else {
        header('Location: /erreur');
    }
    exit;
}
