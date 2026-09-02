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
    visualType: string;
    github?: string;
    demo?: string;
  };
  featured?: boolean;
};

function ProjectVisual({ type, title }: { type: string; title: string }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="project-visual__grid" />
      <div className="project-visual__glow" />
      {type === 'eeg' && <><span className="project-visual__wave project-visual__wave--one" /><span className="project-visual__wave project-visual__wave--two" /><span className="project-visual__node" /></>}
      {type === 'document' && <><span className="project-visual__document project-visual__document--back" /><span className="project-visual__document project-visual__document--front" /><span className="project-visual__cursor" /></>}
      {type === 'road' && <><span className="project-visual__road" /><span className="project-visual__marker project-visual__marker--one" /><span className="project-visual__marker project-visual__marker--two" /></>}
      <span className="project-visual__caption">{title}</span>
    </div>
  );
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const technologies = safeArray(project.technologies).filter((technology): technology is string => typeof technology === 'string');
  const github = safeUrl(project.github);
  const demo = safeUrl(project.demo);

  return (
    <article className={featured ? 'project-card project-card--featured' : 'project-card'}>
      <ProjectVisual type={project.visualType} title={safeString(project.title, 'Project')} />
      <div className="project-card__content">
        <h3 className="text-card-title text-[#f4f7fb]">{safeString(project.title, 'Untitled Project')}</h3>
        <p className="text-body-sm text-[#b9c7d8] leading-relaxed">{safeString(project.description)}</p>
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((technology) => (
            <span key={technology} className="tech-tag">{technology}</span>
          ))}
        </div>
        {(github || demo) && (
          <div className="flex items-center gap-4 pt-1">
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="project-link"><GithubIcon className="w-4 h-4" />GitHub</a>}
            {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link"><ExternalLink className="w-4 h-4" />Live demo</a>}
          </div>
        )}
      </div>
    </article>
  );
}

export default function MissionArchive() {
  const { projects } = content;
  const projectsList = getFeaturedProjects();
  const [leadProject, ...supportingProjects] = projectsList;

  return (
    <section id="projects" className="section section--calm">
      <div className="container-content">
        <div className="section-heading">
          <h2 className="text-section-title">{projects.title}</h2>
          <p className="section-eyebrow">{projects.sectionLabel}</p>
          <p className="text-body text-[#b9c7d8] max-w-2xl">{projects.subtitle}</p>
        </div>
        {leadProject && <ProjectCard project={leadProject} featured />}
        <div className="project-grid mt-6 sm:mt-8">
          {supportingProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
