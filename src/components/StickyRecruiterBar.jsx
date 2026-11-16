import React, { useState, useEffect } from 'react';
import { Download, Copy, Check, MessageSquare, ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';
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
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 dark:bg-[#161617]/90 backdrop-blur-md text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7]/80 dark:border-[#2d2d2f] shadow-lg text-[12px] font-medium hover:border-[#0071e3] whitespace-nowrap transition-colors"
          aria-label="Expand Quick Actions"
        >
          <span className="w-2 h-2 rounded-full bg-[#34c759]" />
          <span className="whitespace-nowrap">Quick Contact</span>
          <ChevronUp className="w-3.5 h-3.5 text-[#86868b]" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-3 sm:bottom-5 left-0 right-0 z-40 px-3 sm:px-4 pointer-events-none flex justify-center">
      {/* Desktop & Tablet Sleek Single-Line Pill (sm+) */}
      <div
        className="hidden sm:inline-flex pointer-events-auto max-w-[calc(100vw-2rem)] sm:max-w-4xl"
        role="region"
        aria-label="Quick Actions"
      >
        <div className="bg-white/90 dark:bg-[#161617]/90 text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7]/80 dark:border-[#2d2d2f] rounded-full backdrop-blur-xl px-4 py-2 shadow-2xl flex items-center gap-3.5 text-[12px] whitespace-nowrap transition-colors">
          {/* Status & Work Mode Info (Zero Wrap) */}
          <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#34c759] shrink-0" />
            <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] whitespace-nowrap">
              {personalInfo.noticeStatus}
            </span>
            <span className="text-[#86868b]">·</span>
            <span className="text-[#86868b] whitespace-nowrap">
              On-site / Hybrid / Remote
            </span>
            <span className="text-[#86868b] hidden md:inline whitespace-nowrap">
              (Bengaluru)
            </span>
          </div>

          {/* Thin Vertical Divider */}
          <div className="h-4 w-px bg-[#e5e7eb] dark:bg-[#2d2d2f] shrink-0" />

          {/* Action Buttons (Zero Wrap) */}
          <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Prakhar_CV_2026.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white text-[12px] font-medium whitespace-nowrap transition-colors"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Resume</span>
            </a>

            <button
              type="button"
              onClick={() => copy('email', personalInfo.email)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-transparent text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#f5f5f7] dark:hover:bg-[#202022] text-[12px] font-medium whitespace-nowrap transition-colors"
            >
              {isCopied('email') ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34c759] shrink-0" />
                  <span className="text-[#34c759] whitespace-nowrap">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#86868b] shrink-0" />
                  <span className="whitespace-nowrap">Email</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] text-[#34c759] hover:bg-[#34c759]/10 text-[12px] font-medium whitespace-nowrap transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-1.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] text-[#86868b] hover:text-[#0071e3] dark:hover:text-[#2997ff] hover:bg-[#f5f5f7] dark:hover:bg-[#202022] transition-colors"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => handleToggleMinimize(true)}
              className="p-1 rounded-full text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors ml-0.5"
              aria-label="Minimize recruiter bar"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Structured Card (< sm, Zero Wrap Grid) */}
      <div
        className="sm:hidden w-full max-w-sm pointer-events-auto"
        role="region"
        aria-label="Quick Actions"
      >
        <div className="bg-white/95 dark:bg-[#161617]/95 text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7]/80 dark:border-[#2d2d2f] rounded-2xl backdrop-blur-xl p-2.5 shadow-2xl space-y-2 transition-colors">
          {/* Header row: Status + Availability + Minimize */}
          <div className="flex items-center justify-between text-[11px] px-1">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#34c759] shrink-0" />
              <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] whitespace-nowrap">
                {personalInfo.noticeStatus}
              </span>
              <span className="text-[#86868b]">·</span>
              <span className="text-[#86868b] truncate">
                On-site / Hybrid / Remote
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 ml-1">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-1 text-[#86868b] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
                aria-label="Scroll to top"
                title="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleToggleMinimize(true)}
                className="p-0.5 text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
                aria-label="Minimize recruiter bar"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Equal Buttons Grid (Zero Overflow/Wrapping) */}
          <div className="grid grid-cols-3 gap-1.5 w-full">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Prakhar_CV_2026.pdf"
              className="inline-flex items-center justify-center gap-1 py-1.5 rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white text-[12px] font-medium whitespace-nowrap transition-colors"
            >
              <Download className="w-3 h-3 shrink-0" />
              <span className="whitespace-nowrap">Resume</span>
            </a>

            <button
              type="button"
              onClick={() => copy('email', personalInfo.email)}
              className="inline-flex items-center justify-center gap-1 py-1.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-transparent text-[#1d1d1f] dark:text-[#f5f5f7] text-[12px] font-medium whitespace-nowrap transition-colors"
            >
              {isCopied('email') ? (
                <>
                  <Check className="w-3 h-3 text-[#34c759] shrink-0" />
                  <span className="text-[#34c759] whitespace-nowrap">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-[#86868b] shrink-0" />
                  <span className="whitespace-nowrap">Email</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 py-1.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] text-[#34c759] text-[12px] font-medium whitespace-nowrap transition-colors"
            >
              <MessageSquare className="w-3 h-3 shrink-0" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}