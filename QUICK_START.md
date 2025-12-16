# Quick Start Guide

Welcome to Gastro Elegancia! This guide will get you up and running in minutes.

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies (First Time Only)
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm start
```
Open your browser to: **http://localhost:4200**

### Step 3: Start Developing
The app will automatically reload when you make changes!

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # All page sections
│   │   ├── navigation/      # Top navigation with language selector
│   │   ├── hero/           # Hero section
│   │   ├── features/       # Features showcase
│   │   ├── menu/           # Menu section with demo items
│   │   ├── actions/        # Call-to-action buttons
│   │   ├── contact/        # Contact form
│   │   └── footer/         # Footer
│   └── services/
│       └── translation.service.ts  # Multilingual text management
└── styles.scss              # Global styles
```

## 🌍 Languages

The site supports **Spanish** (default) and **English**.
Switch languages using the button in the top-right corner.

## ✏️ Customization

### Change Restaurant Name
1. Edit `src/app/components/navigation/navigation.component.html` line 7
2. Update translations in `src/app/services/translation.service.ts`

### Update Menu Items
Edit `src/app/components/menu/menu.component.ts`:
```typescript
appetizers: MenuItem[] = [
  { titleKey: 'seabassItem', descriptionKey: 'seabassDesc', price: '€16' },
  // Add more items...
];
```

Add translations in `src/app/services/translation.service.ts`

### Change Colors
Main colors are in component `.scss` files:
- Gold accent: `#d4af37`
- Dark background: `#1a1a1a`
- Light background: `#f5f5f5`

### Update Contact Information
Edit translations in `src/app/services/translation.service.ts`:
```typescript
address: 'Your Address Here',
hours: 'Your Hours Here',
phone_label: 'Your Phone',
email_label: 'Your Email'
```

## 🏗️ Building for Production

```bash
npm run build
```

This creates optimized files in `dist/restaurant-landing/`

## 🌐 Deploying

### To Netlify (Recommended)
1. Push code to GitHub
2. Go to https://app.netlify.com
3. Click "Import existing project"
4. Select your GitHub repo
5. Deploy! (It's automatic)

### To Vercel
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Deploy! (It's automatic)

See `DEPLOYMENT.md` for detailed instructions.

## 📝 Available Commands

```bash
npm start       # Start development server
npm run build   # Build for production
npm run watch   # Build in watch mode
npm test        # Run tests
```

## 🎨 Component Features

| Component | Purpose |
|-----------|---------|
| Navigation | Logo, menu links, language selector |
| Hero | Main banner with CTA button |
| Features | 3 main selling points |
| Menu | Demo menu with appetizers, mains, desserts |
| Actions | Reservation, menu, and cava rental CTAs |
| Contact | Contact form and info |
| Footer | Footer with links |

## 🔧 Development Tips

### Hot Reload
Changes are automatically reflected - no manual refresh needed!

### Check for Errors
```bash
ng serve
```
The terminal will show any errors with line numbers.

### Debug in Browser
- Press `F12` to open DevTools
- Go to "Network" tab to see API calls (if you add any)
- Go to "Application" → "Local Storage" to see saved data

### Performance
- Run `npm run build` to check bundle size
- Look at the build output for any warnings

## 📱 Responsive Design

The site is fully responsive:
- **Desktop**: Optimized layout
- **Tablet**: Touch-friendly buttons
- **Mobile**: Single column, readable text

Test with Chrome DevTools (F12 → Click device icon)

## 🐛 Troubleshooting

### Port 4200 already in use
```bash
npm start -- --port 4300
```

### Changes not appearing
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Restart the server: `Ctrl + C` then `npm start`

### Module not found error
```bash
npm install
```

## 🎯 Next Steps

1. **Customize content**: Edit menu, colors, and text
2. **Add real images**: Replace placeholder images
3. **Connect form**: Integrate with email service
4. **Add booking system**: Connect reservation form
5. **Deploy**: Follow deployment guide

## 📚 Resources

- [Angular Docs](https://angular.io)
- [TypeScript Docs](https://www.typescriptlang.org)
- [SCSS Guide](https://sass-lang.com/guide)
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)

## ❓ Need Help?

Check the README.md or DEPLOYMENT.md files for more detailed information!

---

**Happy developing! 🍽️✨**
