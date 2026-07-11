'use client';

import { motion } from 'framer-motion';
import { experiences, achievements } from '@/lib/data';

export default function MissionTimeline() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">Career</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Experience
          </h2>
        </motion.div>
        
        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-1.5" />
                {index < experiences.length - 1 && (
                  <div className="w-px h-full bg-white/10 mt-2" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-500">{exp.period}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-1">{exp.title}</h3>
                <p className="text-sm text-blue-400 mb-3">{exp.organization} · {exp.location}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-blue-400 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-6">Achievements & Recognition</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.slice(0, 6).map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 bg-[#151921] border border-white/5 rounded-xl"
              >
                <p className="text-xs text-gray-500 mb-1">{achievement.year}</p>
                <h4 className="text-sm font-medium text-gray-200 mb-1">{achievement.title}</h4>
                <p className="text-xs text-gray-500">{achievement.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
