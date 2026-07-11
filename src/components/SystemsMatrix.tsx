'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Layers, Database, Server, Cpu, Activity } from 'lucide-react';
import { skills } from '@/lib/data';

const iconMap = {
  code: Code,
  brain: Brain,
  layers: Layers,
  database: Database,
  server: Server,
  cpu: Cpu,
  activity: Activity,
};

export default function SystemsMatrix() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#13161d]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A comprehensive overview of tools, languages, and frameworks in my technical arsenal.
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Cpu;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
                className="p-6 bg-[#151921] border border-white/5 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-200">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs text-gray-400 bg-gray-800/50 rounded-full hover:text-gray-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
