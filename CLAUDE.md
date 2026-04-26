# CLAUDE.md — Nal Consulting Website

## Présentation du projet

Site vitrine pour **Nal Consulting**, cabinet de conseil en transformation digitale.  
Construit avec **Astro** (SSG), le site présente 3 pôles de services :
- Développement de sites internet & SEO
- Développement de reporting et analyses de données
- Automatisations et agents IA

Philosophie visuelle : **premium tech**, inspiré d'Apple.com — épuré, animé, moderne.

---

## Stack technique

- **Framework** : [Astro](https://astro.build/) (SSG)
- **Styling** : CSS custom avec variables (pas de Tailwind)
- **Animations** : CSS transitions + Intersection Observer + GSAP si besoin
- **Déploiement** : GitHub → Vercel
- **Repo GitHub** : `nal-consulting` (à créer)

---

## Charte graphique

### Couleurs
```css
--bleu:        #A0B4DE   /* couleur marque principale */
--bleu-vif:    #6B91D4   /* bleu plus saturé, CTAs */
--bleu-nuit:   #070d1a   /* fond hero ultra sombre */
--bleu-marine: #0d1830   /* sections sombres */
--bleu-moyen:  #1a2e50   /* éléments dark intermédiaires */
--blanc:       #ffffff
--gris-clair:  #f0f4f9   /* sections claires */
--gris-moyen:  #6b7a99   /* texte secondaire */
--gris-fonce:  #1a1f2e   /* texte principal */
```

### Gradients
```css
/* Gradient signature Nal */
linear-gradient(135deg, #A0B4DE 0%, #6B91D4 50%, #4a70c0 100%)

/* Fond hero */
linear-gradient(135deg, #070d1a 0%, #0d1830 60%, #1a2e50 100%)
```

### Logo
- Fichier : `public/assets/logo.png` (copié depuis `nal consulting logo.png`)
- Couleur : `#A0B4DE` sur fond transparent
- Motif : réseau de points connectés en forme de X — symbolise data, connexions, intelligence

### Typographie
```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', 'Segoe UI', sans-serif;
```
- Titres : weight 800, letter-spacing -0.03em
- Corps : weight 400–500, line-height 1.65
- Eyebrow : uppercase, letter-spacing 0.12em, weight 600

### Coins arrondis
```css
--rayon:    1.2rem
--rayon-lg: 2rem
--rayon-xl: 3rem
```

---

## Structure du projet

```
/
├── public/
│   ├── assets/
│   │   ├── logo.png
│   │   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ServicesCarousel.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro          → Page d'accueil
│   │   ├── devis.astro          → Demande de devis
│   │   ├── qui-sommes-nous.astro → À propos
│   │   └── contact.astro        → Contact
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

---

## Pages

### `/` — Accueil
- Hero sombre avec animation de particules/gradient, tagline impactante, 2 CTAs
- Carousel de services (3 cartes animées)
- Section "Pourquoi Nal Consulting" (3 stats ou valeurs)
- Section "Nos services" détaillée (cards avec hover)
- Section "Comment ça marche" (étapes)
- CTA final avec gradient

### `/devis` — Demande de devis
- Formulaire structuré : nom, email, type de service, budget, description
- Design sobre, fond sombre, champs stylisés
- Envoi via Formspree ou mailto

### `/qui-sommes-nous` — À propos
- Présentation de Nael Munier et de la vision Nal Consulting
- Valeurs (3 pilliers)
- Compétences techniques (badges)

### `/contact` — Contact
- Formulaire simple : nom, email, message
- Liens sociaux (LinkedIn, GitHub)
- Localisation (si pertinent)

---

## Philosophie de design

Inspiré d'Apple.com :
- **Espaces généreux** : padding vertical `6rem–10rem` entre sections
- **Typographie hero** : `clamp(3rem, 7vw, 6rem)`, weight 800
- **Animations au scroll** : fade-up avec Intersection Observer (classe `.reveal`)
- **Glassmorphism léger** : pour le header (backdrop-filter: blur + semi-transparent)
- **Blobs lumineux** : pour les CTA sections (radial gradients diffus)
- **Effets hover** : translateY + scale sur les cartes, transitions 0.4s cubic-bezier

---

## Conventions

- Langue des commentaires : **français**
- Composants : **PascalCase** (`ServicesCarousel.astro`)
- CSS classes : **BEM-like kebab-case** (`.hero__titre`, `.service-carte__desc`)
- Commits : en français — `feat: ajout hero page accueil`
- Accessibilité : `alt` sur toutes les images, HTML5 sémantique, focus visible
- Pas de `console.log` en production

---

## Workflow Git

```bash
git clone https://github.com/<username>/nal-consulting.git
cd nal-consulting
npm install
npm run dev    # http://localhost:4321
npm run build
```

Branches :
- `main` — production (Vercel)
- `dev` — développement actif
- `feature/<nom>` — nouvelles fonctionnalités

---

## Notes pour Claude Code

- Toujours respecter la palette `#A0B4DE` comme couleur d'accent principale
- Le fond hero et les sections sombres utilisent `--bleu-nuit` / `--bleu-marine`
- Ne jamais utiliser de rouge (c'est la charte PR Logistics, pas Nal Consulting)
- Les animations doivent être fluides et subtiles — pas agressives
- Demander confirmation avant de modifier la structure des pages existantes
- Le logo `nal consulting logo.png` est dans `public/assets/logo.png`
- Formspree ID à configurer lors du déploiement (clé à fournir par l'utilisateur)
