import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Zap,
	ChevronDown,
	ChevronUp,
	CheckCircle,
	Clock,
	Calendar,
	Users,
	Rocket,
} from "lucide-react";
import {
	experienceData,
	educationData,
	teamStructure,
} from "../data/portfolioData";

const SPRINT_DAYS = [
	{
		day: "Day 01",
		title: "Scoping & Data Architecture",
		desc: "Founder sync, client requirements signoff, PostgreSQL table design, index strategy, and REST endpoint contracts.",
	},
	{
		day: "Day 02",
		title: "Backend Core & Ingestion",
		desc: "Node.js Express REST APIs, JWT authentication, RBAC middleware, and Modbus/MQTT hardware protocol drivers.",
	},
	{
		day: "Day 03",
		title: "Frontend UI & State Flow",
		desc: "Modular React.js interfaces, reusable data tables, responsive charts, and real-time state orchestration.",
	},
	{
		day: "Day 04",
		title: "Hardware Loop Testing & QA",
		desc: "End-to-end integration tests with live PLCs/machines, concurrency stress tests, and bug bashes.",
	},
	{
		day: "Day 05",
		title: "Cloud Release & Handover",
		desc: "AWS EC2 / Azure deployment via Nginx, SSL certificates, PM2 process management, and operator training.",
	},
];

export default function ExperienceTimeline() {
	const [showSprintModal, setShowSprintModal] = useState(false);

	return (
		<section
			id="experience"
			className="py-[70px] sm:py-[80px] border-b border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#161617] transition-colors"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
				{/* Apple Section Header (Vertical Stack) */}
				<div className="space-y-4">
					<div className="space-y-1.5">
						<p className="text-[12px] font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
							04 · Career Progression
						</p>
						<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
							Professional Experience &amp; Leadership
						</h2>
						<p className="text-[15px] sm:text-[16px] text-[#86868b] font-normal">
							YM Automation Pvt Ltd · SDE → Software Manager (Jul
							2022 – Oct 2026)
						</p>
					</div>

					{/* 5-Day Sprint Breakdown Trigger Button */}
					<div className="flex items-center">
						<button
							type="button"
							onClick={() => setShowSprintModal((prev) => !prev)}
							className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] hover:border-[#0071e3] text-[#0071e3] dark:text-[#2997ff] text-[12px] font-mono font-semibold shadow-xs transition-colors"
						>
							<Rocket className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
							<span>Inspect 5-Day Delivery Sprint Breakdown</span>
							{showSprintModal ?
								<ChevronUp className="w-3.5 h-3.5" />
							:	<ChevronDown className="w-3.5 h-3.5" />}
						</button>
					</div>
				</div>

				{/* 5-Day Sprint Execution Breakdown Drawer */}
				<AnimatePresence>
					{showSprintModal && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="overflow-hidden"
						>
							<div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1e1e20] border border-[#0071e3]/30 dark:border-[#2997ff]/30 shadow-md space-y-4 font-mono">
								<div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#e5e7eb] dark:border-[#2d2d2f]">
									<div className="flex items-center gap-2">
										<Zap className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
										<span className="font-bold text-[13px] text-[#1d1d1f] dark:text-white uppercase tracking-wider">
											Rapid Sprint Blueprint: 3 Projects
											Delivered in 5 Working Days
										</span>
									</div>
									<span className="text-[11px] text-[#86868b]">
										Design to Cloud Production
									</span>
								</div>

								{/* 5-Day Visual Track */}
								<div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
									{SPRINT_DAYS.map((s) => (
										<div
											key={s.day}
											className="p-3 rounded-xl bg-[#f5f5f7] dark:bg-[#161617] border border-[#e5e7eb] dark:border-[#2d2d2f] space-y-1.5 flex flex-col justify-between"
										>
											<div className="flex items-center justify-between">
												<span className="text-[10px] font-bold text-[#0071e3] dark:text-[#2997ff]">
													{s.day}
												</span>
												<CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
											</div>
											<div className="font-bold text-[12px] text-[#1d1d1f] dark:text-white leading-tight">
												{s.title}
											</div>
											<div className="text-[10px] text-[#86868b] leading-relaxed pt-1">
												{s.desc}
											</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Apple Clean Progression Cards */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
					{experienceData.map((item) => (
						<div
							key={item.id}
							className="p-6 sm:p-7 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] flex flex-col justify-between space-y-6 transition-colors"
						>
							<div className="space-y-4">
								{/* Card Title & Meta (Vertical Stack) */}
								<div className="space-y-1.5">
									<div className="flex items-center justify-between gap-2">
										<span className="text-[12px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] border border-[#0071e3]/20">
											{item.period}
										</span>
										<span className="text-[12px] text-[#86868b] font-medium">
											{item.location}
										</span>
									</div>
									<h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white tracking-tight pt-0.5">
										{item.role}
									</h3>
									<p className="text-[14px] text-[#86868b]">
										{item.company}
									</p>
								</div>

								{/* Highlights: One After Another (Stacked Vertical Layout) */}
								<div className="space-y-3.5 border-t border-[#e5e7eb] dark:border-[#2d2d2f] pt-4">
									{item.highlights.map((h, i) => (
										<div key={i} className="space-y-1">
											<div className="text-[13px] sm:text-[14px] font-semibold text-[#0071e3] dark:text-[#2997ff]">
												{h.tag}
											</div>
											<p className="text-[13px] sm:text-[14px] text-[#1d1d1f]/85 dark:text-[#f5f5f7]/85 leading-relaxed">
												{h.text}
											</p>
										</div>
									))}
								</div>
							</div>

							<div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#e5e7eb] dark:border-[#2d2d2f]">
								{item.tech.map((t) => (
									<span
										key={t}
										className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#f5f5f7] dark:bg-[#2d2d2f] text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#e5e7eb] dark:border-[#333336]"
									>
										{t}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Team Scope + Education Row */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
					<div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] space-y-3 transition-colors">
						<div className="flex items-center justify-between">
							<span className="text-[13px] font-semibold text-[#1d1d1f] dark:text-white">
								Team Led as Software Manager
							</span>
							<span className="text-[12px] font-mono text-[#86868b]">
								Oct 2024 – Oct 2026
							</span>
						</div>
						<div className="flex flex-wrap gap-2">
							{teamStructure.map((m) => (
								<span
									key={m.role}
									className="px-3 py-1 rounded-full text-[12px] bg-[#f5f5f7] dark:bg-[#2d2d2f] text-[#1d1d1f] dark:text-[#f5f5f7] font-medium border border-[#e5e7eb] dark:border-[#333336]"
								>
									{m.count} {m.role}
								</span>
							))}
						</div>
					</div>

					<div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#202022] space-y-1.5 transition-colors">
						<div className="flex items-center justify-between">
							<span className="text-[11px] font-mono uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] font-semibold">
								Education
							</span>
							<span className="text-[12px] font-mono text-[#86868b]">
								{educationData.location}
							</span>
						</div>
						<div className="text-[15px] sm:text-[16px] font-bold text-[#1d1d1f] dark:text-white">
							{educationData.institution}
						</div>
						<div className="text-[13px] text-[#86868b]">
							{educationData.degree}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
