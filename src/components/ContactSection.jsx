import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare, 
  FileText, 
  Download, 
  Github, 
  Linkedin,
  Send,
  Clock,
  MapPin
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
    <section id="contact" className="py-20 sm:py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-400 font-bold uppercase mb-2">
              06 // RECRUITER DISPATCH & DIRECT CHANNELS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase leading-none">
              INTERVIEW DISPATCH
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Direct communication channels for engineering leaders, hiring managers, and technical recruiters with &lt; 24h response SLA.
          </p>
        </div>

        {/* Status Ledger Strip */}
        <div className="mb-10 py-3.5 px-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-emerald-500 inline-block animate-pulse" />
            <span className="font-bold text-zinc-950 dark:text-white uppercase">AVAILABLE FOR SENIOR ROLES</span>
            <span className="text-zinc-400">·</span>
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Bengaluru [Hybrid / Remote]</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 font-medium">
            <span>RESPONSE SLA: &lt; 24H</span>
            <span>·</span>
            <span>TIMEZONE: IST (UTC+5:30)</span>
          </div>
        </div>

        {/* Tabular Comms Ledger (Clear CTA Hierarchy) */}
        <div className="border-t border-b border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 mb-12">
          
          {/* Channel 1: Email (Primary Direct Channel) */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
            <div className="md:col-span-3 font-mono text-xs">
              <span className="text-zinc-500 dark:text-zinc-400 font-bold mr-2">[01]</span>
              <span className="font-bold text-zinc-950 dark:text-white uppercase">DIRECT EMAIL</span>
              <span className="block text-[11px] text-emerald-700 dark:text-emerald-400 font-bold mt-0.5">PRIMARY CHANNEL</span>
            </div>

            <div className="md:col-span-6 font-mono text-sm sm:text-base text-zinc-950 dark:text-zinc-100 font-bold break-all select-all">
              {personalInfo.email}
            </div>

            <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2.5 font-mono text-xs">
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white text-zinc-800 dark:text-zinc-200 transition-colors flex items-center gap-1.5 font-semibold"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "COPIED" : "COPY"}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="px-4 py-2.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND MAIL</span>
              </a>
            </div>
          </div>

          {/* Channel 2: LinkedIn */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
            <div className="md:col-span-3 font-mono text-xs">
              <span className="text-zinc-500 dark:text-zinc-400 font-bold mr-2">[02]</span>
              <span className="font-bold text-zinc-950 dark:text-white uppercase">LINKEDIN NETWORK</span>
              <span className="block text-[11px] text-zinc-600 dark:text-zinc-400 font-medium mt-0.5">BACKGROUND & INMAIL</span>
            </div>

            <div className="md:col-span-6 font-mono text-sm text-zinc-700 dark:text-zinc-300 truncate">
              {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
            </div>

            <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2.5 font-mono text-xs">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white text-zinc-900 dark:text-white font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-center gap-1.5"
              >
                <span>CONNECT ↗</span>
              </a>
            </div>
          </div>

          {/* Channel 3: Phone & WhatsApp */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
            <div className="md:col-span-3 font-mono text-xs">
              <span className="text-zinc-500 dark:text-zinc-400 font-bold mr-2">[03]</span>
              <span className="font-bold text-zinc-950 dark:text-white uppercase">PHONE & WHATSAPP</span>
              <span className="block text-[11px] text-zinc-600 dark:text-zinc-400 font-medium mt-0.5">DIRECT SCREENING</span>
            </div>

            <div className="md:col-span-6 font-mono text-sm sm:text-base text-zinc-950 dark:text-zinc-100 font-bold">
              {personalInfo.phone}
            </div>

            <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2.5 font-mono text-xs">
              <a
                href={`https://wa.me/917019954505?text=${encodeURIComponent("Hi Prakhar, I reviewed your Senior Software Engineer portfolio and would like to discuss an opportunity.")}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2.5 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white text-zinc-900 dark:text-white font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white text-zinc-900 dark:text-white font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                <span>CALL</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Technical Spec Sign-Off */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            PROVEN TRACK RECORD: 12+ MODULES · 300+ APIS · ~65 IIOT DEVICES · SDE → MANAGER PROMOTION
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download="Prakhar_CV_2026.pdf"
              className="text-zinc-950 dark:text-white underline underline-offset-4 font-bold"
            >
              DOWNLOAD OFFICIAL CV (PDF) ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
