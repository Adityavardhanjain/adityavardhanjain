'use client';

import { useState } from 'react';

// Satellite nodes for 5 capability groups
const satelliteNodes = [
  { id: 'data', label: 'Data & Decision Intelligence', angle: 0 },
  { id: 'ai', label: 'AI & Machine Learning', angle: 72 },
  { id: 'engineering', label: 'Data Engineering & Automation', angle: 144 },
  { id: 'research', label: 'Research & Intelligent Systems', angle: 216 },
  { id: 'deploy', label: 'Engineering & Deployment', angle: 288 },
];

// Capability groups data
const capabilityGroups = [
  {
    id: 'data-intelligence',
    title: 'Data & Decision Intelligence',
    technologies: ['SQL', 'BigQuery', 'Python', 'GA4', 'Statistical Modelling', 'Experimentation', 'Root-Cause Analysis', 'Data Visualization'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    technologies: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Agentic AI', 'Computer Vision', 'NLP', 'Model Evaluation', 'Feature Engineering'],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Automation',
    technologies: ['ETL', 'Data Pipelines', 'PySpark', 'Hadoop', 'n8n', 'Google Agentspace', 'Data Validation', 'Automated Reporting'],
  },
  {
    id: 'research-systems',
    title: 'Research & Intelligent Systems',
    technologies: ['EEG', 'Brain-Computer Interfaces', 'Signal Processing', 'World Models', 'Intelligent Agents', 'Multimodal Reasoning'],
  },
  {
    id: 'engineering-deployment',
    title: 'Engineering & Deployment',
    technologies: ['GCP', 'Docker', 'Flask', 'Streamlit', 'REST APIs', 'Git', 'Linux', 'CI/CD', 'MLOps'],
  }
];

// Secondary technologies
const secondaryTechnologies = [
  'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'BERT', 'MediaPipe', 'YOLO', 'Transformers', 'LangChain',
  'R', 'Power BI', 'Tableau', 'Pandas', 'NumPy', 'SQLGlot', 'Kubernetes', 'AWS', 'React',
  'ROS', 'Gazebo', 'Raspberry Pi', 'Arduino', 'Edge Computing', 'Computer Networking',
  'C', 'C++', 'Bash'
];

function SystemsArchitecture() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  return (
    <div className="relative w-full max-w-lg mx-auto hidden md:block" style={{ aspectRatio: '1' }}>
      {/* Connection lines from center to satellites */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {satelliteNodes.map((node) => {
          const angle = (node.angle - 90) * (Math.PI / 180);
          const x2 = 50 + 32 * Math.cos(angle);
          const y2 = 50 + 32 * Math.sin(angle);
          const isActive = activeNode === node.id;
          return (
            <line
              key={node.id}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              stroke={isActive ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.15)'}
              strokeWidth={isActive ? 0.8 : 0.5}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>
      
      {/* Central core */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#0a1120] to-[#0d1828] border border-[rgba(59,130,246,0.3)] flex items-center justify-center shadow-lg shadow-[rgba(59,130,246,0.1)]"
      >
        <span className="font-mono text-xs font-bold text-[#f0f4f8] tracking-tight text-center leading-none">
          AJ<br/>CORE
        </span>
      </div>
      
      {/* Satellite nodes */}
      {satelliteNodes.map((node) => {
        const angle = (node.angle - 90) * (Math.PI / 180);
        const x = 50 + 32 * Math.cos(angle);
        const y = 50 + 32 * Math.sin(angle);
        const isActive = activeNode === node.id;
        
        return (
          <div
            key={node.id}
            className={`absolute w-20 h-20 rounded-full bg-[#0a1120] border flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isActive ? 'border-[rgba(59,130,246,0.5)] shadow-lg shadow-[rgba(59,130,246,0.2)]' : 'border-[rgba(255,255,255,0.06)]'
            }`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <span className="font-mono text-[9px] text-[#8899aa] text-center leading-tight px-2 text-wrap">
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

// Mobile-capable skill list component
function SkillList() {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  
  return (
    <div className="md:hidden space-y-3">
      {capabilityGroups.map((group) => (
        <div 
          key={group.id}
          className="bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setExpandedGroup(expandedGroup === group.id ? null : group.id)}
            className="w-full flex items-center justify-between p-4 text-left"
            aria-expanded={expandedGroup === group.id}
          >
            <h3 className="text-sm font-semibold text-[#f0f4f8] text-wrap pr-4">{group.title}</h3>
            <span className={`text-[#5a6a7a] transition-transform ${expandedGroup === group.id ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {expandedGroup === group.id && (
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 text-sm text-[#8899aa] bg-[#060c18] rounded text-wrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SystemsMatrix() {
  return (
    <section id="skills" className="py-[var(--section-spacing)] relative">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.3)] to-transparent" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">04 / Systems</span>
          <div className="section-label-line" />
        </div>
        
        <div className="mb-8 sm:mb-12">
          <h2 className="text-section-heading font-bold text-[#f0f4f8] text-wrap">Technical Skills</h2>
          <p className="text-[#8899aa] text-body mt-4 max-w-2xl text-wrap">
            A comprehensive toolkit spanning data intelligence, machine learning, data engineering, research, and deployment.
          </p>
        </div>
        
        {/* Systems Architecture Visual - desktop only */}
        <div className="mb-12 sm:mb-16 flex justify-center">
          <SystemsArchitecture />
        </div>
        
        {/* Mobile Skill List - mobile only */}
        <div className="mb-12 sm:mb-16 md:hidden">
          <SkillList />
        </div>
        
        {/* Five Capability Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 min-w-0">
          {capabilityGroups.map((group) => (
            <div 
              key={group.id}
              className="p-4 sm:p-6 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl min-w-0"
            >
              <h3 className="text-base font-semibold text-[#f0f4f8] mb-4 text-wrap">{group.title}</h3>
              
              {/* Technology tags */}
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-[#8899aa] bg-[#060c18] rounded text-wrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Full Systems Inventory - Expandable */}
        <details className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[rgba(255,255,255,0.04)]">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-2">
              <h3 className="font-mono text-[10px] sm:text-xs text-[#5a6a7a] tracking-widest uppercase mb-0 hover:text-[#8899aa] transition-colors">
                VIEW FULL SYSTEMS INVENTORY
              </h3>
              <span className="text-[#5a6a7a]">
                <svg className="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </summary>
          <div className="flex flex-wrap gap-2 pt-4 sm:pt-6">
            {secondaryTechnologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-[#5a6a7a] bg-[#0a1120] rounded text-wrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
