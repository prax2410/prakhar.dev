import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Lock, ChevronDown, ChevronUp, Layers, Check, ExternalLink } from "lucide-react";
import { projectsData } from "../data/portfolioData";

export default function ProjectsShowcase() {
	const [filter, setFilter] = useState("All");
	const [expandedProject, setExpandedProject] = useState("enterprise-erp-saas"); // First one expanded by default for instant architectural depth

	const categories = [
		{ label: "All", count: projectsData.length },
		{ label: "Enterprise SaaS & ERP", count: projectsData.filter(p => p.category === "Enterprise SaaS & ERP").length },
		{ label: "Enterprise System", count: projectsData.filter(p => p.category === "Enterprise System").length },
		{ label: "IIoT & Automation", count: projectsData.filter(p => p.category === "IIoT & Automation").length },
	];

	const filteredProjects =
		filter === "All" ? projectsData : projectsData.filter((p) => p.category === filter);

	const toggleExpand = (id) => {
		setExpandedProject(expandedProject === id ? null : id);
	};

	return (
		<section
			id="projects"
			className="py-20 sm:py-24 border-b border-zinc-200 dark:border-zinc-800"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{/* Section Technical Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b border-zinc-200 dark:border-zinc-800">
					<div>
						<div className="text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-400 font-bold uppercase mb-2">
							02 // ARCHITECTURAL DOSSIER & SYSTEMS REGISTER
						</div>
						<h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase leading-none">
							PRODUCTION SYSTEMS
						</h2>
					</div>
					<p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
						Full lifecycle architectures engineered for high transactional integrity, multi-tenant isolation, and sub-second shopfloor streaming.
					</p>
				</div>

				{/* Architectural Filter Index (Clear active states) */}
				<div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 text-xs font-mono">
					<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase mr-1">FILTER:</span>
					{categories.map((cat) => {
						const isActive = filter === cat.label;
						return (
							<button
								key={cat.label}
								onClick={() => setFilter(cat.label)}
								className={`px-3 py-1.5 uppercase transition-all border ${
									isActive
										? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold border-zinc-950 dark:border-white shadow-sm"
										: "bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white"
								}`}
							>
								{cat.label} ({cat.count})
							</button>
						);
					})}
				</div>

				{/* The Systems Ledger: Ruled Architectural Rows (No Cards) */}
				<div className="space-y-0 divide-y divide-zinc-200 dark:divide-zinc-800 border-t border-b border-zinc-200 dark:border-zinc-800">
					{filteredProjects.map((project, idx) => {
						const isExpanded = expandedProject === project.id;
						const indexNumber = `0${idx + 1}`.slice(-2);

						return (
							<div
								key={project.id}
								className={`py-8 sm:py-10 transition-colors ${
									isExpanded ? "bg-zinc-50/50 dark:bg-zinc-900/30" : "hover:bg-zinc-50/30 dark:hover:bg-zinc-900/10"
								}`}
							>
								{/* Summary Row */}
								<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
									
									{/* Index & Classification (3 cols) */}
									<div className="lg:col-span-3 space-y-1.5 font-mono text-xs">
										<div className="flex items-center gap-2">
											<span className="font-bold text-zinc-950 dark:text-white text-sm">
												SYS.{indexNumber} //
											</span>
											<span className="text-zinc-600 dark:text-zinc-400 uppercase truncate font-medium">
												{project.category}
											</span>
										</div>
										<div className="text-zinc-600 dark:text-zinc-400">
											{project.isProprietary ? (
												<span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 font-medium">
													<Lock className="w-3 h-3 text-amber-500" />
													<span>{project.organization}</span>
												</span>
											) : (
												<span className="text-emerald-700 dark:text-emerald-400 font-semibold">
													OPEN SPEC // PUBLIC REPO
												</span>
											)}
										</div>
										<div className="pt-2 text-zinc-950 dark:text-zinc-50 font-bold">
											[{project.badge}]
										</div>
									</div>

									{/* Main System Overview (6 cols) */}
									<div className="lg:col-span-6 space-y-3">
										<h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight uppercase">
											{project.title}
										</h3>
										
										<p className="text-xs sm:text-sm font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
											// {project.tagline}
										</p>

										<p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
											{project.description}
										</p>

										{/* Inline Stack Ledger (No pills) */}
										<div className="pt-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex flex-wrap gap-x-2 gap-y-1">
											<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase">STACK:</span>
											<span className="text-zinc-950 dark:text-zinc-100 font-medium">
												{project.tech.join(" · ")}
											</span>
										</div>
									</div>

									{/* Action & Inspection Trigger (3 cols) */}
									<div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-3 pt-2">
										<button
											onClick={() => toggleExpand(project.id)}
											className={`px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2 border ${
												isExpanded
													? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 border-zinc-950 dark:border-white"
													: "bg-transparent text-zinc-900 dark:text-white border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white"
											}`}
										>
											<span>{isExpanded ? "Close Spec" : "Inspect Spec"}</span>
											{isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
										</button>

										{!project.isProprietary && project.links?.github && (
											<a
												href={project.links.github}
												target="_blank"
												rel="noreferrer"
												className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1.5"
											>
												<Github className="w-3.5 h-3.5" />
												<span>Source Code ↗</span>
											</a>
										)}
									</div>

								</div>

								{/* Expanded Architectural Dossier */}
								<AnimatePresence>
									{isExpanded && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800"
										>
											<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-mono">
												
												{/* Left: Key Architecture Decisions */}
												<div className="lg:col-span-7 space-y-3">
													<div className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
														<span className="w-1.5 h-1.5 bg-emerald-500" />
														<span>Architectural Trade-Offs & Decisions</span>
													</div>
													
													{project.architectureDecisions && (
														<div className="space-y-2.5 pl-3 border-l-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
															{project.architectureDecisions.map((decision, dIdx) => (
																<div key={dIdx} className="flex items-start gap-2">
																	<span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
																	<span>{decision}</span>
																</div>
															))}
														</div>
													)}

													{project.impact && (
														<div className="pt-3">
															<span className="text-zinc-400 block mb-1">IMPACT & MEASUREMENT:</span>
															<p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-xs sm:text-[13px]">
																{project.impact}
															</p>
														</div>
													)}
												</div>

												{/* Right: Technical Hurdle & Outcome */}
												<div className="lg:col-span-5 space-y-4">
													{project.keyChallenges && (
														<div className="border border-zinc-200 dark:border-zinc-800 p-4 bg-white/60 dark:bg-zinc-900/60 space-y-1.5">
															<span className="text-zinc-400 uppercase tracking-wider font-bold block text-[11px]">
																Core Technical Hurdle
															</span>
															<p className="text-zinc-700 dark:text-zinc-300 text-xs leading-relaxed">
																{project.keyChallenges}
															</p>
														</div>
													)}

													{project.engineeringOutcomes && (
														<div className="border border-zinc-200 dark:border-zinc-800 p-4 bg-white/60 dark:bg-zinc-900/60 space-y-1.5">
															<span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-bold block text-[11px]">
																Engineering Outcome
															</span>
															<p className="text-zinc-700 dark:text-zinc-300 text-xs leading-relaxed">
																{project.engineeringOutcomes}
															</p>
														</div>
													)}
												</div>

											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>

			</div>
		</section>
	);
}
