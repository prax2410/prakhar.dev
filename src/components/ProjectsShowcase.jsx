import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Layers,
	Database,
	Cpu,
	GitBranch,
	CheckCircle,
	ArrowUpRight,
	Terminal,
	Code2,
	Sliders,
	Radio,
	Activity,
	Zap,
	ShieldCheck,
	Check,
	Lock,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";
import { CodeContractViewer } from "./ProjectMockups";

const ERP_TENANTS = [
	{
		id: "industrial",
		name: "Precision Automation OEM",
		dbName: "tenant_precision_auto_db",
		workforce: "148 Employees",
		modules: "12 Modules Active",
		role: "Super Admin",
	},
	{
		id: "fabrication",
		name: "Industrial Equipment Fabrication",
		dbName: "tenant_equipment_mfg_db",
		workforce: "112 Employees",
		modules: "HRMS, Payroll, Inventory, WIP",
		role: "Plant Controller",
	},
	{
		id: "healthcare",
		name: "Healthcare Environmental Systems",
		dbName: "tenant_healthcare_enviro_db",
		workforce: "64 Employees",
		modules: "HRMS, Attendance, Billing",
		role: "Operations Head",
	},
	{
		id: "energy",
		name: "Renewable Energy Infrastructure",
		dbName: "tenant_energy_infra_db",
		workforce: "52 Employees",
		modules: "Project Accounting, Ledger",
		role: "General Admin",
	},
	{
		id: "retail",
		name: "Commercial Retail & Apparel",
		dbName: "tenant_retail_apparel_db",
		workforce: "38 Employees",
		modules: "Retail Inventory, Payroll",
		role: "Store Manager",
	},
];

const STAGES = [
	{ id: "01", name: "Raw Material", code: "MAT_IN", type: "Intake" },
	{ id: "02", name: "CNC Milling", code: "CNC_MILL", type: "Machining" },
	{ id: "03", name: "QA Inspection", code: "QA_CHECK", type: "Quality Gate" },
	{ id: "04", name: "Sub-Assembly", code: "ASM_LINE", type: "Assembly" },
	{ id: "05", name: "Heat Treatment", code: "HEAT_TRT", type: "Finishing" },
	{ id: "06", name: "Final Dispatch", code: "DISPATCH", type: "Shipping" },
];

export default function ProjectsShowcase() {
	const [selectedTenantId, setSelectedTenantId] = useState("fabrication");
	const [activeProjectTab, setActiveProjectTab] = useState({
		"enterprise-erp-saas": "architecture",
		"production-tracking-workflow": "optimization",
		"iiot-monitoring-platform": "telemetry",
	});

	const erpProject = projectsData.find((p) => p.id === "enterprise-erp-saas");
	const workflowProject = projectsData.find(
		(p) => p.id === "production-tracking-workflow",
	);
	const iiotProject = projectsData.find(
		(p) => p.id === "iiot-monitoring-platform",
	);

	const activeTenant =
		ERP_TENANTS.find((t) => t.id === selectedTenantId) || ERP_TENANTS[0];

	const setTab = (projectId, tab) => {
		setActiveProjectTab((prev) => ({ ...prev, [projectId]: tab }));
	};

	return (
		<section
			id="projects"
			className="py-[70px] sm:py-[85px] border-b border-[#e5e7eb] dark:border-[#262628] bg-white dark:bg-black transition-colors"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
				{/* Section Header */}
				<div className="space-y-2 border-b border-[#e5e7eb] dark:border-[#262628] pb-6">
					<p className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
						02 · Featured Engineering Projects
					</p>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
						Featured Systems &amp; Case Studies
					</h2>
					<p className="text-base sm:text-lg text-[#86868b] max-w-3xl font-normal leading-relaxed">
						Deep architectural reviews of real-world enterprise
						platforms, configurable workflow engines, and industrial
						telemetry systems delivered into production.
					</p>
				</div>

				{/* =========================================================================
				    CASE STUDY 01: Enterprise ERP & Multi-Tenant SaaS Platform
				========================================================================= */}
				<article className="rounded-2xl border border-[#e5e7eb] dark:border-[#262628] bg-white dark:bg-[#111112] p-6 sm:p-8 space-y-8 shadow-xs">
					{/* Header Meta */}
					<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#e5e7eb] dark:border-[#262628] pb-5">
						<div className="space-y-1.5">
							<div className="flex flex-wrap items-center gap-2">
								<span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff]">
									CASE STUDY 01 · ENTERPRISE SAAS
								</span>
								<span className="text-xs text-[#86868b] font-mono">
									5 Onboarded Companies · 300–400 Employees
								</span>
							</div>
							<h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
								{erpProject.title}
							</h3>
						</div>

						{/* Sub-Tabs: Apple Segmented Control */}
						<div className="w-full lg:w-auto shrink-0">
							<div className="p-1 rounded-xl bg-[#f5f5f7] dark:bg-[#1b1b1d] border border-[#e5e7eb] dark:border-[#262628] flex items-center gap-1">
								{[
									{
										id: "architecture",
										label: "Tenant Isolation",
									},
									{ id: "decisions", label: "Key Decisions" },
									{ id: "code", label: "API & DB Contracts" },
								].map((t) => {
									const isActive =
										activeProjectTab[
											"enterprise-erp-saas"
										] === t.id;
									return (
										<button
											type="button"
											key={t.id}
											onClick={() =>
												setTab(
													"enterprise-erp-saas",
													t.id,
												)
											}
											className={`flex-1 lg:flex-none px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
												isActive ?
													"bg-white dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white shadow-xs font-semibold"
												:	"text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
											}`}
										>
											{t.label}
										</button>
									);
								})}
							</div>
						</div>
					</div>

					{/* 2-Column Split: Deep Engineering Narrative + Architecture Explorer */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
						{/* Left: Engineering Breakdown (7 cols) */}
						<div className="lg:col-span-7 space-y-5 text-sm leading-relaxed">
							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
									The Business Problem
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Growing manufacturing and service
									organizations were operating with fragmented
									manual spreadsheets and disconnected tools
									across HRMS, payroll calculation, inventory
									ledgers, and project accounting. They
									required a unified enterprise platform with
									strict physical data segregation between
									organizations.
								</p>
							</div>

							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
									What The System Does
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Delivered 12+ modular ERP subsystems
									spanning biometric attendance mapping,
									automated payroll disbursement with
									statutory tax deductions, material inventory
									ledgers, and project management workflows
									supporting approximately 300–400 employees
									across 5 onboarded client companies.
								</p>
							</div>

							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
									My Contribution &amp; Ownership
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Contributed to the core system architecture,
									designed and implemented 300+ REST APIs, and
									modeled the PostgreSQL relational
									architecture comprising 100+ tables.
									Implemented authentication, granular RBAC
									middleware, and transaction-based payroll
									and inventory workflows with separate
									PostgreSQL databases per company tenant.
								</p>
							</div>

							<div className="space-y-2 pt-2 border-t border-[#e5e7eb] dark:border-[#262628]">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
									Onboarded Industry Verticals
								</h4>
								<div className="flex flex-wrap gap-1.5">
									{erpProject.clients.map((c) => (
										<span
											key={c}
											className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#f5f5f7] dark:bg-[#1b1b1d] border border-[#e5e7eb] dark:border-[#262628] text-[#1d1d1f] dark:text-[#f5f5f7]"
										>
											{c}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* Right: Interactive Architectural Artifact (5 cols) */}
						<div className="lg:col-span-5 space-y-4">
							{(
								activeProjectTab["enterprise-erp-saas"] ===
								"architecture"
							) ?
								<div className="p-4 sm:p-5 rounded-xl bg-[#f5f5f7] dark:bg-[#161617] border border-[#e5e7eb] dark:border-[#262628] space-y-4 font-mono text-xs">
									<div className="flex items-center justify-between pb-2 border-b border-[#e5e7eb] dark:border-[#262628]">
										<span className="font-bold text-[#1d1d1f] dark:text-white uppercase tracking-wider text-[11px]">
											Multi-Tenant Pool Router
										</span>
										<span className="text-[#0071e3] dark:text-[#2997ff] text-[10px] font-bold">
											ISOLATED DB PER TENANT
										</span>
									</div>

									{/* Tenant Switcher */}
									<div className="space-y-1.5">
										<span className="text-[10px] text-[#86868b] uppercase block">
											Select Active Tenant Organization:
										</span>
										<div className="grid grid-cols-1 gap-1.5">
											{ERP_TENANTS.map((t) => (
												<button
													type="button"
													key={t.id}
													onClick={() =>
														setSelectedTenantId(
															t.id,
														)
													}
													className={`p-2 rounded-lg text-left transition-all border ${
														(
															selectedTenantId ===
															t.id
														) ?
															"bg-white dark:bg-[#202022] border-[#0071e3] dark:border-[#2997ff] text-[#1d1d1f] dark:text-white shadow-xs font-bold"
														:	"bg-white/60 dark:bg-[#111112] border-transparent text-[#86868b] hover:border-[#e5e7eb] dark:hover:border-[#262628]"
													}`}
												>
													<div className="flex justify-between items-center text-xs">
														<span>{t.name}</span>
														{selectedTenantId ===
															t.id && (
															<Check className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
														)}
													</div>
													<div className="text-[10px] text-[#86868b] font-normal mt-0.5">
														{t.workforce} ·{" "}
														{t.modules}
													</div>
												</button>
											))}
										</div>
									</div>

									{/* Resolved Database Connection Output */}
									<div className="p-3 rounded-lg bg-white dark:bg-[#09090b] text-[#1d1d1f] dark:text-zinc-300 text-[11px] space-y-1.5 border border-[#e5e7eb] dark:border-zinc-800 shadow-2xs transition-colors">
										<div className="text-[#86868b] dark:text-zinc-500 text-[10px] pb-1.5 border-b border-[#e5e7eb] dark:border-zinc-800 flex justify-between items-center">
											<span className="font-semibold text-[#1d1d1f] dark:text-zinc-400">
												RUNTIME CONNECTION RESOLUTION
											</span>
											<span className="text-emerald-600 dark:text-emerald-400 font-bold text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
												ACTIVE
											</span>
										</div>
										<div>
											<span className="text-[#0071e3] dark:text-[#2997ff] font-medium">
												RESOLVED_DB:
											</span>{" "}
											<strong className="text-[#1d1d1f] dark:text-white font-mono">
												{activeTenant.dbName}
											</strong>
										</div>
										<div>
											<span className="text-[#0071e3] dark:text-[#2997ff] font-medium">
												RBAC_ROLE:
											</span>{" "}
											<span className="text-[#1d1d1f]/90 dark:text-zinc-300 font-mono">
												{activeTenant.role}
											</span>
										</div>
										<div>
											<span className="text-[#0071e3] dark:text-[#2997ff] font-medium">
												ISOLATION_MODEL:
											</span>{" "}
											<span className="text-[#1d1d1f]/90 dark:text-zinc-300 font-mono">
												Physical DB Segregation
											</span>
										</div>
									</div>
								</div>
							: (
								activeProjectTab["enterprise-erp-saas"] ===
								"decisions"
							) ?
								<div className="p-4 sm:p-5 rounded-xl bg-[#f5f5f7] dark:bg-[#161617] border border-[#e5e7eb] dark:border-[#262628] space-y-3 font-mono text-xs">
									<div className="flex items-center justify-between pb-2 border-b border-[#e5e7eb] dark:border-[#262628]">
										<span className="font-bold text-[#1d1d1f] dark:text-white uppercase tracking-wider text-[11px]">
											Architectural Decision Records
											(ADRs)
										</span>
										<span className="text-[#0071e3] dark:text-[#2997ff] text-[10px] font-bold">
											PRODUCTION TRADE-OFFS
										</span>
									</div>

									<div className="space-y-2.5">
										<div className="p-3 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="text-[#0071e3] dark:text-[#2997ff] font-bold text-[11px] flex justify-between">
												<span>
													1. SEPARATE DB PER TENANT VS
													ROW-LEVEL SECURITY
												</span>
												<span className="text-emerald-500 font-bold">
													CHOSEN
												</span>
											</div>
											<p className="text-[11px] text-[#86868b] leading-snug">
												Physical DB isolation eliminates
												cross-tenant data leakage risks
												for competing industrial
												clients. Allows independent
												point-in-time backup/restore and
												zero noisy-neighbor locking
												contention.
											</p>
										</div>

										<div className="p-3 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="text-[#0071e3] dark:text-[#2997ff] font-bold text-[11px] flex justify-between">
												<span>
													2. BOUNDED TENANT POOL
													REGISTRY
												</span>
												<span className="text-emerald-500 font-bold">
													CHOSEN
												</span>
											</div>
											<p className="text-[11px] text-[#86868b] leading-snug">
												Dynamic LRU caching of{" "}
												<code>pg.Pool</code> instances
												with a strict max-10 connection
												cap per company to prevent
												exhausting PostgreSQL server
												connection limits under
												simultaneous multi-company load.
											</p>
										</div>

										<div className="p-3 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="text-[#0071e3] dark:text-[#2997ff] font-bold text-[11px] flex justify-between">
												<span>
													3. TRANSACTION-BOUND PAYROLL
													MUTATIONS
												</span>
												<span className="text-emerald-500 font-bold">
													CHOSEN
												</span>
											</div>
											<p className="text-[11px] text-[#86868b] leading-snug">
												Explicit{" "}
												<code>BEGIN ... COMMIT</code>{" "}
												transactions wrap multi-step
												payroll computations and
												statutory tax deductions,
												ensuring atomic commits and zero
												partial payouts.
											</p>
										</div>
									</div>
								</div>
							:	<CodeContractViewer projectId="enterprise-erp-saas" />
							}
						</div>
					</div>
				</article>

				{/* =========================================================================
				    CASE STUDY 02: Production Tracking & Workflow System
				========================================================================= */}
				<article className="rounded-2xl border border-[#e5e7eb] dark:border-[#262628] bg-white dark:bg-[#111112] p-6 sm:p-8 space-y-8 shadow-xs">
					{/* Header Meta */}
					<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#e5e7eb] dark:border-[#262628] pb-5">
						<div className="space-y-1.5">
							<div className="flex flex-wrap items-center gap-2">
								<span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff]">
									CASE STUDY 02 · SHOPFLOOR WORKFLOW &amp;
									DATA OPTIMIZATION
								</span>
								<span className="text-xs text-[#86868b] font-mono">
									Deployment: Tier-1 Discrete Manufacturing Plant
								</span>
							</div>
							<h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
								{workflowProject.title}
							</h3>
						</div>

						{/* Sub-Tabs: Apple Segmented Control */}
						<div className="w-full lg:w-auto shrink-0">
							<div className="p-1 rounded-xl bg-[#f5f5f7] dark:bg-[#1b1b1d] border border-[#e5e7eb] dark:border-[#262628] flex items-center gap-1">
								{[
									{
										id: "optimization",
										label: "BOM Optimization",
									},
									{ id: "fsm", label: "12-Stage DAG" },
									{ id: "code", label: "SQL Contract" },
								].map((t) => {
									const isActive =
										activeProjectTab[
											"production-tracking-workflow"
										] === t.id;
									return (
										<button
											type="button"
											key={t.id}
											onClick={() =>
												setTab(
													"production-tracking-workflow",
													t.id,
												)
											}
											className={`flex-1 lg:flex-none px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
												isActive ?
													"bg-white dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white shadow-xs font-semibold"
												:	"text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
											}`}
										>
											{t.label}
										</button>
									);
								})}
							</div>
						</div>
					</div>

					{/* 2-Column Split */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
						{/* Left: Engineering Narrative (6 cols) */}
						<div className="lg:col-span-6 space-y-5 text-sm leading-relaxed">
							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
									The Business Problem
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Discrete manufacturing lines at a tier-1
									precision automation OEM required accurate
									tracking of parts moving through complex,
									non-linear shopfloor processes. Work-in-progress
									(WIP) batches frequently required rework
									loops, scrap accounting, and dynamic branch
									routing. Furthermore, Bill of Materials
									(BOM) reporting queries on 1,000+ row
									project trees were suffering severe latency
									when using standard pagination.
								</p>
							</div>

							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
									What The System Does
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Provides a configurable 12-stage production
									workflow engine supporting routing and
									branching logic, stage transitions,
									production status tracking, and dynamic
									quantity monitoring across raw intake,
									machining, QA inspection, heat treatment,
									and dispatch.
								</p>
							</div>

							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
									My Contribution &amp; Ownership
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Independently developed the backend
									finite-state machine validation logic,
									concurrency controls, and dynamic reporting
									APIs. To solve concurrent operator updates,
									implemented pessimistic row-level locking (
									<code>SELECT ... FOR UPDATE</code>) within
									ACID transactions. Re-architected BOM
									reporting from traditional OFFSET pagination
									to dynamic keyset cursor pagination
									supporting 1,000+ rows per project.
								</p>
							</div>
						</div>

						{/* Right: Technical Optimization Artifact (6 cols) */}
						<div className="lg:col-span-6 space-y-4">
							{(
								activeProjectTab[
									"production-tracking-workflow"
								] === "optimization"
							) ?
								<div className="p-4 sm:p-5 rounded-xl bg-[#f5f5f7] dark:bg-[#161617] border border-[#e5e7eb] dark:border-[#262628] space-y-4 font-mono text-xs">
									<div className="flex items-center justify-between pb-2 border-b border-[#e5e7eb] dark:border-[#262628]">
										<span className="font-bold text-[#1d1d1f] dark:text-white uppercase tracking-wider text-[11px]">
											BOM Reporting Query Deep-Dive
										</span>
										<span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
											KEYSET CURSOR VS OFFSET
										</span>
									</div>

									{/* Comparison Box */}
									<div className="space-y-3">
										<div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20 text-[#1d1d1f] dark:text-zinc-300 space-y-1">
											<div className="text-red-600 dark:text-red-400 font-bold flex items-center justify-between text-[11px]">
												<span>
													1. TRADITIONAL OFFSET SCAN
													(PREVIOUS)
												</span>
												<span>~420ms</span>
											</div>
											<code className="text-[11px] block text-red-700 dark:text-red-300 overflow-x-auto no-scrollbar font-mono">
												SELECT * FROM bom_items ORDER BY
												created_at OFFSET 100000 LIMIT
												50;
											</code>
											<p className="text-[11px] text-[#86868b] leading-snug pt-1">
												Engine sequentially reads and
												discards 100,000 disk buffer
												pages before returning 50 rows.
												Latency degrades linearly with
												dataset depth.
											</p>
										</div>

										<div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-[#1d1d1f] dark:text-zinc-300 space-y-1">
											<div className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-between text-[11px]">
												<span>
													2. KEYSET CURSOR PAGINATION
													(IMPLEMENTED)
												</span>
												<span>~1.8ms</span>
											</div>
											<code className="text-[11px] block text-emerald-700 dark:text-emerald-300 overflow-x-auto no-scrollbar font-mono">
												WHERE (created_at, id) &lt;
												($last_time, $last_id) ORDER BY
												created_at DESC, id DESC LIMIT
												50;
											</code>
											<p className="text-[11px] text-[#86868b] leading-snug pt-1">
												Direct B-Tree index seek.
												Execution time remains strictly
												sub-2ms regardless of whether
												fetching row 50 or row 500,000.
											</p>
										</div>
									</div>

									<div className="p-3 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] text-[11px] text-[#86868b] leading-relaxed">
										<strong className="text-[#1d1d1f] dark:text-white">
											Outcome:
										</strong>{" "}
										Allowed plant operations managers to
										dynamically filter and export BOM project
										trees containing 1,000+ parts instantly
										without query timeouts or database locking.
									</div>
								</div>
							: (
								activeProjectTab[
									"production-tracking-workflow"
								] === "fsm"
							) ?
								<div className="p-4 sm:p-5 rounded-xl bg-[#f5f5f7] dark:bg-[#161617] border border-[#e5e7eb] dark:border-[#262628] space-y-3 font-mono text-xs">
									<div className="flex items-center justify-between pb-2 border-b border-[#e5e7eb] dark:border-[#262628]">
										<span className="font-bold text-[#1d1d1f] dark:text-white uppercase tracking-wider text-[11px]">
											12-Stage Configurable DAG Pipeline
										</span>
										<span className="text-[#0071e3] dark:text-[#2997ff] text-[10px] font-bold">
											FINITE-STATE MACHINE
										</span>
									</div>

									<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
										{STAGES.map((s) => (
											<div
												key={s.id}
												className="p-2.5 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1"
											>
												<div className="flex justify-between text-[10px] text-[#86868b]">
													<span>{s.id}</span>
													<span>[{s.code}]</span>
												</div>
												<div className="font-bold text-[#1d1d1f] dark:text-white text-[12px] truncate">
													{s.name}
												</div>
												<div className="text-[10px] text-[#0071e3] dark:text-[#2997ff]">
													{s.type}
												</div>
											</div>
										))}
									</div>

									<div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] leading-snug">
										<strong>Rework Branching:</strong>{" "}
										Non-linear transitions (e.g. QA Fail ➔
										Re-Machine) are verified against the
										active workflow state graph before
										committing stage updates.
									</div>
								</div>
							:	<CodeContractViewer projectId="production-tracking-workflow" />
							}
						</div>
					</div>
				</article>

				{/* =========================================================================
				    CASE STUDY 03: Industrial IoT Monitoring Platform
				========================================================================= */}
				<article className="rounded-2xl border border-[#e5e7eb] dark:border-[#262628] bg-white dark:bg-[#111112] p-6 sm:p-8 space-y-8 shadow-xs">
					{/* Header Meta */}
					<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#e5e7eb] dark:border-[#262628] pb-5">
						<div className="space-y-1.5">
							<div className="flex flex-wrap items-center gap-2">
								<span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
									CASE STUDY 03 · INDUSTRIAL IOT &amp; MACHINE
									TELEMETRY
								</span>
								<span className="text-xs text-[#86868b] font-mono">
									Up to 65 Machines Monitored · ~1s Polling
								</span>
							</div>
							<h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
								{iiotProject.title}
							</h3>
						</div>

						{/* Sub-Tabs: Apple Segmented Control */}
						<div className="w-full lg:w-auto shrink-0">
							<div className="p-1 rounded-xl bg-[#f5f5f7] dark:bg-[#1b1b1d] border border-[#e5e7eb] dark:border-[#262628] flex items-center gap-1">
								{[
									{
										id: "telemetry",
										label: "Telemetry Pipeline",
									},
									{
										id: "resilience",
										label: "Edge Resilience",
									},
									{ id: "code", label: "Ingestion Code" },
								].map((t) => {
									const isActive =
										activeProjectTab[
											"iiot-monitoring-platform"
										] === t.id;
									return (
										<button
											type="button"
											key={t.id}
											onClick={() =>
												setTab(
													"iiot-monitoring-platform",
													t.id,
												)
											}
											className={`flex-1 lg:flex-none px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
												isActive ?
													"bg-white dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white shadow-xs font-semibold"
												:	"text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
											}`}
										>
											{t.label}
										</button>
									);
								})}
							</div>
						</div>
					</div>

					{/* 2-Column Split */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
						{/* Left: Engineering Breakdown (7 cols) */}
						<div className="lg:col-span-7 space-y-5 text-sm leading-relaxed">
							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
									The Business Problem
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Manufacturing facilities across multiple
									client sites operated with heterogeneous
									industrial machinery (CNC machining centers,
									hydraulic presses, automation PLCs) with
									zero centralized visibility into machine
									operational states, spindle RPMs,
									overheating risks, or unplanned downtime.
								</p>
							</div>

							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
									What The System Does
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Integrates PLCs and machines across multiple
									customer facilities to provide real-time
									monitoring dashboards, alarm notifications,
									operational state tracking, and historical
									analytics over continuous ~1s telemetry
									streams.
								</p>
							</div>

							<div className="space-y-1.5">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
									My Contribution &amp; Ownership
								</h4>
								<p className="text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">
									Developed Industrial IoT solutions
									integrating PLCs and up to 65 machines
									across multiple customer sites using MQTT,
									Modbus TCP/RTU, and TCP sockets. Developed
									reusable backend MQTT/Modbus integration
									drivers, managed socket buffers, parsed raw
									hex register bytes into telemetry metrics,
									and built real-time monitoring dashboards
									with historical reporting.
								</p>
							</div>

							<div className="space-y-2 pt-2 border-t border-[#e5e7eb] dark:border-[#262628]">
								<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
									Deployed Industry Verticals
								</h4>
								<div className="flex flex-wrap gap-1.5">
									{iiotProject.clients.map((c) => (
										<span
											key={c}
											className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#f5f5f7] dark:bg-[#1b1b1d] border border-[#e5e7eb] dark:border-[#262628] text-[#1d1d1f] dark:text-[#f5f5f7]"
										>
											{c}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* Right: Technical Hardware-to-Cloud Pipeline Artifact (5 cols) */}
						<div className="lg:col-span-5 space-y-4">
							{(
								activeProjectTab["iiot-monitoring-platform"] ===
								"telemetry"
							) ?
								<div className="p-4 sm:p-5 rounded-xl bg-[#f5f5f7] dark:bg-[#161617] border border-[#e5e7eb] dark:border-[#262628] space-y-4 font-mono text-xs">
									<div className="flex items-center justify-between pb-2 border-b border-[#e5e7eb] dark:border-[#262628]">
										<span className="font-bold text-[#1d1d1f] dark:text-white uppercase tracking-wider text-[11px]">
											Hardware-to-Cloud Data Pipeline
										</span>
										<span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
											~1S POLLING CADENCE
										</span>
									</div>

									{/* Step-by-step pipeline */}
									<div className="space-y-2.5">
										<div className="p-2.5 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="flex justify-between items-center text-[11px]">
												<span className="font-bold text-[#1d1d1f] dark:text-white">
													01. SHOPFLOOR PLCs &amp;
													CNCs
												</span>
												<span className="text-[#0071e3] dark:text-[#2997ff]">
													RS-485 / LAN
												</span>
											</div>
											<p className="text-[10px] text-[#86868b] leading-snug">
												Siemens S7, Delta PLCs &amp; CNC
												controllers exposing holding
												registers (0x0001–0x0020).
											</p>
										</div>

										<div className="p-2.5 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="flex justify-between items-center text-[11px]">
												<span className="font-bold text-[#1d1d1f] dark:text-white">
													02. NODE.JS PROTOCOL POLLER
												</span>
												<span className="text-amber-600 dark:text-amber-400">
													CONCURRENCY LOCK
												</span>
											</div>
											<p className="text-[10px] text-[#86868b] leading-snug">
												Polls up to 65 devices safely
												using in-flight locks to prevent
												socket buffer congestion on
												noisy industrial networks.
											</p>
										</div>

										<div className="p-2.5 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="flex justify-between items-center text-[11px]">
												<span className="font-bold text-[#1d1d1f] dark:text-white">
													03. MQTT BROKER &amp;
													WEBSOCKETS
												</span>
												<span className="text-emerald-600 dark:text-emerald-400">
													QOS 1 STREAM
												</span>
											</div>
											<p className="text-[10px] text-[#86868b] leading-snug">
												Dispatches real-time telemetry
												packets to connected operator
												dashboards with alarm threshold
												triggers.
											</p>
										</div>

										<div className="p-2.5 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="flex justify-between items-center text-[11px]">
												<span className="font-bold text-[#1d1d1f] dark:text-white">
													04. POSTGRESQL TIME-SERIES
												</span>
												<span className="text-[#0071e3] dark:text-[#2997ff]">
													COMPOSITE INDEX
												</span>
											</div>
											<p className="text-[10px] text-[#86868b] leading-snug">
												Batch parameterized inserts on{" "}
												<code className="bg-[#f5f5f7] dark:bg-[#202022] text-[#1d1d1f] dark:text-white px-1 py-0.5 rounded">
													(device_id, recorded_at)
												</code>{" "}
												composite indexes for fast
												historical trend querying.
											</p>
										</div>
									</div>
								</div>
							: (
								activeProjectTab["iiot-monitoring-platform"] ===
								"resilience"
							) ?
								<div className="p-4 sm:p-5 rounded-xl bg-[#f5f5f7] dark:bg-[#161617] border border-[#e5e7eb] dark:border-[#262628] space-y-3 font-mono text-xs">
									<div className="flex items-center justify-between pb-2 border-b border-[#e5e7eb] dark:border-[#262628]">
										<span className="font-bold text-[#1d1d1f] dark:text-white uppercase tracking-wider text-[11px]">
											Edge Hardware Reliability
											Architecture
										</span>
										<span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
											PRODUCTION RESILIENCE
										</span>
									</div>

									<div className="space-y-2.5">
										<div className="p-3 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex justify-between">
												<span>
													1. IN-FLIGHT SERIAL BUS
													BACKPRESSURE GUARD
												</span>
												<span className="text-[#86868b] text-[10px]">
													RS-485
												</span>
											</div>
											<p className="text-[11px] text-[#86868b] leading-snug">
												Slow or noisy PLCs can cause
												polling requests to accumulate.
												Implemented an in-flight device
												set to drop redundant poll
												cycles until previous I/O
												completes, preventing Node.js
												event loop blocks.
											</p>
										</div>

										<div className="p-3 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex justify-between">
												<span>
													2. MQTT QOS 1 &amp;
													AUTO-RECONNECT TOPOLOGY
												</span>
												<span className="text-[#86868b] text-[10px]">
													MQTT
												</span>
											</div>
											<p className="text-[11px] text-[#86868b] leading-snug">
												Factory floor RF interference
												frequently causes packet drop.
												Configured QoS 1 acknowledgment
												with local client ring-buffering
												to re-transmit machine alarms
												upon connection recovery.
											</p>
										</div>

										<div className="p-3 rounded-lg bg-white dark:bg-[#111112] border border-[#e5e7eb] dark:border-[#262628] space-y-1">
											<div className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex justify-between">
												<span>
													3. TIME-SERIES PARTITIONING
													&amp; BATCH INSERTS
												</span>
												<span className="text-[#86868b] text-[10px]">
													PostgreSQL
												</span>
											</div>
											<p className="text-[11px] text-[#86868b] leading-snug">
												High-frequency telemetry (up to
												65 devices) is buffered and
												written via multi-row
												parameterized batch INSERTs,
												reducing database write IOPS by
												over 80% compared to per-packet
												commits.
											</p>
										</div>
									</div>
								</div>
							:	<CodeContractViewer projectId="iiot-monitoring-platform" />
							}
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}
