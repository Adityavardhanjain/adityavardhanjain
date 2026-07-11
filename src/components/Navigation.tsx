'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/lib/data';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['home', 'about', 'projects', 'research', 'skills', 'experience', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#030810]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.04)]' : ''
        }`}
      >
        <div className="container-content">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group relative text-2xl font-bold tracking-tight text-[#f0f4f8] hover:text-[#3b82f6] transition-colors duration-300"
            >
              AJ
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#3b82f6] transition-all duration-300 group-hover:w-full" />
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-2 ${
                    activeSection === item.id 
                      ? 'text-[#f0f4f8]' 
                      : 'text-[#8899aa] hover:text-[#f0f4f8]'
                  }`}
                >
                  {item.shortLabel}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#3b82f6] rounded-full" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#8899aa] hover:text-[#f0f4f8] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden pt-20 bg-[#030810]">
          <div className="container-content py-8 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-6 py-4 text-base font-medium transition-colors rounded-lg border ${
                  activeSection === item.id
                    ? 'text-[#f0f4f8] bg-[#0a1120] border-[#3b82f6]/30'
                    : 'text-[#8899aa] bg-[#060c18] border-[rgba(255,255,255,0.04)] hover:text-[#f0f4f8]'
                }`}
              >
                <span className="text-xs text-[#3b82f6] mr-3">{navigationItems.indexOf(item) + 1}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
