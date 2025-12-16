# Pre-Deployment Checklist

Use this checklist to ensure everything is ready before deploying your Gastro Elegancia website.

## ✅ Content & Customization

- [ ] Restaurant name updated throughout the site
- [ ] Logo/branding customized (if applicable)
- [ ] Menu items updated with your actual offerings
- [ ] Prices updated in EUR or your preferred currency
- [ ] Contact information accurate (address, phone, email)
- [ ] Business hours updated
- [ ] Description and tagline reflect your restaurant
- [ ] All text proofread in Spanish
- [ ] All text proofread in English
- [ ] Images added or placeholders updated
- [ ] Social media links added (optional)

## 🎨 Visual & Design

- [ ] Colors updated to match brand (if needed)
- [ ] Font sizes look good on mobile
- [ ] Buttons are properly styled
- [ ] Spacing looks consistent
- [ ] No broken images or missing assets
- [ ] Logo is clear and professional
- [ ] Overall design approved

## 🔧 Functionality Testing

### Navigation & Scrolling
- [ ] Navigation bar sticks to top when scrolling
- [ ] Menu links scroll to correct sections
- [ ] Language switcher works (ES/EN)
- [ ] Language persists across page sections

### Forms & Interactions
- [ ] Contact form displays correctly
- [ ] Form fields are accessible
- [ ] Submit button is clickable
- [ ] All input fields work on mobile
- [ ] Form validation works
- [ ] Form message shows after submit

### Buttons & Links
- [ ] All CTA buttons have hover effects
- [ ] Buttons are properly sized for mobile
- [ ] No broken links
- [ ] External links open in new tab (if applicable)

### Layout & Responsiveness
- [ ] Desktop view looks professional
- [ ] Tablet view is properly optimized
- [ ] Mobile view is clean and readable
- [ ] Text doesn't overlap on any device
- [ ] Images scale properly
- [ ] No horizontal scrolling on mobile

## 🌍 Multilingual Content

- [ ] Spanish translations are accurate
- [ ] English translations are accurate
- [ ] All menu items have translations
- [ ] No untranslated text appears
- [ ] Language switcher is visible
- [ ] Both languages load quickly

## 🚀 Build & Performance

### Development Environment
- [ ] Run `npm install` completed successfully
- [ ] No errors in console with `npm start`
- [ ] Hot reload works properly
- [ ] Development server loads in <5 seconds

### Production Build
- [ ] `npm run build` completes with no errors
- [ ] Build size is reasonable (<500KB)
- [ ] No critical warnings
- [ ] dist/restaurant-landing/ folder created
- [ ] index.html exists in dist folder

### Performance
- [ ] Page loads in <3 seconds locally
- [ ] No console errors (F12 → Console tab)
- [ ] No console warnings (unless minor)
- [ ] Images are optimized
- [ ] All animations are smooth

## 📱 Device Testing

### Browsers
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge

### Mobile Devices (use DevTools F12)
- [ ] iPhone SE (small)
- [ ] iPhone 12/13/14 (standard)
- [ ] iPad (tablet)
- [ ] Android devices (sample)

### Mobile Interactions
- [ ] Touch buttons are easy to tap
- [ ] Text is readable at default zoom
- [ ] No horizontal scrolling
- [ ] Forms work with mobile keyboard

## 🔐 Security & SEO

- [ ] No sensitive data hardcoded
- [ ] Meta tags present in index.html
- [ ] Meta description is present
- [ ] Page title is meaningful
- [ ] No console security warnings
- [ ] Form doesn't expose user data

## 📁 Files & Configuration

### Project Files
- [ ] package.json exists and looks correct
- [ ] angular.json exists and looks correct
- [ ] tsconfig.json exists and looks correct
- [ ] README.md is present and up-to-date
- [ ] .gitignore is present
- [ ] .nvmrc specifies Node version

### Deployment Files
- [ ] netlify.toml exists
- [ ] vercel.json exists
- [ ] Both files contain correct build paths
- [ ] Both files contain correct output directories

### Git Configuration (if using)
- [ ] .git folder initialized (if using Git)
- [ ] No uncommitted changes
- [ ] Branch is main or master
- [ ] Ready to push to GitHub

## 🌐 Deployment Preparation

### GitHub (if deploying via Git)
- [ ] GitHub account created
- [ ] Repository created (empty)
- [ ] Local code committed
- [ ] Code pushed to GitHub
- [ ] README visible on GitHub

### Netlify (if deploying there)
- [ ] Netlify account created (free)
- [ ] Logged into Netlify dashboard
- [ ] GitHub connected to Netlify
- [ ] Site name decided
- [ ] Custom domain ready (if applicable)

### Vercel (if deploying there)
- [ ] Vercel account created (free)
- [ ] Logged into Vercel dashboard
- [ ] GitHub connected to Vercel
- [ ] Project name decided
- [ ] Custom domain ready (if applicable)

## 📋 Final Checks

- [ ] All team members have reviewed the site
- [ ] No placeholders remain (unless intentional)
- [ ] Contact form will actually work (note: backend needed)
- [ ] All information is current and accurate
- [ ] Site represents your restaurant professionally
- [ ] You're ready to go live!

## 🚀 Deployment Execution

### Before Deploying
```bash
# Final build test
npm run build

# Verify no errors
npm start

# Check dist folder exists
dir dist\restaurant-landing
```

### Deploy Steps
- [ ] Push to GitHub (if using Git deployment)
- [ ] Connect repository to Netlify or Vercel
- [ ] Verify build settings
- [ ] Click Deploy
- [ ] Wait for deployment to complete

### After Deployment
- [ ] Visit the live URL
- [ ] Test all functionality on live site
- [ ] Test on mobile devices
- [ ] Share with team for review
- [ ] Monitor for errors in first 24 hours

## 🎯 Post-Launch

- [ ] Set up analytics (if desired)
- [ ] Connect custom domain
- [ ] Set up email notifications (Netlify/Vercel)
- [ ] Create backup of local code
- [ ] Document any custom changes
- [ ] Plan for future updates

---

## ❓ Troubleshooting

If something goes wrong:

1. **Build fails locally**
   - Run `npm install` again
   - Delete node_modules and reinstall
   - Check Node version: `node --version`

2. **Deployment fails**
   - Check build logs on Netlify/Vercel
   - Verify netlify.toml or vercel.json
   - Try manual deployment first

3. **Site looks different on live**
   - Clear browser cache (Ctrl+Shift+Delete)
   - Check responsive design
   - Test on different browsers

---

## 📞 Need Help?

- Check DEPLOYMENT.md for deployment issues
- Check QUICK_START.md for development issues
- Check README.md for comprehensive documentation

---

**Congratulations! Your restaurant website is ready to launch! 🎉🍽️**
