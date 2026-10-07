import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Activity,
	ArrowRight,
	Cpu,
	Database,
	Layers,
	Server,
} from "lucide-react";

export default function ParallaxBanner() {
	const [activeTab, setActiveTab] = useState("iot");

	const architectures = {
		iot: {
			title: "IIoT Telemetry & Edge Polling Pipeline",
			tag: "HARDWARE-TO-CLOUD SUB-SECOND STREAM",
			description:
				"Connecting shopfloor PLCs and automated factory machines to real-time operator interfaces with sub-second polling jitter.",
			steps: [
				{
					num: "01",
					phase: "EQUIPMENT LAYER",
					title: "Factory PLCs & Machinery",
					detail: "Industrial automation controllers, sensors, and machine registers.",
					protocol: "RS-485 / Ethernet",
				},
				{
					num: "02",
					phase: "GATEWAY / EDGE",
					title: "Protocol Translation Daemon",
					detail: "Modbus RTU/TCP polling daemon & MQTT Broker gateway.",
					protocol: "Modbus & MQTT",
				},
				{
					num: "03",
					phase: "STREAM INGESTION",
					title: "Node.js & WebSockets Bus",
					detail: "High-frequency telemetry stream ingestion and alert threshold triggers.",
					protocol: "Socket.io & TCP/IP",
				},
				{
					num: "04",
					phase: "STORAGE & CLIENT",
					title: "PostgreSQL & Live React UI",
					detail: "Live SVG gauge visualization and historical trend reporting.",
					protocol: "REST & WebSockets",
				},
			],
			metrics: [
				{ label: "POLLING INTERVAL", value: "~1s Live Telemetry" },
				{ label: "INDUSTRIAL SCALE", value: "Up to ~65 Machines" },
				{ label: "PROTOCOLS", value: "MQTT / Modbus / TCP-IP" },
			],
		},
		erp: {
			title: "12+ Module Enterprise SaaS & ERP Platform",
			tag: "CENTRALIZED BUSINESS OPERATIONS & MULTI-TENANCY",
			description:
				"Full-stack architecture covering HRMS, projects, attendance, payroll, inventory, purchase, sales, and CRM with 300+ APIs and 100+ relational tables.",
			steps: [
				{
					num: "01",
					phase: "CLIENT INTERFACE",
					title: "React Web Application",
					detail: "Responsive operational views for HRMS, Attendance, Projects, CRM, and Inventory.",
					protocol: "HTTPS / Client SPA",
				},
				{
					num: "02",
					phase: "API GATEWAY & RBAC",
					title: "Express.js Routing Middleware",
					detail: "300+ RESTful APIs with JWT authentication, role-based permissions, and input validation.",
					protocol: "RESTful JSON APIs",
				},
				{
					num: "03",
					phase: "CORE SERVICES",
					title: "Modular Business Handlers",
					detail: "Decoupled logic for Payroll calculation, stage workflows, purchase orders, and stock.",
					protocol: "Node Service Handlers",
				},
				{
					num: "04",
					phase: "CLOUD DATA LAYER",
					title: "PostgreSQL on Azure/AWS",
					detail: "100+ relational tables, JSONB polymorphic fields, transactions, and automated backups.",
					protocol: "SQL & Cloud DB",
				},
			],
			metrics: [
				{ label: "PLATFORM SCOPE", value: "12+ Integrated Modules" },
				{ label: "API & DATA SCALE", value: "300+ APIs / 100+ Tables" },
				{ label: "MULTI-TENANCY", value: "4 Onboarded / 100+ Capacity" },
			],
		},
		reporting: {
			title: "Automated Reporting & Analytics Worker",
			tag: "SCHEDULED DATA VISUALIZATION & KPI COMPILATION",
			description:
				"Background cron microservice processing production KPIs and compiling automated PDF and email reports for executive management.",
			steps: [
				{
					num: "01",
					phase: "SCHEDULER ENGINE",
					title: "Node CRON Job Trigger",
					detail: "Time-based workers running daily and weekly operational triggers.",
					protocol: "Node CRON / Timer",
				},
				{
					num: "02",
					phase: "AGGREGATION",
					title: "PostgreSQL Analytics Queries",
					detail: "Complex queries aggregating machine output, attendance, and sales figures.",
					protocol: "Indexed DB Queries",
				},
				{
					num: "03",
					phase: "DOCUMENT RENDER",
					title: "PDF & Chart Generation",
					detail: "Visual data chart rendering and structured HTML/PDF templating.",
					protocol: "Server-side Renderer",
				},
				{
					num: "04",
					phase: "DISPATCH BUS",
					title: "SMTP & Notification Worker",
					detail: "Automated distribution of plant production metrics, alarms, and analytics reports.",
					protocol: "Nodemailer / SMTP",
				},
			],
			metrics: [
				{ label: "TIME SAVED", value: "50% Manual Effort Reduced" },
				{ label: "FREQUENCY", value: "Daily & Weekly Automated" },
				{ label: "FORMATS", value: "PDF Documents & Email" },
			],
		},
	};

	const current = architectures[activeTab];

	return (
		<section
			id="architecture"
			className="py-20 sm:py-24 border-b border-zinc-200 dark:border-zinc-800"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b border-zinc-200 dark:border-zinc-800">
					<div>
						<div className="text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-400 font-bold uppercase mb-2">
							04 // ARCHITECTURAL SCHEMATICS & PROTOCOL FLOWS
						</div>
						<h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase leading-none">
							SYSTEM TOPOLOGY
						</h2>
					</div>
					<p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
						Interactive schematics tracing data flow from shopfloor registers up to cloud database tables and client browser SPAs.
					</p>
				</div>

				{/* Architectural Tab Selector (High contrast buttons) */}
				<div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 text-xs font-mono">
					<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase mr-1">SELECT BLUEPRINT:</span>
					{Object.keys(architectures).map((key) => {
						const arch = architectures[key];
						const isActive = activeTab === key;
						return (
							<button
								key={key}
								onClick={() => setActiveTab(key)}
								className={`px-3 py-1.5 uppercase transition-all border ${
									isActive
										? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold border-zinc-950 dark:border-white shadow-sm"
										: "bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white"
								}`}
							>
								{arch.title.split(" ")[0]} // {key.toUpperCase()}
							</button>
						);
					})}
				</div>

				{/* Blueprint Canvas (No Cards) */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -6 }}
						transition={{ duration: 0.2 }}
						className="space-y-8"
					>
						{/* Schematic Meta */}
						<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
							<div>
								<div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase">
									// {current.tag}
								</div>
								<h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white uppercase tracking-tight mt-1">
									{current.title}
								</h3>
							</div>
							<p className="text-sm text-zinc-700 dark:text-zinc-300 font-normal max-w-xl leading-relaxed">
								{current.description}
							</p>
						</div>

						{/* 4-Stage Sequential Dataflow Grid (Hairline Grid System, No Cards) */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
							{current.steps.map((step, idx) => (
								<div
									key={idx}
									className="p-6 bg-white dark:bg-zinc-950 flex flex-col justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
								>
									<div className="space-y-3">
										<div className="flex items-center justify-between text-xs font-mono">
											<span className="font-bold text-zinc-950 dark:text-white text-base">
												{step.num} /
											</span>
											<span className="uppercase text-[11px] font-bold text-zinc-600 dark:text-zinc-400">
												{step.phase}
											</span>
										</div>

										<div>
											<h4 className="text-base font-bold text-zinc-950 dark:text-white">
												{step.title}
											</h4>
											<div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
												[{step.protocol}]
											</div>
										</div>

										<p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
											{step.detail}
										</p>
									</div>

									<div className="pt-4 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono">
										<span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 font-medium">
											<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
											STREAM ACTIVE
										</span>
										{idx < 3 ? (
											<span className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 font-bold hidden lg:flex">
												<span>PIPELINE</span>
												<ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
											</span>
										) : (
											<span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
												<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
												<span>TERMINAL</span>
											</span>
										)}
									</div>
								</div>
							))}
						</div>

						{/* Tabular Performance Specs */}
						<div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-zinc-200 dark:border-zinc-800 py-4 font-mono text-xs gap-4">
							{current.metrics.map((m, idx) => (
								<div key={idx} className="flex justify-between sm:flex-col gap-1">
									<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase">{m.label}:</span>
									<span className="text-zinc-950 dark:text-zinc-100 font-bold text-sm">{m.value}</span>
								</div>
							))}
						</div>

					</motion.div>
				</AnimatePresence>

			</div>
		</section>
	);
}
