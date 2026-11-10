import React from "react";
import {
	ArrowUpRight,
	FileText,
	Github,
	Linkedin,
	Mail,
	Phone,
	Copy,
	Check,
	MapPin,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useCopyFeedback } from "../hooks/useCopyFeedback";
import Tooltip from "./Tooltip";

export default function Hero() {
	const { copy, isCopied } = useCopyFeedback();

	return (
		<section
			id="about"
			className="relative pt-20 sm:pt-24 lg:pt-12 pb-14 border-b border-slate-200 dark:border-slate-800"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
				{/* Status & Location Pill */}
				<div className="flex flex-wrap items-center gap-3 text-xs">
					<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60 font-medium">
						<span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
						{personalInfo.noticeStatus}
					</span>
					<span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
						<MapPin className="w-3.5 h-3.5 text-slate-400" />
						{personalInfo.availability}
					</span>
					<span className="text-slate-400 dark:text-slate-600 hidden sm:inline">•</span>
					<span className="text-slate-600 dark:text-slate-400 font-medium">
						{personalInfo.targetRoles}
					</span>
				</div>

				{/* Headline & 1-Line Pitch */}
				<div className="space-y-3">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
						Prakhar
					</h1>
					<p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
						{personalInfo.title} · <span className="text-slate-600 dark:text-slate-300 font-normal">{personalInfo.roleLine}</span>
					</p>
					<p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
						{personalInfo.bio}
					</p>
				</div>

				{/* Clean Primary CTA Row */}
				<div className="flex flex-wrap items-center gap-3">
					<a
						href={personalInfo.resumeUrl}
						target="_blank"
						rel="noopener noreferrer"
						download="Prakhar_CV_2026.pdf"
						className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm"
					>
						<FileText className="w-4 h-4" />
						<span>Download Resume (PDF)</span>
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>

					<div className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] overflow-hidden">
						<a
							href={`mailto:${personalInfo.email}`}
							className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
						>
							<Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
							<span>Email</span>
						</a>
						<Tooltip text={isCopied("email") ? "Copied!" : "Copy email"} position="top">
							<button
								type="button"
								onClick={() => copy("email", personalInfo.email)}
								aria-label="Copy email address"
								className="px-3 py-2.5 border-l border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
							>
								{isCopied("email") ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
							</button>
						</Tooltip>
					</div>

					<a
						href={`tel:+91${personalInfo.phoneRaw}`}
						className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
					>
						<Phone className="w-4 h-4 text-slate-400" />
						<span>{personalInfo.phone}</span>
					</a>

					<a
						href={personalInfo.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
					>
						<Github className="w-4 h-4" />
						<span>GitHub</span>
					</a>

					<a
						href={personalInfo.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
					>
						<Linkedin className="w-4 h-4" />
						<span>LinkedIn</span>
					</a>
				</div>

				{/* 4 Scannable Key Metrics */}
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
					{personalInfo.stats.map((stat) => (
						<div
							key={stat.label}
							className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d]"
						>
							<div className="text-xs font-medium text-slate-500 dark:text-slate-400">
								{stat.label}
							</div>
							<div className="text-xl font-bold text-slate-900 dark:text-white mt-1">
								{stat.value}
							</div>
							<div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-snug">
								{stat.sub}
							</div>
						</div>
					))}
				</div>

				{/* Keyword Strip (Instant Recruiter ATS Scan) */}
				<div className="flex flex-wrap items-center gap-2 pt-1">
					<span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
						Core Stack:
					</span>
					{personalInfo.coreKeywords.map((kw) => (
						<span
							key={kw}
							className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/70"
						>
							{kw}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
