'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';
import content from '@/lib/content';

export default function TransmissionCenter() {
  const { contact } = content;
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
    <section id="contact" className="section relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[rgba(59,130,246,0.04)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">{contact.sectionLabel}</span>
          <div className="section-label-line" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-w-0">
          {/* Left - Header & Contact Links */}
          <div className="min-w-0">
            <h2 className="text-section-title font-bold text-[#f0f4f8] mb-4">
              {contact.title}
            </h2>
            <p className="text-body text-[#8899aa] leading-relaxed mb-8 max-w-lg">
              {contact.subtitle}
            </p>
            
            {/* Contact Links */}
            <div className="space-y-3">
              <a 
                href={contact.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group min-w-0"
              >
                <GithubIcon className="w-5 h-5 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium">GitHub</p>
                  <p className="text-sm text-[#5a6a7a]">View my repositories</p>
                </div>
              </a>
              
              <a 
                href={contact.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group min-w-0"
              >
                <LinkedinIcon className="w-5 h-5 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium">LinkedIn</p>
                  <p className="text-sm text-[#5a6a7a]">Connect with me</p>
                </div>
              </a>
              
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-4 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#3b82f6]/30 transition-all group min-w-0"
              >
                <MailIcon className="w-5 h-5 text-[#8899aa] group-hover:text-[#3b82f6] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium">Email</p>
                  <p className="text-sm text-[#5a6a7a]">{contact.email}</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right - Contact Form - per spec: not taller than necessary */}
          <div className="min-w-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#8899aa] mb-2">Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-[#8899aa] mb-2">Email</label>
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
                  rows={5}
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
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
