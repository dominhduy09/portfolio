import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

interface NavigationProps {
  onViewV2?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onViewV2 }) => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-gray-200 dark:border-dark-800 z-50 shadow-sm transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-display"
          >
            Duy's Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold transition-all relative pb-1.5 font-display hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Theme Toggle & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {onViewV2 && (
              <motion.button
                onClick={onViewV2}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold font-display"
              >
                V2 Lab 🔬
              </motion.button>
            )}

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Socials on desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <motion.a
                href="https://github.com/dominhduy09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -1 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/duy-do-minh-0b37501a9/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -1 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>

            {/* Mobile Hamburger menu toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 md:hidden rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-gray-200 dark:border-dark-800 bg-white dark:bg-dark-900 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-semibold font-display transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-4 px-3 pt-3 border-t border-gray-100 dark:border-dark-800">
                <a
                  href="https://github.com/dominhduy09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 text-xs font-semibold font-display"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/duy-do-minh-0b37501a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 text-xs font-semibold font-display"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
