import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { FormEvent, useState } from 'react';

export const Contact: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
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
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      color: 'from-red-600 to-pink-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourname',
      href: 'https://github.com/yourname',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourname',
      href: 'https://linkedin.com/in/yourname',
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
                    { icon: Mail, label: 'Email', href: 'mailto:your.email@example.com' },
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

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {submitted ? (
                    <>
                      <span>✓</span>
                      Message Sent!
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
