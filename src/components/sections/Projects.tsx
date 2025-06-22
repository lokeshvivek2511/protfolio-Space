import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import time from "../../assests/time.png"
import gpt from "../../assests/image.png"
import calci from "../../assests/wheeel.png"

export default function Projects() {
  const projects = [
    {
      title: 'Timesheet Management System',
      description: 'A full-stack application built with React, Node.js, and MongoDB that enables secure authentication, real-time data updates, and intuitive employee time tracking. Features include role-based access, automated reporting, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: time,
      githubUrl: 'https://github.com/lokeshvivek2511/timesheet-client-react',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'GPT Clone Application',
      description: 'A responsive AI chatbot application built with React and integrated with the Gemini API. Features real-time responses, dynamic conversational capabilities, and an intuitive user interface with advanced prompt engineering techniques.',
      technologies: ['React', 'Gemini API', 'AI/ML', 'JavaScript'],
      image: gpt,
      githubUrl: 'https://github.com/lokeshvivek2511/GPT_Clone',
      liveUrl: '#',
      // https://sage-meringue-519776.netlify.app/
      reversed: true
    },
    {
      title: 'Supplier Price Calculator',
      description: 'A web application developed for a logistics company using HTML, CSS, Node.js, and MongoDB. Enables accurate supplier price calculations, dynamic price analysis, and secure data storage with geolocation-based cost optimization.',
      technologies: ['Node.js', 'MongoDB', 'Logistics', 'Geolocation'],
      image: calci,
      githubUrl: 'https://github.com/WheelsOn-logi/Wheelon_logi',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-electric-blue font-mono">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, ) => (
            <ProjectCard
              key={project.title}
              {...project}
              reversed={project.reversed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
