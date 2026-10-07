import React from "react";
import { motion } from "framer-motion";
import {
	experienceData,
	educationData,
	personalInfo,
} from "../data/portfolioData";
import {
	Briefcase,
	GraduationCap,
	MapPin,
	FileText,
	ArrowUpRight,
	Users,
	Cpu,
} from "lucide-react";

export default function ExperienceTimeline() {
	return (
		<section
			id="experience"
			className="py-20 sm:py-24 border-b border-zinc-200 dark:border-zinc-800"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-zinc-200 dark:border-zinc-800">
					<div>
						<div className="text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-400 font-bold uppercase mb-2">
							03 // CAREER CHRONICLE & ENGINEERING LEADERSHIP
						</div>
						<h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase leading-none">
							CAREER TRAJECTORY
						</h2>
						<div className="mt-3 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
							PROMOTION RECORD: SDE (JUL 2022) ──→ SOFTWARE MANAGER (PRESENT)
						</div>
					</div>

					<a
						href={personalInfo.resumeUrl}
						target="_blank"
						rel="noreferrer"
						download="Prakhar_CV_2026.pdf"
						className="px-5 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white text-zinc-900 dark:text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2 self-start md:self-auto"
					>
						<FileText className="w-4 h-4" />
						<span>Download Official CV (PDF)</span>
					</a>
				</div>

				{/* The Career Ledger (No Cards) */}
				<div className="relative border-l-2 border-zinc-300 dark:border-zinc-700 ml-2 sm:ml-4 pl-6 sm:pl-10 space-y-16">
					{experienceData.map((item, index) => (
						<div key={item.id} className="relative">
							
							{/* Node Anchor (Crisp alignment with border line) */}
							<div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 bg-zinc-950 dark:bg-white ring-4 ring-white dark:ring-zinc-950 shadow-sm" />

							{/* Period & Header */}
							<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800">
								<div>
									<div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest">
										[PERIOD: {item.period}]
									</div>
									<h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white uppercase tracking-tight mt-1">
										{item.role}
									</h3>
									<div className="text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300 font-medium mt-1">
										{item.company} · {item.location}
									</div>
								</div>

								{index === 0 ? (
									<div className="font-mono text-xs uppercase font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 border border-emerald-300 dark:border-emerald-800 self-start sm:self-auto">
										CURRENT ROLE // 7-PERSON TEAM
									</div>
								) : (
									<div className="font-mono text-xs uppercase font-bold text-zinc-600 dark:text-zinc-400 self-start sm:self-auto">
										12 PROD PROJECTS DELIVERED
									</div>
								)}
							</div>

							{/* Technical Scope Summary */}
							{index === 0 && (
								<div className="mb-5 p-4 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 text-xs font-mono space-y-1">
									<div className="font-bold text-zinc-950 dark:text-white uppercase">
										MANDATE: TECHNICAL ARCHITECTURE & ENGINEERING DELIVERY
									</div>
									<p className="text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">
										Lead software team (backend, frontend, mobile, UI/UX) • Managing technical scoping, schema design, code review standards, and client deliverables across ~10 client companies.
									</p>
								</div>
							)}

							{index === 1 && (
								<div className="mb-5 p-4 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 text-xs font-mono space-y-1">
									<div className="font-bold text-zinc-950 dark:text-white uppercase">
										MANDATE: FULL-STACK DEVELOPMENT & SHOPFLOOR IIOT INTEGRATION
									</div>
									<p className="text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">
										Sole architect & developer across 12 production software projects spanning React web frontends, Node.js REST APIs, PostgreSQL schemas, and ~65 industrial PLCs over MQTT & Modbus.
									</p>
								</div>
							)}

							{/* Bullet Accomplishments (Clean industrial indicator) */}
							<ul className="space-y-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal mb-5">
								{item.highlights.map((point, idx) => (
									<li key={idx} className="flex items-start gap-3">
										<span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm font-bold select-none shrink-0 mt-0.5">
											▸
										</span>
										<span>{point}</span>
									</li>
								))}
							</ul>

							{/* Tech Stack Specs (No pills) */}
							<div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 pt-2 flex flex-wrap gap-x-2 gap-y-1 border-t border-zinc-100 dark:border-zinc-800/80">
								<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase">STACK SPEC:</span>
								<span className="text-zinc-950 dark:text-zinc-100 font-medium">
									{item.tech.join(" · ")}
								</span>
							</div>

						</div>
					))}
				</div>

				{/* Academic Credentials Ledger Row */}
				<div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 font-mono text-xs">
					<div>
						<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest block mb-1">
							ACADEMIC CREDENTIAL
						</span>
						<div className="text-base font-bold text-zinc-950 dark:text-white">
							{educationData.institution}
						</div>
						<div className="text-zinc-700 dark:text-zinc-300 mt-0.5">
							{educationData.degree} {educationData.cgpa && `· CGPA ${educationData.cgpa}`} {educationData.period && `· ${educationData.period}`}
						</div>
					</div>
					<div className="text-zinc-600 dark:text-zinc-400 font-medium">
						LOCATION: {educationData.location}
					</div>
				</div>

			</div>
		</section>
	);
}
