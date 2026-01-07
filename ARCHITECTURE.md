# Portfolio Website - Architecture & Component Structure

## 📐 Project Architecture

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx    # Top navbar with theme toggle
│   │   ├── Hero.tsx          # Landing/hero section
│   │   ├── About.tsx         # About me section
│   │   ├── Skills.tsx        # Skills showcase
│   │   ├── Projects.tsx      # Featured projects
│   │   ├── Experience.tsx    # Education & experience timeline
│   │   ├── Contact.tsx       # Contact form & information
│   │   ├── Footer.tsx        # Footer with links
│   │   └── index.ts          # Barrel export
│   │
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark/light theme provider
│   │
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React DOM render entry
│   └── index.css            # Global styles
│
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies
├── README.md                # Documentation
├── DEPLOYMENT.md            # Deployment guide
└── CUSTOMIZATION.md         # Customization guide
```

---

## 🎯 Component Overview

### 1. **Navigation** (`Navigation.tsx`)
**Purpose:** Fixed top navigation bar

**Features:**
- Logo/brand with gradient
- Navigation menu links
- Dark/light theme toggle button
- Social media icons
- Responsive mobile menu (collapsible)

**Key Props:** None (uses ThemeContext)

**Key Functions:**
- `toggleTheme()` - Switch between dark/light mode
- Smooth hover animations
- Fixed positioning with backdrop blur

**Dependencies:**
- `framer-motion` - For animations
- `lucide-react` - For icons
- `ThemeContext` - For theme state

---

### 2. **Hero** (`Hero.tsx`)
**Purpose:** Landing section with introduction

**Features:**
- Animated greeting badge
- Large heading with gradient text
- Role and professional tagline
- Multiple CTA buttons
- Social media buttons
- Scroll indicator animation

**Key Props:** None

**Key Functions:**
- `containerVariants` - Staggered container animation
- `itemVariants` - Fade and slide up animation
- Framer Motion for entrance animations

**Dependencies:**
- `framer-motion` - For animations
- `lucide-react` - For icons

**Animations:**
- Staggered children with 0.2s delay
- Fade in + slide up effect
- Floating scroll indicator

---

### 3. **About** (`About.tsx`)
**Purpose:** Personal background and information

**Features:**
- About text content (2 columns on desktop)
- Interests and career goals
- Stats cards (projects, experience, GPA)
- IntersectionObserver trigger for animations
- Color-coded stat cards

**Key Props:** None

**Key Functions:**
- `useInView()` - Trigger animations when scrolling into view
- Containerized motion animations

**Dependencies:**
- `framer-motion` - For animations
- `react-intersection-observer` - For scroll triggers

---

### 4. **Skills** (`Skills.tsx`)
**Purpose:** Display programming skills and expertise

**Features:**
- 6 skill categories (Languages, Frontend, Backend, Tools, CS Fundamentals, Soft Skills)
- Categorized skill tags with gradients
- Proficiency levels section
- Responsive grid layout
- Hover animations on cards

**Key Props:** None

**Key Functions:**
- Skill categories array with color assignments
- Tag hover animations

**Structure:**
```tsx
skillCategories: [
  {
    title: string,
    skills: string[],
    color: gradient string,
  }
]
```

---

### 5. **Projects** (`Projects.tsx`)
**Purpose:** Showcase featured projects

**Features:**
- Project cards with descriptions
- Tech stack tags for each project
- GitHub and demo links
- Placeholder images (emoji + gradient)
- Card hover animations (lift effect)
- Link to view all on GitHub

**Key Props:** None

**Project Interface:**
```tsx
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
}
```

**Dependencies:**
- `framer-motion` - For animations
- `lucide-react` - For icons
- `react-intersection-observer` - For scroll triggers

---

### 6. **Experience** (`Experience.tsx`)
**Purpose:** Timeline of education and professional experience

**Features:**
- Vertical timeline layout
- Type badges (Education, Experience, Achievement)
- Start/end dates
- Color-coded timeline dots
- GPA display for education
- Hover animations

**Key Props:** None

**Experience Object:**
```tsx
{
  type: 'Education' | 'Experience' | 'Achievement',
  title: string,
  organization: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string,
  gpa?: string,
}
```

**Functions:**
- `getTypeColor(type)` - Returns gradient color based on type

---

### 7. **Contact** (`Contact.tsx`)
**Purpose:** Contact form and information

**Features:**
- Contact information cards (Email, GitHub, LinkedIn)
- Functional contact form with validation
- Form state management
- Success feedback
- Social media links
- Form handling (currently logs to console, can integrate with email service)

**Key Functions:**
- `handleChange()` - Update form state
- `handleSubmit()` - Process form submission
- Form validation via HTML5

**Form Fields:**
- Name (required)
- Email (required, email validation)
- Subject (required)
- Message (required, textarea)

**Dependencies:**
- `framer-motion` - For animations
- `lucide-react` - For icons
- `react-intersection-observer` - For scroll triggers

---

### 8. **Footer** (`Footer.tsx`)
**Purpose:** Footer with links and information

**Features:**
- 4-column layout (Brand, Navigation, Resources, Social)
- Copyright information
- Made with/attribution
- Social media links with hover effects
- Responsive grid layout

**Key Props:** None

**Key Functions:**
- `currentYear` - Dynamic copyright year

**Dependencies:**
- `framer-motion` - For animations
- `lucide-react` - For icons

---

### 9. **ThemeContext** (`context/ThemeContext.tsx`)
**Purpose:** Manage dark/light theme state

**Features:**
- React Context for theme management
- localStorage persistence
- System preference detection
- `useTheme()` hook for component usage

**Key Functions:**
- `toggleTheme()` - Switch theme
- System preference detection
- localStorage sync

**Usage:**
```tsx
const { isDark, toggleTheme } = useTheme();
```

---

### 10. **App** (`App.tsx`)
**Purpose:** Main application component

**Structure:**
```tsx
<ThemeProvider>
  <Navigation />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
  <Footer />
</ThemeProvider>
```

---

## 🎨 Styling Approach

### Tailwind CSS
- Utility-first CSS framework
- Pre-configured with custom colors
- Dark mode support via `dark:` prefix
- Custom animations and keyframes

### Color Palette
**Light Mode:**
- Background: `#ffffff`
- Text: `#111827` (gray-900)
- Accent: `#3b82f6` (blue-600)

**Dark Mode:**
- Background: `#111827` (dark-900)
- Text: `#ffffff`
- Accent: `#3b82f6` (blue-600)

### Breakpoints
- `sm`: 640px - Mobile
- `md`: 768px - Tablet
- `lg`: 1024px - Desktop
- `xl`: 1280px - Wide desktop

---

## 🎭 Animation Library - Framer Motion

### Used for:
- Component entrance animations
- Hover effects on buttons and cards
- Scroll-triggered animations
- Page transitions

### Common Patterns:
```tsx
// Fade in animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
/>

// Staggered children
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants} />
  ))}
</motion.div>

// Hover effects
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} />
```

---

## 🔄 Data Flow

```
App
├── ThemeProvider
│   └── useTheme() [isDark, toggleTheme]
│
├── Navigation (uses theme)
│   └── Shows/hides based on viewport
│
├── Hero
│   └── Social links, CTA buttons
│
├── About
│   └── useInView() for scroll animation
│
├── Skills
│   └── useInView() for scroll animation
│
├── Projects
│   ├── useInView() for scroll animation
│   └── Map over projects array
│
├── Experience
│   ├── useInView() for scroll animation
│   └── Map over experiences array
│
├── Contact
│   ├── Form state (name, email, subject, message)
│   └── Form submission handler
│
└── Footer
    └── Static content with social links
```

---

## 🔧 Key Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| React | UI library | 18.2+ |
| TypeScript | Type safety | 5.2+ |
| Vite | Build tool | 5.0+ |
| Tailwind CSS | Styling | 3.3+ |
| Framer Motion | Animations | 10.16+ |
| Lucide React | Icons | 0.263+ |
| react-intersection-observer | Scroll triggers | 9.8+ |

---

## 📊 Component Dependencies Graph

```
App
├── ThemeProvider
│   └── ThemeContext
│
├── Navigation
│   ├── framer-motion
│   ├── lucide-react
│   └── ThemeContext (hook)
│
├── Hero
│   ├── framer-motion
│   └── lucide-react
│
├── About
│   ├── framer-motion
│   └── react-intersection-observer
│
├── Skills
│   ├── framer-motion
│   └── react-intersection-observer
│
├── Projects
│   ├── framer-motion
│   ├── lucide-react
│   └── react-intersection-observer
│
├── Experience
│   ├── framer-motion
│   └── react-intersection-observer
│
├── Contact
│   ├── framer-motion
│   ├── lucide-react
│   └── react-intersection-observer
│
└── Footer
    ├── framer-motion
    └── lucide-react
```

---

## 🎯 Responsive Design Strategy

**Mobile-First Approach:**
- Base styles for mobile (< 640px)
- Progressive enhancement with breakpoints

**Key Breakpoints:**
```tsx
// Tablet
md:flex      // Show flex on md+
hidden md:flex  // Hide mobile, show tablet+

// Desktop
lg:grid      // Grid layout on lg+
md:grid-cols-2  // 2 columns on tablet
lg:grid-cols-3  // 3 columns on desktop
```

---

## ♿ Accessibility Features

- Semantic HTML (`<section>`, `<nav>`, etc.)
- ARIA labels on interactive elements
- `aria-label` on icon buttons
- `role` attributes where needed
- Focus visible indicators
- Form labels for inputs
- Keyboard navigation support

---

## 🚀 Performance Optimizations

1. **Code Splitting:** Vite handles automatic code splitting
2. **Tree Shaking:** Unused code removed in production
3. **CSS Optimization:** Tailwind purges unused classes
4. **Lazy Loading:** IntersectionObserver for animations
5. **Image Optimization:** Ready for image optimization
6. **Minification:** Automatic in production build

---

## 📝 Props Interface Documentation

Most components don't take props and manage their own state or use context. This is intentional for a portfolio site where content is largely static.

To make components more reusable:
```tsx
// Example: Make Projects component reusable
interface ProjectsProps {
  projects: Project[];
  maxItems?: number;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, maxItems }) => {
  // Implementation
};
```

---

## 🔄 State Management

**Current Approach:** React Context + Component State

- **Theme State:** ThemeContext (global)
- **Form State:** useState in Contact component (local)
- **Animation State:** Framer Motion handles internally

**Future Considerations:**
- Redux for complex state (if portfolio grows)
- Zustand for lighter state management
- React Query for API data (if adding blog, etc.)

---

## 📚 Code Organization Best Practices

1. **Separation of Concerns:**
   - Components in `/components`
   - Context in `/context`
   - Styles with Tailwind (inline)

2. **Naming Conventions:**
   - Components: PascalCase
   - Files: PascalCase.tsx
   - Variables: camelCase
   - Constants: UPPER_SNAKE_CASE

3. **File Organization:**
   - One component per file
   - Barrel exports with `index.ts`
   - Related files grouped by feature

---

## 🧪 Testing Opportunities (Future)

```tsx
// Example test structure
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

test('renders hero section with correct heading', () => {
  render(<Hero />);
  expect(screen.getByText(/Your Name/i)).toBeInTheDocument();
});
```

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/)

---

This architecture provides a solid, scalable foundation for a professional portfolio website!
