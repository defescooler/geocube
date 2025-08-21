# GeoCube - AI-Powered Geological Exploration Platform

## 🌍 Multilingual Support

This project supports both Russian and English languages with a complete i18n system.

### Features
- ✅ Language switching with ENG/RUS buttons
- ✅ All content translated
- ✅ Persistent language selection
- ✅ SEO-friendly language attributes

## 🚀 Deployment

### Vercel Deployment

This project is configured for optimal deployment on Vercel:

1. **Connect your GitHub repository** to Vercel
2. **Build settings** are automatically configured
3. **Environment variables** (optional):
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=GeoCube
   ```

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/              # UI components
├── lib/                  # Utilities and configurations
│   ├── i18n.ts          # Internationalization
│   └── language-context.tsx # Language context
├── public/              # Static assets
└── types/               # TypeScript type definitions
```

## 🌐 Language System

The multilingual system includes:

- **Language Context**: React context for language management
- **Translation Keys**: Organized by sections (nav, hero, products, etc.)
- **Language Switcher**: Simple ENG/RUS toggle
- **Persistent Storage**: Language preference saved in localStorage

### Adding New Translations

1. Add translation keys to `lib/i18n.ts`
2. Use the `useLanguage` hook in components
3. Use `getTranslation(key, language)` function

## 🔧 Configuration

### Next.js Config
- Optimized for production
- Image optimization enabled
- Security headers configured
- Bundle optimization

### Vercel Config
- Automatic deployment
- Edge functions support
- Static asset caching
- Security headers

## 📊 Performance

- **First Load JS**: ~300kB
- **Static Generation**: All pages pre-rendered
- **Image Optimization**: WebP/AVIF support
- **Bundle Splitting**: Optimized vendor chunks

## 🚀 Ready for Production

The project is fully configured for production deployment with:
- ✅ Optimized builds
- ✅ Security headers
- ✅ Caching strategies
- ✅ SEO optimization
- ✅ Mobile responsiveness
- ✅ Multilingual support