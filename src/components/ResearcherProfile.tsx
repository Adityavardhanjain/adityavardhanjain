'use client';

export default function ResearcherProfile() {
  return (
    <section id="about" className="py-[var(--section-spacing)] relative">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.3)] to-transparent" />
      
      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[rgba(59,130,246,0.04)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">01 / Mission Profile</span>
          <div className="section-label-line" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Section Heading */}
          <div>
            <h2 className="text-section-heading font-bold text-[#f0f4f8] leading-tight">
              Building intelligent systems where data, AI, and human cognition intersect.
            </h2>
          </div>
          
          {/* Right - Bio Content */}
          <div className="space-y-6 text-[#8899aa] text-body">
            <p>
              I am a Data Analytics Apprentice at Google&apos;s gTech Ads CX team, where I support Large Customer Sales through campaign analytics, performance optimization, automated reporting, and agentic AI systems.
            </p>
            <p>
              My work spans advanced analytics, data engineering, machine learning, computer vision, generative AI, and brain-computer interfaces. I enjoy turning complex datasets into actionable insights—and transforming research ideas into systems that work beyond the prototype stage.
            </p>
            <p>
              My long-term interests include world models, intelligent agents, multimodal reasoning, computational neuroscience, and space technology.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 mt-10 border-t border-[rgba(255,255,255,0.04)]">
              <div>
                <p className="text-4xl font-bold text-[#f0f4f8] tracking-tight">3+</p>
                <p className="text-sm text-[#5a6a7a] mt-2">Years Building AI & Data Systems</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#f0f4f8] tracking-tight">2</p>
                <p className="text-sm text-[#5a6a7a] mt-2">Research Publications</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#f0f4f8] tracking-tight">4</p>
                <p className="text-sm text-[#5a6a7a] mt-2">Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
