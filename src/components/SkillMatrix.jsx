import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function SkillMatrix() {
  return (
    <section id="skills" className="py-14 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            05 · Technical Skills
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Stack &amp; Capabilities
          </h2>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] divide-y divide-slate-100 dark:divide-slate-800/80">
          {skillsData.map((cat) => (
            <div
              key={cat.category}
              className="p-4 sm:px-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
            >
              <div className="md:col-span-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                {cat.category}
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
