'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/SocialIcons';
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
      {/* Hairline accent rail - replaces gradient blobs */}
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#00D4FF]/30 via-[#00D4FF]/10 to-transparent" aria-hidden="true" />
      
      <div className="container-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-w-0">
          {/* Left - Header & Contact Links */}
          <div className="min-w-0">
            {/* Availability badge - pulsing green dot per spec */}
            <div className="inline-flex items-center gap-2.5 rounded-sm border border-[rgba(52,211,153,0.25)] bg-[rgba(52,211,153,0.06)] px-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34d399]"></span>
              </span>
              <span className="text-xs font-medium text-[#34d399] tracking-wide">Available for collaborations</span>
            </div>

            <p className="section-eyebrow mb-3">{contact.sectionLabel}</p>
            <h2 className="text-section-title font-bold text-[#f0f4f8] mb-5">
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
                className="flex items-center gap-4 p-4 bg-[#10121f] border border-[rgba(255,255,255,0.05)] transition-colors group min-w-0 card"
              >
                <GithubIcon className="w-5 h-5 text-[#8899aa] group-hover:text-[#00D4FF] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium">GitHub</p>
                  <p className="text-sm text-[#5a6a7a]">View my repositories</p>
                </div>
              </a>
              
              <a 
                href={contact.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#10121f] border border-[rgba(255,255,255,0.05)] transition-colors group min-w-0 card"
              >
                <LinkedinIcon className="w-5 h-5 text-[#8899aa] group-hover:text-[#00D4FF] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium">LinkedIn</p>
                  <p className="text-sm text-[#5a6a7a]">Connect with me</p>
                </div>
              </a>
              
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-4 bg-[#10121f] border border-[rgba(255,255,255,0.05)] transition-colors group min-w-0 card"
              >
                <MailIcon className="w-5 h-5 text-[#8899aa] group-hover:text-[#00D4FF] transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#f0f4f8] font-medium">Email</p>
                  <p className="text-sm text-[#5a6a7a]">{contact.email}</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right - Contact Form - per spec: not taller than necessary */}
          <div className="min-w-0">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#8899aa] mb-2">Name</label>
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
                <label htmlFor="email" className="block font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#8899aa] mb-2">Email</label>
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
                <label htmlFor="message" className="block font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#8899aa] mb-2">Message</label>
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
