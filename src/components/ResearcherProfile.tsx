'use client';

export default function ResearcherProfile() {
  return (
    <section id="about" className="section relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[150vw] h-[400px] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">01 / Mission Profile</span>
          <div className="section-label-line" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-w-0">
          {/* Left - Large Statement */}
          <div className="min-w-0">
            <h2 className="text-section-title font-bold text-[#f0f4f8] leading-tight text-wrap">
              Building intelligent systems where data, AI, and human cognition intersect.
            </h2>
          </div>
          
          {/* Right - Two concise paragraphs + Metrics */}
          <div className="space-y-6 min-w-0">
            <p className="text-body text-[#8899aa] leading-relaxed">
              I currently work as a Data Analytics Apprentice at Google, supporting large-customer sales through campaign analytics, automated reporting, performance optimization, and agentic AI systems.
            </p>
            <p className="text-body text-[#8899aa] leading-relaxed">
              My broader interests span world models, intelligent agents, multimodal reasoning, computational neuroscience, and space technology. I enjoy turning complex research ideas into systems that work beyond the prototype stage.
            </p>
            
            {/* Four compact metrics per spec */}
            <div className="grid grid-cols-2 gap-6 pt-8 mt-4 border-t border-[rgba(255,255,255,0.06)]">
              <div>
                <p className="text-3xl font-bold text-[#f0f4f8] tracking-tight">3+</p>
                <p className="text-sm text-[#5a6a7a] mt-1">Years Building</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#f0f4f8] tracking-tight">4</p>
                <p className="text-sm text-[#5a6a7a] mt-1">Major Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#f0f4f8] tracking-tight">2</p>
                <p className="text-sm text-[#5a6a7a] mt-1">Research Publications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#f0f4f8] tracking-tight">1</p>
                <p className="text-sm text-[#5a6a7a] mt-1">Hackathon Victory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
