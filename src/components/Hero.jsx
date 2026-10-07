import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowDownRight,
	ArrowUpRight,
	FileText,
	Github,
	Linkedin,
	Mail,
	Phone,
	MessageSquare,
	Terminal,
	Copy,
	Check,
	Radio,
	Activity,
	Cpu,
	Layers,
	Clock,
	MapPin,
	ShieldCheck,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import Tooltip from "./Tooltip";

export default function Hero() {
	const [copied, setCopied] = useState(false);
	const [copiedEmail, setCopiedEmail] = useState(false);
	const [logs, setLogs] = useState([
		{
			id: 1,
			time: "11:24:02.108",
			proto: "MQTT",
			metric: "CNC_04.RPM",
			val: "1420 rpm",
			status: "ACK",
		},
		{
			id: 2,
			time: "11:24:03.450",
			proto: "MODBUS",
			metric: "PLC_LINE_A.HOLD_REG",
			val: "32 regs @ 80ms",
			status: "SYNC",
		},
		{
			id: 3,
			time: "11:24:05.812",
			proto: "REST",
			metric: "ERP.PAYROLL_CALC",
			val: "200 OK [14ms]",
			status: "ACID",
		},
		{
			id: 4,
			time: "11:24:07.004",
			proto: "SOCKET",
			metric: "STREAM.BROADCAST",
			val: "14 active clients",
			status: "LIVE",
		},
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const timeStr =
				now.toTimeString().split(" ")[0] +
				"." +
				Math.floor(Math.random() * 900 + 100);
			const samples = [
				{
					proto: "MQTT",
					metric: `SENSOR_P${Math.floor(Math.random() * 8 + 1)}.PRESSURE`,
					val: `4.${Math.floor(Math.random() * 9)} bar`,
					status: "ACK",
				},
				{
					proto: "POSTGRES",
					metric: "POOL.CLIENTS_ACTIVE",
					val: "28 conn / 0 wait",
					status: "HEALTHY",
				},
				{
					proto: "MODBUS",
					metric: "RTU.CYCLE_COMPLETE",
					val: "32 regs / 0 loss",
					status: "SYNC",
				},
				{
					proto: "AUTH",
					metric: "JWT.VERIFY_RBAC",
					val: "ROLE: ENG_LEAD",
					status: "AUTH_OK",
				},
			];
			const pick = samples[Math.floor(Math.random() * samples.length)];
			setLogs((prev) => [
				...prev.slice(1),
				{
					id: Date.now(),
					time: timeStr,
					proto: pick.proto,
					metric: pick.metric,
					val: pick.val,
					status: pick.status,
				},
			]);
		}, 2600);
		return () => clearInterval(interval);
	}, []);

	const handleCopySpec = () => {
		const spec = `PRAKHAR // SENIOR SOFTWARE ENGINEER (FULL STACK)
Notice Period: Currently Serving · Immediate / Quick Joiner
Experience: 4+ Years · Promoted SDE -> Software Manager @ YM Automation
Scale: 12+ ERP Modules (300+ APIs), ~65 IIoT Machines, 12 Production Projects
Core Stack: Node.js, Express.js, React.js, PostgreSQL, MQTT, Modbus, Azure, AWS
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}`;
		navigator.clipboard.writeText(spec);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(personalInfo.email);
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2000);
	};

	return (
		<section
			id="about"
			className="relative pt-24 sm:pt-28 pb-16 border-b border-zinc-200 dark:border-zinc-800"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Recruiter Priority Notice Period & Hiring Status Bar */}
				<div className="py-3 px-4 mb-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50 flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-xs font-mono">
					<div className="flex flex-wrap items-center gap-2">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
						</span>
						<span className="font-bold text-zinc-950 dark:text-white uppercase tracking-wider">
							SERVING NOTICE PERIOD // IMMEDIATE JOINER
						</span>
						<span className="text-zinc-400 hidden xs:inline">
							·
						</span>
						<span className="text-emerald-700 dark:text-emerald-400 font-semibold">
							Bengaluru [Hybrid / Remote]
						</span>
					</div>

					<div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 pt-1 md:pt-0 border-t md:border-t-0 border-zinc-200 dark:border-zinc-800 text-[11px] sm:text-xs">
						<span className="uppercase font-semibold">
							TARGET: SENIOR SDE · FULL STACK LEAD
						</span>
						<span className="text-zinc-300 dark:text-zinc-700">
							|
						</span>
						<span className="text-zinc-950 dark:text-white font-bold bg-zinc-200/70 dark:bg-zinc-800 px-1.5 py-0.5 rounded-sm">
							4+ YRS EXP
						</span>
					</div>
				</div>

				{/* Authoritative Recruiter Master Headline */}
				<div className="space-y-4 mb-10">
					<div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-3">
						<h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white uppercase leading-none">
							PRAKHAR
						</h1>
						<div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-700 dark:text-zinc-300 font-bold">
							[SENIOR SOFTWARE ENGINEER · FULL STACK]
						</div>
					</div>

					<p className="text-lg sm:text-xl lg:text-2xl font-normal tracking-tight text-zinc-700 dark:text-zinc-300 max-w-3xl leading-relaxed">
						Full-stack architect & technical manager. 4+ years
						engineering multi-tenant SaaS platforms (
						<strong className="text-zinc-950 dark:text-white font-bold">
							12+ ERP modules, 300+ APIs, PostgreSQL
						</strong>
						) and{" "}
						<strong className="text-zinc-950 dark:text-white font-bold">
							24×7 sub-second IIoT telemetry streaming
						</strong>
						. Accelerated track from SDE to Software Manager at YM
						Automation, leading a 7-person software engineering
						team.
					</p>
				</div>

				{/* Recruiter Fast-Action Bar (Primary Conversion Suite) */}
				<div className="p-4 sm:p-5 mb-12 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
					{/* Primary Fast Actions */}
					<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
						{/* Direct CV Download - High Prominence */}
						<a
							href={personalInfo.resumeUrl}
							target="_blank"
							rel="noreferrer"
							download="Prakhar_CV_2026.pdf"
							className="px-5 py-3 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
						>
							<FileText className="w-4 h-4 shrink-0" />
							<span>Download Official CV (PDF)</span>
							<ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
						</a>

						{/* Direct Email Action & Copy Email */}
						<div className="flex items-center gap-2">
							<a
								href={`mailto:${personalInfo.email}`}
								className="flex-1 sm:flex-initial px-4 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white text-zinc-900 dark:text-white font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
							>
								<Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
								<span>Email Me Directly</span>
							</a>

							<Tooltip
								text={
									copiedEmail ?
										"Copied to clipboard!"
									:	"Copy email address"
								}
								position="top"
							>
								<button
									onClick={handleCopyEmail}
									aria-label="Copy email address"
									className="p-3 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-600 dark:text-zinc-400 transition-colors"
								>
									{copiedEmail ?
										<Check className="w-4 h-4 text-emerald-500" />
									:	<Copy className="w-4 h-4" />}
								</button>
							</Tooltip>
						</div>
					</div>

					{/* Fast Recruiter Direct Channels */}
					<div className="flex items-center flex-wrap gap-x-4 gap-y-2 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-200 dark:border-zinc-800 text-xs font-mono">
						<a
							href={`https://wa.me/917019954505?text=${encodeURIComponent("Hi Prakhar, I reviewed your Senior Software Engineer portfolio and would like to connect regarding an immediate opening.")}`}
							target="_blank"
							rel="noreferrer"
							className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold flex items-center gap-1.5"
						>
							<MessageSquare className="w-3.5 h-3.5 shrink-0" />
							<span>WhatsApp Chat ↗</span>
						</a>

						<span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">
							|
						</span>

						<a
							href={`tel:${personalInfo.phoneRaw}`}
							className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white font-bold flex items-center gap-1.5"
						>
							<Phone className="w-3.5 h-3.5 shrink-0" />
							<span>+91 7019954505</span>
						</a>

						<span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">
							|
						</span>

						<a
							href={personalInfo.linkedin}
							target="_blank"
							rel="noreferrer"
							className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white font-bold"
						>
							LinkedIn ↗
						</a>
					</div>
				</div>

				{/* 3-Column Engineering Dossier Grid (Unified Architectural Enclosure) */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
					{/* Column 1: Core Technical DNA & Architectural Stack (4 Cols) */}
					<div className="lg:col-span-4 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 p-5 sm:p-6 flex flex-col justify-between h-full">
						<div>
							<div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
								<span>01 // TECHNICAL SPECIALIZATION</span>
								<span className="text-emerald-600 dark:text-emerald-400">
									[FULL STACK]
								</span>
							</div>

							<div className="space-y-3 font-mono text-xs">
								<div className="pb-2.5 border-b border-zinc-100 dark:border-zinc-800/80">
									<span className="text-zinc-600 dark:text-zinc-400 uppercase font-bold block text-[11px] mb-0.5">
										BACKEND SERVICES & APIS:
									</span>
									<span className="text-zinc-950 dark:text-zinc-100 font-semibold leading-relaxed block">
										Node.js · Express.js · RESTful APIs ·
										Microservices · JWT & RBAC Middleware
									</span>
								</div>

								<div className="pb-2.5 border-b border-zinc-100 dark:border-zinc-800/80">
									<span className="text-zinc-600 dark:text-zinc-400 uppercase font-bold block text-[11px] mb-0.5">
										DATABASE & STORAGE ARCHITECTURE:
									</span>
									<span className="text-zinc-950 dark:text-zinc-100 font-semibold leading-relaxed block">
										PostgreSQL · 100+ Tables · JSONB
										Polymorphism · Schema Indexing · ACID
										Consistency
									</span>
								</div>

								<div className="pb-2.5 border-b border-zinc-100 dark:border-zinc-800/80">
									<span className="text-zinc-600 dark:text-zinc-400 uppercase font-bold block text-[11px] mb-0.5">
										FRONTEND & INTERFACE DESIGN:
									</span>
									<span className="text-zinc-950 dark:text-zinc-100 font-semibold leading-relaxed block">
										React.js · JavaScript (ES6+) · State
										Management · Reusable UI Components
									</span>
								</div>

								<div className="pb-2.5 border-b border-zinc-100 dark:border-zinc-800/80">
									<span className="text-zinc-600 dark:text-zinc-400 uppercase font-bold block text-[11px] mb-0.5">
										EDGE, HARDWARE & REAL-TIME IIOT:
									</span>
									<span className="text-zinc-950 dark:text-zinc-100 font-semibold leading-relaxed block">
										MQTT Protocol · Modbus RTU/TCP ·
										WebSockets · RS-485 / Ethernet (~65
										Devices)
									</span>
								</div>

								<div>
									<span className="text-zinc-600 dark:text-zinc-400 uppercase font-bold block text-[11px] mb-0.5">
										CLOUD & PRODUCTION DEPLOYMENTS:
									</span>
									<span className="text-zinc-950 dark:text-zinc-100 font-semibold leading-relaxed block">
										Microsoft Azure · AWS EC2 · Docker · PM2
										Daemon · Linux Shell
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Column 2: Verified Production Scale & Career Velocity (4 Cols) */}
					<div className="lg:col-span-4 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 p-5 sm:p-6 flex flex-col justify-between h-full">
						<div>
							<div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
								<span>02 // VERIFIED PRODUCTION PROOF</span>
								<Tooltip
									text={
										copied ?
											"Copied text summary!"
										:	"Copy text summary"
									}
									position="left"
								>
									<button
										onClick={handleCopySpec}
										className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 text-[11px] font-bold"
									>
										{copied ?
											<Check className="w-3 h-3 text-emerald-500" />
										:	<Copy className="w-3 h-3" />}
										<span>SUMMARY</span>
									</button>
								</Tooltip>
							</div>

							<div className="space-y-4 font-mono text-xs">
								<div className="pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
									<div className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
										12+ ERP Modules
									</div>
									<div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5 uppercase">
										300+ REST APIs & 100+ PostgreSQL Tables
									</div>
									<div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
										Single-handedly architected & delivered
										multi-tenant platform for 4 onboarded
										companies.
									</div>
								</div>

								<div className="pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
									<div className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
										~65 IIoT Devices
									</div>
									<div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5 uppercase">
										24×7 Sub-Second Real-Time Polling
									</div>
									<div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
										Integrated shopfloor machinery, CNCs,
										and PLCs with sub-80ms protocol latency.
									</div>
								</div>

								<div className="pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
									<div className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
										SDE → Software Manager
									</div>
									<div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5 uppercase">
										Leadership Promotion at YM Automation
									</div>
									<div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
										Grew from hands-on developer to managing
										7 cross-functional engineers and
										designers.
									</div>
								</div>

								<div>
									<div className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
										12 Production Projects
									</div>
									<div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5 uppercase">
										Full Lifecycle Client Delivery
									</div>
									<div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
										Deployed across ~10 client companies
										with continuous production maintenance.
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Column 3: Sleek Minimal Industrial Telemetry Indicator (4 Cols) */}
					<div className="lg:col-span-4 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 p-5 sm:p-6 flex flex-col justify-between h-full font-mono text-xs">
						<div>
							<div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800 text-[11px]">
								<div className="flex items-center gap-2">
									<Activity className="w-3.5 h-3.5 text-emerald-500" />
									<span className="font-bold text-zinc-950 dark:text-white uppercase tracking-wider">
										TELEMETRY DAEMON
									</span>
								</div>
								<div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
									<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
									<span>LIVE PULSE</span>
								</div>
							</div>

							{/* Telemetry Stream Lines */}
							<div className="space-y-2.5 min-h-[170px]">
								{logs.map((log) => (
									<div
										key={log.id}
										className="text-[11px] leading-relaxed border-b border-zinc-100 dark:border-zinc-800/80 pb-2"
									>
										<div className="flex items-center justify-between text-zinc-500 text-[10px]">
											<span>{log.time}</span>
											<span className="text-emerald-600 dark:text-emerald-400 font-bold">
												{log.status}
											</span>
										</div>
										<div className="flex items-baseline justify-between gap-2 mt-0.5">
											<span className="text-zinc-700 dark:text-zinc-300 truncate font-semibold">
												[{log.proto}] {log.metric}
											</span>
											<span className="text-zinc-950 dark:text-white font-bold shrink-0">
												{log.val}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Hardware Specifications Snapshot */}
						<div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-[11px] space-y-1.5">
							<div className="flex justify-between">
								<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase">
									POLLING JITTER:
								</span>
								<span className="text-zinc-950 dark:text-zinc-100 font-bold">
									&lt; 80ms
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase">
									CONNECTED EDGE:
								</span>
								<span className="text-zinc-950 dark:text-zinc-100 font-bold">
									~65 Industrial Nodes
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase">
									PROTOCOL STACK:
								</span>
								<span className="text-zinc-950 dark:text-zinc-100 font-bold">
									Modbus RTU/TCP · MQTT
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
