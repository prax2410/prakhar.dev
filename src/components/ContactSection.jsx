import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare, 
  FileText, 
  Download, 
  Sparkles, 
  Clock, 
  Send 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Tooltip from './Tooltip';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct Recruiter Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Let's Connect & Build
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Actively interviewing for <strong className="font-semibold text-zinc-900 dark:text-white">Senior Software Engineer</strong> roles. Reach out directly through your preferred channel for technical discussions, interview scheduling, or team opportunities.
          </p>
        </div>

        {/* Availability & SLA Status Strip */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-zinc-900 dark:text-white block sm:inline mr-2">
                Available for Full-Time Roles
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono">
                Remote • Hybrid • Bengaluru, Karnataka
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/60 px-3 py-1.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Response time: &lt; 24h</span>
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/60 px-3 py-1.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>IST (UTC+5:30)</span>
            </div>
          </div>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Card 1: Direct Email */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
                  Primary
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  Direct Email
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Best for job descriptions, interview scheduling, and team fit discussions.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <span className="font-mono text-xs text-zinc-800 dark:text-zinc-200 break-all select-all">
                  {personalInfo.email}
                </span>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  Network
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  LinkedIn Profile
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Available for InMail, mutual connections, and professional background checks.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <span className="font-mono text-xs text-zinc-800 dark:text-zinc-200 truncate block" title={personalInfo.linkedin}>
                  {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                </span>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-zinc-100 dark:border-zinc-800/80">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Direct Phone & WhatsApp */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  Instant
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  Phone & WhatsApp
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Best for immediate recruiter reachouts, screening calls, and WhatsApp chats.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-800 dark:text-zinc-200">
                  {personalInfo.phone}
                </span>
                <Tooltip text={copiedPhone ? "Copied!" : "Copy phone number"} position="left">
                  <button
                    onClick={handleCopyPhone}
                    aria-label="Copy phone number"
                    className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 text-xs font-mono"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </Tooltip>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
              <a
                href={`https://wa.me/917019954505?text=${encodeURIComponent("Hi Prakhar, I reviewed your Senior Software Engineer portfolio and would like to discuss an opportunity.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl border border-emerald-300 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/40 text-xs font-semibold hover:bg-emerald-100/60 dark:hover:bg-emerald-900/50 transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="flex-1 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Direct</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quick Resource Footer Card */}
        <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 hidden sm:inline" />
            <span>Ready for technical interviews, coding rounds, and architectural evaluations.</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download="Prakhar_CV_2026.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:opacity-90 transition-opacity shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
