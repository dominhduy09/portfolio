import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Laptop, Code2, Heart, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const statItems = [
    {
      icon: Laptop,
      value: '92+',
      label: 'Projects Built',
      color: 'blue',
      bg: 'bg-blue-50 dark:bg-blue-900/10',
      border: 'border-blue-100 dark:border-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Code2,
      value: '3+ Years',
      label: 'Developer Exp',
      color: 'purple',
      bg: 'bg-purple-50 dark:bg-purple-900/10',
      border: 'border-purple-100 dark:border-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: Heart,
      value: '100%',
      label: 'Passion & Focus',
      color: 'pink',
      bg: 'bg-pink-50 dark:bg-pink-900/10',
      border: 'border-pink-100 dark:border-pink-900/30',
      text: 'text-pink-600 dark:text-pink-400',
    },
    {
      icon: GraduationCap,
      value: '3.88 GPA',
      label: 'Academic Score',
      color: 'green',
      bg: 'bg-green-50 dark:bg-green-900/10',
      border: 'border-green-100 dark:border-green-900/30',
      text: 'text-green-600 dark:text-green-400',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-dark-900/40 backdrop-blur-[2px] border-b border-gray-200 dark:border-dark-800"
    >
      <div className="max-w-4xl mx-auto">
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
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-sans">
                I'm a passionate Computer Science student with a strong foundation in software engineering principles. Currently diving deep into web development, systems design, and artificial intelligence.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-sans">
                My journey into tech started with curiosity about how things work. I've spent countless hours building projects, contributing to open source, and learning from the incredible developer community.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-display">Interests</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Web development, AI & Machine Learning, Systems Design, Open Source, Cloud Computing, Cybersecurity
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-display">Career Goals</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Build scalable, impactful applications; contribute to meaningful projects; continuously learn and grow as an engineer
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats / Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {statItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`p-6 rounded-2xl ${item.bg} border ${item.border} flex flex-col items-center text-center justify-center shadow-sm relative overflow-hidden group`}
                  >
                    {/* Glowing effect inside card */}
                    <div className="absolute inset-0 bg-white/40 dark:bg-dark-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className={`p-3 rounded-xl bg-white dark:bg-dark-800 shadow-sm ${item.text} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    
                    <div className={`text-2xl font-bold font-display ${item.text}`}>
                      {item.value}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-semibold mt-1">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

