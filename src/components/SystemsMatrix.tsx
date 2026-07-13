'use client';

// Capability groups data - per spec
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

// AJ Core visual - optional, large enough per spec
function AJCoreVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <svg viewBox="0 0 100 100" className="w-full aspect-square">
        {/* Outer ring */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" />
        
        {/* Connection lines */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle - 90) * (Math.PI / 180);
          const x = 50 + 35 * Math.cos(rad);
          const y = 50 + 35 * Math.sin(rad);
          return (
            <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="rgba(59,130,246,0.15)" strokeWidth="0.3" />
          );
        })}
        
        {/* Center node */}
        <circle cx="50" cy="50" r="12" fill="#0a1120" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
        <text x="50" y="48" textAnchor="middle" fontSize="8" fill="#f0f4f8" fontWeight="bold" fontFamily="monospace">AJ</text>
        <text x="50" y="56" textAnchor="middle" fontSize="4" fill="#8899aa" fontFamily="monospace">CORE</text>
        
        {/* Satellite nodes */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle - 90) * (Math.PI / 180);
          const x = 50 + 35 * Math.cos(rad);
          const y = 50 + 35 * Math.sin(rad);
          const labels = ['DATA', 'AI/ML', 'ENG', 'RESEARCH', 'DEPLOY'];
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="5" fill="#0a1120" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <text x={x} y={y + 1} textAnchor="middle" fontSize="3" fill="#8899aa" fontFamily="monospace">{labels[i]}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function SystemsMatrix() {
  return (
    <section id="skills" className="section relative">
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
        
        <div className="mb-12">
          <h2 className="text-section-title font-bold text-[#f0f4f8] mb-4">Technical Skills</h2>
          <p className="text-body text-[#8899aa] max-w-2xl">
            A comprehensive toolkit spanning data intelligence, machine learning, data engineering, research, and deployment.
          </p>
        </div>
        
        {/* AJ Core Visual - optional, large enough */}
        <AJCoreVisual />
        
        {/* Five Capability Groups - per spec: responsive card grid, 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
          {capabilityGroups.map((group) => (
            <div key={group.id} className="card">
              <h3 className="text-card-title font-semibold text-[#f0f4f8] mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs text-[#8899aa] bg-[#060c18] rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Full Systems Inventory - Expandable */}
        <details className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.04)]">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-2">
              <h3 className="font-mono text-xs text-[#5a6a7a] tracking-widest uppercase mb-0 hover:text-[#8899aa] transition-colors">
                VIEW FULL SYSTEMS INVENTORY
              </h3>
              <span className="text-[#5a6a7a]">
                <svg className="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </summary>
          <div className="flex flex-wrap gap-2 pt-6">
            {secondaryTechnologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs text-[#5a6a7a] bg-[#0a1120] rounded">
                {tech}
              </span>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
