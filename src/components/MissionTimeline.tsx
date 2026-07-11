'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award, Trophy, Users, GraduationCap } from 'lucide-react';
import { experiences, achievements } from '@/lib/data';

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  leadership: Users,
};

const achievementIcons = {
  award: Trophy,
  certification: Award,
  leadership: Users,
  milestone: Award,
};

export default function MissionTimeline() {
  // Sort achievements by type for better organization
  const sortedAchievements = [...achievements].sort((a, b) => {
    const typeOrder = { award: 0, certification: 1, leadership: 2, milestone: 3 };
    return typeOrder[a.type] - typeOrder[b.type];
  });
  
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-500/60 font-mono text-xs tracking-widest">MISSION TIMELINE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">
            Career Trajectory
          </h2>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent max-w-xs mx-auto" />
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent md:transform md:-translate-x-px" />
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = typeIcons[exp.type];
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2">
                    <div className="w-full h-full bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`p-6 bg-[#0a1628]/50 border border-cyan-500/10 rounded-lg hover:border-cyan-500/30 transition-colors ${
                      isLeft ? 'md:ml-8' : 'md:mr-8'
                    }`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="p-2 bg-cyan-500/10 rounded-lg">
                          <Icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-cyan-500/60 font-mono text-xs">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-slate-100 mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 text-sm mb-3">{exp.organization} · {exp.location}</p>
                      <p className="text-slate-400 text-sm mb-4">{exp.description}</p>
                      
                      <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className={`text-sm text-slate-300 flex items-start gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <span className="text-cyan-500 mt-1">▹</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-semibold text-slate-100">Honors & Recognition</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedAchievements.map((achievement, index) => {
              const Icon = achievementIcons[achievement.type];
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="p-5 bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg hover:border-cyan-500/40 hover:bg-[#0a1628]/50 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-cyan-500/60 font-mono mb-1">{achievement.year}</p>
                        <h4 className="text-sm font-medium text-slate-200 leading-tight">{achievement.title}</h4>
                        <p className="text-xs text-slate-500 mt-1">{achievement.organization}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
