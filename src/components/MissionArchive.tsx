'use client';

import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { projects } from '@/lib/data';

export default function MissionArchive() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-[#666666] mb-4">Projects</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Featured Work
        </h2>
        
        <div className="space-y-6">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="p-6 border border-[rgba(255,255,255,0.08)] rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-white">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-[#a0a0a0] text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs text-[#666666] border border-[rgba(255,255,255,0.08)] rounded">
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
