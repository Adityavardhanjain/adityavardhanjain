'use client';

import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { projects } from '@/lib/data';

export default function MissionArchive() {
  const featured = projects.filter(p => p.featured);
  const flagship = featured[0]; // Brain-Computer Interface Tetris
  const secondary = featured.slice(1, 3); // Legal Tesseract, Pothole Detection
  const additional = featured.slice(3); // Protein Structure

  return (
    <section id="projects" className="py-[var(--section-spacing)]">
      <div className="container-content">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-[#3b82f6] tracking-widest uppercase">02</span>
          <div className="h-px bg-[rgba(255,255,255,0.06)] flex-1 max-w-xs"></div>
        </div>
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-section-heading font-bold text-[#f0f4f8]">Featured Work</h2>
          <p className="text-[#94a3b8] text-body mt-4 max-w-2xl">
            Selected projects exploring machine learning, computer vision, natural language processing, 
            and brain-computer interfaces.
          </p>
        </div>
        
        {/* Flagship Project - Editorial Layout */}
        {flagship && (
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Visual Placeholder */}
              <div className="bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden group">
                {/* Placeholder visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/20 to-transparent" />
                <div className="relative text-center px-8">
                  <p className="text-xs font-medium text-[#3b82f6] tracking-widest uppercase mb-4">EEG Signal Visualization</p>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1 bg-[#3b82f6]/30 rounded-full animate-pulse"
                        style={{ 
                          height: `${20 + Math.random() * 60}px`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#030810]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm font-medium text-[#f0f4f8]">View Project Details</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-[#3b82f6] tracking-widest uppercase">Brain-Computer Interface</p>
                  <h3 className="text-subsection-heading font-bold text-[#f0f4f8]">{flagship.title}</h3>
                </div>
                
                <p className="text-[#94a3b8] text-body leading-relaxed">
                  {flagship.description}
                </p>
                
                {/* Impact Metrics */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[rgba(255,255,255,0.06)]">
                  <div>
                    <p className="text-2xl font-bold text-[#f0f4f8]">Real-time</p>
                    <p className="text-sm text-[#64748b]">Signal Processing</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#f0f4f8]">EEG</p>
                    <p className="text-sm text-[#64748b]">Neural Analysis</p>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {flagship.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm text-[#94a3b8] bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  {flagship.github && (
                    <a 
                      href={flagship.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#94a3b8] bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-lg hover:border-[#3b82f6] hover:text-[#f0f4f8] transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  <a 
                    href={`#${flagship.id}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#3b82f6] hover:text-[#60a5fd] transition-colors"
                  >
                    Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Secondary Projects - Two Column */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {secondary.map((project) => (
            <div key={project.id} className="bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:border-[rgba(255,255,255,0.12)] transition-all group">
              {/* Visual Placeholder */}
              <div className="bg-[#070b14] border border-[rgba(255,255,255,0.04)] rounded-xl aspect-video mb-6 flex items-center justify-center">
                <p className="text-xs font-medium text-[#3b82f6]/50 tracking-widest uppercase">
                  {project.visualType === 'document' ? 'Document OCR' : 'Computer Vision'}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-[#3b82f6] tracking-widest uppercase mb-1">
                    {project.missionId}
                  </p>
                  <h3 className="text-lg font-semibold text-[#f0f4f8] group-hover:text-[#3b82f6] transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {project.description.substring(0, 150)}...
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs text-[#64748b] bg-[#070b14] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#3b82f6] transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#3b82f6] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Project */}
        {additional.length > 0 && additional.map((project) => (
          <div key={project.id} className="flex items-center justify-between p-6 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all group">
            <div className="flex items-center gap-6">
              <div className="bg-[#070b14] border border-[rgba(255,255,255,0.04)] rounded-lg w-16 h-16 flex items-center justify-center">
                <p className="text-xs font-medium text-[#3b82f6]/50">3D</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#64748b] mb-1">{project.missionId}</p>
                <h3 className="text-base font-semibold text-[#f0f4f8] group-hover:text-[#3b82f6] transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#3b82f6] transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#3b82f6] transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
