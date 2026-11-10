import React, { useState, useEffect } from 'react';
import { Download, Copy, Check, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useCopyFeedback } from '../hooks/useCopyFeedback';

export default function StickyRecruiterBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(() => {
    try {
      return sessionStorage.getItem('recruiter_dock_minimized') === 'true';
    } catch {
      return false;
    }
  });

  const { copy, isCopied } = useCopyFeedback();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMinimize = (nextState) => {
    setIsMinimized(nextState);
    try {
      sessionStorage.setItem('recruiter_dock_minimized', String(nextState));
    } catch {}
  };

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => handleToggleMinimize(false)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 dark:bg-slate-800 text-white border border-slate-700 shadow-lg text-xs font-medium hover:border-blue-500 transition-colors"
          aria-label="Expand Quick Actions"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Quick Contact</span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 lg:left-64 right-0 sm:bottom-4 z-40 sm:px-4 pointer-events-none flex justify-center">
      <div
        className="w-full max-w-3xl pointer-events-auto"
        role="region"
        aria-label="Quick Actions"
      >
        <div className="bg-slate-900/95 dark:bg-[#11141d]/95 text-white border-t sm:border border-slate-700/80 sm:rounded-xl backdrop-blur-md px-4 py-2.5 shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center justify-between sm:justify-start gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="font-semibold text-white">{personalInfo.noticeStatus}</span>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <span className="text-slate-300 hidden sm:inline">{personalInfo.availability}</span>
            </div>

            <button
              type="button"
              onClick={() => handleToggleMinimize(true)}
              className="sm:hidden p-1 text-slate-400 hover:text-white"
              aria-label="Minimize quick actions"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Prakhar_CV_2026.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={() => copy('email', personalInfo.email)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-800 font-medium"
            >
              {isCopied('email') ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Email</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-emerald-400 hover:bg-slate-800 font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => handleToggleMinimize(true)}
              className="hidden sm:inline-flex p-1 text-slate-400 hover:text-white"
              aria-label="Minimize quick actions"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
