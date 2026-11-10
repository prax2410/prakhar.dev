import React from "react";
import { experienceData, educationData, teamStructure } from "../data/portfolioData";

export default function ExperienceTimeline() {
	return (
		<section
			id="experience"
			className="py-14 sm:py-16 border-b border-slate-200 dark:border-slate-800"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
				{/* Section Header */}
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
					<div>
						<p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
							03 · Experience &amp; Education
						</p>
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
							Career Trajectory (Jul 2022 – Oct 2026)
						</h2>
					</div>
					<span className="text-xs font-medium text-slate-500 dark:text-slate-400">
						YM Automation Pvt Ltd · SDE → Software Manager
					</span>
				</div>

				{/* Clean Timeline Cards */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{experienceData.map((item) => (
						<div
							key={item.id}
							className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] flex flex-col justify-between space-y-4"
						>
							<div className="space-y-3">
								<div className="flex flex-wrap items-start justify-between gap-2">
									<div>
										<h3 className="text-lg font-bold text-slate-900 dark:text-white">
											{item.role}
										</h3>
										<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
											{item.company} · {item.location}
										</p>
									</div>
									<span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
										{item.period}
									</span>
								</div>

								<ul className="space-y-2 text-xs sm:text-[13px] border-t border-slate-100 dark:border-slate-800/80 pt-3">
									{item.highlights.map((h, i) => (
										<li key={i} className="flex items-start gap-2">
											<span className="font-semibold text-blue-600 dark:text-blue-400 shrink-0">
												{h.tag}:
											</span>
											<span className="text-slate-700 dark:text-slate-300 leading-snug">
												{h.text}
											</span>
										</li>
									))}
								</ul>
							</div>

							<div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
								{item.tech.map((t) => (
									<span
										key={t}
										className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
									>
										{t}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Compact Team Scope + Education Strip */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
					<div className="lg:col-span-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] flex flex-wrap items-center justify-between gap-3">
						<span className="text-xs font-semibold text-slate-900 dark:text-white">
							Team Led (Oct 2024 – Oct 2026)
						</span>
						<div className="flex flex-wrap gap-2">
							{teamStructure.map((m) => (
								<span
									key={m.role}
									className="px-2.5 py-1 rounded-md text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
								>
									{m.count} {m.role}
								</span>
							))}
						</div>
					</div>

					<div className="lg:col-span-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
						<div>
							<div className="text-sm font-bold text-slate-900 dark:text-white">
								{educationData.institution}
							</div>
							<div className="text-xs text-slate-600 dark:text-slate-400">
								{educationData.degree}
							</div>
						</div>
						<span className="text-xs font-medium text-slate-500 dark:text-slate-400 shrink-0">
							{educationData.location}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
