import React from 'react';
import { skillsData, engineeringCompetencies, languages } from '../data/portfolioData';
import { Globe2 } from 'lucide-react';

export default function SkillMatrix() {
  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-400 font-bold uppercase mb-2">
              05 // TECHNICAL CAPABILITY INDEX & STANDARDS MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase leading-none">
              TECHNICAL MATRIX
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Evaluated technical proficiencies across backend services, relational data models, industrial edge communications, and engineering leadership.
          </p>
        </div>

        {/* Tabular Capabilities Ledger (No Cards, No Pills) */}
        <div className="border-t border-b border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 mb-14">
          {skillsData.map((cat, idx) => (
            <div
              key={cat.category}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors"
            >
              {/* Category Domain (4 Cols) */}
              <div className="md:col-span-4 font-mono text-xs">
                <span className="text-zinc-500 dark:text-zinc-400 font-bold mr-2">0{idx + 1} //</span>
                <span className="font-bold text-zinc-950 dark:text-white uppercase tracking-wider text-sm">
                  {cat.category}
                </span>
              </div>

              {/* Technologies List (8 Cols) */}
              <div className="md:col-span-8 font-mono text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 leading-relaxed font-medium">
                {cat.skills.join("  ·  ")}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Split: Engineering Disciplines & Languages Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Engineering Disciplines (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 pb-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <span>DISCIPLINES & PRACTICES</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">[STANDARDS ENFORCED]</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-mono text-xs sm:text-[13px]">
              {engineeringCompetencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 py-1 border-b border-zinc-100 dark:border-zinc-900"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Ledger (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 pb-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-zinc-400" />
              <span>LANGUAGES</span>
            </div>

            <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80 font-mono text-xs">
              {languages.map((lang, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <span className="font-bold text-zinc-900 dark:text-white uppercase">
                    {lang.name}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
