import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Activity } from "lucide-react";

const ARCHITECTURES = {
	erp: {
		tab: "ERP Multi-Tenancy",
		title: "Per-Company Database Isolation",
		summary: "12+ Modules · 300+ APIs · Separate PostgreSQL DB per Tenant",
		steps: [
			{
				num: "01",
				label: "React Client Application",
				proto: "HTTPS",
				detail: "Renders modular ERP UI and dispatches authenticated API requests with JWT.",
			},
			{
				num: "02",
				label: "Express API Gateway",
				proto: "JWT + RBAC",
				detail: "Validates JWT tokens, sanitizes payloads, and verifies granular role permissions.",
			},
			{
				num: "03",
				label: "Tenant Pool Router",
				proto: "pg-pool",
				detail: "Extracts company tenant ID from token and resolves the isolated database pool.",
			},
			{
				num: "04",
				label: "Per-Tenant Database",
				proto: "ACID + JSONB",
				detail: "Executes queries against isolated PostgreSQL databases across 100+ tables.",
			},
		],
	},
	workflow: {
		tab: "Shopfloor Workflow",
		title: "12-Stage Routing & Keyset Pagination",
		summary:
			"Finite-State Engine · Pessimistic Row Locks · Keyset Cursor SQL",
		steps: [
			{
				num: "01",
				label: "Shopfloor Terminal",
				proto: "React UI",
				detail: "Captures stage progress, rework routes, and scrap quantities from plant operators.",
			},
			{
				num: "02",
				label: "Finite-State Engine",
				proto: "FOR UPDATE",
				detail: "Validates route graphs and locks stage records with SELECT ... FOR UPDATE.",
			},
			{
				num: "03",
				label: "BOM Keyset Query",
				proto: "Keyset SQL",
				detail: "Retrieves 1,000+ row BOM records using keyset cursor filters instead of OFFSET.",
			},
			{
				num: "04",
				label: "Production Reports API",
				proto: "REST JSON",
				detail: "Streams real-time WIP tracking metrics and paginated BOM datasets to plant teams.",
			},
		],
	},
	iot: {
		tab: "IIoT Ingestion",
		title: "24×7 Shopfloor Telemetry Pipeline",
		summary: "Up to 65 Devices · ~1s Polling · MQTT & Modbus TCP/RTU",
		steps: [
			{
				num: "01",
				label: "Factory PLCs & CNCs",
				proto: "RS-485 / LAN",
				detail: "Industrial machines and controllers exposing live telemetry and holding registers.",
			},
			{
				num: "02",
				label: "Node.js Telemetry Poller",
				proto: "Modbus / MQTT",
				detail: "Polls up to 65 devices at ~1s intervals using concurrency locks and retry backoff.",
			},
			{
				num: "03",
				label: "Stream & Batch Worker",
				proto: "WebSockets",
				detail: "Pushes real-time alerts to clients and buffers metrics for batch database inserts.",
			},
			{
				num: "04",
				label: "Time-Series Storage & UI",
				proto: "Timescale / SQL",
				detail: "Stores sensor records into indexed tables driving real-time shopfloor dashboards.",
			},
		],
	},
	rollup: {
		tab: "Energy Analytics",
		title: "Time-Series Rollups & Energy Analytics",
		summary:
			"Hourly/Daily Buckets · Idempotent Upserts · Fast Trend Reporting",
		steps: [
			{
				num: "01",
				label: "Raw Sensor Logs",
				proto: "Append-Only",
				detail: "Persists high-frequency machine telemetry without degrading operational queries.",
			},
			{
				num: "02",
				label: "Scheduled Aggregator",
				proto: "Node.js Cron",
				detail: "Executes scheduled background workers to downsample raw logs into hourly buckets.",
			},
			{
				num: "03",
				label: "Idempotent Upsert",
				proto: "ON CONFLICT",
				detail: "Writes energy rollups using INSERT ... ON CONFLICT DO UPDATE in transactions.",
			},
			{
				num: "04",
				label: "Analytics Dashboard API",
				proto: "REST JSON",
				detail: "Delivers historical energy trends and machine efficiency analytics in sub-seconds.",
			},
		],
	},
};

export default function ParallaxBanner() {
	const [activeTab, setActiveTab] = useState("erp");
	const [tracingStep, setTracingStep] = useState(null);
	const [isTracing, setIsTracing] = useState(false);
	const current = ARCHITECTURES[activeTab];

	const handleTraceFlow = () => {
		if (isTracing) return;
		setIsTracing(true);
		setTracingStep(0);

		let step = 0;
		const interval = setInterval(() => {
			step++;
			if (step >= current.steps.length) {
				clearInterval(interval);
				setIsTracing(false);
				setTimeout(() => setTracingStep(null), 1800);
			} else {
				setTracingStep(step);
			}
		}, 900);
	};

	return (
		<section
			id="architecture"
			className="py-[70px] sm:py-[80px] border-b border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-black transition-colors"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
				{/* Apple Section Header & Tab Controls (Vertical Stack) */}
				<div className="space-y-4">
					<div className="space-y-1.5">
						<p className="text-[12px] font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
							03 · System Architecture
						</p>
						<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
							Production Data Flows
						</h2>
						<p className="text-[15px] sm:text-[16px] text-[#86868b] font-normal">
							Architectural topology across enterprise SaaS and
							industrial telemetry pipelines.
						</p>
					</div>

					{/* Apple Segmented Pill Tabs with Framer Motion Spring Pill */}
					<div className="flex items-center">
						<div className="p-1 rounded-2xl sm:rounded-full bg-[#f5f5f7] dark:bg-[#161617] border border-[#e5e7eb] dark:border-[#2d2d2f] inline-flex flex-wrap items-center gap-1 shadow-sm no-scrollbar">
							{Object.entries(ARCHITECTURES).map(
								([key, item]) => {
									const isActive = activeTab === key;
									return (
										<button
											type="button"
											key={key}
											onClick={() => setActiveTab(key)}
											aria-pressed={isActive}
											className="relative px-3.5 sm:px-4 py-1.5 rounded-full text-[12px] font-medium transition-colors whitespace-nowrap z-10"
										>
											{isActive && (
												<motion.div
													layoutId="activeArchTab"
													className="absolute inset-0 rounded-full bg-[#0071e3] shadow-sm -z-10"
													transition={{
														type: "spring",
														stiffness: 380,
														damping: 30,
													}}
												/>
											)}
											<span
												className={
													isActive ?
														"text-white font-semibold"
													:	"text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3]"
												}
											>
												{item.tab}
											</span>
										</button>
									);
								},
							)}
						</div>
					</div>
				</div>

				{/* Architecture Showcase Card */}
				<div className="p-6 sm:p-8 rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#161617] space-y-6 transition-colors">
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e5e7eb] dark:border-[#2d2d2f]">
						<div>
							<h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
								{current.title}
							</h3>
							<span className="text-[12px] font-mono font-medium text-[#86868b]">
								{current.summary}
							</span>
						</div>

						{/* Interactive Trace Flow Button */}
						<button
							type="button"
							onClick={handleTraceFlow}
							disabled={isTracing}
							className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white text-[12px] font-mono font-semibold shadow-xs transition-colors disabled:opacity-60 self-start sm:self-auto"
						>
							<Activity
								className={`w-3.5 h-3.5 ${isTracing ? "animate-spin" : ""}`}
							/>
							<span>
								{isTracing ?
									`Tracing Step 0${(tracingStep || 0) + 1}...`
								:	"▶ Trace Live Packet Flow"}
							</span>
						</button>
					</div>

					{/* Desktop Horizontal Data Flow with Animated Pulse Connectors */}
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 6 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -6 }}
							transition={{ duration: 0.18 }}
							className="hidden lg:flex items-stretch justify-between gap-2.5"
						>
							{current.steps.map((step, idx) => {
								const isStepActive = tracingStep === idx;
								return (
									<React.Fragment key={step.num}>
										<div
											className={`flex-1 basis-0 min-w-0 p-5 rounded-2xl border min-h-[195px] flex flex-col justify-between transition-all ${
												isStepActive ?
													"bg-[#0071e3]/10 dark:bg-[#0071e3]/20 border-[#0071e3] ring-2 ring-[#0071e3]/30 shadow-md"
												:	"bg-[#f5f5f7] dark:bg-[#202022] border-[#e5e7eb] dark:border-[#2d2d2f]"
											}`}
										>
											<div className="flex items-center justify-between text-xs mb-3">
												<span className="font-mono font-bold text-[#0071e3] dark:text-[#2997ff] text-[13px]">
													{step.num}
												</span>
												<span
													className={`px-2 py-0.5 rounded-full font-mono text-[11px] font-medium whitespace-nowrap ${
														isStepActive ?
															"bg-[#0071e3] text-white"
														:	"bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff]"
													}`}
												>
													{step.proto}
												</span>
											</div>

											<div className="flex flex-col flex-1 justify-between">
												<div className="text-[14px] font-bold text-[#1d1d1f] dark:text-white leading-snug min-h-[38px] flex items-center">
													{step.label}
												</div>
												<p className="text-[12px] text-[#86868b] leading-relaxed mt-2">
													{step.detail}
												</p>
											</div>
										</div>

										{idx < current.steps.length - 1 && (
											<div
												className="shrink-0 self-center w-7 h-7 rounded-full bg-[#f5f5f7] dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] relative overflow-hidden"
												aria-hidden="true"
											>
												<ArrowRight className="w-3.5 h-3.5 z-10" />
												{/* Glowing Data Packet Animation */}
												<motion.div
													className="absolute inset-0 bg-[#0071e3]/20 dark:bg-[#2997ff]/20 rounded-full"
													animate={{
														scale: [0.8, 1.4, 0.8],
														opacity: [
															0.3, 0.8, 0.3,
														],
													}}
													transition={{
														duration: 1.8,
														repeat: Infinity,
														ease: "easeInOut",
														delay: idx * 0.4,
													}}
												/>
											</div>
										)}
									</React.Fragment>
								);
							})}
						</motion.div>
					</AnimatePresence>

					{/* Step Packet Trace Terminal Status Bar */}
					{tracingStep !== null && (
						<motion.div
							initial={{ opacity: 0, y: 3 }}
							animate={{ opacity: 1, y: 0 }}
							className="p-3 rounded-xl bg-[#f5f5f7] dark:bg-[#09090b] border border-[#e5e7eb] dark:border-[#27272a] font-mono text-xs text-[#1d1d1f] dark:text-zinc-300 flex items-center justify-between transition-colors"
						>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-[#34c759] animate-ping" />
								<span>
									PACKET TRANSIT [
									{current.steps[tracingStep].num}]:{" "}
									<strong className="text-[#1d1d1f] dark:text-white">
										{current.steps[tracingStep].label}
									</strong>{" "}
									({current.steps[tracingStep].proto})
								</span>
							</div>
							<span className="text-[#34c759] text-[11px] font-bold">
								VERIFIED [ACTIVE]
							</span>
						</motion.div>
					)}

					{/* Mobile & Tablet Vertical Flow */}
					<div className="lg:hidden flex flex-col gap-2">
						{current.steps.map((step, idx) => (
							<React.Fragment key={step.num}>
								<div className="p-4 sm:p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] flex flex-col justify-between transition-colors">
									<div className="flex items-center justify-between text-xs mb-2 sm:mb-2.5">
										<span className="font-mono font-bold text-[#0071e3] dark:text-[#2997ff] text-[13px]">
											{step.num}
										</span>
										<span className="px-2.5 py-0.5 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] font-mono text-[11px] font-medium whitespace-nowrap">
											{step.proto}
										</span>
									</div>

									<div>
										<div className="text-[14px] sm:text-[15px] font-bold text-[#1d1d1f] dark:text-white">
											{step.label}
										</div>
										<p className="text-[12px] sm:text-[13px] text-[#86868b] leading-relaxed mt-1">
											{step.detail}
										</p>
									</div>
								</div>

								{idx < current.steps.length - 1 && (
									<div
										className="flex justify-center py-1"
										aria-hidden="true"
									>
										<div className="w-7 h-7 rounded-full bg-[#f5f5f7] dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] flex items-center justify-center text-[#0071e3] dark:text-[#2997ff]">
											<ArrowDown className="w-3.5 h-3.5" />
										</div>
									</div>
								)}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
