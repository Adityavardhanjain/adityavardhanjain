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
    <section id="contact" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-[#666666] mb-4">Contact</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Get in Touch
        </h2>
        <p className="text-[#a0a0a0] mb-8">
          Interested in AI research or collaboration? Let&apos;s connect.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="p-4 border border-[rgba(255,255,255,0.08)] rounded-lg text-center hover:border-[rgba(255,255,255,0.15)] transition-colors">
            <GithubIcon className="w-5 h-5 mx-auto mb-2 text-[#a0a0a0]" />
            <p className="text-sm">GitHub</p>
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 border border-[rgba(255,255,255,0.08)] rounded-lg text-center hover:border-[rgba(255,255,255,0.15)] transition-colors">
            <LinkedinIcon className="w-5 h-5 mx-auto mb-2 text-[#a0a0a0]" />
            <p className="text-sm">LinkedIn</p>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="p-4 border border-[rgba(255,255,255,0.08)] rounded-lg text-center hover:border-[rgba(255,255,255,0.15)] transition-colors">
            <MailIcon className="w-5 h-5 mx-auto mb-2 text-[#a0a0a0]" />
            <p className="text-sm">Email</p>
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#666666] focus:border-[#3b82f6] focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#666666] focus:border-[#3b82f6] focus:outline-none"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#666666] focus:border-[#3b82f6] focus:outline-none resize-none"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-medium hover:bg-[#2563eb] transition-colors flex items-center justify-center gap-2"
          >
            {submitted ? 'Sent!' : 'Send Message'}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
