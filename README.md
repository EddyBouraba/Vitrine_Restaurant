# 🍽️ Le Délice - Restaurant Gastronomique

Un site vitrine que j'ai créé pour montrer mes compétences en développement web moderne. L'idée était de concevoir un site pour un restaurant fictif avec une vraie attention aux détails et à l'expérience utilisateur.

## ✨ Fonctionnalités

### 🎨 Design & UX
- **Interface Moderne** : Design épuré avec animations fluides et transitions cinématiques
- **Mode Sombre/Clair** : Basculement fluide entre les thèmes avec persistance
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations** : Parallaxe, scroll-triggered animations, micro-interactions
- **Glassmorphism** : Effets de verre et backdrop blur

### 🧭 Navigation
- Navigation sticky avec effet de transparence au scroll
- Menu burger animé sur mobile
- Top bar informatif avec coordonnées
- Logo interactif avec effets de hover

### 🏠 Hero Section
- Effet parallaxe sur le fond
- Statistiques animées (note Google, années d'expérience, clients)
- CTA (Call-to-Action) avec animations
- Indicateur de scroll animé

### 📋 Menu Interactif
- Filtres par catégorie animés (Entrées, Plats, Poissons, Vins, Desserts)
- Cards avec effet hover et scale
- Badges pour les plats signature
- Affichage des allergènes
- Téléchargement de la carte en PDF

### 🖼️ Galerie Photos
- Layout en mosaïque (masonry) responsive
- Lightbox avec navigation
- Overlay d'information au hover
- Images lazy loading
- Catégorisation des photos

### 📅 Système de Réservation
- **Sélection Visuelle de Table** : Interface interactive pour choisir sa table
- État en temps réel (disponible/réservée)
- Informations détaillées par table (capacité, emplacement)
- Formulaire complet de réservation
- Sélection de date/heure avec créneaux horaires
- Confirmation animée de la réservation
- Validation des champs

### 📖 Section À Propos
- Timeline interactive avec l'histoire du restaurant
- Présentation du Chef avec photo
- Grid des valeurs avec icônes animées
- Parcours et récompenses

### 🦶 Footer
- Informations de contact complètes
- Horaires d'ouverture
- Liens rapides de navigation
- Réseaux sociaux
- Liens légaux

## 🛠️ Technologies

J'ai choisi ces technologies pour leur performance et leur efficacité :

- **React** - J'adore React pour sa simplicité et sa flexibilité
- **Vite** - Incroyablement rapide comparé à Create React App
- **Tailwind CSS** - Une fois qu'on s'y habitue, on ne peut plus s'en passer
- **Lucide React** - Des icônes propres et légères
- **Hooks personnalisés** - J'ai créé mes propres hooks pour les animations

## 🚀 Installation

```bash
# Installer les dépendances
cd restaurant-site
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Preview du build
npm run preview
```

## 📁 Structure du Projet

```
restaurant-site/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   └── Navigation.jsx
│   │   ├── Hero/
│   │   │   └── Hero.jsx
│   │   ├── Menu/
│   │   │   └── Menu.jsx
│   │   ├── Gallery/
│   │   │   └── Gallery.jsx
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Reservation/
│   │   │   └── Reservation.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── package.json
```

## 🎨 Palette de Couleurs

### Primary (Orange)
- 50-900: Gradients d'orange chaleureux pour les accents
- Utilisé pour : CTA, liens, éléments interactifs

### Dark
- 50-950: Échelle de gris pour le mode sombre
- Backgrounds, textes, borders

## ⚡ Performances

- Lazy loading des images
- Animations optimisées avec CSS transforms
- Code splitting automatique par Vite
- Assets optimisés

## 🌐 SEO

- Meta tags optimisés
- Sémantique HTML5
- Structure de navigation claire
- Attributs alt sur toutes les images

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Ce dont je suis fier

1. **Design personnalisé** - J'ai tout fait from scratch, sans template
2. **Animations fluides** - J'ai passé du temps à peaufiner chaque transition
3. **Système de réservation** - La sélection visuelle des tables était un vrai challenge
4. **Mode sombre** - Implémenté avec persistance, ça change vraiment l'ambiance
5. **Performances** - Le site charge super vite grâce à Vite

## 💭 Réflexions

Ce projet m'a appris beaucoup sur les animations React et comment créer une vraie expérience utilisateur immersive. Le plus difficile a été de trouver le bon équilibre entre les animations et la performance.

Si je devais le refaire, j'ajouterais probablement :
- Un vrai backend avec Node.js pour les réservations
- Des tests avec Jest/React Testing Library
- Un CMS pour que le restaurant puisse modifier le menu facilement

## 📝 Licence

MIT - Projet personnel de portfolio

---

Fait avec ❤️ et beaucoup de café ☕
