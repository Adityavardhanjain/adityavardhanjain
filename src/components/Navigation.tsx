'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/lib/data';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  
  // Handle scroll
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
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);
  
  const handleNavClick = useCallback((id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);
  
  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#030810]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.04)]' 
            : ''
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-content">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <button
              ref={menuButtonRef}
              onClick={() => handleNavClick('home')}
              className="group relative text-xl sm:text-2xl font-bold tracking-tight text-[#f0f4f8] hover:text-[#3b82f6] transition-colors duration-300 no-select"
              aria-label="Go to home"
            >
              AJ
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#3b82f6] transition-all duration-300 group-hover:w-full" />
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs xl:text-sm font-medium tracking-wide transition-colors duration-300 py-2 min-h-[44px] ${
                    activeSection === item.id 
                      ? 'text-[#f0f4f8]' 
                      : 'text-[#8899aa] hover:text-[#f0f4f8]'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.shortLabel}
                  {activeSection === item.id && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#3b82f6] rounded-full" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 text-[#8899aa] hover:text-[#f0f4f8] transition-colors rounded-lg hover:bg-[#0a1120] touch-target"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 lg:hidden bg-[#030810] transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ paddingTop: '64px' }}
      >
        <nav 
          className="container-content py-6 overflow-y-auto"
          style={{ height: 'calc(100vh - 64px)' }}
        >
          <ul className="space-y-2" role="list">
            {navigationItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full text-left px-4 py-4 min-h-[56px] text-base font-medium transition-all duration-200 rounded-xl border ${
                    activeSection === item.id
                      ? 'text-[#f0f4f8] bg-[#0a1120] border-[rgba(59,130,246,0.3)]'
                      : 'text-[#8899aa] bg-[#060c18] border-[rgba(255,255,255,0.04)] hover:text-[#f0f4f8] hover:bg-[#0a1120] hover:border-[rgba(255,255,255,0.08)]'
                  }`}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  <span 
                    className={`w-6 h-6 flex items-center justify-center rounded text-xs font-mono mr-3 flex-shrink-0 ${
                      activeSection === item.id 
                        ? 'text-[#3b82f6] bg-[#3b82f6]/10' 
                        : 'text-[#5a6a7a]'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-wrap">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
          
          {/* Close hint */}
          <p className="mt-6 text-center text-xs text-[#5a6a7a]">
            Press <kbd className="px-1.5 py-0.5 bg-[#0a1120] rounded text-[#8899aa]">ESC</kbd> or tap the logo to close
          </p>
        </nav>
      </div>
    </>
  );
}
