import React from "react";
import {
	ArrowDown,
	ArrowUpRight,
	FileText,
	Github,
	Linkedin,
	Mail,
	Phone,
	Copy,
	Check,
	MapPin,
	Sparkles,
	MessageSquare,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useCopyFeedback } from "../hooks/useCopyFeedback";
import { useBengaluruTime } from "../hooks/useBengaluruTime";
import Tooltip from "./Tooltip";
import prakharImg from "../assets/Prakhar.png";

export default function Hero() {
	const { copy, isCopied } = useCopyFeedback();
	const bengaluruTime = useBengaluruTime();

	return (
		<section
			id="about"
			className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-[#e5e7eb] dark:border-[#262628] bg-white dark:bg-black transition-colors"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
				{/* Top Status & Availability Bar */}
				<div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-[#e5e7eb] dark:border-[#262628] pb-4">
					<div className="inline-flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-[#34c759] shrink-0 animate-pulse" />
						<span className="font-semibold text-[#1d1d1f] dark:text-white uppercase tracking-wider">
							{personalInfo.noticeStatus}
						</span>
						<span className="text-[#86868b]">·</span>
						<span className="text-[#86868b] hidden sm:inline">{personalInfo.workModes}</span>
					</div>

					<div className="inline-flex items-center gap-3 text-[#86868b]">
						<span className="inline-flex items-center gap-1">
							<MapPin className="w-3.5 h-3.5" />
							<span>Bengaluru, India</span>
						</span>
						{bengaluruTime && (
							<>
								<span>·</span>
								<span className="font-mono text-[#0071e3] dark:text-[#2997ff]">
									{bengaluruTime} IST
								</span>
							</>
						)}
					</div>
				</div>

				{/* Editorial Hero Layout (Two Columns) */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
					{/* Left Column: Positioning & Bio (7 cols) */}
					<div className="lg:col-span-7 space-y-6">
						<div className="space-y-3">
							<div className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
								01 · Overview · Senior Full Stack Engineer
							</div>
							<h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1d1d1f] dark:text-white leading-[1.14]">
								Senior Full Stack Engineer building scalable SaaS, ERP &amp; Industrial IoT solutions.
							</h1>
							<p className="text-base sm:text-lg text-[#86868b] leading-relaxed pt-1 font-normal">
								I build full-stack web applications, multi-tenant enterprise platforms, and connected industrial systems — combining hands-on React, Node.js, and PostgreSQL engineering with end-to-end architectural ownership.
							</p>
						</div>

						{/* Quick Proof Points */}
						<div className="p-4 rounded-xl bg-[#f5f5f7] dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] text-xs sm:text-[13px] text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90 space-y-2">
							<div className="flex items-start gap-2">
								<span className="text-[#0071e3] dark:text-[#2997ff] font-bold">•</span>
								<span>
									<strong>4+ years</strong> engineering mission-critical enterprise SaaS, multi-tenant ERP, and Industrial IoT systems in startup environments.
								</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-[#0071e3] dark:text-[#2997ff] font-bold">•</span>
								<span>
									Progressed from <strong>founding SDE</strong> to <strong>Software Manager</strong> at YM Automation, balancing ~70% hands-on engineering with ~30% technical leadership.
								</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-[#0071e3] dark:text-[#2997ff] font-bold">•</span>
								<span>
									<strong>12+ production platforms independently delivered</strong> as SDE, and guided delivery of <strong>7–8 client projects</strong> across ~10 customer organizations as Software Manager.
								</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-[#0071e3] dark:text-[#2997ff] font-bold">•</span>
								<span>
									End-to-end full-stack ownership: <strong>Node.js, React.js, PostgreSQL</strong> (contributed to 100+ tables, 300+ REST APIs), and industrial protocols (MQTT, Modbus).
								</span>
							</div>
						</div>

						{/* Primary & Secondary Action Buttons (Strictly Single Row) */}
						<div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1 w-full max-w-lg">
							<a
								href="#projects"
								className="inline-flex items-center justify-center gap-1.5 px-2 sm:px-4 h-[42px] sm:h-[44px] rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white text-[12px] sm:text-[14px] font-medium whitespace-nowrap transition-all shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0"
							>
								<span><span className="hidden sm:inline">View </span>Projects</span>
								<ArrowDown className="w-3.5 h-3.5 shrink-0" />
							</a>

							<a
								href={personalInfo.resumeUrl}
								target="_blank"
								rel="noopener noreferrer"
								download="Prakhar_CV_2026.pdf"
								className="inline-flex items-center justify-center gap-1.5 px-2 sm:px-4 h-[42px] sm:h-[44px] rounded-full border border-[#e5e7eb] dark:border-[#262628] bg-white dark:bg-[#161617] hover:border-[#0071e3] text-[#1d1d1f] dark:text-white text-[12px] sm:text-[14px] font-medium whitespace-nowrap transition-all shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0"
							>
								<FileText className="w-3.5 h-3.5 shrink-0" />
								<span><span className="hidden sm:inline">Download </span>Resume</span>
								<ArrowUpRight className="w-3 h-3 opacity-80 hidden md:inline shrink-0" />
							</a>

							<a
								href="#contact"
								className="inline-flex items-center justify-center gap-1.5 px-2 sm:px-4 h-[42px] sm:h-[44px] rounded-full border border-[#0071e3]/40 text-[#0071e3] dark:text-[#2997ff] hover:bg-[#0071e3]/5 text-[12px] sm:text-[14px] font-medium whitespace-nowrap transition-all hover:-translate-y-0.5 active:translate-y-0"
							>
								<Mail className="w-3.5 h-3.5 shrink-0" />
								<span><span className="hidden sm:inline">Contact </span>Me</span>
							</a>
						</div>

						{/* Professional Links */}
						<div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#86868b] pt-1">
							{/* Email copy */}
							<div className="inline-flex items-center gap-1.5 shrink-0">
								<a
									href={`mailto:${personalInfo.email}`}
									className="text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] transition-colors"
								>
									{personalInfo.email}
								</a>
								<Tooltip text={isCopied("email") ? "Copied!" : "Copy email"} position="top">
									<button
										type="button"
										onClick={() => copy("email", personalInfo.email)}
										aria-label="Copy email address"
										className="text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white p-0.5"
									>
										{isCopied("email") ? (
											<Check className="w-3.5 h-3.5 text-[#34c759]" />
										) : (
											<Copy className="w-3.5 h-3.5" />
										)}
									</button>
								</Tooltip>
							</div>

							<a
								href={personalInfo.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors shrink-0"
							>
								<Github className="w-3.5 h-3.5" />
								<span>GitHub</span>
							</a>

							<a
								href={personalInfo.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors shrink-0"
							>
								<Linkedin className="w-3.5 h-3.5" />
								<span>LinkedIn</span>
							</a>

							<a
								href={`tel:+91${personalInfo.phoneRaw}`}
								className="inline-flex items-center gap-1.5 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors shrink-0"
							>
								<Phone className="w-3.5 h-3.5" />
								<span>{personalInfo.phone}</span>
							</a>
						</div>
					</div>

					{/* Right Column: Authentic Editorial Portrait (5 cols) */}
					<div className="lg:col-span-5 flex flex-col items-center">
						<div className="w-full max-w-[340px] rounded-2xl border border-[#e5e7eb] dark:border-[#262628] bg-[#f5f5f7] dark:bg-[#111112] p-3 space-y-3 shadow-xs">
							<div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#e5e7eb] dark:bg-[#1b1b1d]">
								<img
									src={prakharImg}
									alt="Prakhar — Senior Full Stack Engineer"
									className="w-full h-full object-cover object-top"
								/>
							</div>

							<div className="px-1 text-center space-y-1">
								<div className="text-[15px] font-bold text-[#1d1d1f] dark:text-white tracking-tight">
									Prakhar
								</div>
								<div className="text-xs text-[#86868b] font-mono">
									Senior Full Stack Engineer &amp; Tech Lead
								</div>
								<div className="text-[11px] text-[#86868b] font-mono pt-0.5">
									YM Automation · Jul 2022 – Oct 2026
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Recruiter 4-Metric Proof Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#e5e7eb] dark:border-[#262628]">
					{personalInfo.stats.map((stat) => (
						<div
							key={stat.label}
							className="p-4 sm:p-4.5 rounded-xl border border-[#e5e7eb] dark:border-[#262628] bg-[#fafafc] dark:bg-[#111112] flex flex-col transition-colors h-full"
						>
							<span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] block mb-2">
								{stat.label}
							</span>
							<div className="text-2xl sm:text-[26px] font-bold text-[#1d1d1f] dark:text-white tracking-tight leading-none mb-3 tabular-nums">
								{stat.value}
							</div>
							<p className="text-xs text-[#86868b] leading-relaxed mt-auto pt-2 border-t border-[#e5e7eb]/60 dark:border-[#262628]/60">
								{stat.sub}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
