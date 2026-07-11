'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/lib/data';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled ? 'bg-[#07090f]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.05)]' : ''
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-xl font-semibold text-[#f0f4f8] hover:text-[#60a5fa] transition-colors"
            >
              AJ
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm text-[#64748b] hover:text-[#60a5fa] transition-colors"
                >
                  {item.shortLabel}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#64748b]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-16 bg-[#07090f]">
          <div className="p-6 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 text-sm text-[#94a3b8] hover:text-white bg-[#0d1421] border border-[rgba(255,255,255,0.08)] rounded-xl"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
