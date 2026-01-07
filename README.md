# Portfolio Website

A modern, professional portfolio website for Computer Science students and software engineers.

## 🎨 Features

- **Modern Design**: Clean, minimal, developer-focused aesthetic
- **Dark Mode Support**: Full light/dark theme with system preference detection
- **Fully Responsive**: Mobile-first, works perfectly on all devices
- **Smooth Animations**: Subtle transitions using Framer Motion
- **SEO Optimized**: Semantic HTML, meta tags, and open graph support
- **Accessible**: ARIA labels, keyboard navigation, semantic elements
- **Fast Performance**: Optimized with Vite and production-ready

## 📋 Sections

- **Hero**: Eye-catching introduction with CTA buttons
- **About**: Background, interests, and career goals
- **Skills**: Categorized skills with proficiency levels
- **Projects**: Showcase of featured projects with links
- **Experience**: Timeline of education and professional experience
- **Contact**: Contact form and social links

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

The site will open at `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── context/          # React context (Theme)
│   │   └── ThemeContext.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🎯 Customization Guide

### Update Personal Information

Edit the following sections in the components:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change name and title
   - Update tagline
   - Update social links

2. **About Section** (`src/components/About.tsx`):
   - Update background and interests
   - Change career goals
   - Adjust stats/metrics

3. **Skills** (`src/components/Skills.tsx`):
   - Add/remove skill categories
   - Update technologies
   - Adjust proficiency levels

4. **Projects** (`src/components/Projects.tsx`):
   - Add your actual projects
   - Update descriptions
   - Add GitHub and demo links

5. **Experience** (`src/components/Experience.tsx`):
   - Add education details
   - List internships and work experience
   - Include achievements and hackathons

6. **Contact** (`src/components/Contact.tsx`):
   - Update email address
   - Update social media links
   - Customize form handling

### Update Meta Information

Edit `index.html` to:
- Change title and description
- Update meta tags
- Add favicon

### Color Customization

Modify the gradient colors in:
- `tailwind.config.js` - Add custom colors
- Component files - Update gradient classes

Tailwind classes use gradients like `from-blue-600 to-purple-600`

## 🛠 Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Intersection Observer**: Scroll animation trigger

## 🌙 Dark Mode

Dark mode is automatically detected based on:
1. Stored user preference (localStorage)
2. System preference (prefers-color-scheme)
3. Manual toggle via button in navigation

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Sufficient color contrast
- Alt text for images

## 📊 Performance Optimization

- Lazy loading with Intersection Observer
- Optimized animations (GPU-accelerated)
- Minimal CSS (Tailwind production build)
- Image optimization ready
- Code splitting with Vite

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages

```bash
# Build
npm run build

# Deploy dist folder to gh-pages branch
```

### Netlify

Connect your Git repository to Netlify and set:
- Build command: `npm run build`
- Publish directory: `dist`

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Add a resume**: Place PDF in `public/resume.pdf`
2. **Update social links**: Add your actual URLs in each component
3. **Add project images**: Replace emoji placeholders with actual images
4. **Form handling**: Integrate with email service (EmailJS, Formspree, etc.)
5. **Analytics**: Add Google Analytics or Plausible
6. **SEO**: Update meta tags and add robots.txt

## 🤝 Contributing

Feel free to fork and customize this template for your own portfolio!

## 📧 Support

For issues or suggestions, please open an issue in the repository.

---

Made with ❤️ using React, TypeScript & Tailwind CSS
