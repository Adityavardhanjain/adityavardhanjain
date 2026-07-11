'use client';

import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { projects } from '@/lib/data';

// EEG Telemetry Visualization Component
function EEGTelemetry() {
  return (
    <div className="w-full h-full bg-[#060c18] p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] text-[#8899aa] tracking-wider">NEURAL SIGNAL ACQUISITION</span>
        </div>
        <span className="font-mono text-[10px] text-[#3b82f6]">BCI-TETRIS-v2.4</span>
      </div>
      
      {/* Signal Channels */}
      <div className="space-y-2 mb-4">
        {['CH1: FP1', 'CH2: FP2', 'CH3: F3', 'CH4: F4', 'CH5: C3', 'CH6: C4'].map((ch, i) => (
          <div key={ch} className="flex items-center gap-3">
            <span className="font-mono text-[9px] text-[#5a6a7a] w-12">{ch}</span>
            <div className="flex-1 h-4 relative">
              {/* Animated waveform */}
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
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: 'Delta', value: '2.3μV', color: '#3b82f6' },
          { label: 'Theta', value: '4.1μV', color: '#6366f1' },
          { label: 'Alpha', value: '8.7μV', color: '#8b5cf6' },
          { label: 'Beta', value: '12.4μV', color: '#a855f7' },
        ].map((band) => (
          <div key={band.label} className="bg-[#0a1120] rounded p-2 text-center">
            <p className="font-mono text-[9px] text-[#5a6a7a]">{band.label}</p>
            <p className="font-mono text-xs font-semibold" style={{ color: band.color }}>{band.value}</p>
          </div>
        ))}
      </div>
      
      {/* Neural Pattern Classification */}
      <div className="bg-[#0a1120] rounded p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] text-[#8899aa]">NEURAL PATTERN CLASSIFICATION</span>
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
  // Static widths for consistent rendering
  const sourceLines = ['85%', '72%', '90%', '65%', '78%', '88%'];
  const extractedLines = ['80%', '95%', '70%', '88%'];
  const translatedLines = ['75%', '82%', '68%'];
  
  return (
    <div className="w-full h-full bg-[#060c18] p-6 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
        <span className="font-mono text-[10px] text-[#8899aa] tracking-wider">DOCUMENT ANALYSIS</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 h-[calc(100%-40px)]">
        {/* Source Document */}
        <div className="bg-[#0a1120] rounded border border-[rgba(255,255,255,0.04)] p-3">
          <p className="font-mono text-[9px] text-[#5a6a7a] mb-2">SOURCE</p>
          <div className="space-y-1">
            {sourceLines.map((width, i) => (
              <div key={i} className="h-2 bg-[#1a2a40] rounded" style={{ width }} />
            ))}
          </div>
        </div>
        
        {/* Processed Output */}
        <div className="bg-[#0a1120] rounded border border-[rgba(59,130,246,0.2)] p-3">
          <p className="font-mono text-[9px] text-[#3b82f6] mb-2">EXTRACTED</p>
          <div className="space-y-1">
            {extractedLines.map((width, i) => (
              <div key={i} className="h-2 bg-[#3b82f6]/20 rounded" style={{ width }} />
            ))}
          </div>
        </div>
        
        {/* Translation */}
        <div className="bg-[#0a1120] rounded border border-[rgba(99,102,241,0.2)] p-3 col-span-2">
          <p className="font-mono text-[9px] text-[#6366f1] mb-2">TRANSLATED (हिंदी)</p>
          <div className="space-y-1">
            {translatedLines.map((width, i) => (
              <div key={i} className="h-2 bg-[#6366f1]/20 rounded" style={{ width }} />
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
    <div className="w-full h-full bg-[#060c18] p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-[10px] text-[#8899aa] tracking-wider">OBJECT DETECTION</span>
        </div>
        <span className="font-mono text-[10px] text-[#3b82f6]">YOLOv9</span>
      </div>
      
      {/* Road Frame */}
      <div className="relative aspect-video bg-[#0a1120] rounded border border-[rgba(255,255,255,0.04)] mb-3 overflow-hidden">
        {/* Simulated road */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a40] to-[#0a1120]" />
        
        {/* Detected pothole */}
        <div className="absolute top-1/3 left-1/4 w-12 h-8 border-2 border-red-500 rounded">
          <span className="absolute -top-4 left-0 font-mono text-[8px] text-red-400">POTHOLE 95%</span>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border border-[#3b82f6]/30" />
          ))}
        </div>
      </div>
      
      {/* Detection Info */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-[#0a1120] rounded p-2 text-center">
          <p className="font-mono text-[9px] text-[#5a6a7a]">DETECTIONS</p>
          <p className="font-mono text-sm font-semibold text-[#f0f4f8]">3</p>
        </div>
        <div className="bg-[#0a1120] rounded p-2 text-center">
          <p className="font-mono text-[9px] text-[#5a6a7a]">mAP</p>
          <p className="font-mono text-sm font-semibold text-emerald-400">95%</p>
        </div>
        <div className="bg-[#0a1120] rounded p-2 text-center">
          <p className="font-mono text-[9px] text-[#5a6a7a]">LAT/LNG</p>
          <p className="font-mono text-[9px] text-[#8899aa]">23.045°N</p>
        </div>
      </div>
    </div>
  );
}

export default function MissionArchive() {
  const featured = projects.filter(p => p.featured);
  const flagship = featured[0];
  const secondary = featured.slice(1, 3);
  const additional = featured.slice(3);

  return (
    <section id="projects" className="py-[var(--section-spacing)] relative">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.3)] to-transparent" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">02 / Mission Archive</span>
          <div className="section-label-line" />
        </div>
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-section-heading font-bold text-[#f0f4f8]">Featured Work</h2>
          <p className="text-[#8899aa] text-body mt-4 max-w-2xl">
            Selected projects exploring machine learning, computer vision, natural language processing, 
            and brain-computer interfaces.
          </p>
        </div>
        
        {/* Flagship Project - Editorial Layout with Real Visualization */}
        {flagship && (
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* EEG Telemetry Visualization */}
              <div className="bg-[#0a1120] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden aspect-[4/3]">
                <EEGTelemetry />
              </div>
              
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase">Brain-Computer Interface · EEG · Machine Learning</p>
                  <h3 className="text-subsection-heading font-bold text-[#f0f4f8]">NeuroTetris: Predicting Gameplay Outcomes from Neural Signals</h3>
                </div>
                
                <p className="text-[#8899aa] text-body leading-relaxed">
                  A real-time brain-computer interface research system that analyzes EEG signals recorded during Tetris gameplay to identify neural patterns associated with player outcomes.
                </p>
                
                <p className="text-[#8899aa] text-sm leading-relaxed">
                  Built signal-processing and machine-learning pipelines for EEG filtering, exploratory analysis, feature extraction, neural-pattern classification, and real-time control mapping.
                </p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-[rgba(255,255,255,0.04)]">
                  <div>
                    <p className="text-3xl font-bold text-[#f0f4f8] tracking-tight">80%</p>
                    <p className="text-sm text-[#5a6a7a] mt-1">Neural-pattern classification accuracy</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#f0f4f8] tracking-tight">Real-time</p>
                    <p className="text-sm text-[#5a6a7a] mt-1">EEG signal processing</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#f0f4f8] tracking-tight">OpenBCI</p>
                    <p className="text-sm text-[#5a6a7a] mt-1">Neural-signal acquisition</p>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {flagship.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm text-[#8899aa] bg-[#0a1120] border border-[rgba(255,255,255,0.04)] rounded">
                      {tech}
                    </span>
                  ))}
                  {flagship.technologies.length > 4 && (
                    <span className="px-3 py-1.5 text-sm text-[#5a6a7a]">
                      +{flagship.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  {flagship.github && (
                    <a 
                      href={flagship.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#f0f4f8] bg-[#0a1120] border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[#3b82f6]/50 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  <a 
                    href="#contact"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#3b82f6] hover:text-[#60a5fd] transition-colors"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Secondary Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {secondary.map((project, idx) => (
            <div key={project.id} className="bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.1)] transition-all group">
              {/* Project Visual */}
              <div className="aspect-video">
                {idx === 0 ? <DocumentProcessing /> : <ComputerVision />}
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <p className="font-mono text-xs text-[#3b82f6]/70 tracking-widest uppercase mb-2">
                    {project.missionId}
                  </p>
                  <h3 className="text-lg font-semibold text-[#f0f4f8] group-hover:text-[#3b82f6] transition-colors">
                    {idx === 0 ? 'Tesseract: Making Legal Documents Easier to Understand' : 'Legolas: AI-Powered Road-Condition Intelligence'}
                  </h3>
                </div>
                
                <p className="text-[#8899aa] text-sm leading-relaxed">
                  {idx === 0 
                    ? 'An end-to-end legal-document intelligence platform that extracts text using OCR, generates context-aware summaries using transformer models, and translates results into regional languages.'
                    : 'A computer-vision and edge-computing system that detects potholes, attaches geospatial context, and supports real-time road-condition monitoring through analytical dashboards.'}
                </p>
                
                {/* Key Metrics */}
                <div className="flex flex-wrap gap-3 py-3 border-y border-[rgba(255,255,255,0.04)]">
                  {idx === 0 ? (
                    <>
                      <span className="text-xs font-mono text-[#3b82f6]">BERT</span>
                      <span className="text-xs font-mono text-[#5a6a7a]">OCR</span>
                      <span className="text-xs font-mono text-[#5a6a7a]">Translation</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs font-mono text-emerald-400">95% mAP</span>
                      <span className="text-xs font-mono text-[#3b82f6]">YOLO</span>
                      <span className="text-xs font-mono text-[#5a6a7a]">Edge + IoT</span>
                    </>
                  )}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs text-[#5a6a7a] bg-[#060c18] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#5a6a7a] hover:text-[#3b82f6] transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#5a6a7a] hover:text-[#3b82f6] transition-colors">
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
          <div key={project.id} className="flex items-center justify-between p-6 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all group">
            <div className="flex items-center gap-6">
              <div className="bg-[#060c18] border border-[rgba(255,255,255,0.04)] rounded-lg w-16 h-16 flex items-center justify-center">
                <span className="font-mono text-xs text-[#3b82f6]/50">3D</span>
              </div>
              <div>
                <p className="font-mono text-xs text-[#5a6a7a] mb-1">{project.missionId}</p>
                <h3 className="text-base font-semibold text-[#f0f4f8] group-hover:text-[#3b82f6] transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#5a6a7a] hover:text-[#3b82f6] transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#5a6a7a] hover:text-[#3b82f6] transition-colors">
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
