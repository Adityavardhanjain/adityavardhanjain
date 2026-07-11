'use client';

import { skills } from '@/lib/data';

export default function SystemsMatrix() {
  // Consolidate into 4 major capability groups
  const capabilityGroups = [
    {
      id: 'ai-intelligent-systems',
      title: 'AI & Intelligent Systems',
      icon: 'brain',
      technologies: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Computer Vision', 'Natural Language Processing', 'Transformers', 'LangChain', 'PyTorch', 'TensorFlow'],
      description: 'Building intelligent systems that learn, reason, and adapt.'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      icon: 'chart',
      technologies: ['Python', 'SQL', 'Data Analysis', 'Data Visualization', 'Statistics', 'Power BI', 'Tableau', 'BigQuery', 'Pandas', 'NumPy'],
      description: 'Transforming complex data into actionable insights.'
    },
    {
      id: 'research-signal',
      title: 'Research & Signal Processing',
      icon: 'signal',
      technologies: ['EEG Analysis', 'Brain-Computer Interfaces', 'Signal Processing', 'Feature Extraction', 'OpenBCI', 'BrainFlow', 'FFT'],
      description: 'Advancing understanding of neural and biological signals.'
    },
    {
      id: 'infrastructure-engineering',
      title: 'Infrastructure & Engineering',
      icon: 'server',
      technologies: ['Git', 'Docker', 'Kubernetes', 'Linux', 'AWS', 'GCP', 'CI/CD', 'Flask', 'React'],
      description: 'Deploying and scaling production systems reliably.'
    }
  ];

  return (
    <section id="skills" className="py-[var(--section-spacing)]">
      <div className="container-content">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-[#3b82f6] tracking-widest uppercase">04</span>
          <div className="h-px bg-[rgba(255,255,255,0.06)] flex-1 max-w-xs"></div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-section-heading font-bold text-[#f0f4f8]">Technical Skills</h2>
          <p className="text-[#94a3b8] text-body mt-4 max-w-2xl">
            A comprehensive toolkit spanning artificial intelligence, data science, research methodologies, and software engineering.
          </p>
        </div>
        
        {/* Four Capability Groups */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilityGroups.map((group) => (
            <div 
              key={group.id}
              className="p-8 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-2xl"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#f0f4f8] mb-2">{group.title}</h3>
                <p className="text-sm text-[#64748b]">{group.description}</p>
              </div>
              
              {/* Technology tags */}
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 text-sm text-[#94a3b8] bg-[#070b14] border border-[rgba(255,255,255,0.04)] rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Technologies */}
        <div className="mt-12 pt-12 border-t border-[rgba(255,255,255,0.06)]">
          <h3 className="text-sm font-medium text-[#64748b] mb-6 tracking-wider uppercase">Additional Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.flatMap(cat => cat.skills)
              .filter(skill => !capabilityGroups.some(group => group.technologies.includes(skill)))
              .map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 text-sm text-[#64748b] bg-[#0c1220] border border-[rgba(255,255,255,0.04)] rounded"
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
