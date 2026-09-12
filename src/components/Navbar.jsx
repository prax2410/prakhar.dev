import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm'
              : 'bg-transparent'
          }`}
        >
          {/* Logo & Status Indicator */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm transition-transform group-hover:scale-105">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Prakhar
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                  Software Manager
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download="Prakhar_CV_2026.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <Download className="w-3 h-3 opacity-70 hidden sm:inline" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white border-b border-zinc-100 dark:border-zinc-900"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Prakhar_CV_2026.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
