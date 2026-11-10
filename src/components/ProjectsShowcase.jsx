import React, { useState } from "react";
import { ChevronDown, ChevronUp, Code2, Sliders, Monitor } from "lucide-react";
import { projectsData } from "../data/portfolioData";
import { ErpDashboardMockup, IiotTelemetryMockup, CodeContractViewer } from "./ProjectMockups";

export default function ProjectsShowcase() {
	const [expandedProject, setExpandedProject] = useState(null);
	const [specTabs, setSpecTabs] = useState({});

	const toggleExpand = (id) => {
		setExpandedProject(expandedProject === id ? null : id);
		if (!specTabs[id]) {
			setSpecTabs((prev) => ({ ...prev, [id]: "code" }));
		}
	};

	const setProjectTab = (id, tab) => {
		setSpecTabs((prev) => ({ ...prev, [id]: tab }));
	};

	return (
		<section
			id="projects"
			className="py-14 sm:py-16 border-b border-slate-200 dark:border-slate-800"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
				{/* Section Header */}
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
					<div>
						<p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
							02 · Production Systems
						</p>
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
							Key Projects &amp; Engineering Ownership
						</h2>
					</div>
					<p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
						Click any system to inspect SQL, API &amp; concurrency code.
					</p>
				</div>

				{/* Compact 2x2 Keyword Grid */}
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
					{projectsData.map((project) => {
						const isExpanded = expandedProject === project.id;
						const currentTab = specTabs[project.id] || "code";

						return (
							<div
								key={project.id}
								className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] p-5 flex flex-col justify-between transition-colors ${
									isExpanded ? "xl:col-span-2 ring-1 ring-blue-500/30" : "hover:border-slate-300 dark:hover:border-slate-700"
								}`}
							>
								<div className="space-y-4">
									{/* Card Top Meta */}
									<div className="flex flex-wrap items-center justify-between gap-2">
										<span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/60">
											{project.category}
										</span>
										<span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
											{project.badge}
										</span>
									</div>

									{/* Title & 1-Line Tagline */}
									<div>
										<h3 className="text-lg font-bold text-slate-900 dark:text-white">
											{project.title}
										</h3>
										<p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
											{project.tagline}
										</p>
									</div>

									{/* Keyword-Centric Facts */}
									<dl className="space-y-1.5 text-xs sm:text-[13px] border-t border-slate-100 dark:border-slate-800/80 pt-3">
										<div className="flex gap-2">
											<dt className="font-semibold text-slate-900 dark:text-slate-200 shrink-0 w-24">Problem:</dt>
											<dd className="text-slate-600 dark:text-slate-400">{project.businessProblem}</dd>
										</div>
										<div className="flex gap-2">
											<dt className="font-semibold text-slate-900 dark:text-slate-200 shrink-0 w-24">Architecture:</dt>
											<dd className="text-slate-600 dark:text-slate-400">{project.architecture}</dd>
										</div>
										<div className="flex gap-2">
											<dt className="font-semibold text-blue-700 dark:text-blue-400 shrink-0 w-24">SQL / Perf:</dt>
											<dd className="text-slate-700 dark:text-slate-300">{project.sqlAndPerformance}</dd>
										</div>
										<div className="flex gap-2">
											<dt className="font-semibold text-slate-900 dark:text-slate-200 shrink-0 w-24">Ownership:</dt>
											<dd className="text-slate-600 dark:text-slate-400">{project.ownership}</dd>
										</div>
									</dl>
								</div>

								{/* Tech Chips & Expand Trigger */}
								<div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
									<div className="flex flex-wrap gap-1.5">
										{project.tech.map((t) => (
											<span
												key={t}
												className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
											>
												{t}
											</span>
										))}
									</div>

									<button
										type="button"
										onClick={() => toggleExpand(project.id)}
										aria-expanded={isExpanded}
										className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 shrink-0"
									>
										<span>{isExpanded ? "Hide Details" : "Code & Decisions"}</span>
										{isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
									</button>
								</div>

								{/* Optional Expandable Technical Drawer */}
								{isExpanded && (
									<div className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-800 space-y-4">
										<div className="flex flex-wrap items-center gap-2 text-xs">
											{[
												{ id: "code", label: "SQL / API / Concurrency Code", icon: Code2 },
												{ id: "architecture", label: "Decisions & Outcomes", icon: Sliders },
												{ id: "mockup", label: "Concept Preview", icon: Monitor },
											].map((t) => {
												const Icon = t.icon;
												const isActive = currentTab === t.id;
												return (
													<button
														type="button"
														key={t.id}
														onClick={() => setProjectTab(project.id, t.id)}
														aria-pressed={isActive}
														className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 border transition-colors ${
															isActive
																? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 dark:border-blue-600"
																: "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300"
														}`}
													>
														<Icon className="w-3.5 h-3.5" />
														<span>{t.label}</span>
													</button>
												);
											})}
										</div>

										{currentTab === "code" && (
											<CodeContractViewer projectId={project.id} />
										)}

										{currentTab === "architecture" && (
											<div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
												<div className="md:col-span-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
													<div className="font-semibold text-slate-900 dark:text-white">
														Key Decisions
													</div>
													{project.architectureDecisions.map((d, i) => (
														<div key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
															<span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
															<span>{d}</span>
														</div>
													))}
												</div>
												<div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
													<div>
														<div className="font-semibold text-slate-900 dark:text-white mb-1">Technical Hurdle</div>
														<p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.keyChallenges}</p>
													</div>
													<div>
														<div className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">Outcome</div>
														<p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.engineeringOutcomes}</p>
													</div>
												</div>
											</div>
										)}

										{currentTab === "mockup" && (
											<div>
												{project.id === "enterprise-erp-saas" ? (
													<ErpDashboardMockup />
												) : project.category.includes("IIoT") ? (
													<IiotTelemetryMockup />
												) : (
													<div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-xs space-y-2">
														<div className="font-semibold text-slate-900 dark:text-white">
															12-Stage Branching Workflow
														</div>
														<div className="flex flex-wrap items-center gap-2">
															{["RAW MATERIAL", "CNC MILLING", "QA INSPECT", "ASSEMBLY", "HEAT TREAT", "DISPATCH"].map((st, i) => (
																<React.Fragment key={st}>
																	<span className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px]">
																		0{i + 1}. {st}
																	</span>
																	{i < 5 && <span className="text-slate-400">→</span>}
																</React.Fragment>
															))}
														</div>
													</div>
												)}
											</div>
										)}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
