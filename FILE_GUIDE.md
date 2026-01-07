# 📑 Complete File Directory & Purpose Guide

## 📂 Project Directory Structure

```
portfolio/
├── 📄 SOURCE CODE
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.tsx       (Fixed navbar with theme toggle)
│   │   │   ├── Hero.tsx             (Landing section with intro)
│   │   │   ├── About.tsx            (Background & achievements)
│   │   │   ├── Skills.tsx           (Skills showcase)
│   │   │   ├── Projects.tsx         (Featured projects)
│   │   │   ├── Experience.tsx       (Education & work timeline)
│   │   │   ├── Contact.tsx          (Contact form & links)
│   │   │   ├── Footer.tsx           (Footer section)
│   │   │   └── index.ts             (Component exports)
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.tsx     (Dark/light theme provider)
│   │   │
│   │   ├── App.tsx                  (Main app component)
│   │   ├── main.tsx                 (React entry point)
│   │   └── index.css                (Global styles)
│   │
│   └── index.html                   (HTML template)
│
├── ⚙️ CONFIGURATION FILES
│   ├── vite.config.ts               (Vite build config)
│   ├── tailwind.config.js           (Tailwind CSS config)
│   ├── postcss.config.js            (PostCSS config)
│   ├── tsconfig.json                (TypeScript config)
│   ├── tsconfig.node.json           (TS config for Node)
│   └── package.json                 (Dependencies & scripts)
│
├── 📚 DOCUMENTATION
│   ├── README.md                    (Main documentation)
│   ├── QUICK_START.md               (5-minute setup guide)
│   ├── CUSTOMIZATION.md             (How to personalize)
│   ├── DEPLOYMENT.md                (Deployment options)
│   ├── ARCHITECTURE.md              (Technical architecture)
│   ├── SETUP_SUMMARY.md             (Complete setup summary)
│   ├── FILE_GUIDE.md                (This file - file purposes)
│   └── .gitignore                   (Git ignore rules)
│
├── 📦 DIST (Production Build)
│   ├── index.html                   (Minified HTML)
│   └── assets/
│       ├── index-*.css              (Minified CSS)
│       └── index-*.js               (Minified JavaScript)
│
└── 📦 NODE_MODULES (Dependencies)
    └── [141 packages installed]
```

---

## 📄 File Descriptions

### 🎨 SOURCE CODE

#### **Components** (`src/components/`)

| File | Purpose | Key Features |
|------|---------|--------------|
| `Navigation.tsx` | Top navigation bar | Fixed position, theme toggle, social links, responsive |
| `Hero.tsx` | Landing section | Intro, tagline, CTA buttons, animations |
| `About.tsx` | About me section | Background, interests, goals, stat cards |
| `Skills.tsx` | Skills showcase | 6 categories, proficiency levels, tags |
| `Projects.tsx` | Featured projects | 6 sample projects, tech stack, links |
| `Experience.tsx` | Experience timeline | Education, jobs, achievements, timeline design |
| `Contact.tsx` | Contact section | Form with validation, contact info, social links |
| `Footer.tsx` | Footer section | Links, copyright, social icons |
| `index.ts` | Barrel exports | Re-export all components from one file |

#### **Context** (`src/context/`)

| File | Purpose |
|------|---------|
| `ThemeContext.tsx` | Manages dark/light theme state, localStorage persistence |

#### **Root Files** (`src/`)

| File | Purpose |
|------|---------|
| `App.tsx` | Main app component, renders all sections |
| `main.tsx` | React entry point, renders to #root |
| `index.css` | Global styles, Tailwind directives, custom animations |
| `index.html` | HTML template, meta tags, SEO optimization |

---

### ⚙️ CONFIGURATION FILES

#### **Build Configuration**

| File | Purpose | Key Settings |
|------|---------|--------------|
| `vite.config.ts` | Vite build tool config | Port 5173, React plugin, build output |
| `tailwind.config.js` | Tailwind CSS configuration | Colors, fonts, animations, dark mode |
| `postcss.config.js` | PostCSS configuration | Tailwind & autoprefixer plugins |

#### **TypeScript Configuration**

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript compiler options for src/ |
| `tsconfig.node.json` | TypeScript compiler options for vite.config.ts |

#### **Dependencies**

| File | Purpose |
|------|---------|
| `package.json` | Project metadata, dependencies, scripts |
| `package-lock.json` | Locked dependency versions (auto-generated) |

---

### 📚 DOCUMENTATION FILES

| File | Purpose | Read When |
|------|---------|-----------|
| `README.md` | Main documentation | First - complete overview |
| `QUICK_START.md` | Quick setup guide | Immediately - basic customization |
| `CUSTOMIZATION.md` | Detailed personalization guide | When customizing your info |
| `DEPLOYMENT.md` | Deployment step-by-step | When ready to deploy |
| `ARCHITECTURE.md` | Technical deep dive | Want to understand code structure |
| `SETUP_SUMMARY.md` | Complete setup summary | Overview of what you have |
| `FILE_GUIDE.md` | This file - file purposes | Need to find something |
| `.gitignore` | Git ignore patterns | Setting up version control |

---

### 📦 PRODUCTION BUILD

| File | Purpose |
|------|---------|
| `dist/index.html` | Minified HTML (production) |
| `dist/assets/index-*.css` | Minified CSS bundle |
| `dist/assets/index-*.js` | Minified JavaScript bundle |

*Generated by `npm run build` - don't edit manually*

---

## 🚀 Quick File Reference

### To Change Your Name
**File:** `src/components/Hero.tsx` (Line ~60)

### To Update Skills
**File:** `src/components/Skills.tsx` (Line ~13-54)

### To Add Projects
**File:** `src/components/Projects.tsx` (Line ~13-68)

### To Update Email
**Search:** "your.email@example.com" in multiple files
**Files:**
- `src/components/Hero.tsx`
- `src/components/Navigation.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### To Add Experience
**File:** `src/components/Experience.tsx` (Line ~14-64)

### To Change Colors
**Quick:** Search and replace gradient classes in component files
**Permanent:** Edit `tailwind.config.js` (colors section)

### To Update Meta Tags
**File:** `index.html` (Lines 5-13)

---

## 📊 File Sizes (Approximate)

| Category | Files | Size |
|----------|-------|------|
| Components | 8 | ~800 lines |
| Context | 1 | ~50 lines |
| Styles | 1 | ~80 lines |
| Config | 5 | ~200 lines |
| Total Source | 15 | ~2000 lines |
| Production Build | 2 | ~88KB JS + 5KB CSS |

---

## 🔄 File Dependencies

```
App.tsx
├── Navigation.tsx
│   ├── framer-motion
│   ├── lucide-react (icons)
│   └── ThemeContext (hook)
│
├── Hero.tsx
│   ├── framer-motion
│   └── lucide-react
│
├── About.tsx
│   ├── framer-motion
│   └── react-intersection-observer
│
├── Skills.tsx
│   ├── framer-motion
│   └── react-intersection-observer
│
├── Projects.tsx
│   ├── framer-motion
│   ├── lucide-react
│   └── react-intersection-observer
│
├── Experience.tsx
│   ├── framer-motion
│   └── react-intersection-observer
│
├── Contact.tsx
│   ├── framer-motion
│   ├── lucide-react
│   └── react-intersection-observer
│
└── Footer.tsx
    ├── framer-motion
    └── lucide-react

ThemeContext.tsx
├── React hooks (useState, useContext, useEffect)
└── Browser APIs (localStorage, matchMedia)
```

---

## 📝 Common Edits by File

### `src/components/Hero.tsx`
- [ ] Change name (Line ~60)
- [ ] Update title (Line ~62)
- [ ] Update tagline (Line ~65)
- [ ] Update email link (Line ~84)
- [ ] Update social links (Lines 98-120)

### `src/components/About.tsx`
- [ ] Update background text (Line ~24)
- [ ] Update interests (Line ~30)
- [ ] Update career goals (Line ~36)
- [ ] Change stat values (Lines 43-60)

### `src/components/Skills.tsx`
- [ ] Add/remove skill categories (Lines ~13-54)
- [ ] Update skill names (within category arrays)
- [ ] Change proficiency levels (Lines ~100+)

### `src/components/Projects.tsx`
- [ ] Add/edit projects (Lines ~13-68)
- [ ] Update GitHub links
- [ ] Add demo URLs
- [ ] Update tech tags

### `src/components/Experience.tsx`
- [ ] Add education (experience array)
- [ ] Add jobs/internships
- [ ] Add achievements
- [ ] Update dates and descriptions

### `src/components/Contact.tsx`
- [ ] Update email (Line ~150)
- [ ] Change contact methods
- [ ] Add form handling (Line ~165)

### `index.html`
- [ ] Update title (Line ~7)
- [ ] Update description (Line ~8)
- [ ] Update meta tags (Lines ~5-13)

### `tailwind.config.js`
- [ ] Add custom colors
- [ ] Adjust animations
- [ ] Modify breakpoints
- [ ] Extend theme

---

## 🔧 Scripts (package.json)

| Command | Does What |
|---------|-----------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Test production build |
| `npm run lint` | Check TypeScript errors |

---

## 📦 Dependencies Overview

| Package | Size | Purpose |
|---------|------|---------|
| react | 45KB | UI library |
| react-dom | 40KB | DOM rendering |
| framer-motion | 65KB | Animations |
| lucide-react | 35KB | Icons |
| react-intersection-observer | 5KB | Scroll detection |
| **Total** | **~190KB** | **Production: ~88KB gzip** |

---

## ✅ All Files Generated

### Configuration
- [x] `vite.config.ts` - Build config
- [x] `tailwind.config.js` - CSS config
- [x] `postcss.config.js` - PostCSS config
- [x] `tsconfig.json` - TypeScript config
- [x] `tsconfig.node.json` - TS node config
- [x] `package.json` - Dependencies
- [x] `.gitignore` - Git ignore rules

### Components (8)
- [x] `Navigation.tsx`
- [x] `Hero.tsx`
- [x] `About.tsx`
- [x] `Skills.tsx`
- [x] `Projects.tsx`
- [x] `Experience.tsx`
- [x] `Contact.tsx`
- [x] `Footer.tsx`

### Context
- [x] `ThemeContext.tsx`

### Entry Points
- [x] `App.tsx`
- [x] `main.tsx`
- [x] `index.html`

### Styling
- [x] `index.css` - Global styles

### Documentation (8 files)
- [x] `README.md` - Main docs
- [x] `QUICK_START.md` - Quick setup
- [x] `CUSTOMIZATION.md` - Customization guide
- [x] `DEPLOYMENT.md` - Deployment guide
- [x] `ARCHITECTURE.md` - Technical docs
- [x] `SETUP_SUMMARY.md` - Setup summary
- [x] `FILE_GUIDE.md` - This file
- [x] `components/index.ts` - Barrel exports

---

## 🎯 Where to Start

**New to this project?**
1. Read `README.md` - Overview
2. Read `QUICK_START.md` - Get it running
3. Check `CUSTOMIZATION.md` - Make it yours

**Want technical details?**
1. Read `ARCHITECTURE.md` - Code structure
2. Check `FILE_GUIDE.md` (this file)
3. Explore component files

**Ready to deploy?**
1. Follow `DEPLOYMENT.md`
2. Pick your platform
3. Deploy!

---

## 📞 Help Finding Things

**"I want to change X"**
- Search this guide for "X"
- Use Cmd+F in your editor to find files

**"File is too long"**
- Search for specific content with Cmd+F
- Look for function/component names

**"I don't understand a component"**
- Check `ARCHITECTURE.md` for detailed descriptions
- Read the component code - it's well-commented
- Check `CUSTOMIZATION.md` for usage examples

**"I need to add a new section"**
- Copy an existing component (e.g., `About.tsx`)
- Modify content and styling
- Add to `App.tsx`
- See `CUSTOMIZATION.md` for examples

---

## 🎓 Learning Resources

- **Component Code:** Well-commented and self-documenting
- **TypeScript:** Full type safety, hover for hints
- **Tailwind CSS:** Utility-first CSS framework
- **Framer Motion:** Smooth animations library
- **Documentation:** Multiple guides included

---

## 📋 Checklist for Navigation

- [ ] Understand project structure
- [ ] Know where components are
- [ ] Know where config files are
- [ ] Know where documentation is
- [ ] Identify files to customize
- [ ] Ready to make changes

---

## 🚀 You're All Set!

Now you know where every file is and what it does. Happy coding! 🎉

**Next Steps:**
1. Pick a file to customize
2. Make your changes
3. Test with `npm run dev`
4. Build with `npm run build`
5. Deploy!

---

For detailed customization instructions, see **CUSTOMIZATION.md**
For deployment instructions, see **DEPLOYMENT.md**
