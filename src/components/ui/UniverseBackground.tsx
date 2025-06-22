import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import astronautImage1 from "../../assests/astro.png";
import astronautImage2 from "../../assests/astro.png";

interface UniverseElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "planet" | "astronaut" | "galaxy" | "nebula" | "comet";
  color?: string;
}

export default function UniverseBackground() {
  const [elements, setElements] = useState<UniverseElement[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const generateElements = () => {
      const newElements: UniverseElement[] = [];

      // Generate planets - realistic colors
      const planetColors = [
        "#8B4513",
        "#CD853F",
        "#4682B4",
        "#228B22",
        "#DC143C",
        "#9370DB",
        "#FF8C00",
      ];
      for (let i = 0; i < 5; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 85 + 7,
          y: Math.random() * 75 + 12,
          size: Math.random() * 35 + 15,
          duration: Math.random() * 40 + 30,
          delay: Math.random() * 15,
          type: "planet",
          color: planetColors[i % planetColors.length],
        });
      }

      // Generate astronauts
      for (let i = 5; i < 7; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 75 + 12,
          y: Math.random() * 65 + 17,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 35 + 20,
          delay: Math.random() * 12,
          type: "astronaut",
        });
      }

      // Generate galaxies
      for (let i = 7; i < 9; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 65 + 17,
          y: Math.random() * 55 + 22,
          size: Math.random() * 50 + 35,
          duration: Math.random() * 60 + 40,
          delay: Math.random() * 8,
          type: "galaxy",
        });
      }

      // Generate nebulas
      for (let i = 9; i < 11; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 75 + 12,
          y: Math.random() * 65 + 17,
          size: Math.random() * 70 + 50,
          duration: Math.random() * 45 + 35,
          delay: Math.random() * 15,
          type: "nebula",
        });
      }

      // Generate comets
      for (let i = 11; i < 13; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 95,
          y: Math.random() * 45,
          size: Math.random() * 15 + 10,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 25,
          type: "comet",
        });
      }

      setElements(newElements);
    };

    generateElements();
  }, [dimensions]);

  const renderElement = (element: UniverseElement) => {
    const baseClasses = "absolute pointer-events-none";

    switch (element.type) {
      case "planet":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} rounded-full`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              background: `radial-gradient(circle at 25% 25%, ${element.color}88, ${element.color}44, #111)`,
              boxShadow: `0 0 ${element.size * 0.3}px ${element.color}22, inset -${element.size * 0.15}px -${element.size * 0.15}px ${element.size * 0.25}px rgba(0,0,0,0.6)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.95, 1.05, 0.95],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="absolute inset-0 rounded-full opacity-15"
              style={{
                background: `radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.3), transparent 40%)`,
              }}
            />
          </motion.div>
        );

      case "astronaut":
        const astronautImages = [astronautImage1, astronautImage2];
        const selectedImage =
          astronautImages[element.id % astronautImages.length];

        return (
          <motion.div
            key={element.id}
            className={`${baseClasses}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 12, 0],
              rotate: [0, 15, -10, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={selectedImage}
              alt="Astronaut"
              className="object-contain"
              style={{
                width: `${element.size * 2}px`,
                height: `${element.size * 2}px`,
                filter: "drop-shadow(0 0 12px rgba(200, 220, 255, 0.6))",
                mixBlendMode: "screen",
              }}
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 0.98, 1],
              }}
              transition={{
                duration: element.duration * 0.5,
                delay: element.delay + 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Jetpack flames animation */}
            <motion.div
              className="absolute"
              style={{
                left: "10%",
                top: "60%",
                width: `${element.size * 0.3}px`,
                height: `${element.size * 0.5}px`,
              }}
              animate={{
                opacity: [0.6, 1, 0.4, 0.8],
                scale: [0.8, 1.2, 0.9, 1],
              }}
              transition={{
                duration: 2,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(255,150,50,0.8), rgba(255,200,100,0.6), rgba(255,255,150,0.3), transparent)",
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  filter: "blur(1px)",
                }}
              />
            </motion.div>

            {/* Floating particles around astronaut */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`particle-${element.id}-${i}`}
                className="absolute w-1 h-1 bg-blue-300 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  x: [0, Math.random() * 20 - 10, Math.random() * 15 - 7, 0],
                  y: [0, Math.random() * 20 - 10, Math.random() * 15 - 7, 0],
                  opacity: [0.3, 0.8, 0.5, 0.3],
                  scale: [0.5, 1, 0.7, 0.5],
                }}
                transition={{
                  duration: 4 + i,
                  delay: element.delay + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        );

      case "galaxy":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} rounded-full`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              background: `conic-gradient(from 0deg, 
                rgba(100, 50, 150, 0.15), 
                rgba(50, 100, 200, 0.15), 
                rgba(20, 120, 100, 0.15), 
                rgba(150, 100, 50, 0.15), 
                rgba(180, 60, 60, 0.15), 
                rgba(100, 50, 150, 0.15))`,
              filter: "blur(2px)",
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.85, 1.15, 0.85],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );

      case "nebula":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} rounded-full`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size * 0.6}px`,
              background: `radial-gradient(ellipse, 
                rgba(120, 60, 180, 0.12), 
                rgba(50, 100, 180, 0.12), 
                rgba(20, 140, 100, 0.08), 
                transparent)`,
              filter: "blur(3px)",
            }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.35, 0.15],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );

      case "comet":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, dimensions.width * 0.4, -100],
              y: [0, dimensions.height * 0.3, dimensions.height * 0.6],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <div className="relative">
              <div
                className="rounded-full bg-white"
                style={{
                  width: `${element.size * 0.3}px`,
                  height: `${element.size * 0.3}px`,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
                }}
              />
              <div
                className="absolute top-1/2 -left-16 w-16 h-1 bg-gradient-to-r from-cyan-400 via-blue-300 to-transparent rounded-full"
                style={{
                  filter: "blur(1px)",
                  transform: "translateY(-50%)",
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
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Space gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(20, 120, 100, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at bottom left, rgba(100, 40, 160, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at bottom right, rgba(40, 80, 180, 0.08) 0%, transparent 60%),
            linear-gradient(to bottom, #050505, #0f0f1a, #0a1020, #050505)
          `,
        }}
      />

      {/* Animated stars background */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              delay: Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Universe elements */}
      {elements.map(renderElement)}
    </div>
  );
}
