export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    /* Navigation */
    nav: {
      home:    'Accueil',
      about:   'Qui sommes-nous',
      quote:   'Devis',
      contact: 'Contact',
      cta:     'Demander un devis',
    },

    /* Marquee */
    marquee: {
      label: 'En utilisant les meilleurs outils du marché',
    },

    /* Hero accueil */
    hero: {
      badge:   'Consulting Technologique',
      title:   ["Construisons ensemble", 'vos solutions digitales sur mesure.'],
      desc:    '',
      ctaPrimary:   'Démarrer un projet',
      ctaSecondary: 'Découvrir Nal Consulting',
      stat1val: '3+',   stat1label: "Années d'expérience",
      stat2val: '20+',  stat2label: 'Projets livrés',
      stat3val: '100%', stat3label: 'Satisfaction client',
    },

    /* Services */
    services: {
      eyebrow: "Nos pôles d'expertise",
      title:   ['3 leviers,', 'des résultats mesurables.'],
      subtitle: 'Pas de blabla. Des solutions concrètes, des livrables qui fonctionnent, des résultats que vous mesurez.',
      learnMore: 'En savoir plus',
      items: [
        {
          num: '01', icon: '/assets/icons/website.png', alt: 'Développement web',
          title: 'Sites internet & SEO',
          desc:  'Un site qui travaille pour vous 24h/24 — visible sur Google, rapide sur mobile, conçu pour convertir vos visiteurs en clients.',
          points: ['Design sur mesure', 'Optimisation SEO', 'Performance & Core Web Vitals', 'Responsive & accessible'],
          href: '/devis?service=web',
        },
        {
          num: '02', icon: '/assets/icons/dashboard.png', alt: 'Reporting & Data',
          title: 'Reporting & Data Analytics',
          desc:  "Fini les décisions à l'aveugle. Vos données transformées en insights actionnables, accessibles en temps réel depuis n'importe quel écran.",
          points: ['Dashboards Power BI / Looker', 'ETL & pipelines de données', 'Analyses prédictives', 'KPIs sur mesure'],
          href: '/devis?service=data',
        },
        {
          num: '03', icon: '/assets/icons/agents.png', alt: 'Agents IA',
          title: 'Automatisations & Agents IA',
          desc:  'Vos tâches répétitives, automatisées. Vos équipes libérées pour ce qui crée vraiment de la valeur.',
          points: ['Agents IA sur mesure', 'Automatisation no-code / low-code', 'Intégrations API & webhooks', 'LLM & RAG'],
          href: '/devis?service=ia',
        },
      ],
    },

    /* Process */
    process: {
      eyebrow: 'Notre approche',
      title:   'Simple. Transparent. Efficace.',
      subtitle: 'Quatre étapes, zéro surprise.',
      steps: [
        { num: '01', title: 'Découverte',   desc: "Un premier échange pour comprendre votre métier, vos enjeux et vos contraintes — avant de parler technologie." },
        { num: '02', title: 'Proposition',  desc: "Devis détaillé, planning clair, livrables définis. Vous validez avant qu'on démarre." },
        { num: '03', title: 'Réalisation',  desc: "Développement en sprints avec des jalons réguliers. Vous voyez l'avancement à chaque étape." },
        { num: '04', title: 'Livraison',    desc: 'Livraison en production, formation incluse. Vous êtes autonome dès le premier jour.' },
      ],
    },

    /* Why */
    why: {
      eyebrow: 'Pourquoi Nal Consulting',
      title:   ['Un partenaire tech,', 'pas juste un prestataire.'],
      separator: 'Notre histoire',
      cards: [
        { ico: '⚡', title: 'Réactivité',  desc: 'Réponse sous 24h, suivi régulier et livrables dans les délais.' },
        { ico: '🎯', title: 'Sur mesure',  desc: 'Chaque solution est pensée pour vos besoins spécifiques.' },
        { ico: '🔬', title: 'Rigueur',     desc: 'Code propre, tests, documentation et transfert de compétences inclus.' },
        { ico: '🚀', title: 'Scalable',    desc: 'Des architectures pensées pour évoluer avec votre croissance.' },
      ],
    },

    /* CTA finale */
    cta: {
      eyebrow: 'Prêt à démarrer ?',
      title:   ['Votre prochain projet ?', "C'est maintenant."],
      desc:    "Décrivez votre besoin en 2 minutes — je reviens vers vous sous 24h avec une proposition concrète et un budget honnête.",
      primary:   'Obtenir mon devis gratuit',
      secondary: 'Nous contacter',
    },

    /* Footer */
    footer: {
      desc:      'Votre partenaire en transformation digitale. Sites web, data & IA au service de votre croissance.',
      services:  'Services', nav: 'Navigation', contact: 'Contact',
      copy:      'Tous droits réservés.',
      legal:     'Mentions légales',
      privacy:   'Politique de confidentialité',
    },

    /* QSN */
    about: {
      eyebrow: 'Notre histoire',
      heroTitle: ['Passion tech.', 'Résultats concrets.'],
      heroDesc: 'On construit ce qui fonctionne — pas ce qui impressionne en réunion.',
      sectionEyebrow: 'À propos',
      sectionTitle: ['Une équipe tech,', 'orientée résultat.'],
      p1: "Nal Consulting, c'est la conviction que la technologie doit générer des résultats mesurables. Notre équipe accompagne entrepreneurs et PME dans leur transformation digitale avec des solutions concrètes, efficaces et durables.",
      p2: "Notre approche : comprendre votre métier avant de parler code. Chaque projet commence par une analyse de vos vrais enjeux — pour proposer la solution la plus adaptée, pas la plus complexe.",
      ctaPrimary:   'Démarrer un projet',
      ctaSecondary: 'Nous contacter',
      valuesEyebrow: 'Ce qui nous guide',
      valuesTitle: 'Nos valeurs',
      values: [
        { title: 'Confiance',  desc: "Transparence totale sur les délais, les coûts et les choix techniques. Vous savez toujours où en est votre projet." },
        { title: 'Excellence', desc: "Code propre, tests, performance et accessibilité — des standards de qualité non négociables à chaque livraison." },
        { title: 'Proximité',  desc: "Une relation directe et humaine. Pas d'intermédiaire, pas de jargon inutile — juste une collaboration efficace." },
      ],
      stackEyebrow: 'Stack technique',
      stackTitle:   'Les outils du métier',
      stackDesc:    'Une sélection des meilleures technologies pour chaque besoin.',
      ctaFooterEyebrow: 'Travaillons ensemble',
      ctaFooterTitle:   ['Votre prochain projet ?', "C'est pour bientôt."],
      ctaFooterDesc:    "Décrivez votre idée — nous vous recontactons sous 24h.",
      ctaFooterBtn:     'Demander un devis',
    },

    /* Devis */
    quote: {
      eyebrow:  'Gratuit & sans engagement',
      heroTitle: ['Un projet ?', 'Parlons-en.'],
      heroDesc:  'Réponse personnelle sous 24h. Devis gratuit. Zéro engagement.',
      fields: {
        firstname: 'Prénom *', firstnamePh: 'Votre prénom',
        lastname:  'Nom *',    lastnamePh:  'Votre nom',
        email:     'Email *',  emailPh:     'votre@email.fr',
        company:   'Entreprise', companyPh: 'Nom de votre entreprise (optionnel)',
        service:   'Service souhaité *', servicePh: 'Choisissez un service…',
        budget:    'Budget envisagé', budgetPh: 'Fourchette budgétaire…',
        delay:     'Délai souhaité', delayPh: 'Ex : ASAP, dans 2 mois…',
        desc:      'Description du projet *', descPh: 'Décrivez votre projet, vos objectifs, vos contraintes…',
        source:    'Comment avez-vous entendu parler de nous ?', sourcePh: 'Bouche à oreille, LinkedIn, Google…',
        submit:    'Envoyer ma demande',
        submitting: 'Envoi en cours…',
        note:      '* Champs obligatoires. Vos données ne sont jamais revendues.',
      },
      services: [
        { value: 'web',   label: 'Sites internet & SEO' },
        { value: 'data',  label: 'Reporting & Data Analytics' },
        { value: 'ia',    label: 'Automatisations & Agents IA' },
        { value: 'multi', label: 'Plusieurs services' },
        { value: 'autre', label: 'Autre / Je ne sais pas encore' },
      ],
      budgets: [
        { value: 'moins-1k',  label: 'Moins de 1 000 €' },
        { value: '1k-3k',     label: '1 000 € – 3 000 €' },
        { value: '3k-7k',     label: '3 000 € – 7 000 €' },
        { value: '7k-15k',    label: '7 000 € – 15 000 €' },
        { value: 'plus-15k',  label: 'Plus de 15 000 €' },
        { value: 'a-definir', label: 'À définir ensemble' },
      ],
      howTitle: 'Comment ça se passe ?',
      steps: [
        { ico: '📋', title: 'Remplissez le formulaire', desc: 'Décrivez votre projet en quelques mots.' },
        { ico: '⚡', title: 'Réponse sous 24h',         desc: 'Je vous contacte pour échanger sur votre besoin.' },
        { ico: '📄', title: 'Devis détaillé',            desc: 'Vous recevez une proposition claire et transparente.' },
      ],
      directTitle: "Besoin d'échanger d'abord ?",
      directDesc:  'Pas besoin de formulaire — envoyez-moi directement un email.',
      directBtn:   'contact@nalconsulting.fr',
      guaranteesTitle: 'Nos garanties',
      guarantees: ['Réponse sous 24h', 'Devis gratuit et détaillé', 'Aucun engagement', 'Confidentialité assurée'],
    },

    /* Contact */
    contact: {
      eyebrow:   'Parlons-en',
      heroTitle: ['Une question ?', 'On est là.'],
      heroDesc:  "Directement à vous. Pas de standard, pas d'attente — une vraie conversation.",
      infoTitle: 'Informations',
      emailLabel: 'Email', emailVal: 'contact@nalconsulting.fr',
      locLabel:  'Localisation', locVal: 'France',
      responseLabel: 'Délai de réponse', responseVal: 'Sous 24h',
      socialTitle: 'Retrouvez-nous',
      formTitle:   'Envoyez un message',
      fields: {
        name:  'Nom complet *', namePh:  'Votre nom',
        email: 'Email *',       emailPh: 'votre@email.fr',
        subject: 'Sujet',       subjectPh: 'Objet de votre message',
        message: 'Message *',   messagePh: 'Votre message…',
        submit: 'Envoyer le message',
        submitting: 'Envoi en cours…',
        note: '* Champs obligatoires.',
      },
    },
  },

  en: {
    nav: {
      home:    'Home',
      about:   'About us',
      quote:   'Quote',
      contact: 'Contact',
      cta:     'Get a quote',
    },

    /* Marquee */
    marquee: {
      label: 'Using the best tools on the market',
    },
    hero: {
      badge:   'Tech consulting firm',
      title:   ['From idea to results,', 'we build what performs.'],
      desc:    'Web, data analytics and AI agents — three areas of expertise to turn technology into a real performance driver.',
      ctaPrimary:   'Launch my project',
      ctaSecondary: 'Discover Nal Consulting',
      stat1val: '3+',   stat1label: 'Years of experience',
      stat2val: '20+',  stat2label: 'Projects delivered',
      stat3val: '100%', stat3label: 'Client satisfaction',
    },
    services: {
      eyebrow: 'Our areas of expertise',
      title:   ['3 levers,', 'measurable results.'],
      subtitle: 'No buzzwords. Concrete solutions, deliverables that work, results you can measure.',
      learnMore: 'Learn more',
      items: [
        {
          num: '01', icon: '/assets/icons/website.png', alt: 'Web development',
          title: 'Web development & SEO',
          desc:  'A website that works for you 24/7 — visible on Google, fast on mobile, built to convert visitors into customers.',
          points: ['Custom design', 'SEO optimisation', 'Performance & Core Web Vitals', 'Responsive & accessible'],
          href: '/devis?service=web',
        },
        {
          num: '02', icon: '/assets/icons/dashboard.png', alt: 'Reporting & Data',
          title: 'Reporting & Data Analytics',
          desc:  'No more blind decisions. Your data transformed into actionable insights, accessible in real time from any screen.',
          points: ['Power BI / Looker dashboards', 'ETL & data pipelines', 'Predictive analytics', 'Custom KPIs'],
          href: '/devis?service=data',
        },
        {
          num: '03', icon: '/assets/icons/agents.png', alt: 'AI Agents',
          title: 'Automation & AI Agents',
          desc:  'Your repetitive tasks, automated. Your teams freed up for what truly creates value.',
          points: ['Custom AI agents', 'No-code / low-code automation', 'API & webhook integrations', 'LLM & RAG'],
          href: '/devis?service=ia',
        },
      ],
    },
    process: {
      eyebrow: 'Our approach',
      title:   'Simple. Transparent. Efficient.',
      subtitle: 'Four steps, zero surprises.',
      steps: [
        { num: '01', title: 'Discovery',    desc: 'A first conversation to understand your business, challenges and constraints — before we talk technology.' },
        { num: '02', title: 'Proposal',     desc: 'Detailed quote, clear timeline, defined deliverables. You validate before we start.' },
        { num: '03', title: 'Development',  desc: 'Development in sprints with regular milestones. You see progress at every step.' },
        { num: '04', title: 'Delivery',     desc: "Production deployment, training included. You're autonomous from day one." },
      ],
    },
    why: {
      eyebrow: 'Why Nal Consulting',
      title:   ['A tech partner,', 'not just a vendor'],
      desc:    "We don't sell technology — we deliver results. Every project starts with understanding your business, not sending a quote.",
      separator: 'Our story',
      cards: [
        { ico: '⚡', title: 'Responsiveness', desc: 'Reply within 24h, regular updates and on-time deliverables.' },
        { ico: '🎯', title: 'Tailored',       desc: 'Every solution is designed around your specific needs.' },
        { ico: '🔬', title: 'Rigour',         desc: 'Clean code, tests, documentation and knowledge transfer included.' },
        { ico: '🚀', title: 'Scalable',       desc: 'Architectures designed to grow with your business.' },
      ],
    },
    cta: {
      eyebrow: 'Ready to start?',
      title:   ['Your next project?', 'It starts now.'],
      desc:    "Describe your need in 2 minutes — I'll get back to you within 24h with a concrete proposal and an honest budget.",
      primary:   'Get my free quote',
      secondary: 'Contact us',
    },
    footer: {
      desc:     'Your digital transformation partner. Web, data & AI at the service of your growth.',
      services: 'Services', nav: 'Navigation', contact: 'Contact',
      copy:     'All rights reserved.',
      legal:    'Legal notice',
      privacy:  'Privacy policy',
    },
    about: {
      eyebrow: 'Our story',
      heroTitle: ['Tech passion.', 'Concrete results.'],
      heroDesc: "We build what works — not what looks good in meetings.",
      sectionEyebrow: 'About',
      sectionTitle: ['Passionate about technology,', 'results-oriented'],
      p1: "Nal Consulting was founded on the belief that technology should generate measurable results. Created by Nael Munier, the firm helps entrepreneurs and SMEs through their digital transformation with concrete, efficient and lasting solutions.",
      p2: "My approach: understand your business before talking code. Every project starts with an analysis of your real challenges — to propose the most suitable solution, not the most complex one.",
      ctaPrimary:   'Start a project',
      ctaSecondary: 'Contact me',
      valuesEyebrow: 'What guides us',
      valuesTitle: 'Our values',
      values: [
        { title: 'Trust',      desc: "Full transparency on timelines, costs and technical choices. You always know where your project stands." },
        { title: 'Excellence', desc: "Clean code, tests, performance and accessibility — non-negotiable quality standards on every delivery." },
        { title: 'Closeness',  desc: "A direct, human relationship. No middlemen, no unnecessary jargon — just effective collaboration." },
      ],
      stackEyebrow: 'Tech stack',
      stackTitle:   'Tools of the trade',
      stackDesc:    'A curated selection of the best technologies for every need.',
      ctaFooterEyebrow: "Let's work together",
      ctaFooterTitle:   ['Your next project?', "It starts here."],
      ctaFooterDesc:    "Describe your idea — I'll get back to you within 24h.",
      ctaFooterBtn:     'Request a quote',
    },
    quote: {
      eyebrow: 'Free & no commitment',
      heroTitle: ['A project?', "Let's talk."],
      heroDesc:  'Personal reply within 24h. Free quote. Zero commitment.',
      fields: {
        firstname: 'First name *', firstnamePh: 'Your first name',
        lastname:  'Last name *',  lastnamePh:  'Your last name',
        email:     'Email *',      emailPh:     'your@email.com',
        company:   'Company',      companyPh:   'Your company name (optional)',
        service:   'Service needed *', servicePh: 'Choose a service…',
        budget:    'Estimated budget', budgetPh: 'Budget range…',
        delay:     'Desired timeline', delayPh: 'e.g. ASAP, within 2 months…',
        desc:      'Project description *', descPh: 'Describe your project, goals, technical constraints…',
        source:    'How did you hear about us?', sourcePh: 'Word of mouth, LinkedIn, Google…',
        submit:    'Send my request',
        submitting: 'Sending…',
        note:      '* Required fields. Your data is never sold.',
      },
      services: [
        { value: 'web',   label: 'Web development & SEO' },
        { value: 'data',  label: 'Reporting & Data Analytics' },
        { value: 'ia',    label: 'Automation & AI Agents' },
        { value: 'multi', label: 'Multiple services' },
        { value: 'autre', label: "Other / I'm not sure yet" },
      ],
      budgets: [
        { value: 'moins-1k',  label: 'Less than €1,000' },
        { value: '1k-3k',     label: '€1,000 – €3,000' },
        { value: '3k-7k',     label: '€3,000 – €7,000' },
        { value: '7k-15k',    label: '€7,000 – €15,000' },
        { value: 'plus-15k',  label: 'More than €15,000' },
        { value: 'a-definir', label: "Let's define it together" },
      ],
      howTitle: 'How does it work?',
      steps: [
        { ico: '📋', title: 'Fill in the form',  desc: 'Describe your project in a few words.' },
        { ico: '⚡', title: 'Reply within 24h',  desc: "I'll reach out to discuss your needs." },
        { ico: '📄', title: 'Detailed quote',    desc: 'You receive a clear and transparent proposal.' },
      ],
      directTitle: 'Need to talk first?',
      directDesc:  "No need for a form — send me an email directly.",
      directBtn:   'contact@nalconsulting.fr',
      guaranteesTitle: 'Our guarantees',
      guarantees: ['Reply within 24h', 'Free detailed quote', 'No commitment', 'Full confidentiality'],
    },
    contact: {
      eyebrow:   "Let's talk",
      heroTitle: ['A question?', "We're here."],
      heroDesc:  "Direct access. No phone trees, no waiting — a real conversation.",
      infoTitle: 'Information',
      emailLabel: 'Email', emailVal: 'contact@nalconsulting.fr',
      locLabel:  'Location', locVal: 'France',
      responseLabel: 'Response time', responseVal: 'Within 24h',
      socialTitle: 'Find us',
      formTitle:   'Send a message',
      fields: {
        name:  'Full name *',  namePh:  'Your name',
        email: 'Email *',      emailPh: 'your@email.com',
        subject: 'Subject',    subjectPh: 'Subject of your message',
        message: 'Message *',  messagePh: 'Your message…',
        submit: 'Send message',
        submitting: 'Sending…',
        note: '* Required fields.',
      },
    },
  },
} as const;
