import React from 'react';
import { ArrowUp, Github, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Tooltip from './Tooltip';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-12 border-t border-zinc-200 dark:border-zinc-800 font-mono text-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Identity */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold text-xs">
              P
            </div>
            <div>
              <div className="font-bold text-zinc-950 dark:text-white uppercase tracking-wider">
                PRAKHAR // SENIOR FULL-STACK & MANAGER
              </div>
              <div className="text-[11px] text-zinc-400">
                12+ MODULES · 300+ APIS · ~65 IIOT NODES · BENGALURU
              </div>
            </div>
          </div>

          {/* Center: System Architecture Note */}
          <div className="text-center text-zinc-500 text-[11px]">
            ARCHITECTURAL SPEC ENGINE // REACT · VITE · TAILWIND CSS © {new Date().getFullYear()}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <Tooltip text="Download CV (PDF)" position="top">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Prakhar_CV_2026.pdf"
                aria-label="Download Resume"
                className="p-2 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
              </a>
            </Tooltip>

            <Tooltip text="GitHub (@prax2410)" position="top">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </Tooltip>

            <Tooltip text="LinkedIn Profile" position="top">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </Tooltip>

            <Tooltip text="Back to top" position="top">
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </Tooltip>
          </div>

        </div>
      </div>
    </footer>
  );
}
