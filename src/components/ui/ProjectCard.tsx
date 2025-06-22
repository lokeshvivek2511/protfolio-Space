import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  reversed?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  featured = false,
  reversed = false
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${reversed ? 'lg:grid-flow-dense' : ''}`}
    >
      <div className={`${reversed ? 'lg:col-start-2' : ''}`}>
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 2 }}
          whileTap={{ scale: 0.98 }}
          className="bg-dark-primary p-8 rounded-lg border border-gray-700 card-glow"
        >
          {featured && (
            <div className="text-electric-blue font-mono text-sm mb-2">Featured Project</div>
          )}
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-sm ${
                  index % 3 === 0 ? 'bg-electric-blue/20 text-electric-blue' :
                  index % 3 === 1 ? 'bg-neon-green/20 text-neon-green' :
                  'bg-hot-pink/20 text-hot-pink'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            )}
            {liveUrl != '#' && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors"
              >
                <i className="fas fa-external-link-alt text-xl"></i>
              </a>
            )}
          </div>
        </motion.div>
      </div>
      <div className={`${reversed ? 'lg:col-start-1' : ''}`}>
        <motion.img
          whileHover={{ scale: 1.05, rotateY: -2 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={title}
          className="rounded-lg shadow-2xl hover:shadow-electric-blue/20 transition-shadow duration-300 w-full"
        />
      </div>
    </motion.div>
  );
}
