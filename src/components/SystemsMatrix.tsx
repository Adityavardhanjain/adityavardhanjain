'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Layers, Database, Server, Cpu, Activity, LucideIcon } from 'lucide-react';
import { skills } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
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
    <section id="skills" className="relative py-24 px-6 bg-[#030810]/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-500/60 font-mono text-xs tracking-widest">SYSTEMS MATRIX</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">
            Technical Capabilities
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of tools, languages, and frameworks in my technical arsenal.
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent max-w-xs mx-auto" />
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon] ?? Cpu;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group relative"
              >
                <div className="absolute -top-3 left-4 px-2 bg-[#030810] z-10">
                  <span className="text-cyan-500/60 font-mono text-xs">SYS_{String(categoryIndex + 1).padStart(2, '0')}</span>
                </div>
                
                <div className="p-6 bg-[#0a1628]/50 border border-cyan-500/10 rounded-lg hover:border-cyan-500/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4 pt-2">
                    <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-200">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                        className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* System Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-mono text-xs">SYSTEM STATUS: OPERATIONAL</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Core competencies span the full AI/ML development lifecycle—from data preprocessing and model training to deployment and monitoring. Experienced with both cloud-based and edge computing environments, with a strong foundation in research methodologies and experimental design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
