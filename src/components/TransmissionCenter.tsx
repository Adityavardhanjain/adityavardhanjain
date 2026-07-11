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
    <section id="contact" className="py-[var(--section-spacing)] relative">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.3)] to-transparent" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[rgba(59,130,246,0.04)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">07 / TRANSMISSION</span>
          <div className="section-label-line" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header & Contact Links */}
          <div>
            <h2 className="text-section-heading font-bold text-[#f0f4f8] mb-4">
              Let&apos;s build something worth exploring.
            </h2>
            <p className="text-[#8899aa] text-body leading-relaxed mb-10 max-w-lg">
              Open to conversations around AI research, data systems, intelligent agents, computer vision, and ambitious technical projects.
            </p>
            
            {/* Contact Links */}
            <div className="space-y-4">
              <a 
                href={siteConfig.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group"
              >
                <GithubIcon className="w-6 h-6 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors" />
                <div>
                  <p className="text-[#f0f4f8] font-medium">GitHub</p>
                  <p className="text-sm text-[#5a6a7a]">View my repositories</p>
                </div>
              </a>
              
              <a 
                href={siteConfig.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group"
              >
                <LinkedinIcon className="w-6 h-6 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors" />
                <div>
                  <p className="text-[#f0f4f8] font-medium">LinkedIn</p>
                  <p className="text-sm text-[#5a6a7a]">Connect with me</p>
                </div>
              </a>
              
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-5 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group"
              >
                <MailIcon className="w-6 h-6 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors" />
                <div>
                  <p className="text-[#f0f4f8] font-medium">Email</p>
                  <p className="text-sm text-[#5a6a7a]">{siteConfig.email}</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#8899aa] mb-2">Identification</label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl text-[#f0f4f8] placeholder-[#5a6a7a] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#8899aa] mb-2">Return Signal</label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl text-[#f0f4f8] placeholder-[#5a6a7a] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#8899aa] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl text-[#f0f4f8] placeholder-[#5a6a7a] focus:border-[#3b82f6] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, idea, or how I can help..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#3b82f6] text-[#030810] rounded-xl font-semibold hover:bg-[#60a5fd] transition-all flex items-center justify-center gap-2"
              >
                {submitted ? 'Message Sent!' : 'Transmit Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
