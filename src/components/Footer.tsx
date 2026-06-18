import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50/80 dark:bg-dark-900/80 backdrop-blur-md text-gray-800 dark:text-gray-300 border-t border-gray-200 dark:border-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              A showcase of my skills, projects, and passion for building amazing software.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Home
                </a>
              </li>
              {['About', 'Skills', 'Projects', 'Experience', 'Gallery'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li><a href="/cv/Minh_Duy_Do_Resume.pdf" className="hover:text-gray-900 dark:hover:text-white transition-colors">Resume</a></li>
              <li><a href="https://github.com/dominhduy09" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/duy-do-minh-0b37501a9/" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://hackmd.io/@dominhduy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/dominhduy09', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/duy-do-minh-0b37501a9/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:dominhduy09@gmail.com', label: 'Email' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-200 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-dark-800 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Minh Duy Do. All rights reserved.
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> using React, TypeScript & Tailwind CSS
            </p>

            <div className="flex gap-6 text-gray-500 dark:text-gray-400 text-sm">
              <button
                onClick={onOpenPrivacy}
                className="hover:text-gray-900 dark:hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                Privacy
              </button>
              <button
                onClick={onOpenTerms}
                className="hover:text-gray-900 dark:hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
