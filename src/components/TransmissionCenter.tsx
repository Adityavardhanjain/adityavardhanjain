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
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-16 bg-[#0d1421]">
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-sm text-[#94a3b8] mb-4">Contact</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#f0f4f8]">
          Get in Touch
        </h2>
        <p className="text-[#94a3b8] mb-10">
          Interested in AI research or collaboration? Let&apos;s connect.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="p-5 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl text-center hover:border-[rgba(96,165,250,0.3)] transition-all">
            <GithubIcon className="w-6 h-6 mx-auto mb-3 text-[#94a3b8]" />
            <p className="text-sm text-[#f0f4f8]">GitHub</p>
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl text-center hover:border-[rgba(96,165,250,0.3)] transition-all">
            <LinkedinIcon className="w-6 h-6 mx-auto mb-3 text-[#94a3b8]" />
            <p className="text-sm text-[#f0f4f8]">LinkedIn</p>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="p-5 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl text-center hover:border-[rgba(96,165,250,0.3)] transition-all">
            <MailIcon className="w-6 h-6 mx-auto mb-3 text-[#94a3b8]" />
            <p className="text-sm text-[#f0f4f8]">Email</p>
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-5 py-4 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl text-[#f0f4f8] placeholder-[#64748b] focus:border-[#60a5fa] focus:outline-none transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-5 py-4 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl text-[#f0f4f8] placeholder-[#64748b] focus:border-[#60a5fa] focus:outline-none transition-colors"
            required
          />
          <textarea
            placeholder="Message"
            rows={5}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full px-5 py-4 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl text-[#f0f4f8] placeholder-[#64748b] focus:border-[#60a5fa] focus:outline-none transition-colors resize-none"
            required
          />
          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#60a5fa] text-[#07090f] rounded-xl font-semibold hover:bg-[#93c5fd] transition-colors flex items-center justify-center gap-2"
          >
            {submitted ? 'Sent!' : 'Send Message'}
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
