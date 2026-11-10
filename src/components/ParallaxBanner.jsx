import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ARCHITECTURES = {
	erp: {
		tab: "ERP Multi-Tenancy",
		title: "Per-Company Database Isolation",
		summary: "12+ Modules · 300+ APIs · Separate PostgreSQL DB per Tenant",
		steps: [
			{ num: "01", label: "React SPA", proto: "HTTPS", detail: "Modular HRMS, Payroll, Inventory & CRM views" },
			{ num: "02", label: "Express Gateway", proto: "JWT + RBAC", detail: "Auth, role permissions & input validation" },
			{ num: "03", label: "Tenant Pool Router", proto: "pg-pool", detail: "Resolves isolated DB pool from verified JWT" },
			{ num: "04", label: "PostgreSQL / Tenant", proto: "ACID + JSONB", detail: "100+ tables/DB across 5 onboarded companies" },
		],
	},
	iot: {
		tab: "IIoT Ingestion",
		title: "24×7 Shopfloor Telemetry Pipeline",
		summary: "Up to 65 Devices · ~1s Polling · MQTT & Modbus TCP/RTU",
		steps: [
			{ num: "01", label: "Factory PLCs", proto: "RS-485 / LAN", detail: "Industrial controllers & CNC registers" },
			{ num: "02", label: "Node.js Poller", proto: "Modbus / MQTT", detail: "In-flight device lock + reconnect backoff" },
			{ num: "03", label: "Stream & Batcher", proto: "WebSockets", detail: "Live alarm push + queued batch inserts" },
			{ num: "04", label: "PostgreSQL & UI", proto: "Composite Index", detail: "Time-series persistence & live plant dashboards" },
		],
	},
	rollup: {
		tab: "SQL & Rollups",
		title: "BOM Pagination & Energy Rollups",
		summary: "Keyset Cursor SQL · Pessimistic Row Locks · Idempotent Upserts",
		steps: [
			{ num: "01", label: "Raw Telemetry / BOM", proto: "Indexed Read", detail: "Filtered queries avoiding slow OFFSET scans" },
			{ num: "02", label: "Stage / Cron Worker", proto: "FOR UPDATE", detail: "Row-locked transitions & scheduled rollups" },
			{ num: "03", label: "Summary Upsert", proto: "ON CONFLICT", detail: "Transactional hourly/daily kWh buckets" },
			{ num: "04", label: "Analytics API", proto: "REST JSON", detail: "Fast trend charts & 1,000+ row BOM exports" },
		],
	},
};

export default function ParallaxBanner() {
	const [activeTab, setActiveTab] = useState("erp");
	const current = ARCHITECTURES[activeTab];

	return (
		<section
			id="architecture"
			className="py-14 sm:py-16 border-b border-slate-200 dark:border-slate-800"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
					<div>
						<p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
							04 · System Architecture
						</p>
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
							Production Data Flows
						</h2>
					</div>

					<div className="flex flex-wrap gap-2 text-xs">
						{Object.entries(ARCHITECTURES).map(([key, item]) => {
							const isActive = activeTab === key;
							return (
								<button
									type="button"
									key={key}
									onClick={() => setActiveTab(key)}
									aria-pressed={isActive}
									className={`px-3 py-1.5 rounded-lg font-medium border transition-colors ${
										isActive
											? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 dark:border-blue-600"
											: "bg-white dark:bg-[#11141d] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
									}`}
								>
									{item.tab}
								</button>
							);
						})}
					</div>
				</div>

				<div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11141d] space-y-5">
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80">
						<h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
							{current.title}
						</h3>
						<span className="text-xs font-mono text-slate-500 dark:text-slate-400">
							{current.summary}
						</span>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
						{current.steps.map((step, idx) => (
							<div
								key={step.num}
								className="relative p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2"
							>
								<div className="flex items-center justify-between text-xs">
									<span className="font-mono font-bold text-slate-400">{step.num}</span>
									<span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono text-[11px] font-medium">
										{step.proto}
									</span>
								</div>
								<div className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between gap-2">
									<span>{step.label}</span>
									{idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden xl:inline shrink-0" />}
								</div>
								<p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
									{step.detail}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
