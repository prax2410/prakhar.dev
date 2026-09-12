import React from 'react';
import { skillsData, engineeringCompetencies, languages } from '../data/portfolioData';
import { CheckCircle2, Globe2, Server, Database, Layers, Cpu, Terminal, Cloud } from 'lucide-react';

export default function SkillMatrix() {
  const iconMap = {
    Frontend: Layers,
    Backend: Server,
    Database: Database,
    "Cloud & Deployment": Cloud,
    "Industrial IoT": Cpu,
    "Engineering Competencies": Terminal,
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            Technical Stack
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Skills & Engineering Competencies
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Technologies, frameworks, and architectural disciplines I work with across enterprise cloud and industrial IoT systems.
          </p>
        </div>

        {/* Categories Grid (Matching Resume Sidebar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {skillsData.map((cat) => {
            const Icon = iconMap[cat.category] || Server;
            return (
              <div
                key={cat.category}
                className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Split: Engineering Competencies & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Engineering Competencies from Resume */}
          <div className="md:col-span-8 p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
            <h4 className="text-xs font-mono uppercase tracking-wide text-zinc-500 mb-3">
              Engineering Disciplines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {engineeringCompetencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages from Resume */}
          <div className="md:col-span-4 p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wide text-zinc-500 mb-3">
                Languages
              </h4>
              <div className="space-y-2">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-xs"
                  >
                    <div className="flex items-center gap-2 font-medium text-zinc-800 dark:text-zinc-200">
                      <Globe2 className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{lang.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
