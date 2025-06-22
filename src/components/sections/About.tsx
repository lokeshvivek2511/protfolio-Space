import { motion } from 'framer-motion';
import photo from '../../assests/lokiimg.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-electric-blue font-mono">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Computer Science student at{' '}
              <span className="text-neon-green">Dr N.G.P. Institute of Technology</span>{' '}
              with a strong foundation in full-stack development and a keen interest in solving complex problems.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in tech has been marked by hands-on experience through internships at companies like{' '}
              <span className="text-electric-blue">Hyperready</span>,{' '}
              <span className="text-hot-pink">Titan Company Ltd</span>, and various projects that showcase my 
              expertise in the MERN stack and Python development.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me tackling algorithmic challenges on LeetCode or exploring 
              new technologies to expand my skill set.
            </p>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              className="bg-dark-primary p-6 rounded-lg border border-gray-700 card-glow"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-neon-green rounded-full mr-3 animate-pulse"></div>
                <span className="text-neon-green font-semibold">Currently Available</span>
              </div>
              <p className="text-gray-300">
                Software Developer Intern at <span className="text-electric-blue">Hyperready</span> - 
                Working on automation platforms for the auditing domain
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden card-glow"
          >
            <img
              src={photo}
              alt="Lokeshwaran V - Professional Photo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/20 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
