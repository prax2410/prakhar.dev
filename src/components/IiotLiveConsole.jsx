import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, AlertTriangle, CheckCircle2, RefreshCw, Radio, Zap } from "lucide-react";

const MACHINES = {
	"cnc-04": {
		id: "cnc-04",
		name: "CNC Milling Station #04",
		shortLabel: "CNC-04 Milling",
		type: "3-Axis Precision Machining",
		client: "Salzer Electronics Limited",
		clientShort: "Salzer Electronics",
		baseRpm: 1420,
		baseTemp: 42.5,
		protocol: "MQTT (QoS 1) + Modbus RTU",
		protocolShort: "MQTT + Modbus RTU",
		registers: "40001 (RPM), 40005 (Torque)",
		nominalStatus: "RUNNING",
	},
	"plc-line-a": {
		id: "plc-line-a",
		name: "Assembly Line A Automation PLC",
		shortLabel: "Line A PLC",
		type: "Siemens S7 / Modbus TCP Controller",
		client: "TE Connectivity India Pvt. Ltd.",
		clientShort: "TE Connectivity",
		baseRpm: 2840,
		baseTemp: 38.2,
		protocol: "Modbus TCP/IP (Port 502)",
		protocolShort: "Modbus TCP (502)",
		registers: "Holding Regs 0x0010 - 0x002F",
		nominalStatus: "SYNCHRONIZED",
	},
	"press-01": {
		id: "press-01",
		name: "Heavy Hydraulic Forming Press",
		shortLabel: "Hydraulic Press #01",
		type: "High-Tonnage Hydraulic Controller",
		client: "Armor Grandeur Pvt. Ltd.",
		clientShort: "Armor Grandeur",
		baseRpm: 920,
		baseTemp: 48.0,
		protocol: "RS-485 / TCP Sockets",
		protocolShort: "RS-485 / TCP Sockets",
		registers: "Pressure Reg 0x01A0 (Bar)",
		nominalStatus: "OPTIMAL",
	},
};

export default function IiotLiveConsole() {
	const [activeMachineId, setActiveMachineId] = useState("cnc-04");
	const [isFaulted, setIsFaulted] = useState(false);
	const [points, setPoints] = useState(() => Array.from({ length: 24 }, (_, i) => 40 + Math.sin(i * 0.5) * 8));
	const [cycleCount, setCycleCount] = useState(18420);
	const [recentLog, setRecentLog] = useState({
		type: "ok",
		timestamp: "LIVE",
		msg: "Nominal telemetry stream active on CNC-04. Streaming holding registers via MQTT/Modbus.",
	});

	const machine = MACHINES[activeMachineId];

	// Live waveform telemetry simulation loop (every 750ms)
	useEffect(() => {
		const interval = setInterval(() => {
			setCycleCount((c) => c + 1);
			setPoints((prev) => {
				const nextSlice = prev.slice(1);
				const time = Date.now() / 1000;
				let nextVal;
				if (isFaulted) {
					// High frequency spike + erratic noise
					nextVal = 70 + (Math.random() * 25 - 10);
				} else {
					// Nominal steady telemetry with minor industrial jitter
					nextVal = 40 + Math.sin(time * 2) * 12 + (Math.random() * 4 - 2);
				}
				return [...nextSlice, Math.max(10, Math.min(95, nextVal))];
			});
		}, 750);

		return () => clearInterval(interval);
	}, [isFaulted]);

	// Simulate Alarm trigger
	const handleTriggerFault = () => {
		setIsFaulted(true);
		setRecentLog({
			type: "alert",
			timestamp: new Date().toLocaleTimeString(),
			msg: `CRITICAL: Over-Torque threshold exceeded on ${machine.id.toUpperCase()} (Holding Reg 0x4F: 98.4%). WebSocket alert dispatched to 3 client dashboards.`,
		});
	};

	const handleClearFault = () => {
		setIsFaulted(false);
		setRecentLog({
			type: "ok",
			timestamp: new Date().toLocaleTimeString(),
			msg: `FAULT CLEARED: Telemetry nominal on ${machine.id.toUpperCase()}. Resumed 24×7 composite-indexed PostgreSQL ingestion.`,
		});
	};

	// SVG Path Generator for the sparkline wave
	const width = 420;
	const height = 90;
	const stepX = width / (points.length - 1);
	const pathD = points.reduce((acc, val, i) => {
		const x = i * stepX;
		const y = height - (val / 100) * height;
		return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
	}, "");

	// Needle rotation angle (-90deg to +90deg)
	const currentLoadPct = isFaulted ? 0.94 : points[points.length - 1] / 100;
	const needleAngle = -90 + currentLoadPct * 180;

	return (
		<div className="rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#161617] overflow-hidden shadow-sm transition-colors">
			{/* Chrome Window Header */}
			<div className="px-4 py-3 bg-[#f5f5f7] dark:bg-[#202022] border-b border-[#e5e7eb] dark:border-[#2d2d2f] flex flex-wrap items-center justify-between gap-3 text-xs">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1.5 mr-2">
						<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
						<span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
						<span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
					</div>
					<span className="font-mono font-bold text-[#1d1d1f] dark:text-white tracking-wider uppercase flex items-center gap-1.5">
						<Radio className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff] animate-pulse" />
						IIoT Machine Telemetry Nerve Center
					</span>
				</div>

				<div className="flex items-center gap-2 font-mono text-[11px]">
					<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
						<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
						LIVE POLL ~1s · 65 CONTROLLERS ACTIVE
					</span>
				</div>
			</div>

			{/* Machine Selector Segmented Tabs */}
			<div className="p-3 bg-[#fafafc] dark:bg-[#18181a] border-b border-[#e5e7eb] dark:border-[#2d2d2f] flex flex-wrap items-center justify-between gap-2.5">
				<div className="flex flex-wrap items-center gap-1.5">
					<span className="text-[11px] font-mono text-[#86868b] uppercase mr-1">Machine:</span>
					{Object.values(MACHINES).map((m) => {
						const isActive = activeMachineId === m.id;
						return (
							<button
								type="button"
								key={m.id}
								onClick={() => {
									setActiveMachineId(m.id);
									setIsFaulted(false);
									setRecentLog({
										type: "ok",
										timestamp: new Date().toLocaleTimeString(),
										msg: `Switched active feed to ${m.name}. Telemetry streaming nominal.`,
									});
								}}
								className={`px-3 py-1 rounded-full text-[12px] font-medium transition-colors ${
									isActive
										? "bg-[#0071e3] text-white shadow-sm"
										: "bg-white dark:bg-[#202022] text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#e5e7eb] dark:border-[#2d2d2f] hover:border-[#0071e3]"
								}`}
							>
								{m.shortLabel}
							</button>
						);
					})}
				</div>

				{/* Fault Simulation Action Trigger */}
				<div className="flex items-center gap-2">
					{!isFaulted ? (
						<button
							type="button"
							onClick={handleTriggerFault}
							className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 text-[11px] font-mono font-semibold border border-amber-500/30 transition-colors"
						>
							<AlertTriangle className="w-3.5 h-3.5" />
							<span>Simulate Machine Overload</span>
						</button>
					) : (
						<button
							type="button"
							onClick={handleClearFault}
							className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 text-[11px] font-mono font-semibold border border-emerald-500/30 transition-colors"
						>
							<CheckCircle2 className="w-3.5 h-3.5" />
							<span>Acknowledge &amp; Reset</span>
						</button>
					)}
				</div>
			</div>

			{/* Main Telemetry Cockpit Grid */}
			<div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
				{/* Column 1: Analog Load Gauge (4 cols) */}
				<div className="lg:col-span-4 p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] flex flex-col items-center justify-between text-center h-full min-h-[250px]">
					<span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">
						Machine Load &amp; Torque
					</span>

					{/* Semi-circle Gauge */}
					<div className="relative w-36 h-20 my-2 flex items-end justify-center">
						<svg viewBox="0 0 140 80" className="w-36 h-20 overflow-visible">
							{/* Background Track Arc */}
							<path
								d="M 15 75 A 55 55 0 0 1 125 75"
								fill="none"
								stroke="#e5e7eb"
								strokeWidth="10"
								strokeLinecap="round"
								className="dark:stroke-[#2d2d2f]"
							/>
							{/* Active Value Arc */}
							<path
								d="M 15 75 A 55 55 0 0 1 125 75"
								fill="none"
								stroke={isFaulted ? "#ef4444" : "#0071e3"}
								strokeWidth="10"
								strokeLinecap="round"
								strokeDasharray="172.78"
								strokeDashoffset={172.78 * (1 - currentLoadPct)}
								className="transition-all duration-500 ease-out"
							/>
							{/* Needle */}
							<motion.line
								x1="70"
								y1="75"
								x2="70"
								y2="28"
								stroke={isFaulted ? "#ef4444" : "#1d1d1f"}
								strokeWidth="3"
								strokeLinecap="round"
								style={{ transformOrigin: "70px 75px" }}
								className="dark:stroke-white"
								animate={{ rotate: needleAngle }}
								transition={{ type: "spring", stiffness: 120, damping: 14 }}
							/>
							<circle cx="70" cy="75" r="5" fill="#0071e3" className="dark:fill-[#2997ff]" />
						</svg>
					</div>

					<div className="space-y-1">
						<div className="text-2xl font-mono font-bold tracking-tight text-[#1d1d1f] dark:text-white">
							{Math.round(currentLoadPct * 100)}% LOAD
						</div>

						<div className="flex items-center justify-center gap-1.5 text-[11px] font-mono font-semibold">
							{isFaulted ? (
								<span className="text-red-500 flex items-center gap-1">
									<span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
									CRITICAL TRIP (0x4F)
								</span>
							) : (
								<span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
									<span className="w-2 h-2 rounded-full bg-emerald-500" />
									{machine.nominalStatus}
								</span>
							)}
						</div>
					</div>
				</div>

				{/* Column 2: Real-time Oscillating Waveform (8 cols) */}
				<div className="lg:col-span-8 flex flex-col justify-between space-y-3 h-full">
					<div className="flex items-center justify-between text-xs font-mono">
						<div className="flex items-center gap-2">
							<Activity className={`w-4 h-4 ${isFaulted ? "text-red-500" : "text-[#0071e3] dark:text-[#2997ff]"}`} />
							<span className="font-semibold text-[#1d1d1f] dark:text-white">
								LIVE HOLDING REGISTER STREAM ({machine.registers})
							</span>
						</div>
						<span className="text-[#86868b]">{cycleCount.toLocaleString()} Polls Captured</span>
					</div>

					{/* SVG Oscilloscope Sparkline */}
					<div className="p-3.5 rounded-2xl bg-[#09090b] border border-[#27272a] overflow-hidden relative">
						{/* Grid lines */}
						<div className="absolute inset-0 grid grid-cols-6 grid-rows-3 opacity-20 pointer-events-none">
							{Array.from({ length: 18 }).map((_, i) => (
								<div key={i} className="border-b border-r border-[#3f3f46]" />
							))}
						</div>

						<svg viewBox={`0 0 ${width} ${height}`} className="w-full h-24 overflow-visible relative z-10">
							<defs>
								<linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
									<stop offset="0%" stopColor={isFaulted ? "#ef4444" : "#0071e3"} stopOpacity="0.4" />
									<stop offset="100%" stopColor={isFaulted ? "#ef4444" : "#0071e3"} stopOpacity="0.0" />
								</linearGradient>
							</defs>
							<path
								d={`${pathD} L ${width} ${height} L 0 ${height} Z`}
								fill="url(#waveGradient)"
								className="transition-all duration-300"
							/>
							<path
								d={pathD}
								fill="none"
								stroke={isFaulted ? "#ef4444" : "#2997ff"}
								strokeWidth="2.5"
								strokeLinecap="round"
								className="transition-all duration-300"
							/>
						</svg>

						{/* Inset overlay parameters in symmetric 4-column grid */}
						<div className="mt-2.5 pt-2.5 border-t border-[#27272a] grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-zinc-400">
							<div>
								<span className="text-[10px] text-zinc-500 block uppercase">Protocol</span>
								<strong className="text-white truncate block">{machine.protocolShort}</strong>
							</div>
							<div>
								<span className="text-[10px] text-zinc-500 block uppercase">Speed</span>
								<strong className={isFaulted ? "text-red-400 font-bold block" : "text-white block"}>
									{isFaulted ? "0 RPM [TRIPPED]" : `${machine.baseRpm} RPM`}
								</strong>
							</div>
							<div>
								<span className="text-[10px] text-zinc-500 block uppercase">Temp</span>
								<strong className={isFaulted ? "text-red-400 font-bold block" : "text-white block"}>
									{isFaulted ? "68.4°C [OVERHEAT]" : `${machine.baseTemp}°C`}
								</strong>
							</div>
							<div>
								<span className="text-[10px] text-zinc-500 block uppercase">Client</span>
								<strong className="text-[#2997ff] truncate block">{machine.clientShort}</strong>
							</div>
						</div>
					</div>

					{/* Simulated WebSocket Alert Toast */}
					<AnimatePresence mode="wait">
						{recentLog && (
							<motion.div
								key={recentLog.msg}
								initial={{ opacity: 0, y: 4 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								className={`p-3 rounded-xl text-[12px] font-mono flex items-start gap-2 border ${
									recentLog.type === "alert"
										? "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400"
										: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
								}`}
							>
								<Zap className="w-4 h-4 shrink-0 mt-0.5" />
								<div className="leading-snug">
									<span className="font-bold">[{recentLog.timestamp}]</span> {recentLog.msg}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
