import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: 'Computer Science and Engineering',
      institution: 'Dr N.G.P. Institute of Technology',
      location: 'Coimbatore',
      period: '2022 - Present',
      grade: '8.6 CGPA',
      gradeLabel: 'CGPA'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Swami Sivananda Hr Sec School',
      location: 'Coimbatore',
      period: '2022',
      grade: '80%',
      gradeLabel: 'Percentage'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Rasi Matriculation Hr Sec. School',
      location: 'Salem',
      period: '2020',
      grade: '86%',
      gradeLabel: 'Percentage'
    }
  ];

  const certifications = [
    { name: 'MERN Stack', provider: 'Frenzo Academy', icon: 'fas fa-certificate', color: 'electric-blue' },
    { name: 'NPTEL Cloud Computing', provider: 'Elite + Silver', icon: 'fas fa-cloud', color: 'neon-green' },
    { name: 'Ethical Hacking', provider: 'NPTEL Elite', icon: 'fas fa-shield-alt', color: 'hot-pink' },
    { name: 'Python Programming', provider: 'Coursera', icon: 'fab fa-python', color: 'electric-blue' },
    { name: 'Prompt Engineering', provider: 'AWS', icon: 'fab fa-aws', color: 'neon-green' },
    { name: 'Web Development Series', provider: 'Bharathiar University', icon: 'fas fa-graduation-cap', color: 'hot-pink' }
  ];

  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-electric-blue font-mono">05.</span> Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-electric-blue">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-dark-primary p-6 rounded-lg border border-gray-700 card-glow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className={`${index === 0 ? 'text-xl' : 'text-lg'} font-bold`}>
                        {edu.degree}
                      </h4>
                      <p className="text-electric-blue">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.location} | {edu.period}</p>
                    </div>
                    <div className="text-right">
                      <div className={`${index === 0 ? 'text-2xl' : 'text-xl'} font-bold text-neon-green`}>
                        {edu.grade}
                      </div>
                      <div className="text-sm text-gray-400">{edu.gradeLabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-neon-green">Certifications</h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.03, x: -10, rotateY: 5 }}
                  className="bg-dark-primary p-4 rounded-lg border border-gray-700 card-glow cursor-pointer"
                >
                  <div className="flex items-center">
                    <i className={`${cert.icon} text-${cert.color} mr-3`}></i>
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-gray-400">{cert.provider}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
