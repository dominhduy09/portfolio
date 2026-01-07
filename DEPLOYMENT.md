# Deployment Guide

## Quick Start - Build & Deploy

### 1. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Best for:** Easiest setup, automatic deployments, free tier

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel
```

**Via GitHub:**
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import project
4. Auto-deploys on push

**Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`

---

### Option 2: Netlify

**Best for:** Good free tier, easy integration

```bash
# Using Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**Via GitHub:**
1. Connect GitHub repo at [netlify.com](https://netlify.com)
2. Auto-detects Vite settings
3. Automatic deployments on push

**Environment:**
- Build command: `npm run build`
- Publish directory: `dist`

---

### Option 3: GitHub Pages

**Best for:** Free, integration with GitHub

```bash
# 1. Update vite.config.ts to add base path
# Set base: '/portfolio/' if using username.github.io/portfolio

# 2. Build
npm run build

# 3. Push dist folder to gh-pages branch
npm run deploy
```

**package.json addition:**
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}
```

**GitHub Settings:**
- Go to Settings → Pages
- Source: Deploy from branch
- Branch: gh-pages
- Folder: root

---

### Option 4: Docker & Cloud Hosting

**For AWS, Azure, Google Cloud, DigitalOcean, etc.**

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

**Deploy:**
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

### Option 5: Traditional Hosting (Shared/VPS)

**For cPanel, Plesk, or manual FTP**

1. Build: `npm run build`
2. Upload `dist/` folder to your host
3. Point domain to `dist/` folder
4. Configure server for SPA (rewrite to index.html)

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:**
```nginx
try_files $uri $uri/ /index.html;
```

---

## 📋 Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder URLs (GitHub, LinkedIn)
- [ ] Update email address
- [ ] Add actual project screenshots
- [ ] Update resume PDF link
- [ ] Test dark mode toggle
- [ ] Test responsive design on mobile
- [ ] Check all links work
- [ ] Update meta tags in `index.html`
- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm run preview`

---

## 🔧 Post-Deployment

### Enable HTTPS

Most platforms (Vercel, Netlify, GitHub Pages) auto-enable HTTPS.

For custom domains on traditional hosting:
- Use Let's Encrypt (free SSL)
- Or upgrade to paid SSL certificate

### Analytics

Add Google Analytics:

```html
<!-- In index.html before closing </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Form Handling

Options for contact form:

1. **EmailJS** (No backend needed)
   - Free tier: 200 emails/month
   - Setup: [emailjs.com](https://www.emailjs.com)

2. **Formspree** 
   - Free tier: 50 submissions/month
   - Setup: [formspree.io](https://formspree.io)

3. **Basin**
   - Simple, free form endpoint
   - Setup: [usebasin.com](https://usebasin.com)

4. **Firebase**
   - Full backend solution
   - Setup: [firebase.google.com](https://firebase.google.com)

---

## 📊 Performance Tips

1. **Compress images**: Use online tool or ImageOptim
2. **Monitor Core Web Vitals**: Use Lighthouse in DevTools
3. **Cache bust assets**: Vite handles this automatically
4. **CDN**: Both Vercel and Netlify use CDNs
5. **Enable Gzip**: Most platforms auto-enable

---

## 🆘 Troubleshooting

**Page shows 404 on refresh?**
- Ensure SPA routing is configured
- Check htaccess or server rewrite rules

**Styles not loading?**
- Verify `base` setting in vite.config.ts
- Check CSS file paths

**Assets missing?**
- Check build output in `dist/`
- Verify correct public path

**Slow performance?**
- Run `npm run build --report` for analysis
- Check Network tab in DevTools
- Optimize images

---

## 📚 Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

## 🎯 Next Steps

1. Build: `npm run build`
2. Test: `npm run preview`
3. Deploy to platform of choice
4. Update portfolio when adding new projects
5. Monitor performance and analytics

Happy deploying! 🚀
