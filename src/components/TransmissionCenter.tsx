'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Radio } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DownloadIcon, MailIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function TransmissionCenter() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setError('All fields are required');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  return (
    <section id="contact" className="relative py-24 px-6 bg-[#030810]/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-500/60 font-mono text-xs tracking-widest">TRANSMISSION CENTER</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">
            Open a Communication Channel
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Interested in AI research, intelligent systems, data-driven products, interdisciplinary engineering, or ambitious ideas? I am always open to meaningful conversations and collaboration opportunities.
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent max-w-xs mx-auto" />
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 bg-[#0a1628]/50 border border-cyan-500/10 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-cyan-500/60 font-mono text-xs">DIRECT CHANNELS</span>
              </div>
              
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/30 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <MailIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">EMAIL</p>
                    <p className="text-sm text-slate-200">{siteConfig.email}</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/30 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">LINKEDIN</p>
                    <p className="text-sm text-slate-200">Connect professionally</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/30 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <GithubIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">GITHUB</p>
                    <p className="text-sm text-slate-200">View source code</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/30 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <DownloadIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">RÉSUMÉ</p>
                    <p className="text-sm text-slate-200">Download CV</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-6 bg-[#0a1628]/50 border border-cyan-500/10 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <Send className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-500/60 font-mono text-xs">SEND TRANSMISSION</span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-2">
                    IDENTIFIER
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-2">
                    SIGNAL FREQUENCY
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-2">
                    TRANSMISSION CONTENT
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    Transmission sent successfully!
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full relative px-6 py-3 font-mono text-sm tracking-wider overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: submitted ? 1 : 1.01 }}
                  whileTap={{ scale: submitted ? 1 : 0.99 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0.5 bg-[#030810] rounded" />
                  <span className="relative flex items-center justify-center gap-2 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        SEND TRANSMISSION
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
