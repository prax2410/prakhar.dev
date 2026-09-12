import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Lock, ShieldCheck, Mail } from "lucide-react";
import { projectsData } from "../data/portfolioData";

export default function ProjectsShowcase() {
	const [filter, setFilter] = useState("All");
	const [activeProject, setActiveProject] = useState(null);

	const categories = [
		"All",
		"Enterprise SaaS & ERP",
		"Enterprise System",
		"IoT & Automation",
	];

	const filteredProjects =
		filter === "All" ? projectsData : (
			projectsData.filter((p) => p.category === filter)
		);

	return (
		<section
			id="projects"
			className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
					<div>
						<div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
							Projects
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
							Featured Systems & Case Studies
						</h2>
					</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
						Production systems and platforms I've architected, from
						enterprise SaaS to industrial IoT hardware integrations.
					</p>
				</div>

				{/* Filter Pills */}
				<div className="flex flex-wrap gap-2 mb-8 text-xs font-medium">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setFilter(cat)}
							className={`px-3.5 py-1.5 rounded-lg transition-all ${
								filter === cat ?
									"bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-sm"
								:	"bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 gap-6"
				>
					<AnimatePresence>
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, scale: 0.98 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.98 }}
								transition={{ duration: 0.25 }}
								className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
							>
								{/* Content */}
								<div className="flex-1 flex flex-col justify-between space-y-4">
									<div className="space-y-3">
										<div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
											<span>{project.category}</span>
											<span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
												{project.badge}
											</span>
										</div>

										<div>
											<h3 className="text-xl font-bold text-zinc-900 dark:text-white">
												{project.title}
											</h3>
											<p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1">
												{project.tagline}
											</p>
										</div>

										<p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
											{project.description}
										</p>
									</div>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-1.5 pt-2">
										{project.tech.map((t) => (
											<span
												key={t}
												className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
											>
												{t}
											</span>
										))}
									</div>
								</div>

								{/* Footer Links & IP Status */}
								<div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-medium">
									{project.isProprietary ?
										<div className="inline-flex items-center gap-1.5 text-zinc-500 font-mono text-[11px]">
											<Lock className="w-3 h-3 text-amber-500 shrink-0" />
											<span className="truncate">
												Proprietary (
												{project.organization})
											</span>
										</div>
									:	<a
											href={project.links.github}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
										>
											<Github className="w-4 h-4" />
											<span>Source Code</span>
										</a>
									}

									<button
										onClick={() =>
											setActiveProject(project)
										}
										className="inline-flex items-center gap-1 text-zinc-900 dark:text-white hover:underline font-semibold ml-auto"
									>
										<span>Architecture & Details</span>
										<ArrowUpRight className="w-3.5 h-3.5" />
									</button>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{/* Modal for In-depth Details */}
				{activeProject && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
						<div className="relative w-full max-w-lg p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
							<div className="flex items-start justify-between">
								<div>
									<span className="text-xs font-mono text-zinc-400 uppercase">
										{activeProject.category}
									</span>
									<h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-0.5">
										{activeProject.title}
									</h3>
								</div>
								<button
									onClick={() => setActiveProject(null)}
									className="p-1 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
								>
									✕
								</button>
							</div>

							<p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
								{activeProject.description}
							</p>

							{/* Real-World Impact */}
							<div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 text-xs">
								<span className="font-semibold text-zinc-900 dark:text-white block mb-1">
									Real-World Impact:
								</span>
								<p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
									{activeProject.impact}
								</p>
							</div>

							{/* Confidential IP Notice for Company Work */}
							{activeProject.isProprietary ?
								<div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60 text-amber-900 dark:text-amber-300 text-xs">
									<Lock className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
									<div className="leading-relaxed">
										<span className="font-semibold block">
											Confidential Enterprise IP
										</span>
										Codebase belongs to{" "}
										{activeProject.organization}. System
										architecture, database schemas, and
										protocol integrations are available for
										technical discussion during interviews.
									</div>
								</div>
							:	null}

							<div>
								<span className="text-xs font-mono text-zinc-400 uppercase block mb-1.5">
									Tech Stack
								</span>
								<div className="flex flex-wrap gap-1.5">
									{activeProject.tech.map((t) => (
										<span
											key={t}
											className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
										>
											{t}
										</span>
									))}
								</div>
							</div>

							<div className="flex justify-end gap-2.5 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
								<button
									onClick={() => setActiveProject(null)}
									className="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
								>
									Close
								</button>
								{activeProject.isProprietary ?
									<a
										href="#contact"
										onClick={() => setActiveProject(null)}
										className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold inline-flex items-center gap-1.5"
									>
										<Mail className="w-3.5 h-3.5" />
										<span>Inquire / Discuss System</span>
									</a>
								:	<a
										href={activeProject.links.github}
										target="_blank"
										rel="noreferrer"
										className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold inline-flex items-center gap-1.5"
									>
										<Github className="w-4 h-4" />
										<span>View GitHub</span>
									</a>
								}
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
