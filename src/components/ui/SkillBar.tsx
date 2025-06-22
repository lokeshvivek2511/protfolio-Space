import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: 'electric-blue' | 'neon-green' | 'hot-pink';
  delay?: number;
}

export default function SkillBar({ skill, percentage, color, delay = 0 }: SkillBarProps) {
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'electric-blue':
        return 'bg-gradient-to-r from-blue-400 to-cyan-400';
      case 'neon-green':
        return 'bg-gradient-to-r from-green-400 to-emerald-400';
      case 'hot-pink':
        return 'bg-gradient-to-r from-pink-400 to-rose-400';
      default:
        return 'bg-gradient-to-r from-blue-400 to-cyan-400';
    }
  };

  return (
    <motion.div 
      className="skill-bar"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: false }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white">{skill}</span>
        <span className="text-sm font-bold text-white">{percentage}%</span>
      </div>
      <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: (delay / 1000) + 0.2 }}
          viewport={{ once: false }}
          className={`h-3 rounded-full ${getColorClasses(color)} relative`}
        >
          <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}
