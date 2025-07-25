import { motion } from 'framer-motion';

// Helper for consistent icon mapping:
const skillIcons = {
  'HTML': 'fab fa-html5',
  'CSS': 'fab fa-css3-alt',
  'React': 'fab fa-react',
  'Next.js': 'fab fa-react',
  'Node.js': 'fab fa-node',
  'Express.js': 'fas fa-server',
  'REST API': 'fas fa-cloud',
  'Python': 'fab fa-python',
  'C': 'fas fa-code',
  'DSA': 'fas fa-stream',
  'MongoDB': 'fas fa-database',
  'PostgreSQL (Prisma)': 'fas fa-database',
  'SSMS': 'fas fa-database',
  'JavaScript': 'fab fa-js-square',
  'Prompt Engineering': 'fas fa-comment-dots',
  'Tailwind CSS': 'fas fa-wind',
  'Git': 'fab fa-git-alt',
  'GitHub': 'fab fa-github',
  'Trigger': 'fas fa-bolt',
  'Netlify': 'fab fa-neos',
  'JWT': 'fas fa-key',
  'Session Management': 'fas fa-user-lock',
  'Gemini API': 'fas fa-robot',
  'Postman': 'fas fa-flask',
  'VS Code': 'fas fa-code-branch',
  'Code Sandbox': 'fas fa-cube'
};

// Categorization (adjust as you like)
const groupedSkills = [
  {
    title: 'Frontend',
    color: 'electric-blue',
    skills: [
      'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Code Sandbox'
    ]
  },
  {
    title: 'Backend & APIs',
    color: 'hot-pink',
    skills: [
      'Node.js', 'Express.js', 'REST API', 'Python', 'C', 'DSA', 'Session Management', 'JWT', 'Prompt Engineering', 'Gemini API'
    ]
  },
  {
    title: 'Databases & Tools',
    color: 'neon-green',
    skills: [
      'MongoDB', 'PostgreSQL (Prisma)', 'SSMS', 'VS Code', 'Git', 'GitHub', 'Trigger', 'Netlify', 'Postman'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            <span className="text-electric-blue font-mono">02.</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue via-hot-pink to-neon-green mx-auto"></div>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedSkills.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="bg-dark-secondary p-6 rounded-2xl border border-gray-700 shadow-[0_5px_32px_5px_rgba(0,255,255,0.08)] transition-shadow hover:shadow-[0_5px_32px_5px_var(--tw-shadow-color)] card-glow"
              // No scaling!
            >
              <div className="flex items-center mb-4 space-x-3">
                <span className={`inline-block w-2 h-8 rounded bg-${group.color}`} />
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-3 mt-4">
                {group.skills.map(skill => (
                  <li
                    key={skill}
                    className="flex items-center bg-black/40 rounded-lg border border-gray-700 px-3 py-2 mb-2 mr-2 font-mono text-sm text-gray-100 hover:bg-black/60 transition"
                  >
                    <i className={`${skillIcons[skill] || 'fas fa-tools'} mr-2 text-lg text-${group.color}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
