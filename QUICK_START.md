# 🚀 Quick Start Guide

Welcome! Let's get your portfolio up and running in minutes.

---

## ⚡ 5-Minute Setup

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Basic Customization
- Change your name in `src/components/Hero.tsx`
- Update email in `src/components/Contact.tsx`
- Add your GitHub and LinkedIn URLs

### 4. Build & Deploy
```bash
npm run build
npm run preview  # Test production build
```

Deploy to **Vercel** with one click (easiest option!)

---

## 📋 Files You'll Customize

| File | What to Change |
|------|---|
| `src/components/Hero.tsx` | Name, title, tagline |
| `src/components/About.tsx` | Background, interests, goals |
| `src/components/Skills.tsx` | Programming languages & tools |
| `src/components/Projects.tsx` | Your projects and links |
| `src/components/Experience.tsx` | Education & work history |
| `src/components/Contact.tsx` | Email and form handling |
| `index.html` | Meta tags, title |

---

## 🎨 Quick Customization

### Change Your Name
**File:** `src/components/Hero.tsx` (Line ~60)
```tsx
Hi, I'm <span>Your Name</span>
```

### Update Email
Search entire project for `your.email@example.com` and replace.

### Add/Remove Projects
**File:** `src/components/Projects.tsx`
Add more objects to the `projects` array.

### Update GitHub/LinkedIn
**Files:**
- `src/components/Navigation.tsx`
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

Replace `https://github.com` with your actual URL.

---

## 🌙 Dark Mode

Dark mode is **already built in**!
- Click the moon/sun icon in the navigation
- It saves your preference to localStorage
- Respects system preferences automatically

---

## 📱 Mobile Responsive

The site is **fully responsive** out of the box.
- Mobile-first design
- Works on phones, tablets, desktops
- Test with browser DevTools (F12)

---

## 🎯 Common Tasks

### Add a New Skill
**File:** `src/components/Skills.tsx`

```tsx
const skillCategories = [
  {
    title: 'My New Category',
    skills: ['Skill1', 'Skill2', 'Skill3'],
    color: 'from-blue-600 to-cyan-600',
  },
  // ... existing skills
];
```

### Add a New Project
**File:** `src/components/Projects.tsx`

```tsx
const projects: Project[] = [
  {
    id: 7,
    title: 'My Awesome Project',
    description: 'What does it do?',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourname/project',
    demo: 'https://project-demo.com',
  },
  // ... existing projects
];
```

### Add Experience/Education
**File:** `src/components/Experience.tsx`

```tsx
const experiences = [
  {
    type: 'Education',  // or 'Experience', 'Achievement'
    title: 'Degree Name',
    organization: 'University Name',
    location: 'City',
    startDate: 'Aug 2020',
    endDate: 'May 2024',
    description: 'Details here...',
    gpa: '3.8 GPA',
  },
  // ... existing experiences
];
```

---

## 🔗 Add Your Links

Replace these placeholders everywhere:
- `https://github.com` → `https://github.com/yourname`
- `https://linkedin.com` → `https://linkedin.com/in/yourname`
- `your.email@example.com` → Your actual email

---

## 🎨 Change Colors

Default colors use blue/purple gradients.

**To change the color scheme:**

Option 1: Replace in tailwind classes (easier)
```tsx
// Change this:
className="bg-gradient-to-r from-blue-600 to-purple-600"

// To this:
className="bg-gradient-to-r from-green-600 to-emerald-600"
```

Option 2: Update tailwind.config.js (more permanent)
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    },
  },
}
```

---

## 📄 Add Your Resume

1. Create a `public` folder in the project root
2. Add your `resume.pdf` file
3. The download button already points to `/resume.pdf`

```
portfolio/
├── public/
│   └── resume.pdf
├── src/
├── index.html
...
```

---

## 🚢 Deploy (Pick One)

### ⚡ Vercel (Easiest - Free)
```bash
npm i -g vercel
vercel
```
Follow prompts, done! Auto-deploys on push to GitHub.

### 🎯 Netlify (Also Easy - Free)
1. Visit [netlify.com](https://netlify.com)
2. Connect your GitHub repo
3. Auto-detects build settings
4. Deploy!

### 📚 GitHub Pages (Free but Manual)
```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 🧪 Test Locally

```bash
# Development mode (auto-reload)
npm run dev

# Production build
npm run build

# Test production build locally
npm run preview
```

---

## 📊 Project Structure

```
portfolio/
├── src/
│   ├── components/     # UI components
│   ├── context/        # Theme management
│   ├── App.tsx         # Main app
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite settings
├── tailwind.config.js  # CSS settings
└── package.json        # Dependencies
```

---

## ✅ Deployment Checklist

- [ ] Update your name and title
- [ ] Add your email
- [ ] Add GitHub/LinkedIn URLs
- [ ] Update About section
- [ ] Add your skills
- [ ] Add your projects
- [ ] Add education/experience
- [ ] Test in dark mode
- [ ] Test on mobile (F12)
- [ ] Run `npm run build` (no errors)
- [ ] Run `npm run preview` (looks good)
- [ ] Deploy!

---

## 🆘 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Build fails with TypeScript errors?**
```bash
npm run build -- --mode development
```

**Changes not showing?**
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Restart dev server

**Styles look broken?**
- Check if Tailwind is processing
- Verify `src/index.css` is imported in `src/main.tsx`

---

## 📚 Need More Help?

- **Customization Guide:** See [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- **Deployment Guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Architecture Details:** See [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Main README:** See [README.md](./README.md)

---

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🎉 You're Ready!

Your portfolio is now set up and ready to showcase your projects. Happy coding!

**Next steps:**
1. Customize with your information
2. Test locally (`npm run dev`)
3. Build and deploy
4. Share with the world! 🚀

---

## 💡 Pro Tips

1. **Add a favicon:** Update the emoji in `index.html`
2. **Custom domain:** Point DNS to your hosting provider
3. **Analytics:** Add Google Analytics for traffic insights
4. **Form emails:** Integrate with EmailJS or Formspree
5. **Blog section:** Create a `Blog.tsx` component and add it

---

Questions? Check the documentation files or the component code itself—it's well-commented!

Happy building! 🚀✨
