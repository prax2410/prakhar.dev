import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Network,
	Activity,
	ArrowRight,
	ShieldCheck,
	CheckCircle2,
} from "lucide-react";

export default function ParallaxBanner() {
	const [activeTab, setActiveTab] = useState("iot");

	const architectures = {
		iot: {
			title: "Industrial IoT Telemetry Pipeline",
			tag: "Hardware-to-Cloud Real-Time Stream",
			description:
				"Connecting shopfloor PLCs and automated factory machines to real-time browser dashboards with sub-second telemetry.",
			steps: [
				{
					label: "01. Equipment Layer",
					title: "Factory PLCs & Machinery",
					detail: "Industrial automation controllers, sensors, and machine registers.",
					protocol: "RS-485 / Ethernet",
				},
				{
					label: "02. Gateway / Edge",
					title: "Protocol Translation",
					detail: "Modbus RTU/TCP polling daemon & MQTT Broker gateway.",
					protocol: "Modbus & MQTT",
				},
				{
					label: "03. Backend Ingestion",
					title: "Node.js & WebSockets",
					detail: "High-frequency telemetry stream ingestion and alert threshold triggers.",
					protocol: "Socket.io & TCP/IP",
				},
				{
					label: "04. Storage & Clients",
					title: "PostgreSQL & React UI",
					detail: "Live SVG gauge visualization and historical trend reporting.",
					protocol: "REST & WebSockets",
				},
			],
			metrics: [
				{ label: "Data Latency", value: "<100ms" },
				{ label: "Protocols", value: "MQTT / Modbus / TCP" },
				{ label: "Process Daemon", value: "PM2 Active" },
			],
		},
		erp: {
			title: "Multi-Module Enterprise SaaS Platform",
			tag: "Centralized Business Operations",
			description:
				"Evolving an internal monolithic ERP into a scalable, multi-module SaaS architecture with reusable service boundaries.",
			steps: [
				{
					label: "01. Client Interface",
					title: "React Web Application",
					detail: "Responsive operational views for HRMS, Attendance, Projects, and Inventory.",
					protocol: "HTTPS / Client SPA",
				},
				{
					label: "02. API Gateway",
					title: "Express.js Routing & RBAC",
					detail: "JWT authentication, role-based permissions, and request validation.",
					protocol: "RESTful JSON APIs",
				},
				{
					label: "03. Service Modules",
					title: "Modular Business Services",
					detail: "Decoupled logic for Payroll calculation, Sales, Purchase orders & Stock.",
					protocol: "Node Service Handlers",
				},
				{
					label: "04. Cloud Database",
					title: "PostgreSQL on Azure/AWS",
					detail: "Optimized relational schemas, query indexing, and automated backups.",
					protocol: "SQL & Cloud DB",
				},
			],
			metrics: [
				{ label: "Modules Covered", value: "8+ Integrated Modules" },
				{ label: "Cloud Hosting", value: "Azure & AWS EC2" },
				{ label: "Security", value: "JWT & Role-Based RBAC" },
			],
		},
		reporting: {
			title: "Automated Reporting & Analytics Worker",
			tag: "Scheduled Data Visualization",
			description:
				"Background cron microservice processing production KPIs and compiling automated PDF and email reports for management.",
			steps: [
				{
					label: "01. Scheduler",
					title: "CRON Job Trigger",
					detail: "Time-based workers running daily and weekly operational triggers.",
					protocol: "Node CRON / Timer",
				},
				{
					label: "02. Aggregation",
					title: "PostgreSQL Analytics",
					detail: "Complex queries aggregating machine output, attendance, and sales figures.",
					protocol: "Indexed DB Queries",
				},
				{
					label: "03. Rendering",
					title: "PDF & Chart Generation",
					detail: "Visual data chart rendering and structured HTML/PDF templating.",
					protocol: "Server-side Renderer",
				},
				{
					label: "04. Dispatch",
					title: "SMTP & Notification",
					detail: "Automated email distribution directly to plant managers and stakeholders.",
					protocol: "Nodemailer / SMTP",
				},
			],
			metrics: [
				{ label: "Workload Reduced", value: "50% Time Saved" },
				{ label: "Dispatch Frequency", value: "Daily & Weekly" },
				{ label: "Report Formats", value: "PDF & Email" },
			],
		},
	};

	const current = architectures[activeTab];

	return (
		<section
			id="architecture"
			className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
					<div>
						<div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
							<Activity className="w-3.5 h-3.5 text-emerald-500" />
							<span>System Design & Architecture</span>
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
							Architectural Pipelines
						</h2>
					</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
						Interactive blueprints of how I structure real-time IoT
						streams, ERP micro-modules, and scheduled background
						workers.
					</p>
				</div>

				{/* Tab Selector */}
				<div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
					<button
						onClick={() => setActiveTab("iot")}
						className={`px-3.5 py-1.5 rounded-xl transition-all ${
							activeTab === "iot" ?
								"bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm"
							:	"bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
						}`}
					>
						01. Industrial IoT Pipeline (MQTT & Modbus)
					</button>
					<button
						onClick={() => setActiveTab("erp")}
						className={`px-3.5 py-1.5 rounded-xl transition-all ${
							activeTab === "erp" ?
								"bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm"
							:	"bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
						}`}
					>
						02. Multi-Module SaaS / ERP Platform
					</button>
					<button
						onClick={() => setActiveTab("reporting")}
						className={`px-3.5 py-1.5 rounded-xl transition-all ${
							activeTab === "reporting" ?
								"bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm"
							:	"bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
						}`}
					>
						03. Automated Reporting Microservice
					</button>
				</div>

				{/* Interactive Architecture View */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.25 }}
						className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 shadow-sm space-y-6"
					>
						{/* Blueprint Header */}
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-zinc-100 dark:border-zinc-800">
							<div>
								<span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
									// {current.tag}
								</span>
								<h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-0.5">
									{current.title}
								</h3>
								<p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl leading-relaxed">
									{current.description}
								</p>
							</div>

							{/* Blueprint Metrics */}
							<div className="flex flex-wrap gap-2 font-mono text-xs">
								{current.metrics.map((m, idx) => (
									<div
										key={idx}
										className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60"
									>
										<div className="text-xs font-bold text-zinc-900 dark:text-white">
											{m.value}
										</div>
										<div className="text-[10px] text-zinc-400 mt-0.5">
											{m.label}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Architecture Pipeline Flow with Data Stream Animation */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
							{current.steps.map((step, idx) => (
								<div
									key={idx}
									className="relative p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 flex flex-col justify-between h-full hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
								>
									{/* Card Top / Body */}
									<div className="flex-1 flex flex-col">
										{/* Step & Protocol */}
										<div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2.5">
											<span className="font-semibold text-zinc-500 dark:text-zinc-400">{step.label}</span>
											<span className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-700/60 text-zinc-700 dark:text-zinc-300 text-[10px] font-mono">
												{step.protocol}
											</span>
										</div>

										{/* Title with consistent min-height for multi-line alignment */}
										<h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug mb-2 min-h-[2.5rem] flex items-center">
											{step.title}
										</h4>

										{/* Detail description */}
										<p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal flex-1">
											{step.detail}
										</p>
									</div>

									{/* Node Status Footer */}
									<div className="pt-3.5 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-zinc-200/60 dark:border-zinc-800/60 mt-4 shrink-0">
										<div className="flex items-center gap-1.5">
											<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
											<span className="text-zinc-500 dark:text-zinc-400">STREAM ACTIVE</span>
										</div>
										{idx < 3 ? (
											<span className="hidden lg:inline text-zinc-400 font-bold">
												→
											</span>
										) : (
											<span className="text-emerald-600 dark:text-emerald-400 font-semibold">
												✓ ENDPOINT
											</span>
										)}
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
