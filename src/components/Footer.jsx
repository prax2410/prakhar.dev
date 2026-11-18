import React from 'react';
import { ArrowUp, Github, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#161617] text-[#86868b] pt-12 pb-24 sm:pb-20 text-[12px] border-t border-[#e5e7eb] dark:border-[#2d2d2f] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center sm:text-left">
          <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Prakhar</span>
          <span>·</span>
          <span>Senior Full Stack Engineer · Bengaluru</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Prakhar_CV_2026.pdf"
            aria-label="Download Resume"
            className="p-2 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}