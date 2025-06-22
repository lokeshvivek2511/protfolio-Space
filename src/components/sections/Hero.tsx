import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import cvFile from "../../assests/LOKESHWARAN_RESUME (6).pdf"  ;

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Lokeshwaran_V_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Social Icons */}
      <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        {[
          { href: "https://github.com/lokeshvivek2511", icon: "fab fa-github", delay: 0 },
          { href: "https://www.linkedin.com/in/lokeshwaran-v-680827257", icon: "fab fa-linkedin", delay: 0.5 },
          { href: "https://leetcode.com/u/Lokeshwaran_V/", icon: "fas fa-code", delay: 1 }
        ].map((social) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + social.delay }}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-electric-blue transition-colors animate-float"
            style={{ animationDelay: `${social.delay}s` }}
          >
            <i className={`${social.icon} text-2xl`}></i>
          </motion.a>
        ))}
        <div className="w-px h-24 bg-gray-600 mt-6"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-lg text-electric-blue font-mono mb-4"
          >
            Hi, my name is
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold mb-4 animate-glow"
          >
            Lokeshwaran V
          </motion.h2>
          
          <div className="text-2xl md:text-5xl font-bold text-gray-400 mb-6">
            <AnimatedText 
              text="Coffee. Code. Commit. Push"
              className="animate-typing"
              delay={100}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I'm a passionate software developer specializing in the{' '}
            <span className="text-neon-green">MERN stack</span> and{' '}
            <span className="text-hot-pink">Python</span>. Currently crafting exceptional digital experiences 
            and solving complex problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-electric-blue text-dark-primary px-8 py-3 rounded-lg font-semibold hover:bg-electric-blue/80 transition-all cursor-pointer"
            >
              View My Work
            </motion.a>
            
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neon-green to-hot-pink text-white px-8 py-3 rounded-lg font-semibold hover:from-hot-pink hover:to-neon-green transition-all flex items-center gap-2"
            >
              <i className="fas fa-download"></i>
              Download CV
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-electric-blue text-electric-blue px-8 py-3 rounded-lg font-semibold hover:bg-electric-blue/10 transition-all cursor-pointer"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <i className="fas fa-chevron-down text-electric-blue text-2xl"></i>
        </motion.div>
      </div>
    </section>
  );
}
