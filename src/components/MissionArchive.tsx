'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Cpu, FileText, Map, Dna, Brain } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { projects, archivedProjects, Project } from '@/lib/data';

const visualIcons = {
  eeg: Brain,
  document: FileText,
  road: Map,
  protein: Dna,
  emotion: Brain,
  default: Cpu,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = visualIcons[project.visualType] || visualIcons.default;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-[#0a1628]/50 border border-cyan-500/10 rounded-lg overflow-hidden hover:border-cyan-500/30 transition-colors">
        {/* Header */}
        <div className="flex items-center gap-4 p-5 border-b border-cyan-500/10">
          <div className="p-3 bg-cyan-500/10 rounded-lg">
            <Icon className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-cyan-500/60 font-mono text-xs">{project.missionId}</span>
            <h3 className="text-lg font-semibold text-slate-100 truncate">{project.title}</h3>
          </div>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-slate-500 hover:text-cyan-400 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        {/* Quick View */}
        <div className="p-5">
          <p className="text-cyan-400/80 font-mono text-sm mb-3">{project.objective}</p>
          <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono text-slate-400 bg-slate-800/50 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs font-mono text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
        
        {/* Expanded Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 space-y-4 border-t border-cyan-500/10 pt-4">
                {/* Full Description */}
                <div>
                  <h4 className="text-xs font-mono text-cyan-500/60 mb-2">MISSION BRIEFING</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                </div>
                
                {/* Research Themes */}
                <div>
                  <h4 className="text-xs font-mono text-cyan-500/60 mb-2">RESEARCH THEMES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.researchThemes.map((theme) => (
                      <span
                        key={theme}
                        className="px-2 py-1 text-xs font-mono text-cyan-400/80 border border-cyan-500/20 rounded"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Repository
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.documentation && (
                    <a
                      href={project.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function MissionArchive() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-[#030810]/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-500/60 font-mono text-xs tracking-widest">MISSION ARCHIVE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">
            Research Missions
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A collection of AI/ML projects exploring brain-computer interfaces, legal AI, computer vision, and computational biology.
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent max-w-xs mx-auto" />
        </motion.div>
        
        {/* Featured Missions */}
        <div className="space-y-6">
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Additional Archive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
            <span className="text-cyan-500/60 font-mono text-xs">ARCHIVED MISSIONS</span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {archivedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 bg-[#0a1628]/30 border border-cyan-500/10 rounded-lg hover:border-cyan-500/30 transition-colors"
              >
                <h4 className="text-sm font-medium text-slate-200 mb-1">{project.title}</h4>
                <p className="text-xs font-mono text-slate-500">{project.tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
