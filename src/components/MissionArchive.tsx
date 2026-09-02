'use client';

import type { JSX } from 'react';
import { ExternalLink, Cpu, FileText, Map, Dna, Brain } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { safeArray, safeString, safeUrl } from '@/lib/data';
import content, { getFeaturedProjects } from '@/lib/content';

type VisualKey = 'eeg' | 'document' | 'road' | 'protein' | 'emotion' | 'default';

const visualGlyphs: Record<VisualKey, JSX.Element> = {
  eeg: <Brain className="w-10 h-10" />,
  document: <FileText className="w-10 h-10" />,
  road: <Map className="w-10 h-10" />,
  protein: <Dna className="w-10 h-10" />,
  emotion: <Brain className="w-10 h-10" />,
  default: <Cpu className="w-10 h-10" />,
};

const statusLabels: Record<string, string> = {
  completed: 'COMPLETED',
  'in-progress': 'IN PROGRESS',
  archived: 'ARCHIVED',
};

type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    missionId?: string;
    objective?: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    status?: 'completed' | 'in-progress' | 'archived';
    visualType?: VisualKey;
  };
};

function ProjectCard({ project }: ProjectCardProps) {
  const technologies = safeArray(project.technologies).filter(
    (technology): technology is string => typeof technology === 'string'
  );
  const github = safeUrl(project.github);
  const demo = safeUrl(project.demo);
  const missionId = safeString(project.missionId);
  const objective = safeString(project.objective);
  const status = project.status ?? 'completed';
  const statusLabel = statusLabels[status] ?? 'COMPLETED';
  const glyphKey: VisualKey = project.visualType ?? 'default';
  const Glyph = visualGlyphs[glyphKey] ?? visualGlyphs.default;

  return (
    <article className="project-card group">
      {/* Instrument visual header - grid texture + glyph readout */}
      <div className="project-visual" aria-hidden="true">
        {missionId && <span className="project-visual__id">{missionId}</span>}
        <div className="project-visual__glyph opacity-60 group-hover:opacity-100 transition-opacity">{Glyph}</div>
        <span className="project-visual__status">{statusLabel}</span>
      </div>

      <div className="project-card__content">
        <h3 className="text-card-title text-[#f4f7fb]">
          {safeString(project.title, 'Untitled Project')}
        </h3>
        {objective && (
          <p className="font-mono text-[0.8125rem] text-[#00D4FF]/80 leading-snug">
            {objective}
          </p>
        )}
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
          <div className="flex items-center gap-3 pt-2 mt-auto">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-mono text-[0.6875rem] tracking-widest uppercase">Repo</span>
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
                <ExternalLink className="w-4 h-4" />
                <span className="font-mono text-[0.6875rem] tracking-widest uppercase">Demo</span>
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
    <section id="projects" className="section relative">
      {/* Hairline accent rail - replaces gradient masks */}
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#00D4FF]/40 via-[#00D4FF]/10 to-transparent" aria-hidden="true" />

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
