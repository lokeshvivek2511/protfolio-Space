import { motion } from 'framer-motion';

export default function Achievements() {
  const achievementCategories = [
    {
      title: 'Competition Wins',
      icon: 'fas fa-trophy',
      color: 'electric-blue',
      items: [
        '🥇 First Place - Carta Presentara (SKCT)',
        '🥇 First Place - Buzz Blitz (SKCT)',
        '🥈 Second Place - Reverse Engineering',
        '🥈 Second Place - De-Cipher (SKCT)'
      ]
    },
    {
      title: 'Technical Excellence',
      icon: 'fas fa-code',
      color: 'neon-green',
      stats: [
        { number: '500+', label: 'LeetCode Problems', color: 'electric-blue' },
        { number: '50K', label: 'HackerRank Hackos', color: 'hot-pink' },
        { number: '100-Day', label: 'LeetCode Streak', color: 'neon-green' }
      ]
    },
    {
      title: 'Special Programs',
      icon: 'fas fa-star',
      color: 'hot-pink',
      items: [
        '🚀 SIH 2024 Participant',
        '☁️ Microsoft Azure Bootcamp',
        '🏆 Pinesphere Solutions (5 days)',
        '🎯 Elite Certifications'
      ]
    }
  ];

  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-electric-blue font-mono">06.</span> Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="bg-dark-secondary p-6 rounded-lg border border-gray-700 card-glow"
            >
              <div className="text-center">
                <motion.i
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + 0.1 * index, type: "spring" }}
                  viewport={{ once: false }}
                  className={`${category.icon} text-6xl text-${category.color} mb-4 animate-float`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                ></motion.i>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>

                {category.items && (
                  <ul className="text-gray-300 space-y-2 text-sm">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + 0.1 * itemIndex }}
                        viewport={{ once: false }}
                        whileHover={{ x: 10, scale: 1.02 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                )}

                {category.stats && (
                  <div className="space-y-4">
                    {category.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 + 0.2 * statIndex, type: "spring" }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="cursor-pointer"
                      >
                        <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
