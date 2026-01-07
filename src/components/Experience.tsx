import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Experience: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      type: 'Education',
      title: 'Bachelor of Engineering in Information Technology',
      organization: 'International University - VNU HCMC',
      location: 'Ho Chi Minh City, Vietnam',
      startDate: 'Sep 2022',
      endDate: 'Dec 2024',
      description: 'Relevant coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Software Engineering, AI/ML.',
      gpa: '3.1 GPA',
    },
    {
      type: 'Education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Alabama at Birmingham',
      location: 'Birmingham, AL, USA',
      startDate: 'Jan 2025',
      endDate: 'Apr 2028',
      description: 'Relevant coursework: Advanced Algorithms, Systems Programming, Distributed Systems, Machine Learning, Computer Networks.',
      gpa: '4.0 GPA',
    },
    {
      type: 'Experience',
      title: 'AI Language Trainer',
      organization: 'Outlier',
      location: 'Remote',
      startDate: 'Apr 2024',
      endDate: 'Aug 2025',
      description: 'Engaging in interactive sessions via Slack and work on the Outlier platform to enhance, refine our AI language models. This role involves providing detailed feedback, correcting language outputs, and developing training materials to improve the performance and accuracy of AI systems.',
    },
    {
      type: 'Experience',
      title: 'AI Labeler',
      organization: 'Translated',
      location: 'Remote',
      startDate: 'Nov 2024',
      endDate: 'Present',
      description: 'Get the chance to work on interesting projects, at your own pace, and deciding your own rate. Providing the technology for free, and support career with continuous education programs.',
    },
    {
      type: 'Achievement',
      title: 'ASEAN Student Contest on Information Security (ASCIS)',
      organization: 'VNISA',
      location: 'Ho Chi Minh City, Vietnam',
      startDate: 'Nov 2023',
      endDate: 'Nov 2023',
      description: 'The ASEAN Student Contest on Information Security (ASCIS) is a flagship initiative that empowers students to become leaders and innovators in the field of cybersecurity. By providing a platform for hands-on learning, collaboration, and competition, ASCIS contributes to the development of a skilled and resilient cybersecurity workforce that is essential for ensuring the security and prosperity of the ASEAN region in an increasingly digital and interconnected world.',
    },
    {
      type: 'Achievement',
      title: 'IT HACKATHON 2024: SOLANA CONSUMER HACK 16',
      organization: 'International University - VNU HCMC',
      location: 'Ho Chi Minh City, Vietnam',
      startDate: 'June 2024',
      endDate: 'June 2024',
      description: 'The hackathon will provide ample opportunities for networking, allowing participants to connect with like-minded individuals, industry experts, and potential investors.',
    },
    {
      type: 'Achievement',
      title: 'UVita - Solution for Health and Innovation',
      organization: 'NASA Space Apps Challenge',
      location: 'Ho Chi Minh City, Vietnam',
      startDate: 'July 2024',
      endDate: 'Oct 2024',
      description: 'We developed an innovative application that displays the UV index in real time, utilizing data collected from UV-measuring phone cases equipped with integrated UV and light sensors. With the low awareness of the harmful effects of UV radiation on skin health, individuals often lack access to immediate and accurate information about UV exposure levels.',
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
