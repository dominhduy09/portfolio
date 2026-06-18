import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'terms'>(initialTab);

  // Sync tab with initialTab when opened
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-150 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50">
            <div className="flex items-center gap-2">
              {activeTab === 'privacy' ? (
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              ) : (
                <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              )}
              <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation tabs inside modal */}
          <div className="flex px-6 border-b border-gray-150 dark:border-dark-700 bg-white dark:bg-dark-800">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`py-3 px-4 text-sm font-semibold border-b-2 font-display transition-colors cursor-pointer ${
                activeTab === 'privacy'
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`py-3 px-4 text-sm font-semibold border-b-2 font-display transition-colors cursor-pointer ${
                activeTab === 'terms'
                  ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Terms of Service
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans scrollbar-thin">
            {activeTab === 'privacy' ? (
              <>
                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">1. Introduction</h3>
                  <p>
                    Welcome to the developer portfolio of Minh Duy Do. Your privacy is of paramount importance. This document details how we handle the collection, use, and disclosure of information related to your use of this portfolio website.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">2. Data Collection</h3>
                  <p>
                    <strong>Contact Form:</strong> If you choose to contact Minh Duy Do using the contact form, we collect the details you provide, including your name, email address, and the content of your message. This data is processed strictly for communication purposes and is not sold, distributed, or used for unrelated marketing.
                  </p>
                  <p>
                    <strong>Automatic Data Collection:</strong> This website is hosted on static hosting services and does not directly use analytics tracking or collect persistent personal identifiers. Standard server logs (e.g., IP address, browser type) may be generated by the host provider for security and service maintenance, in accordance with their privacy policies.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">3. Cookies</h3>
                  <p>
                    This portfolio does not utilize tracking cookies, advertising trackers, or marketing pixels. It is designed to be lightweight, respectful of privacy, and secure.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">4. Third-Party Links</h3>
                  <p>
                    This portfolio contains links to external sites (such as GitHub, LinkedIn, Canva, and live web application demos). Please be aware that we are not responsible for the privacy practices or contents of those external services. We encourage you to read their privacy statements upon redirecting.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">5. Security</h3>
                  <p>
                    We implement industry-standard security measures, including HTTPS encryption, to safeguard any interactions you perform on this site (such as form submissions).
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">6. Contact Information</h3>
                  <p>
                    For questions, feedback, or data erasure requests concerning this privacy policy, please contact us directly at{' '}
                    <a href="mailto:dominhduy09@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      dominhduy09@gmail.com
                    </a>.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">1. Terms Acceptance</h3>
                  <p>
                    By accessing and browsing this portfolio website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree, please exit the site immediately.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">2. Intellectual Property Rights</h3>
                  <p>
                    All website designs, layout, typography, text, graphics, custom interactive SVG code, and portfolio code are the intellectual property of Minh Duy Do unless otherwise noted.
                  </p>
                  <p>
                    <strong>Open Source Projects:</strong> Links to external code repositories on GitHub are subject to their respective open-source licenses (e.g., MIT, Apache 2.0). Review the license file inside each repository for specific permission guidelines.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">3. Permitted Use</h3>
                  <p>
                    You are granted a non-exclusive, non-transferable, revocable license to access this portfolio for professional review, networking, and employment evaluations. Any unauthorized scraping, mirroring, or commercial reuse of the website assets without written authorization is strictly prohibited.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">4. Disclaimers & Limitations of Liability</h3>
                  <p>
                    The information, project descriptions, and live application demos linked on this portfolio are provided "as is" and "as available". We offer no warranties or guarantees that these tools will be error-free or fully compatible.
                  </p>
                  <p>
                    Minh Duy Do shall not be liable for any damages, security incidents, or losses arising from your usage or interaction with the software demos, external source repositories, or emails dispatched through the contact page.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">5. Updates and Revisions</h3>
                  <p>
                    These terms and conditions may be updated periodically without prior notification. Continued use of this website after any modifications indicates your acceptance of the updated terms.
                  </p>
                </section>
              </>
            )}
          </div>

          {/* Footer inside modal */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-dark-900/50 border-t border-gray-150 dark:border-dark-700 text-center text-xs text-gray-500 dark:text-gray-400">
            Last Updated: June 18, 2026
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
