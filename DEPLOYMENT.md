# Deployment Guide

This guide will help you deploy the Gastro Elegancia restaurant landing page to Netlify or Vercel.

## Prerequisites

- Node.js 18+ installed
- npm or yarn installed
- GitHub account (optional but recommended for easier deployment)
- Netlify or Vercel account (free tier available)

## Local Setup

1. **Navigate to project directory**:
```bash
cd rest
```

2. **Install dependencies** (if not already done):
```bash
npm install
```

3. **Test locally with ng serve**:
```bash
npm start
```
The app will be available at `http://localhost:4200`

4. **Build for production**:
```bash
npm run build
```
The built files will be in `dist/restaurant-landing/`

## Deployment to Netlify

### Option 1: Via Git (Recommended)

1. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository named `restaurant-landing`
   - Do NOT initialize with README (we already have one)

2. **Push your code to GitHub**:
```bash
cd c:\Users\apasos\code\rest
git init
git add .
git commit -m "Initial commit: Gastro Elegancia landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/restaurant-landing.git
git push -u origin main
```

3. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your `restaurant-landing` repository
   - Netlify will automatically detect the build settings from `netlify.toml`
   - Click "Deploy"

### Option 2: Manual Upload

1. **Build the project**:
```bash
npm run build
```

2. **Deploy via Netlify UI**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist/restaurant-landing` folder to deploy
   - Your site will be live in seconds!

## Deployment to Vercel

### Option 1: Via Git (Recommended)

1. **Push to GitHub** (if not already done):
```bash
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "New Project"
   - Click "Import" and select your GitHub repository
   - Vercel will auto-detect the framework and settings
   - Click "Deploy"

### Option 2: Via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
cd c:\Users\apasos\code\rest
vercel
```

3. **Follow the prompts**:
   - Confirm project setup
   - Set project name: `restaurant-landing`
   - Choose environment (Production)
   - Allow Vercel to create `vercel.json`
   - Your site will deploy automatically

## Post-Deployment

### Custom Domain

Both Netlify and Vercel allow you to connect a custom domain:

**Netlify**:
- Go to Site settings → Domain management
- Click "Add custom domain"
- Update your domain registrar's DNS records

**Vercel**:
- Go to Settings → Domains
- Add your domain
- Update your domain registrar's DNS records

### Environment Variables

If you need to add environment variables later:

**Netlify**:
- Site settings → Build & deploy → Environment
- Add key-value pairs

**Vercel**:
- Settings → Environment Variables
- Add key-value pairs

### Analytics

**Netlify**:
- Analytics is available in the Netlify dashboard
- Automatic tracking enabled

**Vercel**:
- Web Analytics available (premium feature)
- Can integrate with third-party analytics

## Troubleshooting

### Build fails on Netlify/Vercel

1. **Check Node version**:
   - Ensure you're using Node 18+
   - Specify Node version in `.nvmrc`:
   ```
   18.0.0
   ```

2. **Check build logs**:
   - Netlify: Site settings → Build & deploy → Deploys
   - Vercel: Go to your project → Deployments

3. **Clear cache and redeploy**:
   - Netlify: Site settings → Deploys → "Clear cache and deploy site"
   - Vercel: Projects → Settings → Git → "Clear deployment cache"

### Site shows 404 on refresh

The `netlify.toml` and `vercel.json` files are configured to redirect all routes to `index.html` for proper Angular routing.

If 404 persists:
- **Netlify**: Verify `netlify.toml` is in root folder
- **Vercel**: Verify `vercel.json` is in root folder

## Continuous Deployment

Both platforms support automatic deployment when you push to GitHub:

1. Make changes locally
2. Commit and push to GitHub
3. Netlify/Vercel automatically rebuilds and deploys
4. Your live site updates within seconds

## Performance Optimization

### Before Deployment

1. **Run production build**:
```bash
npm run build
```

2. **Check bundle size**:
```bash
npm run build -- --stats-json
```

3. **Optimize images** (if you add any):
   - Use WebP format when possible
   - Compress before uploading
   - Consider using a CDN

### After Deployment

- Use Lighthouse (Chrome DevTools) to audit performance
- Both Netlify and Vercel show Core Web Vitals in dashboards
- Monitor real user metrics in analytics

## Monitoring

**Netlify Dashboard**:
- Real-time deploy logs
- Site analytics
- Build minutes tracking
- DNS monitoring

**Vercel Dashboard**:
- Deployment history
- Function logs
- Build duration tracking
- Real-time error reporting

## Support

- **Netlify Support**: https://www.netlify.com/support/
- **Vercel Support**: https://vercel.com/support
- **Angular Docs**: https://angular.io/docs

---

Your Gastro Elegancia landing page is now ready to be deployed to the world! 🚀
