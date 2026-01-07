import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-800"
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
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate Computer Science student with a strong foundation in software engineering principles. Currently diving deep into web development, systems design, and artificial intelligence.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                My journey into tech started with curiosity about how things work. I've spent countless hours building projects, contributing to open source, and learning from the incredible developer community.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interests</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Web development, AI & Machine Learning, Systems Design, Open Source, Cloud Computing, Cybersecurity
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Career Goals</h4>
                  <p className="text-gray-600 dark:text-gray-400">
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
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">71+</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">Projects Built</p>
              </div>

              <div className="p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">Years Experience</p>
              </div>

              <div className="p-6 rounded-lg bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">100%</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">Passion & Dedication</p>
              </div>

              <div className="p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">3.88</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">GPA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
