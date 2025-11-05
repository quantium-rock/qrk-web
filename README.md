# Quantium Rock Website

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js)](https://nuxt.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

Official website for **Quantium Rock** - an international technology company specializing in cloud solutions (AWS, GCP, Azure), blockchain development (Bitcoin, Solana), AI integration, and mobile applications.

## 🌟 Features

- **Nuxt 4** - Latest Nuxt framework with improved performance
- **TypeScript** - Full type safety across the application
- **Nuxt UI** - Beautiful, responsive UI components
- **@alexcolls/nuxt-ux** - Custom UX component library (v0.6.0)
- **Multi-language** - i18n support (English, Spanish, French)
- **Dark Mode** - Automatic theme switching with persistence
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Responsive Design** - Mobile-first approach
- **Tailwind CSS** - Custom theme with Quantium Rock branding

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v20.x or higher
- **npm** v10.x or higher (comes with Node.js)
- **Git** for version control

## 📦 Installation

1. **Clone the repository**

```bash
git clone git@github.com:quantium-rock/qrk-web.git
cd qrk-web
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

> **Note:** The `--legacy-peer-deps` flag is required due to peer dependency conflicts between @nuxt/ui v4 and @alexcolls/nuxt-ux (which expects v2).

3. **Set up environment variables**

```bash
cp .env.sample .env
```

Edit `.env` and configure your environment-specific variables.

## 🚀 Development

### Start Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

The application will be available at:
- **Local:** http://localhost:3000
- **Network:** http://[your-ip]:3000

### Development Features

- **Hot Module Replacement (HMR)** - Instant updates without full page reload
- **Nuxt DevTools** - Built-in development tools (press Shift + Alt + D)
- **TypeScript Support** - Full IntelliSense and type checking
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
qrk-web/
├── app/
│   ├── layouts/
│   │   └── default.vue              # Default layout with header/footer
│   ├── pages/
│   │   ├── index.vue                # Home page
│   │   ├── services.vue             # Services page
│   │   ├── technology.vue           # Technology stack page
│   │   ├── portfolio.vue            # Portfolio/case studies
│   │   ├── team.vue                 # Team page
│   │   ├── contact.vue              # Contact form
│   │   └── blog/
│   │       └── index.vue            # Blog listing
│   ├── components/                  # Custom components
│   └── app.vue                      # Root component
├── branding/                        # Brand assets (logos, etc.)
├── i18n/
│   └── locales/
│       ├── en.json                  # English translations
│       ├── es.json                  # Spanish translations
│       └── fr.json                  # French translations
├── public/                          # Static assets
│   ├── branding/                    # Public brand assets
│   ├── favicon.ico
│   └── robots.txt
├── .env.sample                      # Environment variables template
├── app.config.ts                    # App configuration (branding, theme)
├── nuxt.config.ts                   # Nuxt configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
├── CHANGELOG.md                     # Version history
└── README.md                        # This file
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory. See `.env.sample` for available variables:

### Required Variables

```env
NUXT_PUBLIC_SITE_URL=https://quantium-rock.com
NUXT_PUBLIC_SITE_NAME=Quantium Rock
NUXT_PUBLIC_CONTACT_EMAIL=contact@quantium-rock.com
```

### Optional Variables

```env
# Social Media
NUXT_PUBLIC_TWITTER_URL=https://twitter.com/quantiumrock
NUXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/quantium-rock
NUXT_PUBLIC_GITHUB_URL=https://github.com/quantium-rock

# Feature Flags
NUXT_PUBLIC_ENABLE_NEWSLETTER=false
NUXT_PUBLIC_ENABLE_AI_CHAT=false
NUXT_PUBLIC_ENABLE_COOKIE_CONSENT=true

# Analytics (Future)
# NUXT_PUBLIC_GOOGLE_ANALYTICS_ID=
# NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=
```

## 📜 Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run generate         # Generate static site

# Maintenance
npm run postinstall      # Prepare Nuxt (runs automatically)
```

## 🎨 Customization

### Branding

Brand assets are located in `branding/` and configured in `app.config.ts`:

```typescript
export default defineAppConfig({
  nuxtUx: {
    branding: {
      logoLight: '/branding/logo-black.png',
      logoDark: '/branding/logo-white.jpg',
      companyName: 'Quantium Rock',
      tagline: 'Technology & Cloud Solutions'
    }
  }
})
```

### Theme Colors

Quantium Rock color palette is configured in `tailwind.config.ts`:

```typescript
colors: {
  qr: {
    darkest: '#3E3E3E',
    darker: '#585858',
    dark: '#706F70',
    DEFAULT: '#9B9B9B',
    light: '#B1B0B1',
    lighter: '#C5C5C5'
  }
}
```

### Adding New Languages

1. Create translation file in `i18n/locales/` (e.g., `de.json`)
2. Add locale configuration in `nuxt.config.ts`:

```typescript
i18n: {
  locales: [
    // ... existing locales
    { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.json' }
  ]
}
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates a `.output` directory with your production-ready application.

### Static Site Generation

For static hosting (Netlify, Vercel, GitHub Pages):

```bash
npm run generate
```

This creates a `dist` directory with static HTML files.

### Deployment Platforms

#### Netlify / Vercel

1. Connect your GitHub repository
2. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.output/public`
3. Add environment variables in platform settings
4. Deploy!

#### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website:** [https://quantium-rock.com](https://quantium-rock.com)
- **GitHub:** [https://github.com/quantium-rock](https://github.com/quantium-rock)
- **Company Docs:** [../quantium-rock/README.md](../quantium-rock/README.md)

## 📧 Support

For support, email [contact@quantium-rock.com](mailto:contact@quantium-rock.com)

---

**Made with 💚 by the Quantium Rock Team**
