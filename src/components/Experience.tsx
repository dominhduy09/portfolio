import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Experience: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      type: 'Education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University Name',
      location: 'City, State',
      startDate: 'Aug 2020',
      endDate: 'May 2024',
      description: 'Relevant coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Software Engineering, AI/ML',
      gpa: '3.8 GPA',
    },
    {
      type: 'Education',
      title: 'Second Education (update me)',
      organization: 'Your Institution Name',
      location: 'City, Country',
      startDate: 'Start Year',
      endDate: 'End Year or Present',
      description: 'Add your program, focus areas, honors, and key achievements here.',
      gpa: '',
    },
    {
      type: 'Experience',
      title: 'Software Engineering Intern',
      organization: 'Tech Company XYZ',
      location: 'Remote',
      startDate: 'Jun 2023',
      endDate: 'Aug 2023',
      description: 'Developed and optimized React components for the dashboard. Improved application performance by 40%. Collaborated with senior engineers on code reviews and architecture discussions.',
    },
    {
      type: 'Experience',
      title: 'Full Stack Developer Intern',
      organization: 'Startup ABC',
      location: 'City, State',
      startDate: 'Jan 2023',
      endDate: 'May 2023',
      description: 'Built full-stack features using React, Node.js, and MongoDB. Implemented REST APIs and worked on database optimization. Mentored by experienced developers.',
    },
    {
      type: 'Achievement',
      title: 'Hackathon Winner',
      organization: 'TechHack 2023',
      location: 'Virtual',
      startDate: 'Oct 2023',
      endDate: 'Oct 2023',
      description: 'Won first place among 200+ teams for building an AI-powered productivity application in 24 hours. Demonstrated quick learning and teamwork.',
    },
    {
      type: 'Achievement',
      title: 'Research Project',
      organization: 'University Research Lab',
      location: 'City, State',
      startDate: 'Sep 2022',
      endDate: 'May 2023',
      description: 'Researched and implemented optimization algorithms for machine learning models. Published findings and presented at research conference.',
    },
    {
      type: 'Achievement',
      title: 'Open Source Contributor',
      organization: 'Various Projects',
      location: 'Remote',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: 'Active contributor to multiple popular open-source projects. Fixed bugs, implemented features, and improved documentation. 500+ contributions.',
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Education':
        return 'from-blue-600 to-cyan-600';
      case 'Experience':
        return 'from-purple-600 to-pink-600';
      case 'Achievement':
        return 'from-green-600 to-emerald-600';
      default:
        return 'from-gray-600 to-gray-600';
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800"
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
              Experience & Education
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateX: 5 }}
                className="group relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-6 border-4 border-white dark:border-dark-800" />

                {/* Content */}
                <div className="ml-4 p-6 rounded-lg bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 shadow-sm hover:shadow-lg transition-shadow">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getTypeColor(exp.type)} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                      <p className="font-medium">
                        {exp.startDate} — {exp.endDate}
                      </p>
                      {exp.location && <p>{exp.location}</p>}
                      {exp.gpa && <p className="text-green-600 dark:text-green-400 font-semibold">{exp.gpa}</p>}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
