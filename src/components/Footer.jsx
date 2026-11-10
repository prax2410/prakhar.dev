import React from 'react';
import { ArrowUp, Github, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#090b10] text-slate-500 dark:text-slate-400 pt-10 pb-24 sm:pb-20 text-xs transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-900 dark:text-white">Prakhar</span>
          <span className="mx-2">·</span>
          <span>Senior Full Stack &amp; Backend Engineer · Bengaluru</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Prakhar_CV_2026.pdf"
            aria-label="Download Resume"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
