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
      skills: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'TanStack Start', 'Recharts', 'HTML5/CSS3'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express', 'Supabase', 'MongoDB', 'PostgreSQL', 'Cloudflare Workers'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'Linux', 'Vite', 'Figma', 'AWS'],
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
                whileHover={{ translateY: -6 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Glowing header accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />
                  
                  {/* Category Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">{category.title}</h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold border border-gray-100 dark:border-dark-800 bg-gray-50 dark:bg-dark-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all cursor-default`}
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
            className="mt-16 p-8 rounded-2xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-display">Proficiency Levels</h3>

            <div className="space-y-8">
              {[
                { name: 'Intermediate-Advanced', color: 'from-blue-500 to-cyan-500', items: ['React 19', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'Python'] },
                { name: 'Intermediate', color: 'from-purple-500 to-pink-500', items: ['Java', 'C++', 'Node.js', 'SQL', 'Supabase', 'TanStack Start'] },
                { name: 'Familiar', color: 'from-green-500 to-emerald-500', items: ['Docker', 'AWS', 'MongoDB', 'Cloudflare Workers', 'Linux'] },
              ].map((level, idx) => (
                <div key={idx} className="border-b border-gray-100 dark:border-dark-800 last:border-none pb-6 last:pb-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color}`} />
                    <p className="font-bold text-gray-900 dark:text-white font-display text-sm uppercase tracking-wider">{level.name}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {level.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-lg bg-gray-50 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-sm font-semibold border border-gray-150 dark:border-dark-700 transition-colors hover:border-blue-400 dark:hover:border-blue-500"
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
