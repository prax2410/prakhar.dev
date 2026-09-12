import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-compose mailto so the user's real email client launches directly with their message
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;

    setSentNotice(true);
    setTimeout(() => {
      setSentNotice(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5 text-rose-500" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Interested in software management, system architecture discussions, or potential opportunities? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Email Address</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-zinc-900 dark:text-white hover:underline mt-0.5 block truncate"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Phone & WhatsApp</div>
                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="text-sm font-semibold text-zinc-900 dark:text-white hover:underline mt-0.5 block truncate"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <button
                onClick={handleCopyPhone}
                aria-label="Copy phone"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white shrink-0"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Social Handles */}
            <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-4">
              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Location</div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-white mt-0.5 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex gap-3 text-xs font-mono">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Send a Direct Message
              </h3>
              
              {sentNotice && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs">
                  Opening your email client to dispatch message directly to Prakhar...
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-zinc-700 dark:text-zinc-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-zinc-700 dark:text-zinc-300 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Software Management / Technical Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-medium text-zinc-700 dark:text-zinc-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note or project requirements here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
