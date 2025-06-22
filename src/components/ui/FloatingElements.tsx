import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'snowflake' | 'star' | 'shooting-star';
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      
      // Generate snowflakes
      for (let i = 0; i < 12; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 8,
          duration: Math.random() * 25 + 15,
          delay: Math.random() * 8,
          type: 'snowflake'
        });
      }

      // Generate stars
      for (let i = 12; i < 25; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 4,
          duration: Math.random() * 12 + 6,
          delay: Math.random() * 5,
          type: 'star'
        });
      }

      // Generate shooting stars
      for (let i = 25; i < 28; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 80,
          y: Math.random() * 30,
          size: Math.random() * 4 + 3,
          duration: Math.random() * 6 + 3,
          delay: Math.random() * 15,
          type: 'shooting-star'
        });
      }

      setElements(newElements);
    };

    generateElements();
  }, []);

  const renderElement = (element: FloatingElement) => {
    const baseClasses = "absolute pointer-events-none";
    
    switch (element.type) {
      case 'snowflake':
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} text-blue-100 opacity-90`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.8))'
            }}
            animate={{
              y: [0, window.innerHeight + 50],
              x: [0, Math.sin(element.id) * 30, Math.cos(element.id) * 20],
              rotate: [0, 360],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ❄
          </motion.div>
        );

      case 'star':
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} text-yellow-200`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              filter: 'drop-shadow(0 0 10px rgba(253, 224, 71, 0.9))'
            }}
            animate={{
              scale: [0.8, 1.6, 0.8],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✨
          </motion.div>
        );

      case 'shooting-star':
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} text-cyan-300`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`
            }}
            animate={{
              x: [0, window.innerWidth * 0.3, -50],
              y: [0, window.innerHeight * 0.2, window.innerHeight * 0.4],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.3]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <div className="relative">
              <motion.div
                className="text-cyan-100"
                style={{ filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 1))' }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute -right-8 top-1/2 w-16 h-1 bg-gradient-to-r from-cyan-200 via-blue-200 to-transparent rounded-full"
                style={{ filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.6))' }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                  width: [0, 64, 0]
                }}
                transition={{
                  duration: element.duration * 0.4,
                  delay: element.delay + 0.2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {elements.map(renderElement)}
    </div>
  );
}