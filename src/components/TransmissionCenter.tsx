'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/SocialIcons';
import { siteConfig, safeString } from '@/lib/data';

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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  return (
    <section id="contact" className="py-[var(--section-spacing)] relative">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.3)] to-transparent" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[rgba(59,130,246,0.04)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">07 / TRANSMISSION</span>
          <div className="section-label-line" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 min-w-0">
          {/* Left - Header & Contact Links */}
          <div className="min-w-0">
            <h2 className="text-section-heading font-bold text-[#f0f4f8] mb-4 text-wrap">
              Let&apos;s build something worth exploring.
            </h2>
            <p className="text-[#8899aa] text-body leading-relaxed mb-8 sm:mb-10 max-w-lg text-wrap">
              Open to conversations around AI research, data systems, intelligent agents, computer vision, and ambitious technical projects.
            </p>
            
            {/* Contact Links */}
            <div className="space-y-3 sm:space-y-4">
              <a 
                href={siteConfig.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 sm:p-5 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group min-w-0"
              >
                <GithubIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium text-wrap">GitHub</p>
                  <p className="text-sm text-[#5a6a7a] text-wrap">View my repositories</p>
                </div>
              </a>
              
              <a 
                href={siteConfig.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 sm:p-5 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group min-w-0"
              >
                <LinkedinIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium text-wrap">LinkedIn</p>
                  <p className="text-sm text-[#5a6a7a] text-wrap">Connect with me</p>
                </div>
              </a>
              
              <a 
                href={`mailto:${safeString(siteConfig.email, 'contact@example.com')}`}
                className="flex items-center gap-4 p-4 sm:p-5 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group min-w-0"
              >
                <MailIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium text-wrap">Email</p>
                  <p className="text-sm text-[#5a6a7a] text-wrap">{safeString(siteConfig.email, 'contact@example.com')}</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right - Contact Form */}
          <div className="min-w-0">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#8899aa] mb-2">Identification</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#8899aa] mb-2">Return Signal</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#8899aa] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  className="textarea"
                  placeholder="Tell me about your project, idea, or how I can help..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={submitted}
              >
                {submitted ? 'Message Sent!' : 'Transmit Message'}
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
