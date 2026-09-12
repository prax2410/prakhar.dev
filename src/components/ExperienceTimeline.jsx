import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData, personalInfo, teamStructure } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, FileText, Users } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Career Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Work Experience
            </h2>
          </div>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download="Prakhar_CV_2026.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:border-zinc-900 dark:hover:border-white transition-colors self-start md:self-auto"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Structured Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-5"
            >
              {/* Role & Company Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                      {item.role}
                    </h3>
                    {index === 0 && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">{item.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60 self-start md:self-center">
                  {item.period}
                </div>
              </div>

              {/* Team Scope Callout for Software Manager Role */}
              {index === 0 && (
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 font-medium text-zinc-800 dark:text-zinc-200">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>Engineering Team Scope:</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-normal">
                      Leading 7 members (2 UI/UX, 1 Frontend, 1 Backend, 1 Mobile, 3 Interns)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">Sprint planning & code reviews</span>
                </div>
              )}

              {/* Bullet Points */}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {item.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-zinc-400 dark:text-zinc-600 font-mono select-none">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5 font-mono text-xs">
                <span className="text-zinc-400 font-sans text-xs mr-1">Stack:</span>
                {item.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase">Education</div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">
                {educationData.institution}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                {educationData.degree} • <strong className="font-semibold text-zinc-800 dark:text-zinc-200">CGPA {educationData.cgpa}</strong> • {educationData.period}
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {educationData.location}
          </div>
        </div>

      </div>
    </section>
  );
}
