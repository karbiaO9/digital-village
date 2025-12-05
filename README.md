# 🛡️ Défendre le Village Numérique

Un mini-jeu web éducatif et gamifié développé pour la **Nuit de l'Info**, visant à sensibiliser au numérique durable, à la réduction de la dépendance aux Big Tech, au reconditionnement, à Linux, aux logiciels libres, et à la démarche NIRD (Numérique Inclusif, Responsable et Durable).

🌐 **[Jouer en ligne](https://digital-village-jade.vercel.app/)** (lien placeholder)

---

## 📖 Description

**Défendre le Village Numérique** est un mini-jeu interactif qui transforme les enjeux du numérique durable en une expérience ludique et engageante. Le joueur incarne un défenseur d'un village numérique menacé par les Big Tech Cloud, et doit prendre des décisions stratégiques pour maintenir l'autonomie, réduire la dépendance et améliorer la durabilité de sa communauté numérique.

Le jeu combine mécaniques de jeu classiques (barres de progression, événements aléatoires, système de choix) avec des concepts pédagogiques réels liés à la sobriété numérique, la souveraineté technologique et l'éco-responsabilité.

---

## 🎯 Objectifs pédagogiques

Le jeu promeut activement plusieurs concepts essentiels du numérique durable :

### 🌱 Développement durable numérique
- Sensibilisation à l'impact environnemental du numérique
- Promotion de pratiques éco-responsables dans l'utilisation des technologies
- Mise en avant de l'économie circulaire dans le secteur numérique

### ⚡ Sobriété numérique
- Réduction de la consommation énergétique
- Optimisation de l'utilisation des ressources numériques
- Prise de conscience de l'empreinte carbone du numérique

### ♻️ Réutilisation du matériel
- Valorisation du reconditionnement et de la réparation
- Allongement de la durée de vie des équipements
- Réduction des déchets électroniques (DEEE)

### 🏛️ Souveraineté numérique
- Autonomie technologique face aux géants du numérique
- Promotion des solutions open-source et libres
- Préservation de la souveraineté des données

### 🚫 Autonomie face aux Big Tech
- Réduction de la dépendance aux services propriétaires
- Promotion de l'auto-hébergement et des solutions décentralisées
- Sensibilisation aux risques de la centralisation des données

---

## ✨ Fonctionnalités principales

### 📊 Système de barres de progression
- **Barre d'autonomie** : Mesure l'indépendance technologique du village
- **Barre de dépendance** : Indique le niveau de dépendance aux Big Tech
- **Barre de durabilité** : Évalue l'impact environnemental et la pérennité des choix

### 🎮 Actions du joueur
- Installer Linux sur les machines du village
- Réparer et reconditionner du matériel informatique
- Protéger les données personnelles et collectives
- Choisir des solutions open-source
- Migrer vers des services libres et décentralisés
- Sensibiliser la communauté aux bonnes pratiques

### 🎲 Système d'événements
- Événements aléatoires présentant des situations réelles
- Choix multiples avec impact sur les statistiques
- Feedback pédagogique après chaque décision
- Scénarios variés couvrant différents aspects du numérique durable

### ⚔️ Mécanique de jeu
- **Big Tech Cloud** : Système d'attaque représentant la pression des géants du numérique
- Gestion du temps avec limite de jeu
- Conditions de victoire basées sur l'équilibre des barres
- Conditions de défaite si la dépendance devient trop élevée

### 🎨 Interface utilisateur
- **Écran d'accueil** : Introduction au concept et au gameplay
- **Écran de jeu** : Interface principale avec barres, événements et actions
- **Écrans de fin** : Victoire ou défaite avec feedback pédagogique
- **Animations Framer Motion** : Transitions fluides et expérience immersive
- **Design thématique** : Esthétique rétro/pixel art évoquant un village numérique

---

## 🔄 Gameplay loop

Le cycle de jeu suit une boucle claire et engageante :

1. **Apparition d'un événement** : Un scénario lié au numérique durable est présenté au joueur
2. **Prise de décision** : Le joueur choisit parmi plusieurs options d'action
3. **Mise à jour des barres** : Les statistiques (autonomie, dépendance, durabilité) sont ajustées selon le choix
4. **Feedback immédiat** : Le joueur reçoit une explication pédagogique sur l'impact de sa décision
5. **Progression** : Le jeu continue avec de nouveaux événements jusqu'à atteindre les conditions de fin
6. **Résolution** : Victoire si l'autonomie et la durabilité sont élevées, défaite si la dépendance devient critique

Cette mécanique permet d'apprendre par l'expérience tout en maintenant un rythme de jeu dynamique.

---

## 🛠️ Stack technique

### Technologies principales
- **Next.js 16** : Framework React pour le développement web moderne
- **React 19** : Bibliothèque UI pour créer des interfaces interactives
- **TypeScript** : Typage statique pour une meilleure maintenabilité
- **TailwindCSS 4** : Framework CSS utilitaire pour un design rapide et cohérent
- **Framer Motion** : Bibliothèque d'animation pour des transitions fluides
- **Radix UI** : Composants accessibles et personnalisables
- **Next Themes** : Gestion du thème clair/sombre

### Structure du projet

```
defend-digital-village/
├── app/                    # Pages et layouts Next.js
│   ├── page.tsx           # Page principale du jeu
│   ├── layout.tsx         # Layout global
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── ui/                # Composants UI (Radix UI)
│   ├── animated-background.tsx
│   ├── background-pattern.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── hooks/                 # Hooks React personnalisés
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                   # Utilitaires et helpers
│   └── utils.ts
├── public/                # Assets statiques
│   ├── icon.svg
│   └── ...
├── styles/                # Fichiers CSS additionnels
│   └── animated-background.css
├── package.json           # Dépendances et scripts
├── tsconfig.json          # Configuration TypeScript
├── next.config.mjs        # Configuration Next.js
└── tailwind.config.js     # Configuration TailwindCSS
```

### Déploiement
- **Vercel** : Plateforme de déploiement recommandée pour Next.js
- Configuration automatique via Git
- Déploiement continu (CI/CD)

---

## 🚀 Installation et lancement

### Prérequis
- Node.js 18+ et npm (ou pnpm/yarn)
- Git

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/defend-digital-village.git
```

2. **Naviguer dans le dossier du projet**
```bash
cd defend-digital-village
```

3. **Installer les dépendances**
```bash
npm install
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

5. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

### Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run start` : Lance le serveur de production
- `npm run lint` : Vérifie le code avec ESLint

---

## 🌐 Déploiement

### Déploiement sur Vercel (recommandé)

1. **Installer Vercel CLI** (optionnel)
```bash
npm i -g vercel
```

2. **Déployer via l'interface Vercel**
   - Connecter votre repository GitHub/GitLab/Bitbucket
   - Vercel détectera automatiquement Next.js
   - Le déploiement se fera automatiquement

3. **Déployer via CLI**
```bash
vercel
```

### Déploiement sur Netlify

1. **Installer Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Déployer**
```bash
netlify deploy --prod
```

3. **Configuration**
   - Build command : `npm run build`
   - Publish directory : `.next`

### Variables d'environnement

Aucune variable d'environnement n'est requise pour le fonctionnement de base du jeu.

---

## 🌍 Développement durable

### Pourquoi ce projet respecte le développement durable

**Défendre le Village Numérique** incarne les principes du développement durable à plusieurs niveaux :

#### 1. **Sensibilisation et éducation**
Le jeu transforme des concepts complexes (sobriété numérique, souveraineté technologique) en expériences ludiques accessibles. Il permet aux joueurs de comprendre l'impact de leurs choix numériques sans être moralisateur.

#### 2. **Promotion de pratiques réelles**
Chaque action dans le jeu correspond à une pratique concrète applicable dans la vie réelle :
- **Installer Linux** → Réduire la dépendance aux systèmes propriétaires
- **Reconditionner du matériel** → Allonger la durée de vie des équipements
- **Choisir l'open-source** → Favoriser la transparence et l'autonomie
- **Protéger les données** → Préserver la vie privée et la souveraineté

#### 3. **Lien avec la démarche NIRD**

Le projet s'inscrit pleinement dans la démarche **NIRD (Numérique Inclusif, Responsable et Durable)** :

- **Inclusif** : Le jeu est accessible, gratuit et open-source, permettant à tous de s'informer sur le numérique durable
- **Responsable** : Il promeut des pratiques éthiques et respectueuses de l'environnement
- **Durable** : Il encourage des comportements pérennes et la réduction de l'obsolescence programmée

#### 4. **Impact environnemental du projet lui-même**
- Application web légère et optimisée
- Pas de dépendances lourdes inutiles
- Code open-source permettant la réutilisation et l'amélioration continue

#### 5. **Valeur pédagogique à long terme**
Le jeu peut être utilisé dans des contextes éducatifs (écoles, formations, sensibilisation) pour diffuser les bonnes pratiques du numérique durable de manière engageante.

---

## 📄 Licence

Ce projet est distribué sous la licence **MIT**.

```
MIT License

Copyright (c) 2024 Équipe Défendre le Village Numérique

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Équipe

Ce projet a été développé dans le cadre de la **Nuit de l'Info** par :

- [Nom du membre 1] - Développement & Design
- [Nom du membre 2] - Game Design & Pédagogie
- [Nom du membre 3] - Développement & Tests
- [Nom du membre 4] - Documentation & Communication

*(À compléter avec les noms réels des membres de l'équipe)*

---

## 🙏 Remerciements

- La communauté open-source pour les outils et bibliothèques utilisés
- Les organisateurs de la Nuit de l'Info
- Tous les contributeurs et testeurs du projet

---

## 📞 Contact & Contribution

Pour toute question, suggestion ou contribution :

- 📧 Email : [votre-email@example.com]
- 🐛 Issues : [GitHub Issues](https://github.com/votre-username/defend-digital-village/issues)
- 💬 Discussions : [GitHub Discussions](https://github.com/votre-username/defend-digital-village/discussions)

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

**Fait avec ❤️ pour un numérique plus durable et responsable**

