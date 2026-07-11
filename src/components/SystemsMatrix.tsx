'use client';

import { skills } from '@/lib/data';

// Central core node data
const coreNode = {
  label: 'AJ Core',
  subtitle: 'Intelligent Systems'
};

// Satellite nodes for capability groups
const satelliteNodes = [
  { id: 'ai', label: 'AI & Intelligent Systems', angle: 0 },
  { id: 'data', label: 'Data & Analytics', angle: 90 },
  { id: 'research', label: 'Research & Signal', angle: 180 },
  { id: 'infra', label: 'Infrastructure & Eng', angle: 270 },
];

function SystemsArchitecture() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      {/* Connection lines from center to satellites */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {satelliteNodes.map((node, i) => {
          const angle = (node.angle - 90) * (Math.PI / 180);
          const x2 = 50 + 35 * Math.cos(angle);
          const y2 = 50 + 35 * Math.sin(angle);
          return (
            <line
              key={node.id}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
      
      {/* Central core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#0a1120] to-[#0d1828] border border-[rgba(59,130,246,0.3)] flex items-center justify-center shadow-lg shadow-[rgba(59,130,246,0.1)]">
        <span className="font-mono text-xs font-bold text-[#f0f4f8] tracking-tight">AJ<br/>CORE</span>
      </div>
      
      {/* Satellite nodes */}
      {satelliteNodes.map((node) => {
        const angle = (node.angle - 90) * (Math.PI / 180);
        const x = 50 + 35 * Math.cos(angle);
        const y = 50 + 35 * Math.sin(angle);
        
        return (
          <div
            key={node.id}
            className="absolute w-16 h-16 rounded-full bg-[#0a1120] border border-[rgba(255,255,255,0.06)] flex items-center justify-center"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <span className="font-mono text-[8px] text-[#8899aa] text-center leading-tight px-1">
              {node.label.split(' ').map((word, i) => (
                <span key={i}>{word}<br/></span>
              ))}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function SystemsMatrix() {
  // Consolidate into 4 major capability groups
  const capabilityGroups = [
    {
      id: 'ai-intelligent-systems',
      title: 'AI & Intelligent Systems',
      technologies: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Computer Vision', 'NLP', 'PyTorch', 'TensorFlow'],
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      technologies: ['Python', 'SQL', 'Data Analysis', 'Visualization', 'Power BI', 'BigQuery', 'Pandas'],
    },
    {
      id: 'research-signal',
      title: 'Research & Signal Processing',
      technologies: ['EEG Analysis', 'BCI', 'Signal Processing', 'OpenBCI', 'FFT'],
    },
    {
      id: 'infrastructure-engineering',
      title: 'Infrastructure & Engineering',
      technologies: ['Git', 'Docker', 'Kubernetes', 'Linux', 'AWS', 'CI/CD', 'Flask'],
    }
  ];

  return (
    <section id="skills" className="py-[var(--section-spacing)] relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">04 / Systems</span>
          <div className="section-label-line" />
        </div>
        
        <div className="mb-12">
          <h2 className="text-section-heading font-bold text-[#f0f4f8]">Technical Skills</h2>
          <p className="text-[#8899aa] text-body mt-4 max-w-2xl">
            A comprehensive toolkit spanning artificial intelligence, data science, research methodologies, and software engineering.
          </p>
        </div>
        
        {/* Systems Architecture Visual */}
        <div className="mb-16 flex justify-center">
          <SystemsArchitecture />
        </div>
        
        {/* Four Capability Groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilityGroups.map((group) => (
            <div 
              key={group.id}
              className="p-6 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl"
            >
              <h3 className="text-base font-semibold text-[#f0f4f8] mb-4">{group.title}</h3>
              
              {/* Technology tags */}
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 text-sm text-[#8899aa] bg-[#060c18] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Technologies */}
        <div className="mt-12 pt-10 border-t border-[rgba(255,255,255,0.04)]">
          <h3 className="font-mono text-[10px] text-[#5a6a7a] tracking-widest uppercase mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.flatMap(cat => cat.skills)
              .filter(skill => !capabilityGroups.some(group => group.technologies.includes(skill)))
              .map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 text-sm text-[#5a6a7a]"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
