import React from 'react';
import { ArrowUp, Github, Linkedin, FileText, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-12 border-t border-zinc-200 dark:border-zinc-800 text-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Identity */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
              P
            </div>
            <div>
              <div className="font-bold text-zinc-900 dark:text-white">Prakhar</div>
              <div className="text-[11px] text-zinc-400 font-mono">Senior Software Engineer • Bengaluru, India</div>
            </div>
          </div>

          {/* Center: Real Developer Note */}
          <div className="text-center text-zinc-500 font-mono text-[11px]">
            Designed & engineered with React, Tailwind CSS & Vite. © {new Date().getFullYear()}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download="Prakhar_CV_2026.pdf"
              aria-label="Download Resume"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
