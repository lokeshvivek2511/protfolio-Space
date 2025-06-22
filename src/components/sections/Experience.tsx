import { motion } from 'framer-motion';
import TimelineItem from '../ui/TimelineItem';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Hyperready',
      period: 'May 2025 - Present',
      description: 'Working on an automation platform for the auditing domain, aimed at reducing manual work for professionals.',
      responsibilities: [
        'Implemented ledger validation and compliance testing',
        'Developed data mapping and session handling systems',
        'Enhanced UI components and workflow automation'
      ],
      color: 'electric-blue' as const,
      isActive: true
    },
    {
      title: 'Intern',
      company: 'Titan Company Ltd, Bengaluru',
      period: 'Nov 2024 - Dec 2024',
      description: 'Designed and developed a timesheet management application using React and modern front-end tools.',
      responsibilities: [
        'Built responsive UI components with React',
        'Collaborated with teams for requirement gathering',
        'Optimized application performance'
      ],
      color: 'neon-green' as const,
      icon: 'fas fa-gem',
      reversed: true
    },
    {
      title: 'Web Development Intern',
      company: 'Wheels on Technologies',
      period: 'Jul 2024 - Aug 2024',
      description: 'Developed a web-based Supplier Price Calculator to estimate transportation costs using pin codes and package details.',
      responsibilities: [
        'Implemented distance calculation algorithms',
        'Built cost estimation based on geographical data',
        'Collaborated with logistics and tech teams'
      ],
      color: 'hot-pink' as const,
      icon: 'fas fa-truck'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-electric-blue font-mono">04.</span> Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-blue via-neon-green to-hot-pink"></div>
          
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
