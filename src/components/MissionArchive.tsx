'use client';

import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { safeArray, safeString, safeUrl } from '@/lib/data';
import content, { getFeaturedProjects } from '@/lib/content';

type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
  };
};

function ProjectCard({ project }: ProjectCardProps) {
  const technologies = safeArray(project.technologies).filter(
    (technology): technology is string => typeof technology === 'string'
  );
  const github = safeUrl(project.github);
  const demo = safeUrl(project.demo);

  return (
    <article className="project-card">
      <div className="project-card__content">
        <h3 className="text-card-title text-[#f4f7fb]">
          {safeString(project.title, 'Untitled Project')}
        </h3>
        <p className="text-body-sm text-[#b9c7d8] leading-relaxed">
          {safeString(project.description)}
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((technology) => (
            <span key={technology} className="tech-tag">
              {technology}
            </span>
          ))}
        </div>
        {(github || demo) && (
          <div className="flex items-center gap-4 pt-1">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.title} demo`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function MissionArchive() {
  const { projects } = content;
  const projectsList = getFeaturedProjects();

  return (
    <section id="projects" className="section section--calm relative">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.3)] to-transparent" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-[rgba(0,212,255,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        <div className="section-heading">
          <h2 className="text-section-title">{projects.title}</h2>
          <p className="section-eyebrow">{projects.sectionLabel}</p>
          <p className="text-body text-[#b9c7d8] max-w-2xl">{projects.subtitle}</p>
        </div>

        {/* Unified equal-height card grid */}
        <div className="project-grid">
          {projectsList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
