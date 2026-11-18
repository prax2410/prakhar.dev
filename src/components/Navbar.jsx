import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { useBengaluruTime } from '../hooks/useBengaluruTime';
import Tooltip from './Tooltip';

const NAV_LINKS = [
  { id: 'about', name: 'Overview', href: '#about' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'architecture', name: 'Architecture', href: '#architecture' },
  { id: 'experience', name: 'Experience', href: '#experience' },
  { id: 'skills', name: 'Skills', href: '#skills' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme, isExplicit, resetToSystem } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const bengaluruTime = useBengaluruTime();

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);

    const updateActiveOnScroll = () => {
      const scrollY = window.scrollY;
      const offset = 80;

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - offset <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', updateActiveOnScroll, { passive: true });
    updateActiveOnScroll();
    return () => window.removeEventListener('scroll', updateActiveOnScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Global Apple Slim Top Bar (44px) */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[44px] bg-white/80 dark:bg-[#161617]/80 backdrop-blur-md border-b border-[#d2d2d7]/50 dark:border-[#2d2d2f]/80 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Minimalist Logo / Name + Live Bengaluru Time */}
          <div className="flex items-center gap-2.5">
            <a
              href="#about"
              className="text-[13px] sm:text-[14px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] hover:opacity-75 transition-opacity"
              aria-label="Prakhar — Senior Full Stack Engineer"
            >
              Prakhar
            </a>
            {bengaluruTime && (
              <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f5f5f7] dark:bg-[#202022] text-[10px] font-mono text-[#86868b] border border-[#e5e7eb] dark:border-[#2d2d2f]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] animate-pulse" />
                {bengaluruTime} IST
              </span>
            )}
          </div>

          {/* Desktop Nav Items (12px SF Pro Text) */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`text-[12px] transition-colors ${
                    isActive
                      ? 'text-[#0071e3] dark:text-[#2997ff] font-medium'
                      : 'text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80 hover:text-[#0071e3] dark:hover:text-[#2997ff]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-3">
            {/* Apple Mode Switch Button */}
            <Tooltip
              text={
                isDark
                  ? isExplicit
                    ? 'Switch to light mode'
                    : 'System Dark (Click for light)'
                  : isExplicit
                  ? 'Switch to dark mode'
                  : 'System Light (Click for dark)'
              }
              position="bottom"
            >
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-1.5 rounded-full hover:bg-[#f5f5f7] dark:hover:bg-[#202022] text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-[#ffbd2e]" /> : <Moon className="w-3.5 h-3.5 text-[#1d1d1f]" />}
              </button>
            </Tooltip>

            {/* Apple Pill Button CTA */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Prakhar_CV_2026.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-[12px] font-normal rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white transition-colors"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-1 rounded-md text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Frosted Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[44px] bottom-0 z-40 bg-white/95 dark:bg-[#161617]/95 backdrop-blur-xl border-b border-[#e5e7eb] dark:border-[#2d2d2f] p-6 flex flex-col justify-between overflow-y-auto">
          <nav aria-label="Mobile navigation" className="space-y-4 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-[17px] font-medium tracking-tight py-1 transition-colors ${
                    isActive
                      ? 'text-[#0071e3] dark:text-[#2997ff]'
                      : 'text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#e5e7eb] dark:border-[#2d2d2f] space-y-4">
            {/* Appearance switch in mobile drawer */}
            <div className="flex items-center justify-between py-1">
              <div>
                <div className="text-[14px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">Appearance</div>
                <div className="text-[11px] text-[#86868b]">
                  {isExplicit ? (isDark ? 'Dark Mode (Manual)' : 'Light Mode (Manual)') : 'Following System UI Preference'}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f5f5f7] dark:bg-[#2d2d2f] text-[12px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#e5e7eb] dark:border-[#333336]"
                >
                  {isDark ? <Sun className="w-3.5 h-3.5 text-[#ffbd2e]" /> : <Moon className="w-3.5 h-3.5 text-[#0071e3]" />}
                  <span>{isDark ? 'Dark' : 'Light'}</span>
                </button>
                {isExplicit && (
                  <button
                    type="button"
                    onClick={resetToSystem}
                    className="text-[11px] text-[#0066cc] dark:text-[#2997ff] hover:underline"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Prakhar_CV_2026.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white text-[15px] font-normal transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 text-[13px] text-[#86868b]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0071e3] flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span>·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0071e3] flex items-center gap-1"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span>·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-[#0071e3] flex items-center gap-1"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}