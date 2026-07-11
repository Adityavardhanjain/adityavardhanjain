'use client';

import { motion } from 'framer-motion';
import { Beaker, Radio, FileSearch, BookOpen } from 'lucide-react';
import { researchDirections, publications, currentResearchTransmission } from '@/lib/data';

export default function ResearchLab() {
  const statusColors = {
    active: 'text-green-400 border-green-500/30 bg-green-500/10',
    exploring: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    planned: 'text-slate-400 border-slate-500/30 bg-slate-500/10',
  };
  
  const statusLabels = {
    active: 'ACTIVE RESEARCH',
    exploring: 'EXPLORING',
    planned: 'PLANNED',
  };
  
  return (
    <section id="research" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-500/60 font-mono text-xs tracking-widest">RESEARCH LAB</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">
            Scientific Investigation
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Exploring the frontiers of artificial intelligence, computational neuroscience, and intelligent systems.
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent max-w-xs mx-auto" />
        </motion.div>
        
        {/* Current Research Transmission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="relative p-6 md:p-8 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/30 rounded-lg overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-lg" />
            
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Radio className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <div>
                <span className="text-cyan-500 font-mono text-xs tracking-widest">CURRENT RESEARCH TRANSMISSION</span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mt-1">
                  {currentResearchTransmission.title}
                </h3>
              </div>
            </div>
            
            <div className="ml-[4.5rem] mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-mono border rounded ${statusColors.active}`}>
                {currentResearchTransmission.status}
              </span>
            </div>
            
            <p className="text-slate-300 leading-relaxed ml-[4.5rem]">
              {currentResearchTransmission.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4 ml-[4.5rem]">
              {currentResearchTransmission.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-2 py-1 text-xs font-mono text-cyan-400/70 border border-cyan-500/20 rounded"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Directions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Beaker className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-semibold text-slate-100">Research Directions</h3>
            </div>
            
            <div className="space-y-4">
              {researchDirections.map((direction, index) => (
                <motion.div
                  key={direction.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-sm font-medium text-slate-200">{direction.title}</h4>
                    <span className={`flex-shrink-0 px-2 py-0.5 text-[10px] font-mono border rounded ${statusColors[direction.status]}`}>
                      {statusLabels[direction.status]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{direction.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-semibold text-slate-100">Publications</h3>
            </div>
            
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-sm font-medium text-slate-200">{pub.title}</h4>
                    <span className="flex-shrink-0 px-2 py-0.5 text-[10px] font-mono text-green-400 border border-green-500/30 bg-green-500/10 rounded">
                      PUBLISHED
                    </span>
                  </div>
                  <p className="text-xs text-cyan-500/80 font-mono mb-2">{pub.venue} | {pub.year}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{pub.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Research Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg">
                <p className="text-2xl font-bold text-cyan-400">{publications.length}</p>
                <p className="text-xs font-mono text-slate-500 mt-1">PAPERS</p>
              </div>
              <div className="text-center p-4 bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg">
                <p className="text-2xl font-bold text-cyan-400">1</p>
                <p className="text-xs font-mono text-slate-500 mt-1">AWARDS</p>
              </div>
              <div className="text-center p-4 bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg">
                <p className="text-2xl font-bold text-cyan-400">{researchDirections.filter(d => d.status === 'active').length}</p>
                <p className="text-xs font-mono text-slate-500 mt-1">ACTIVE</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
