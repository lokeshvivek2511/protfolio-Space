import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  color: 'electric-blue' | 'neon-green' | 'hot-pink';
  icon?: string;
  isActive?: boolean;
  reversed?: boolean;
}

export default function TimelineItem({
  title,
  company,
  period,
  description,
  responsibilities,
  color,
  icon,
  isActive = false,
  reversed = false
}: TimelineItemProps) {
  const colorClasses = {
    'electric-blue': 'bg-electric-blue text-electric-blue border-electric-blue',
    'neon-green': 'bg-neon-green text-neon-green border-neon-green',
    'hot-pink': 'bg-hot-pink text-hot-pink border-hot-pink'
  };

  return (
    <div className="relative mb-16">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className={`w-8 h-8 rounded-full border-4 border-dark-primary z-10 ${
            colorClasses[color].split(' ')[0]
          } ${isActive ? 'animate-pulse' : ''}`}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className={`${reversed ? 'md:order-2' : 'md:text-right'}`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02, x: reversed ? -10 : 10 }}
            className="bg-dark-secondary p-6 rounded-lg border border-gray-700 card-glow"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`font-mono text-sm ${colorClasses[color].split(' ')[1]}`}>
                {period}
              </span>
              {icon && (
                <i className={`${icon} ${colorClasses[color].split(' ')[1]}`}></i>
              )}
              {isActive && (
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <h4 className={`font-semibold mb-4 ${colorClasses[color].split(' ')[1]}`}>
              {company}
            </h4>
            <p className="text-gray-300 mb-4">{description}</p>
            <ul className="text-gray-300 space-y-2 text-sm">
              {responsibilities.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className={`${reversed ? 'md:order-1' : ''} hidden md:block`}></div>
      </div>
    </div>
  );
}
