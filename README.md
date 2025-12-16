# Gastro Elegancia - Restaurant Landing Page

A professional, multilingual landing page for a fancy restaurant built with Angular 17. Features Spanish and English language support, a demo menu, contact form, reservation system, and cava management.

## Features

- 🌍 **Multilingual Support**: English and Spanish (Spanish as default)
- 🎨 **Professional Design**: Modern, luxury restaurant aesthetic
- 📱 **Responsive**: Mobile-friendly design
- 🍽️ **Demo Menu**: Sample dishes with descriptions and prices
- 📅 **Reservation System**: Easy booking interface
- 🍾 **Cava Management**: Wine and cava section
- 📧 **Contact Form**: Direct communication with customers
- ⚡ **Fast Loading**: Optimized for performance
- 🚀 **Ready for Deployment**: Configured for Netlify and Vercel

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navigation/        # Navigation bar with language switcher
│   │   ├── hero/             # Hero section with CTA
│   │   ├── features/         # Features showcase
│   │   ├── menu/             # Menu section with demo items
│   │   ├── actions/          # Call-to-action buttons
│   │   ├── contact/          # Contact form
│   │   └── footer/           # Footer
│   ├── services/
│   │   └── translation.service.ts  # i18n service
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.routes.ts
│   └── app.component.scss
├── index.html
├── styles.scss
└── main.ts

```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if using Git):
```bash
git clone <repository-url>
cd rest
```

2. **Install dependencies**:
```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

or

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build for Production

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/restaurant-landing/` directory.

## Deployment

### Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Create `netlify.toml` in the root** (already provided)

3. **Deploy**:
   - Connect your Git repository to Netlify
   - Set Build command: `npm run build`
   - Set Publish directory: `dist/restaurant-landing`

### Vercel

1. **Build the project**:
```bash
npm run build
```

2. **Create `vercel.json` in the root** (already provided)

3. **Deploy**:
   - Connect your Git repository to Vercel
   - Set Framework: `Other`
   - Set Build Command: `npm run build`
   - Set Output Directory: `dist/restaurant-landing`

## Languages

The application supports two languages:
- **Spanish (es)** - Default
- **English (en)**

Language can be switched using the language selector in the navigation bar.

## Customization

### Change Restaurant Name
Edit the navigation logo in `src/app/components/navigation/navigation.component.html` and update the translation service.

### Update Menu Items
Edit the menu arrays in `src/app/components/menu/menu.component.ts` and add translations to the service.

### Modify Colors
Main colors are defined in SCSS components:
- Gold: `#d4af37`
- Dark: `#1a1a1a`
- Light: `#f5f5f5`

### Update Contact Information
Edit translations in `src/app/services/translation.service.ts`

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run tests

## Technologies

- Angular 17
- TypeScript
- SCSS
- RxJS
- Standalone Components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please contact: info@gastroel.com
