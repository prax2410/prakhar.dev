import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import Tooltip from './Tooltip';

const NAV_LINKS = [
  { id: 'about', name: 'Overview', href: '#about' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'experience', name: 'Experience', href: '#experience' },
  { id: 'architecture', name: 'Architecture', href: '#architecture' },
  { id: 'skills', name: 'Skills', href: '#skills' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);

    const updateActiveOnScroll = () => {
      const scrollY = window.scrollY;
      const offset = window.innerWidth >= 1024 ? 140 : 180;

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

  const renderNavItems = (onNavigate) => (
    <nav aria-label="Primary navigation" className="space-y-1 text-sm">
      {NAV_LINKS.map((link, idx) => {
        const isActive = activeSection === link.id;
        return (
          <a
            key={link.id}
            href={link.href}
            onClick={onNavigate}
            aria-current={isActive ? 'location' : undefined}
            className={`group flex items-center justify-between px-3 py-2.5 rounded-lg border-l-2 transition-colors ${
              isActive
                ? 'border-blue-600 dark:border-blue-400 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800/50'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`text-xs font-mono ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                0{idx + 1}
              </span>
              <span>{link.name}</span>
            </div>
          </a>
        );
      })}
    </nav>
  );

  const renderSidebarFooter = (isMobile = false) => (
    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 text-xs">
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        download="Prakhar_CV_2026.pdf"
        onClick={isMobile ? () => setMobileMenuOpen(false) : undefined}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-sm"
      >
        <FileText className="w-3.5 h-3.5 shrink-0" />
        <span>Resume (PDF)</span>
      </a>

      <div className="grid grid-cols-4 gap-2">
        <Tooltip text="GitHub (@prax2410)" position="top">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-center"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        </Tooltip>

        <Tooltip text="LinkedIn" position="top">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-center"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </Tooltip>

        <Tooltip text="Email Me" position="top">
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Me"
            className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-center"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </Tooltip>

        <Tooltip text={isDark ? 'Light mode' : 'Dark mode'} position="top">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-center"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
          </button>
        </Tooltip>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Left Sidebar (lg+) */}
      <aside
        aria-label="Sidebar Navigation"
        className="hidden lg:flex lg:flex-col lg:justify-between fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0d1017]/95 backdrop-blur-md p-5 transition-colors"
      >
        <div className="flex flex-col flex-1 min-h-0 gap-5">
          <div className="pb-4 border-b border-slate-200 dark:border-slate-800 space-y-3 shrink-0">
            <a href="#about" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                P
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  Prakhar
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Senior Full Stack &amp; Backend
                </div>
              </div>
            </a>

            <div className="px-2.5 py-1.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 flex items-center gap-2 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0" />
              <span className="font-medium text-emerald-800 dark:text-emerald-300 truncate">
                {personalInfo.noticeStatus}
              </span>
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto pr-1">
            {renderNavItems()}
          </div>
        </div>

        {renderSidebarFooter(false)}
      </aside>

      {/* Mobile & Tablet Top Bar (<lg) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0d1017]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="px-4 sm:px-6 flex items-center justify-between h-14">
          <a href="#about" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-slate-900 dark:bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                Prakhar
              </span>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium leading-tight">
                {personalInfo.noticeStatus}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Prakhar_CV_2026.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation sidebar"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Slide-Over Drawer (<lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <aside
            aria-label="Mobile navigation sidebar"
            className="relative z-10 w-72 max-w-[85vw] h-full bg-white dark:bg-[#0d1017] border-r border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between overflow-y-auto shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-slate-900 dark:bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    P
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Prakhar
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation sidebar"
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {renderNavItems(() => setMobileMenuOpen(false))}
            </div>

            {renderSidebarFooter(true)}
          </aside>
        </div>
      )}
    </>
  );
}
