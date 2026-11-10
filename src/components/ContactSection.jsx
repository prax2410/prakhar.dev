import React from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  MessageSquare,
  FileText,
  Github,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useCopyFeedback } from '../hooks/useCopyFeedback';

export default function ContactSection() {
  const { copy, isCopied } = useCopyFeedback();

  return (
    <section id="contact" className="py-14 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              06 · Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {personalInfo.noticeStatus} · {personalInfo.availability} · {personalInfo.targetRoles}
            </p>
          </div>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Prakhar_CV_2026.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold self-start sm:self-auto"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Email</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate block mt-0.5"
              >
                {personalInfo.email}
              </a>
            </div>
            <button
              type="button"
              onClick={() => copy('email', personalInfo.email)}
              aria-label="Copy email"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white shrink-0"
            >
              {isCopied('email') ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone & WhatsApp */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Phone / WhatsApp</div>
              <a
                href={`tel:+91${personalInfo.phoneRaw}`}
                className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block mt-0.5"
              >
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={personalInfo.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 hover:border-slate-300"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:+91${personalInfo.phoneRaw}`}
                aria-label="Call"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] flex items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700"
          >
            <div className="min-w-0">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">LinkedIn</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white truncate mt-0.5">
                {personalInfo.linkedin.replace(/^https?:\/\//, '')}
              </div>
            </div>
            <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] flex items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700"
          >
            <div className="min-w-0">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">GitHub</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white truncate mt-0.5">
                github.com/{personalInfo.githubUsername}
              </div>
            </div>
            <Github className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
