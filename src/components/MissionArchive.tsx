'use client';

import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { projects } from '@/lib/data';

export default function MissionArchive() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1421]">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-[#64748b] mb-4">Projects</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#f0f4f8]">
          Featured Work
        </h2>
        
        <div className="space-y-6">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="p-6 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium text-[#f0f4f8]">{project.title}</h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#60a5fa] transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#60a5fa] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs text-[#94a3b8] bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.15)] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
