import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { FormEvent, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current || isLoading) return;

    // Validate environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage('EmailJS configuration is missing. Please check your environment variables.');
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      // Add timestamp to form
      const timeInput = formRef.current.querySelector('input[name="time"]') as HTMLInputElement;
      if (timeInput) {
        timeInput.value = new Date().toLocaleString();
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus('success');
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dominhduy09@gmail.com',
      href: 'mailto:dominhduy09@gmail.com',
      color: 'from-red-600 to-pink-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/dominhduy09',
      href: 'https://github.com/dominhduy09',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/duy-do-minh-0b37501a9',
      href: 'https://www.linkedin.com/in/duy-do-minh-0b37501a9/',
      color: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-800"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Have a project in mind? Let's talk about it!
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ translateX: 5 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{method.label}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{method.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <p className="font-semibold text-gray-900 dark:text-white mb-4">Follow me</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, label: 'GitHub', href: 'https://github.com/dominhduy09' },
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/duy-do-minh-0b37501a9/' },
                    { icon: Mail, label: 'Email', href: 'mailto:dominhduy09@gmail.com' },
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
                        className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-lg bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
                >
                  ✗ {errorMessage}
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden time field for EmailJS */}
                <input type="hidden" name="time" />

                {/* Name */}
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What is your name?"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What is your email?"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What is the subject?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={isLoading}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What is your message?"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
