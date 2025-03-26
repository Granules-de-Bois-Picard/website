# Site Web Granulés de Bois Picard

Ce dépôt contient le code source du site web officiel de Granulés de Bois Picard, une entreprise spécialisée dans la vente de granulés de bois et de poêles à granulés située à Corbie (80800).

## Technologies utilisées

- **Framework**: [Nuxt.js 3](https://nuxt.com/) (Vue.js)
- **CSS**: [Tailwind CSS](https://tailwindcss.com/)
- **Icônes**: [Heroicons](https://heroicons.com/)
- **Requêtes HTTP**: [Axios](https://axios-http.com/)
- **Carrousel**: [Swiper](https://swiperjs.com/)

## Prérequis

- [Node.js](https://nodejs.org/) (version recommandée: LTS)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

1. Clonez ce dépôt
2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env` à la racine du projet en vous basant sur le fichier `.env.example` :

```
VITE_API_URL=<URL_de_votre_API>
VITE_RECAPTCHA_SITE_KEY=<Votre_clé_reCAPTCHA>
```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible à l'adresse http://localhost:8888

## Production

Pour générer le site statique :

```bash
npm run generate
# ou
yarn generate
```

Les fichiers générés se trouveront dans le dossier `.output/public`.

## Structure du projet

- `assets/` : Contient les images, les fichiers CSS et autres ressources statiques
- `components/` : Composants Vue réutilisables
- `layouts/` : Mises en page de l'application
- `pages/` : Pages du site (routage automatique par Nuxt)
- `public/` : Fichiers accessibles publiquement (favicon, robots.txt, etc.)
- `server/` : Configuration côté serveur

## Déploiement

Le site est configuré pour être déployé en tant que site statique. Un workflow GitHub Actions est disponible dans le dossier `.github/workflows/` pour automatiser le déploiement.

## Licence

Tous droits réservés © Granulés de Bois Picard