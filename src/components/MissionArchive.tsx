'use client';

import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { projects, safeString, safeArray, safeUrl } from '@/lib/data';

// EEG Telemetry Visualization Component
function EEGTelemetry() {
  return (
    <div className="w-full h-full bg-[#060c18] p-4 sm:p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs text-[#8899aa] tracking-wider">NEURAL SIGNAL ACQUISITION</span>
        </div>
        <span className="font-mono text-[10px] sm:text-xs text-[#3b82f6]">BCI-TETRIS-v2.4</span>
      </div>
      
      {/* Signal Channels */}
      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
        {['CH1: FP1', 'CH2: FP2', 'CH3: F3', 'CH4: F4', 'CH5: C3', 'CH6: C4'].map((ch, i) => (
          <div key={ch} className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[8px] sm:text-[9px] text-[#5a6a7a] w-10 sm:w-12 truncate">{ch}</span>
            <div className="flex-1 h-3 sm:h-4 relative">
              <svg className="w-full h-full" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path
                  d={`M0,8 ${[...Array(40)].map((_, j) => {
                    const x = j * 5;
                    const y = 8 + Math.sin((j + i * 2) * 0.5 + Date.now() * 0.002) * 4 + Math.random() * 2;
                    return `L${x},${y}`;
                  }).join(' ')}`}
                  fill="none"
                  stroke={i % 2 === 0 ? '#3b82f6' : '#6366f1'}
                  strokeWidth="1"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      {/* Frequency Bands */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        {[
          { label: 'Delta', value: '2.3μV', color: '#3b82f6' },
          { label: 'Theta', value: '4.1μV', color: '#6366f1' },
          { label: 'Alpha', value: '8.7μV', color: '#8b5cf6' },
          { label: 'Beta', value: '12.4μV', color: '#a855f7' },
        ].map((band) => (
          <div key={band.label} className="bg-[#0a1120] rounded p-1.5 sm:p-2 text-center">
            <p className="font-mono text-[8px] sm:text-[9px] text-[#5a6a7a]">{band.label}</p>
            <p className="font-mono text-[10px] sm:text-xs font-semibold" style={{ color: band.color }}>{band.value}</p>
          </div>
        ))}
      </div>
      
      {/* Neural Pattern Classification */}
      <div className="bg-[#0a1120] rounded p-2 sm:p-3">
        <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
          <span className="font-mono text-[8px] sm:text-[9px] text-[#8899aa]">NEURAL PATTERN CLASSIFICATION</span>
          <span className="font-mono text-xs font-semibold text-emerald-400">80%</span>
        </div>
        <div className="h-1 bg-[#1a2a40] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#3b82f6] to-emerald-400 rounded-full" style={{ width: '80%' }} />
        </div>
      </div>
    </div>
  );
}

// Document Processing Visualization
function DocumentProcessing() {
  const sourceLines = ['85%', '72%', '90%', '65%', '78%', '88%'];
  const extractedLines = ['80%', '95%', '70%', '88%'];
  const translatedLines = ['75%', '82%', '68%'];
  
  return (
    <div className="w-full h-full bg-[#060c18] p-4 sm:p-6 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
        <span className="font-mono text-[10px] sm:text-xs text-[#8899aa] tracking-wider">DOCUMENT ANALYSIS</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {/* Source Document */}
        <div className="bg-[#0a1120] rounded border border-[rgba(255,255,255,0.04)] p-2 sm:p-3">
          <p className="font-mono text-[8px] sm:text-[9px] text-[#5a6a7a] mb-1.5 sm:mb-2">SOURCE</p>
          <div className="space-y-1">
            {sourceLines.map((width, i) => (
              <div key={i} className="h-1.5 sm:h-2 bg-[#1a2a40] rounded" style={{ width }} />
            ))}
          </div>
        </div>
        
        {/* Processed Output */}
        <div className="bg-[#0a1120] rounded border border-[rgba(59,130,246,0.2)] p-2 sm:p-3">
          <p className="font-mono text-[8px] sm:text-[9px] text-[#3b82f6] mb-1.5 sm:mb-2">EXTRACTED</p>
          <div className="space-y-1">
            {extractedLines.map((width, i) => (
              <div key={i} className="h-1.5 sm:h-2 bg-[#3b82f6]/20 rounded" style={{ width }} />
            ))}
          </div>
        </div>
        
        {/* Translation */}
        <div className="bg-[#0a1120] rounded border border-[rgba(99,102,241,0.2)] p-2 sm:p-3 sm:col-span-2">
          <p className="font-mono text-[8px] sm:text-[9px] text-[#6366f1] mb-1.5 sm:mb-2">TRANSLATED (हिंदी)</p>
          <div className="space-y-1">
            {translatedLines.map((width, i) => (
              <div key={i} className="h-1.5 sm:h-2 bg-[#6366f1]/20 rounded" style={{ width }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Computer Vision Visualization
function ComputerVision() {
  return (
    <div className="w-full h-full bg-[#060c18] p-4 sm:p-6 relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs text-[#8899aa] tracking-wider">OBJECT DETECTION</span>
        </div>
        <span className="font-mono text-[10px] sm:text-xs text-[#3b82f6]">YOLOv9</span>
      </div>
      
      {/* Road Frame */}
      <div className="relative aspect-video bg-[#0a1120] rounded border border-[rgba(255,255,255,0.04)] mb-2 sm:mb-3 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a40] to-[#0a1120]" />
        
        {/* Detected pothole */}
        <div className="absolute top-1/3 left-1/4 w-8 sm:w-12 h-6 sm:h-8 border-2 border-red-500 rounded">
          <span className="absolute -top-4 sm:-top-5 left-0 font-mono text-[7px] sm:text-[8px] text-red-400">POTHOLE 95%</span>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border border-[#3b82f6]/30" />
          ))}
        </div>
      </div>
      
      {/* Detection Info */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        <div className="bg-[#0a1120] rounded p-1.5 sm:p-2 text-center">
          <p className="font-mono text-[8px] sm:text-[9px] text-[#5a6a7a]">DETECTIONS</p>
          <p className="font-mono text-xs sm:text-sm font-semibold text-[#f0f4f8]">3</p>
        </div>
        <div className="bg-[#0a1120] rounded p-1.5 sm:p-2 text-center">
          <p className="font-mono text-[8px] sm:text-[9px] text-[#5a6a7a]">mAP</p>
          <p className="font-mono text-xs sm:text-sm font-semibold text-emerald-400">95%</p>
        </div>
        <div className="bg-[#0a1120] rounded p-1.5 sm:p-2 text-center">
          <p className="font-mono text-[8px] sm:text-[9px] text-[#5a6a7a]">LAT/LNG</p>
          <p className="font-mono text-[8px] sm:text-[9px] text-[#8899aa]">23.045°N</p>
        </div>
      </div>
    </div>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: {
    id: string;
    missionId: string;
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    visualType: string;
  };
  visualComponent: React.ReactNode;
  metrics?: { value: string; label: string }[];
}

function ProjectCard({ project, visualComponent, metrics }: ProjectCardProps) {
  const title = safeString(project.title, 'Untitled Project');
  const description = safeString(project.description);
  const technologies = safeArray(project.technologies);
  const github = safeUrl(project.github);
  const demo = safeUrl(project.demo);
  
  return (
    <div className="bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.1)] transition-all group flex flex-col">
      {/* Project Visual */}
      <div className="aspect-video w-full flex-shrink-0">
        {visualComponent}
      </div>
      
      <div className="p-4 sm:p-6 space-y-4 flex flex-col flex-grow min-w-0">
        <div className="min-w-0">
          <p className="font-mono text-[10px] sm:text-xs text-[#3b82f6]/70 tracking-widest uppercase mb-2">
            {project.missionId}
          </p>
          <h3 className="text-base sm:text-lg font-semibold text-[#f0f4f8] group-hover:text-[#3b82f6] transition-colors text-wrap">
            {title}
          </h3>
        </div>
        
        <p className="text-[#8899aa] text-sm leading-relaxed text-wrap min-w-0">
          {description}
        </p>
        
        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-[rgba(255,255,255,0.04)]">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold text-[#f0f4f8] tracking-tight">{metric.value}</p>
                <p className="text-xs text-[#5a6a7a] text-wrap">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.slice(0, 4).map((tech, idx) => (
              <span key={`tech-${idx}`} className="px-2 sm:px-3 py-1 text-xs text-[#5a6a7a] sm:text-[#8899aa] bg-[#060c18] rounded text-wrap">
                {String(tech)}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2 sm:px-3 py-1 text-xs text-[#5a6a7a]">
                +{technologies.length - 4}
              </span>
            )}
          </div>
        )}
        
        {/* Links */}
        <div className="flex items-center gap-3 sm:gap-4 pt-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#5a6a7a] hover:text-[#3b82f6] transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-[#5a6a7a] hover:text-[#3b82f6] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Additional Project Row Component
interface AdditionalProjectProps {
  project: {
    id: string;
    missionId: string;
    title: string;
    github?: string;
    demo?: string;
  };
  visualLabel?: string;
}

function AdditionalProject({ project, visualLabel = '3D' }: AdditionalProjectProps) {
  const title = safeString(project.title, 'Untitled Project');
  const github = safeUrl(project.github);
  const demo = safeUrl(project.demo);
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all group min-w-0">
      <div className="bg-[#060c18] border border-[rgba(255,255,255,0.04)] rounded-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
        <span className="font-mono text-xs text-[#3b82f6]/50">{visualLabel}</span>
      </div>
      <div className="flex-grow min-w-0">
        <p className="font-mono text-[10px] sm:text-xs text-[#5a6a7a] mb-1">{project.missionId}</p>
        <h3 className="text-sm sm:text-base font-semibold text-[#f0f4f8] group-hover:text-[#3b82f6] transition-colors text-wrap">
          {title}
        </h3>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#5a6a7a] hover:text-[#3b82f6] transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-[#5a6a7a] hover:text-[#3b82f6] transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function MissionArchive() {
  // Use validated project data
  const validProjects = safeArray(projects).filter((p): p is NonNullable<typeof p> => p !== null && typeof p === 'object');
  const featured = validProjects.filter(p => (p as Record<string, unknown>).featured === true);
  
  const flagship = featured[0] as Record<string, unknown> | undefined;
  const secondary = featured.slice(1, 3);
  const additional = featured.slice(3);
  
  const flagshipTitle = flagship ? safeString(flagship.title, 'Brain-Computer Interface: Tetris Outcome Prediction') : '';
  const flagshipDescription = flagship ? safeString(flagship.description, 'Developed a real-time brain-computer interface system.') : '';
  const flagshipTech = flagship ? safeArray((flagship as Record<string, unknown>).technologies) : [];
  
  return (
    <section id="projects" className="py-[var(--section-spacing)] relative">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.3)] to-transparent" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">02 / Mission Archive</span>
          <div className="section-label-line" />
        </div>
        
        <div className="mb-8 sm:mb-12">
          <h2 className="text-section-heading font-bold text-[#f0f4f8] mb-4">Featured Projects</h2>
          <p className="text-[#8899aa] text-body max-w-2xl text-wrap">
            A selection of research and engineering projects spanning AI, data systems, and emerging technologies.
          </p>
        </div>
        
        {/* Flagship Project */}
        {flagship && (
          <div className="mb-12 sm:mb-16">
            <div className="bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.1)] transition-all">
              {/* Mobile: Stack visual above content */}
              <div className="sm:hidden">
                <div className="aspect-video">
                  <EEGTelemetry />
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2">
                {/* Desktop: Visual on left */}
                <div className="hidden sm:block aspect-video lg:aspect-auto lg:h-full">
                  <EEGTelemetry />
                </div>
                
                {/* Content on right */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-w-0">
                  <p className="font-mono text-[10px] sm:text-xs text-[#3b82f6]/70 tracking-widest uppercase mb-2">
                    {String((flagship as Record<string, unknown>).missionId || 'MISSION-01')}
                  </p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f0f4f8] mb-4 text-wrap">
                    {flagshipTitle}
                  </h3>
                  <p className="text-[#8899aa] text-sm sm:text-base leading-relaxed mb-6 text-wrap">
                    {flagshipDescription}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6">
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-[#f0f4f8] tracking-tight">80%</p>
                      <p className="text-xs sm:text-sm text-[#5a6a7a] mt-1 text-wrap">Neural-pattern classification accuracy</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-[#f0f4f8] tracking-tight">Real-time</p>
                      <p className="text-xs sm:text-sm text-[#5a6a7a] mt-1 text-wrap">EEG signal processing</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-[#f0f4f8] tracking-tight">OpenBCI</p>
                      <p className="text-xs sm:text-sm text-[#5a6a7a] mt-1 text-wrap">Neural-signal acquisition</p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {flagshipTech.slice(0, 4).map((tech, idx) => (
                      <span key={`flagship-tech-${idx}`} className="px-3 py-1.5 text-sm text-[#8899aa] bg-[#0a1120] border border-[rgba(255,255,255,0.04)] rounded text-wrap">
                        {String(tech)}
                      </span>
                    ))}
                    {flagshipTech.length > 4 && (
                      <span className="px-3 py-1.5 text-sm text-[#5a6a7a]">
                        +{flagshipTech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    {!!(flagship as Record<string, unknown>).github && (
                      <a 
                        href={String((flagship as Record<string, unknown>).github)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    <a 
                      href="#contact"
                      className="flex items-center gap-2 text-sm sm:text-base font-medium text-[#3b82f6] hover:text-[#60a5fd] transition-colors"
                    >
                      Learn More
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Secondary Projects */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 min-w-0">
          {secondary.map((project, idx) => {
            const p = project as Record<string, unknown>;
            return (
              <ProjectCard
                key={String(p.id)}
                project={{
                  id: String(p.id || ''),
                  missionId: safeString(p.missionId, 'MISSION-XX'),
                  title: safeString(p.title),
                  description: safeString(p.description),
                  technologies: safeArray(p.technologies),
                  github: p.github as string | undefined,
                  demo: p.demo as string | undefined,
                  visualType: String(p.visualType || 'default'),
                }}
                visualComponent={idx === 0 ? <DocumentProcessing /> : <ComputerVision />}
              />
            );
          })}
        </div>
        
        {/* Additional Projects */}
        {additional.length > 0 && (
          <div className="space-y-4">
            {additional.map((project, idx) => {
              const p = project as Record<string, unknown>;
              const visualLabels = ['3D', 'EEG', 'NLP', 'CV'];
              return (
                <AdditionalProject
                  key={String(p.id)}
                  project={{
                    id: String(p.id || ''),
                    missionId: safeString(p.missionId, 'MISSION-XX'),
                    title: safeString(p.title),
                    github: p.github as string | undefined,
                    demo: p.demo as string | undefined,
                  }}
                  visualLabel={visualLabels[idx % visualLabels.length]}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
