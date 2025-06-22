import { motion } from 'framer-motion';
import SkillBar from '../ui/SkillBar';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'fas fa-code',
      color: 'electric-blue' as const,
      skills: [
        { name: 'React', percentage: 90 },
        { name: 'Next.js', percentage: 85 },
        { name: 'HTML/CSS', percentage: 95 }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'fas fa-server',
      color: 'hot-pink' as const,
      skills: [
        { name: 'Node.js', percentage: 88 },
        { name: 'Python', percentage: 92 },
        { name: 'REST APIs', percentage: 86 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: 'fas fa-database',
      color: 'neon-green' as const,
      skills: [
        { name: 'MongoDB', percentage: 87 },
        { name: 'PostgreSQL', percentage: 82 },
        { name: 'Git/GitHub', percentage: 90 }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'LeetCode Problems', sublabel: '100-Day Streak', color: 'electric-blue' },
    { number: '50K', label: 'HackerRank Hackos', sublabel: 'Top Performer', color: 'hot-pink' },
    { number: '8.6', label: 'CGPA', sublabel: '5 Semesters', color: 'neon-green' }
  ];

  return (
    <section id="skills" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-electric-blue font-mono">02.</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-dark-secondary p-6 rounded-lg border border-gray-700 card-glow"
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: false }}
              >
                <motion.i 
                  className={`${category.icon} text-${category.color} text-2xl mr-3`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                ></motion.i>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </motion.div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    color={category.color}
                    delay={500 + (index * 200) + (skillIndex * 100)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem Solving Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.01 }}
          className="bg-dark-secondary p-8 rounded-lg border border-gray-700 card-glow"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Problem Solving Excellence
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                className="transform transition-transform cursor-pointer"
              >
                <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
                <div className="text-sm text-neon-green mt-1">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
