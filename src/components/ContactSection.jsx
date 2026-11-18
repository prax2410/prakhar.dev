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
  Clock,
  MapPin,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useCopyFeedback } from '../hooks/useCopyFeedback';
import Tooltip from './Tooltip';
import prakharImg from '../assets/Prakhar.png';

export default function ContactSection() {
  const { copy, isCopied } = useCopyFeedback();

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    'Engineering Opportunity — Senior Software Engineer / Full Stack Role'
  )}`;

  return (
    <section
      id="contact"
      className="py-[70px] sm:py-[85px] border-b border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Apple Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] text-[12px] font-semibold uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] animate-pulse" />
            06 · Contact · {personalInfo.noticeStatus}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
            Let’s connect.
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#86868b] mt-2 font-normal max-w-2xl">
            Available immediately for Senior Software Engineer, Full Stack, and Technical Lead roles. Open to On-site, Hybrid, or Remote opportunities.
          </p>
        </div>

        {/* 2-Column Apple Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Column: Direct Recruiter Gateway (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#161617] flex flex-col justify-between transition-colors">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-2 border-b border-[#e5e7eb] dark:border-[#2d2d2f]">
                <img
                  src={prakharImg}
                  alt="Prakhar — Senior Software Engineer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-[#0071e3]/40 shadow-md shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] text-[11px] font-medium text-[#34c759]">
                      <span className="w-2 h-2 rounded-full bg-[#34c759]" />
                      Available Immediately · Immediate Joiner
                    </span>
                    <span className="text-[12px] font-mono font-medium text-[#86868b]">
                      {personalInfo.experienceYears}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                    Direct Conversation with Prakhar
                  </h3>
                  <p className="text-[13px] text-[#0071e3] dark:text-[#2997ff] font-medium font-mono">
                    Senior Full Stack Engineer · Technical Lead
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[14px] sm:text-[15px] text-[#86868b] leading-relaxed">
                  Whether you have an immediate opening, require multi-tenant architecture expertise, or want to discuss scaling shopfloor telemetry, reach out directly.
                </p>
              </div>

              {/* Apple 44px Pill CTA Group */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 h-[44px] rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white text-[14px] sm:text-[15px] font-medium shadow-sm hover:shadow transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={personalInfo.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 h-[44px] rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] hover:border-[#34c759] text-[#1d1d1f] dark:text-white text-[14px] sm:text-[15px] font-medium transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#34c759]" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Prakhar_CV_2026.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 h-[44px] rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] hover:border-[#0071e3] text-[#1d1d1f] dark:text-white text-[14px] sm:text-[15px] font-medium transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>

            {/* Response Time SLA Assurance */}
            <div className="mt-6 pt-4 border-t border-[#e5e7eb] dark:border-[#2d2d2f] flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#86868b]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                <span>Usually responds within 2 hours</span>
              </div>
              <span className="font-mono">IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Right Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {/* Email Channel */}
            <div className="p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#161617] flex items-center justify-between gap-3 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">Email</div>
                  <a
                    href={mailtoUrl}
                    className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] dark:text-white hover:text-[#0071e3] dark:hover:text-[#2997ff] truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <Tooltip text={isCopied('email') ? 'Copied!' : 'Copy email'} position="left">
                <button
                  type="button"
                  onClick={() => copy('email', personalInfo.email)}
                  aria-label="Copy email"
                  className="p-2.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#202022] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white shrink-0 transition-colors"
                >
                  {isCopied('email') ? <Check className="w-4 h-4 text-[#34c759]" /> : <Copy className="w-4 h-4" />}
                </button>
              </Tooltip>
            </div>

            {/* Phone Channel */}
            <div className="p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#161617] flex items-center justify-between gap-3 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#34c759]/10 text-[#34c759] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">Direct Line</div>
                  <a
                    href={`tel:+91${personalInfo.phoneRaw}`}
                    className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] dark:text-white hover:text-[#0071e3] dark:hover:text-[#2997ff] block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Tooltip text={isCopied('phone') ? 'Copied!' : 'Copy phone'} position="top">
                  <button
                    type="button"
                    onClick={() => copy('phone', personalInfo.phone)}
                    aria-label="Copy phone"
                    className="p-2.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#202022] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
                  >
                    {isCopied('phone') ? <Check className="w-4 h-4 text-[#34c759]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </Tooltip>
                <a
                  href={`tel:+91${personalInfo.phoneRaw}`}
                  aria-label="Call phone"
                  className="p-2.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#202022] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <div className="p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#161617] flex items-center justify-between gap-3 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">LinkedIn</div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] dark:text-white hover:text-[#0071e3] dark:hover:text-[#2997ff] truncate block"
                  >
                    linkedin.com/in/prakhar...
                  </a>
                </div>
              </div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
                className="p-2.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#202022] text-[#0071e3] dark:text-[#2997ff] hover:border-[#0071e3] shrink-0 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Channel */}
            <div className="p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#161617] flex items-center justify-between gap-3 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] dark:bg-[#202022] text-[#1d1d1f] dark:text-white flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">GitHub</div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] dark:text-white hover:text-[#0071e3] dark:hover:text-[#2997ff] truncate block"
                  >
                    github.com/{personalInfo.githubUsername}
                  </a>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub"
                className="p-2.5 rounded-full border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#202022] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white shrink-0 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Recruiter Fast-Facts Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          <div className="p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#161617] flex items-start gap-3 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">Location &amp; Mobility</div>
              <div className="text-[13px] font-semibold text-[#1d1d1f] dark:text-white mt-0.5">
                Bengaluru · On-site / Hybrid / Remote
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#161617] flex items-start gap-3 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] flex items-center justify-center text-[#34c759] shrink-0 mt-0.5">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">Target Engineering Roles</div>
              <div className="text-[13px] font-semibold text-[#1d1d1f] dark:text-white mt-0.5">
                {personalInfo.targetRoles}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#161617] flex items-start gap-3 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">Core Architecture</div>
              <div className="text-[13px] font-semibold text-[#1d1d1f] dark:text-white mt-0.5">
                Node.js · React.js · PostgreSQL · IIoT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
