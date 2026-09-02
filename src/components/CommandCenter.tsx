'use client';

import { siteConfig } from '@/lib/data';
import content from '@/lib/content';

export default function CommandCenter() {
  const { hero } = content;
  
  return (
    <section id="home" className="command-center min-h-[100svh] flex items-center relative overflow-hidden">
      {/* Subtle atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-gradient-radial from-[rgba(0,212,255,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content w-full relative z-10 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 min-w-0">
            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-[#8899aa] tracking-wide">{hero.statusText}</span>
            </div>
            
            {/* Name - Per spec: spans with display:block, white-space:nowrap for first name */}
            <h1 className="text-hero-name font-bold text-[#f0f4f8] leading-none">
              <span className="block text-nowrap">{siteConfig.name.split(' ')[0]}</span>
              <span className="block">{siteConfig.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            {/* Professional Identity */}
            <p className="text-hero-role text-[#c8d4e3] tracking-wide">
              {siteConfig.title}
            </p>
            
            {/* Biography - Single concise paragraph per spec */}
            <p className="text-body text-[#8899aa] max-w-xl leading-relaxed">
              {hero.biography}
            </p>
            
            {/* Three compact highlights per spec */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 py-2">
              {hero.highlights.map((highlight) => (
                <div key={highlight.id} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                  <span className="text-sm text-[#8899aa]">{highlight.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {hero.ctas.map((cta) => (
                cta.type === 'primary' ? (
                  <a key={cta.id} href={cta.href} className="btn btn-primary">
                    {cta.label}
                  </a>
                ) : cta.type === 'secondary' ? (
                  <a 
                    key={cta.id}
                    href={siteConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-quiet"
                  >
                    {cta.label}
                  </a>
                ) : (
                  <a 
                    key={cta.id}
                    href={cta.href} 
                    className="btn btn-text"
                  >
                    {cta.label}
                  </a>
                )
              ))}
            </div>

            {/* Keeping this in normal document flow prevents it from colliding with
                longer hero copy on short mobile screens. */}
            <div className="command-center__mobile-orbit lg:hidden" aria-hidden="true">
              <div className="command-center__orbit-shell">
                <div className="absolute inset-0 rounded-full border border-[rgba(0,212,255,0.10)] animate-orbital" style={{ animationDuration: '120s' }} />
                <div className="absolute inset-[20%] rounded-full border border-[rgba(168,85,247,0.10)] animate-orbital-reverse" style={{ animationDuration: '80s' }} />
                <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-[#1a1a2e] via-[#12141f] to-[#0B0D17] border border-[rgba(255,255,255,0.08)] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#f0f4f8] tracking-tight">AJ</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Orbital Planet Visual - fills remaining grid column */}
          <div className="hidden lg:flex items-center justify-center relative min-w-0">
            <div
              className="relative w-full aspect-square"
              style={{ maxWidth: 'min(100%, 420px)' }}
            >
              {/* Outermost atmospheric glow - higher presence per spec */}
              <div className="absolute inset-[-30%] rounded-full bg-gradient-radial from-[rgba(0,212,255,0.10)] via-[rgba(168,85,247,0.05)] to-transparent blur-xl" />

              {/* Outer orbital path - slow rotation */}
              <div className="absolute inset-0 rounded-full border border-[rgba(0,212,255,0.12)] animate-orbital" style={{ animationDuration: '120s' }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7ae9ff] shadow-lg shadow-[#00D4FF]/30" />
                </div>
              </div>

              {/* Second orbital path - reverse */}
              <div className="absolute inset-[14%] rounded-full border border-[rgba(168,85,247,0.10)] animate-orbital-reverse" style={{ animationDuration: '80s' }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-lg shadow-[#00D4FF]/20" />
                </div>
              </div>

              {/* Third orbital path */}
              <div className="absolute inset-[28%] rounded-full border border-[rgba(0,212,255,0.08)] animate-orbital" style={{ animationDuration: '50s' }}>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                </div>
              </div>

              {/* Fourth orbital path */}
              <div className="absolute inset-[42%] rounded-full border border-[rgba(168,85,247,0.08)] animate-orbital-reverse" style={{ animationDuration: '35s' }}>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1">
                  <div className="w-1 h-1 rounded-full bg-[#7ae9ff] shadow-[0_0_6px_rgba(0,212,255,0.9)]" />
                </div>
              </div>

              {/* Planet sphere - larger and cleaner per spec */}
              <div className="absolute inset-[48%] rounded-full bg-gradient-to-br from-[#1a1a2e] via-[#12141f] to-[#0B0D17] border border-[rgba(255,255,255,0.08)] shadow-2xl shadow-[rgba(0,212,255,0.15)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-[rgba(0,212,255,0.10)] to-transparent" />
                <div className="absolute inset-[12%] rounded-full border border-[rgba(0,212,255,0.12)]" />
                <div className="absolute inset-[24%] rounded-full border border-[rgba(168,85,247,0.10)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-[#f0f4f8] tracking-tight">AJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
