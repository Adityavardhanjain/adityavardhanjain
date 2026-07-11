'use client';

import { motion } from 'framer-motion';
import { interestNodes } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function ResearcherProfile() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const aboutText = `I am an AI and Machine Learning engineer, data analyst, and research enthusiast interested in building intelligent systems that connect advanced computation with meaningful real-world applications. My work spans machine learning, computer vision, natural language processing, generative AI, data analytics, and brain-computer interfaces.

I enjoy working on ambitious interdisciplinary problems—from decoding neural activity and predicting outcomes using EEG signals to developing computer-vision systems for infrastructure monitoring and building AI tools that improve access to complex legal information.

My long-term interests include artificial intelligence research, world models, intelligent agents, computational neuroscience, computer science, and space technology.`;
  
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-500/60 font-mono text-xs tracking-widest">RESEARCHER PROFILE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">
            Mission Specialist Dossier
          </h2>
          <div className="mt-4 h-px bg-gradient-to-r from-cyan-500/50 via-cyan-500/20 to-transparent" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="relative p-6 bg-[#0a1628]/50 border border-cyan-500/10 rounded-lg">
              <div className="absolute -top-3 left-4 px-2 bg-[#030810]">
                <span className="text-cyan-500/60 font-mono text-xs">PERSONNEL FILE</span>
              </div>
              
              <div className="flex items-start gap-6 mt-2">
                {/* Avatar */}
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-cyan-400">AJ</span>
                </div>
                
                {/* Info */}
                <div className="space-y-2">
                  <div>
                    <p className="text-slate-400 font-mono text-xs">DESIGNATION</p>
                    <p className="text-slate-200">AI/ML Engineer</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-mono text-xs">SPECIALIZATION</p>
                    <p className="text-slate-200">BCI & Agentic Systems</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-mono text-xs">CLEARANCE</p>
                    <p className="text-cyan-400">RESEARCH ACTIVE</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-cyan-500/10">
                <p className="text-slate-400 font-mono text-xs">ID</p>
                <p className="text-slate-300 text-sm font-mono">8319-AJ-9637</p>
              </div>
            </div>
            
            {/* About Text */}
            <div className="space-y-4 text-slate-300 leading-relaxed">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            {/* Interests Tags */}
            <div className="flex flex-wrap gap-2">
              {['#SpaceTech', '#ArtificialIntelligence', '#OpenSource', '#Research', '#DataScience', '#BCI'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-cyan-400/80 border border-cyan-500/20 rounded hover:border-cyan-500/40 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Constellation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-32">
              <div className="absolute -top-3 left-4 px-2 bg-[#030810]">
                <span className="text-cyan-500/60 font-mono text-xs">RESEARCH INTERESTS</span>
              </div>
              
              <div className="relative aspect-square bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg p-8 overflow-hidden">
                {/* Constellation Background Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  {interestNodes.map((node) =>
                    node.connections.map((connId) => {
                      const target = interestNodes.find((n) => n.id === connId);
                      if (target && interestNodes.indexOf(target) > interestNodes.indexOf(node)) {
                        return (
                          <line
                            key={`${node.id}-${connId}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${target.x}%`}
                            y2={`${target.y}%`}
                            stroke="rgba(34, 211, 238, 0.3)"
                            strokeWidth="0.5"
                          />
                        );
                      }
                      return null;
                    })
                  )}
                </svg>
                
                {/* Nodes */}
                {mounted && interestNodes.map((node, index) => (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                    style={{ 
                      left: `${node.x}%`, 
                      top: `${node.y}%`,
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)'
                    }}
                    className="group relative cursor-default"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-shadow" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#0a1628] border border-cyan-500/20 rounded text-xs text-cyan-400 font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {node.label}
                    </div>
                  </motion.div>
                ))}
                
                {/* Labels for key nodes */}
                <div className="absolute inset-0 pointer-events-none">
                  {mounted && interestNodes.slice(0, 6).map((node, index) => (
                    <motion.span
                      key={`label-${node.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      style={{ 
                        left: `${node.x}%`, 
                        top: `${node.y}%`,
                        position: 'absolute',
                        transform: 'translate(8px, -50%)'
                      }}
                      className="text-[10px] font-mono text-cyan-400/70"
                    >
                      {node.label}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Legend */}
              <div className="mt-4 flex items-center justify-center gap-6 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  Research Focus
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-8 h-px bg-cyan-500/30" />
                  Connections
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
