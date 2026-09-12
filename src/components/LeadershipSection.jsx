import React from 'react';
import { teamStructure, leadershipPoints } from '../data/portfolioData';
import { Users, GitPullRequest, ShieldCheck, Compass, Terminal, GraduationCap } from 'lucide-react';

export default function LeadershipSection() {
  const leadershipPillars = [
    {
      title: "Design-to-Code Workflows",
      desc: "Partner with our 2 UI/UX designers to translate Figma specs into reusable, accessible React components with minimal handoff friction.",
      icon: Compass,
    },
    {
      title: "Technical Architecture & Reviews",
      desc: "Establish backend coding standards, API contracts, database schemas, and perform regular code reviews across all modules.",
      icon: GitPullRequest,
    },
    {
      title: "Mentorship & Team Growth",
      desc: "Lead daily engineering standups, mentor 3 interns in clean PERN principles, and transition engineers toward independent feature ownership.",
      icon: GraduationCap,
    },
    {
      title: "Production Uptime & Cloud Ops",
      desc: "Oversee deployment pipelines on Microsoft Azure and AWS EC2, troubleshooting bottlenecks and maintaining system stability.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="leadership" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            Leadership
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Engineering Management & Practices
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Leading 7 engineers and designers at YM Automation, balancing hands-on software development with team execution, customer scoping, and technical mentorship.
          </p>
        </div>

        {/* 4 Pillars of Leadership */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {leadershipPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Breakdown */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white font-mono uppercase tracking-wide">
              Cross-Functional Team Scope (7 Members)
            </h3>
            <span className="text-xs text-zinc-500 font-mono">YM Automation Engineering</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {teamStructure.map((member, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/80"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
                  <span>Track 0{idx + 1}</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{member.count}</span>
                </div>
                <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  {member.role}
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
