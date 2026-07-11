'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
    
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
    <section id="contact" className="py-20 px-6 bg-[#13161d]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-sm text-gray-500 mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400">
            Interested in AI research, intelligent systems, or ambitious ideas? 
            I&apos;m always open to meaningful conversations and collaboration opportunities.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-4 bg-[#151921] border border-white/5 rounded-xl hover:border-white/10 transition-colors group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <MailIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm text-gray-200 group-hover:text-blue-400 transition-colors">{siteConfig.email}</p>
              </div>
            </a>
            
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#151921] border border-white/5 rounded-xl hover:border-white/10 transition-colors group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="text-sm text-gray-200 group-hover:text-blue-400 transition-colors">Connect professionally</p>
              </div>
            </a>
            
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#151921] border border-white/5 rounded-xl hover:border-white/10 transition-colors group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GithubIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="text-sm text-gray-200 group-hover:text-blue-400 transition-colors">View source code</p>
              </div>
            </a>
            
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#151921] border border-white/5 rounded-xl hover:border-white/10 transition-colors group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <DownloadIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Resume</p>
                <p className="text-sm text-gray-200 group-hover:text-blue-400 transition-colors">Download CV</p>
              </div>
            </a>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#151921] border border-white/5 rounded-xl text-gray-200 placeholder-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#151921] border border-white/5 rounded-xl text-gray-200 placeholder-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#151921] border border-white/5 rounded-xl text-gray-200 placeholder-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              {submitted && (
                <div className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm">
                  <CheckCircle className="w-5 h-5" />
                  Message sent successfully!
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
