import { motion } from 'framer-motion';
import cvFile  from "../../assests/LOKESHWARAN_RESUME (6).pdf"   ;
import { useState } from 'react';
import { useToast } from '../../hooks/use-toast';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Lokeshwaran_V_Resume.pdf';
    link.click();
  };



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send('service_fhm7upl', 'template_o5umwkf', formData, 'ypl3GUQi0S4q90RM7');

    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Sorry, we couldn't send your message. Please try again later.",
    });
    console.error('Email sending error:', error);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'lokeshvlw2004@gmail.com',
      href: 'mailto:lokeshvlw2004@gmail.com',
      color: 'electric-blue'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 8754957356',
      href: 'tel:+918754957356',
      color: 'neon-green'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Salem, Tamil Nadu, India',
      color: 'hot-pink'
    }
  ];

  const socialLinks = [
    { href: 'https://github.com/lokeshvivek2511', icon: 'fab fa-github', color: 'electric-blue' },
    { href: 'https://www.linkedin.com/in/lokeshwaran-v-680827257', icon: 'fab fa-linkedin', color: 'neon-green' },
    { href: 'https://leetcode.com/u/Lokeshwaran_V/', icon: 'fas fa-code', color: 'hot-pink' }
  ];

  return (
    <section id="contact" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-electric-blue font-mono">07.</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you!
          </p>
          
          {/* Download CV Button */}
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="bg-gradient-to-r from-electric-blue via-neon-green to-hot-pink text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-electric-blue/25 transition-all flex items-center justify-center gap-3 mx-auto mb-8"
          >
            <i className="fas fa-download text-xl animate-bounce"></i>
            Download My Resume
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-dark-primary p-6 rounded-lg border border-gray-700 card-glow"
              >
                <div className="flex items-center mb-4">
                  <i className={`${info.icon} text-${info.color} text-2xl mr-4`}></i>
                  <div>
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-gray-300 hover:text-${info.color} transition-colors`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              className="flex space-x-6 justify-center"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.85 }}
                  className={`bg-dark-primary p-4 rounded-lg border border-gray-700 hover:border-${social.color} transition-colors`}
                >
                  <i className={`${social.icon} text-2xl text-${social.color}`}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.01 }}
            className="bg-dark-primary p-8 rounded-lg border border-gray-700 card-glow"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-white"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-electric-blue to-neon-green text-dark-primary py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
