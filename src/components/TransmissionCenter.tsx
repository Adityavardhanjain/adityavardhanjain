'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function TransmissionCenter() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-[var(--section-spacing)]">
      <div className="container-content">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-[#3b82f6] tracking-widest uppercase">06</span>
          <div className="h-px bg-[rgba(255,255,255,0.06)] flex-1 max-w-xs"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header & Contact Links */}
          <div>
            <h2 className="text-section-heading font-bold text-[#f0f4f8] mb-4">
              Get in Touch
            </h2>
            <p className="text-[#94a3b8] text-body leading-relaxed mb-8 max-w-lg">
              Interested in AI research, collaboration opportunities, or just want to connect? 
              I am always open to discussing new projects, innovative ideas, or potential partnerships.
            </p>
            
            {/* Contact Links */}
            <div className="space-y-4">
              <a 
                href={siteConfig.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[#3b82f6]/30 transition-all group"
              >
                <GithubIcon className="w-6 h-6 text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors" />
                <div>
                  <p className="text-[#f0f4f8] font-medium">GitHub</p>
                  <p className="text-sm text-[#64748b]">View my repositories</p>
                </div>
              </a>
              
              <a 
                href={siteConfig.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[#3b82f6]/30 transition-all group"
              >
                <LinkedinIcon className="w-6 h-6 text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors" />
                <div>
                  <p className="text-[#f0f4f8] font-medium">LinkedIn</p>
                  <p className="text-sm text-[#64748b]">Connect with me</p>
                </div>
              </a>
              
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-5 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[#3b82f6]/30 transition-all group"
              >
                <MailIcon className="w-6 h-6 text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors" />
                <div>
                  <p className="text-[#f0f4f8] font-medium">Email</p>
                  <p className="text-sm text-[#64748b]">{siteConfig.email}</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#94a3b8] mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl text-[#f0f4f8] placeholder-[#475569] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#94a3b8] mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl text-[#f0f4f8] placeholder-[#475569] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#94a3b8] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl text-[#f0f4f8] placeholder-[#475569] focus:border-[#3b82f6] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, idea, or how I can help..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#3b82f6] text-[#030810] rounded-xl font-semibold hover:bg-[#60a5fd] transition-all flex items-center justify-center gap-2"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
