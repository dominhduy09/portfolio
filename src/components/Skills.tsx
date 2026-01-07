import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Skills: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5', 'CSS3'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express', 'Firebase', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Figma', 'AWS'],
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'CS Fundamentals',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Networks', 'OS'],
      color: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Work', 'Leadership', 'Adaptability'],
      color: 'from-pink-600 to-rose-600',
    },
  ];

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

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-6xl mx-auto">
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
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -5 }}
                className="group"
              >
                <div className="h-full p-6 rounded-lg bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
                  {/* Category Title */}
                  <div className={`inline-block bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-900 hover:shadow-md transition-all cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 rounded-lg bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Proficiency Levels</h3>

            <div className="space-y-6">
              {[
                { name: 'Intermediate-Advanced', items: ['JavaScript', 'React', 'TypeScript', 'Python'] },
                { name: 'Intermediate', items: ['Java', 'C++', 'Node.js', 'SQL', 'CSS'] },
                { name: 'Familiar', items: ['Docker', 'AWS', 'MongoDB', 'GraphQL', 'Linux'] },
              ].map((level, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-gray-900 dark:text-white mb-3">{level.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {level.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
