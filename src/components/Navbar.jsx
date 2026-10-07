import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import Tooltip from './Tooltip';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Systems', href: '#projects' },
    { name: 'Trajectory', href: '#experience' },
    { name: 'Topology', href: '#architecture' },
    { name: 'Matrix', href: '#skills' },
    { name: 'Dispatch', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo & Architectural Spec ID */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-7 h-7 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-mono font-black text-xs">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-wider text-zinc-950 dark:text-white uppercase">
                PRAKHAR // ENG
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 inline-block animate-pulse" />
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono uppercase">
                  SDE → MANAGER
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links (Monospaced Index) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors uppercase tracking-wider"
              >
                <span className="text-zinc-400 mr-1 text-[10px]">0{idx + 1}.</span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 font-mono text-xs">
            {/* Dark / Light Toggle */}
            <Tooltip text={isDark ? "Switch to light mode" : "Switch to dark mode"} position="bottom">
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                className="p-2 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-zinc-700" />}
              </button>
            </Tooltip>

            {/* Resume Button - Distinctive Architectural Button */}
            <Tooltip text="Download CV (PDF)" position="bottom">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Prakhar_CV_2026.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </a>
            </Tooltip>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800 font-mono text-xs space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white uppercase"
              >
                <span className="text-zinc-400 mr-2">0{idx + 1}.</span>
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Prakhar_CV_2026.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
