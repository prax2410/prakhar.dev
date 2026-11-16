import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, GitFork, Database, Sparkles, Terminal } from "lucide-react";
import IiotLiveConsole from "./IiotLiveConsole";
import WorkflowSimulator from "./WorkflowSimulator";
import SqlBenchmarkSimulator from "./SqlBenchmarkSimulator";

const LAB_TABS = [
	{
		id: "iiot",
		label: "Live IIoT Telemetry",
		tag: "65 Machines · MQTT & Modbus",
		icon: Radio,
		component: IiotLiveConsole,
	},
	{
		id: "workflow",
		label: "12-Stage Manufacturing DAG",
		tag: "Finite-State & Row Locking",
		icon: GitFork,
		component: WorkflowSimulator,
	},
	{
		id: "sql",
		label: "Keyset SQL Benchmark",
		tag: "Sub-2ms Cursor Seek",
		icon: Database,
		component: SqlBenchmarkSimulator,
	},
];

export default function InteractiveEngineeringLab() {
	const [activeLabTab, setActiveLabTab] = useState("iiot");

	const currentTab = LAB_TABS.find((t) => t.id === activeLabTab) || LAB_TABS[0];
	const ActiveComponent = currentTab.component;

	return (
		<section
			id="interactive-lab"
			className="py-[70px] sm:py-[85px] border-b border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#161617] transition-colors"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
				{/* Section Header (Vertical Stack - Apple Design System) */}
				<div className="space-y-4">
					<div className="space-y-1.5">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] text-[12px] font-semibold uppercase tracking-wider mb-1">
							<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
							05 · Interactive Sandboxes
						</div>
						<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
							Interactive Engineering Lab
						</h2>
						<p className="text-[15px] sm:text-[16px] text-[#86868b] font-normal max-w-3xl leading-relaxed">
							Direct visual proof of real-world production systems: live machine telemetry, finite-state workflow routing, and database query optimization.
						</p>
					</div>

					{/* Apple Segmented Pills with Animated Sliding Indicator */}
					<div className="flex items-center">
						<div className="p-1 rounded-2xl sm:rounded-full bg-white dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] inline-flex flex-wrap items-center gap-1 shadow-sm no-scrollbar">
							{LAB_TABS.map((tab) => {
								const Icon = tab.icon;
								const isActive = activeLabTab === tab.id;

								return (
									<button
										type="button"
										key={tab.id}
										onClick={() => setActiveLabTab(tab.id)}
										className="relative px-3.5 sm:px-4 py-2 rounded-full text-[12px] font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap z-10"
									>
										{isActive && (
											<motion.div
												layoutId="activeLabPill"
												className="absolute inset-0 rounded-full bg-[#0071e3] shadow-sm -z-10"
												transition={{ type: "spring", stiffness: 380, damping: 30 }}
											/>
										)}
										<Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-[#86868b]"}`} />
										<span className={isActive ? "text-white font-semibold" : "text-[#1d1d1f] dark:text-[#f5f5f7]"}>
											{tab.label}
										</span>
									</button>
								);
							})}
						</div>
					</div>
				</div>

				{/* Active Simulation View with Smooth Fade/Slide */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeLabTab}
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.22, ease: "easeOut" }}
					>
						<ActiveComponent />
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
