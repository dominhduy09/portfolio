# Customization Guide

## 🎨 Personalizing Your Portfolio

This guide will help you customize the portfolio with your own information.

---

## 📝 1. Personal Information

### Update Navigation & Hero
**File:** `src/components/Hero.tsx`

```tsx
// Change these:
<h1>Hi, I'm <span>Your Name</span></h1>  // Change "Your Name"
<p>Computer Science Student & Software Engineer</p>  // Update role
<p>I build beautiful, performant web applications...</p>  // Update tagline
```

### Update Contact Email
**Files to update:**
- `src/components/Navigation.tsx` - Social icons
- `src/components/Hero.tsx` - Email in social links
- `src/components/Contact.tsx` - Email link
- `src/components/Footer.tsx` - Social links

Replace `your.email@example.com` with your actual email.

### Update Social Media Links
Search for and replace these placeholders:
- `https://github.com` → Your GitHub URL
- `https://linkedin.com` → Your LinkedIn profile
- Add Twitter, Instagram, etc.

---

## 📋 2. About Section

**File:** `src/components/About.tsx`

Update the background text:
```tsx
<p className="...">
  I'm a passionate Computer Science student with a strong foundation...
</p>
```

Update interests:
```tsx
<p className="...">
  Web development, AI & Machine Learning, Systems Design, Open Source, Cloud Computing
</p>
```

Update career goals:
```tsx
<p className="...">
  Build scalable, impactful applications; contribute to meaningful projects...
</p>
```

Modify the stats cards:
```tsx
<div className="text-3xl font-bold">50+</div>
<p>Projects Built</p>

<div className="text-3xl font-bold">5+</div>
<p>Years Experience</p>

<div className="text-3xl font-bold">3.8</div>
<p>GPA</p>
```

---

## 💻 3. Skills Section

**File:** `src/components/Skills.tsx`

Update skill categories and items:
```tsx
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    color: 'from-blue-600 to-cyan-600',
  },
  // Add more categories...
];
```

Update proficiency levels:
```tsx
{
  name: 'Intermediate-Advanced',
  items: ['JavaScript', 'React', 'TypeScript', 'Python']
},
```

---

## 🚀 4. Projects Section

**File:** `src/components/Projects.tsx`

Add your projects:
```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Brief description of what the project does...',
    tags: ['React', 'TypeScript', 'Firebase'],
    github: 'https://github.com/yourname/project',
    demo: 'https://project-demo.com',
  },
  // Add more projects...
];
```

**Project object properties:**
- `id` - Unique identifier
- `title` - Project name
- `description` - What it does
- `tags` - Technologies used
- `github` - GitHub repository link
- `demo` - Live demo URL (optional)
- `image` - Not used yet (for future enhancement)

---

## 🎓 5. Experience & Education

**File:** `src/components/Experience.tsx`

Update your education and work experience:
```tsx
const experiences = [
  {
    type: 'Education',  // Education, Experience, Achievement
    title: 'Bachelor of Science in Computer Science',
    organization: 'Your University Name',
    location: 'City, State',
    startDate: 'Aug 2020',
    endDate: 'May 2024',
    description: 'Relevant coursework...',
    gpa: '3.8 GPA',
  },
  // Add internships, jobs, hackathons...
];
```

**Experience types:**
- `Education` - Universities, degrees
- `Experience` - Internships, jobs, research
- `Achievement` - Hackathons, awards, contributions

---

## 📧 6. Contact Form

**File:** `src/components/Contact.tsx`

Currently, the form just displays a success message. To make it actually send emails:

### Option A: EmailJS (No Backend)

```bash
npm install @emailjs/browser
```

Update Contact.tsx:
```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  emailjs.send('service_id', 'template_id', {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  }).then(() => {
    setSubmitted(true);
    // Reset form...
  });
};
```

Setup: Visit [EmailJS](https://www.emailjs.com/)

### Option B: Formspree (Simple)

Just change the form action:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Setup: Visit [Formspree](https://formspree.io/)

---

## 🎨 7. Colors & Styling

### Update Color Scheme

**File:** `tailwind.config.js`

Modify the theme colors:
```js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',  // Blue
      secondary: '#8b5cf6', // Purple
      // Add custom colors...
    },
  },
},
```

### Update Gradients

Search for gradient classes in components:
```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

Popular Tailwind gradients:
- `from-blue-600 to-purple-600`
- `from-purple-600 to-pink-600`
- `from-green-600 to-emerald-600`
- `from-orange-600 to-red-600`
- `from-indigo-600 to-purple-600`

---

## 🎯 8. Meta Tags & SEO

**File:** `index.html`

Update the page title and meta information:
```html
<meta name="description" content="Your description here" />
<title>Your Name - Software Engineer Portfolio</title>

<meta property="og:title" content="Your Name - Software Engineer Portfolio" />
<meta property="og:description" content="Description here" />
```

---

## 📱 9. Resume/CV

Create a `public` folder and add your resume:

```
portfolio/
├── public/
│   └── resume.pdf
```

Update the link in Hero.tsx:
```tsx
<a href="/resume.pdf" ...>Download CV</a>
```

---

## 🖼️ 10. Add Project Images

Replace emoji placeholders with actual images:

**File:** `src/components/Projects.tsx`

```tsx
// Before
<div className="w-full h-48 bg-gradient-to-br ...">
  <div className="text-4xl mb-2">💻</div>
</div>

// After
<img src="/images/project1.jpg" alt="Project name" className="w-full h-48 object-cover" />
```

Create `public/images/` folder and add project screenshots.

---

## 🌙 11. Dark Mode Customization

The dark mode is controlled by:
- `ThemeContext.tsx` - Toggle logic
- `tailwind.config.js` - Dark colors
- CSS classes with `dark:` prefix

To adjust dark theme colors:
```tsx
className="bg-white dark:bg-dark-900 text-gray-900 dark:text-white"
```

---

## 🚀 12. Animation Customization

**File:** `tailwind.config.js`

Modify animation speeds and effects:
```js
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'glow': 'glow 2s ease-in-out infinite',
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  // Modify or add more animations...
},
```

---

## 📚 13. Add Blog Section (Optional)

Create a new file: `src/components/Blog.tsx`

```tsx
export const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      date: 'Jan 4, 2024',
      category: 'React',
      excerpt: '...',
      link: '/blog/react-hooks',
    },
  ];

  return (
    <section id="blog" className="py-20 ...">
      {/* Blog grid */}
    </section>
  );
};
```

Add to `src/App.tsx`:
```tsx
import { Blog } from './components/Blog';

<Blog />
```

---

## 📊 14. Add Analytics

Add Google Analytics to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics ID.

---

## 🧪 15. Testing Your Changes

After making changes:

```bash
# Start dev server
npm run dev

# Check for TypeScript errors
npm run build

# Preview production build
npm run preview
```

---

## ✅ Customization Checklist

- [ ] Update name and title
- [ ] Update email and social links
- [ ] Update About section
- [ ] Update Skills (add/remove as needed)
- [ ] Add your projects
- [ ] Add education and experience
- [ ] Update meta tags
- [ ] Add resume PDF
- [ ] Add project images
- [ ] Test dark mode
- [ ] Test responsive design
- [ ] Update colors/theme if desired
- [ ] Setup form handling
- [ ] Deploy to your hosting

---

## 🆘 Common Issues

**Q: Changes don't appear?**
- Clear browser cache (Cmd+Shift+R)
- Restart dev server

**Q: Images not loading?**
- Create `public/` folder
- Place images in `public/images/`
- Use paths like `/images/photo.jpg`

**Q: Animations too fast/slow?**
- Edit animation duration in components or tailwind.config.js
- Increase/decrease `0.6s` values

**Q: Colors look different in dark mode?**
- Add `dark:` versions of color classes
- Use `dark:bg-dark-900`, `dark:text-white`, etc.

---

## 📖 Learn More

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Examples](https://www.framer.com/motion/)
- [React TypeScript Handbook](https://react-typescript-cheatsheet.netlify.app/)
- [Vite Documentation](https://vitejs.dev/)

---

Enjoy customizing your portfolio! 🎉
