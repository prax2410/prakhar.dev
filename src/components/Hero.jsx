import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail, Terminal, Copy, Check, Radio, GitCommit, Code2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
	const [activeTab, setActiveTab] = useState("profile");
	const [copied, setCopied] = useState(false);
	const [logs, setLogs] = useState([
		{ id: 1, time: "11:24:02", tag: "MQTT", msg: "Machine_04 register polled -> RPM: 1420, Temp: 42°C [OK]" },
		{ id: 2, time: "11:24:05", tag: "MODBUS", msg: "PLC_Line_A TCP socket connected: 192.168.1.120:502" },
		{ id: 3, time: "11:24:08", tag: "REST-API", msg: "POST /api/v1/erp/payroll/calculate [200 OK in 18ms]" },
		{ id: 4, time: "11:24:11", tag: "SOCKET", msg: "Telemetry payload broadcast to 14 active operator clients" },
	]);

	// Subtle live telemetry pulse animation
	useEffect(() => {
		if (activeTab !== "telemetry") return;
		const interval = setInterval(() => {
			const now = new Date();
			const timeStr = now.toTimeString().split(" ")[0];
			const newEvents = [
				{ tag: "MQTT", msg: `Sensor_P${Math.floor(Math.random() * 8 + 1)} stream synced: pressure 4.${Math.floor(Math.random() * 9)} bar` },
				{ tag: "PG-POOL", msg: `PostgreSQL connection pool healthy: 24 active clients, 0 idle wait` },
				{ tag: "MODBUS", msg: `Modbus RTU cycle complete across 32 registers -> 0 packet loss` },
				{ tag: "AUTH", msg: `JWT verified for user SoftwareManager@YMAutomation [role: LEAD]` },
			];
			const randomEvent = newEvents[Math.floor(Math.random() * newEvents.length)];
			setLogs((prev) => [
				...prev.slice(1),
				{ id: Date.now(), time: timeStr, tag: randomEvent.tag, msg: randomEvent.msg },
			]);
		}, 2400);

		return () => clearInterval(interval);
	}, [activeTab]);

	const handleCopy = () => {
		const profileText = JSON.stringify(
			{
				name: personalInfo.name,
				title: personalInfo.title,
				company: personalInfo.company,
				experience: "4+ years (Jul 2022 - Present)",
				progression: "Promoted from SDE to Software Manager",
				scale: "12+ ERP/SaaS modules, 300+ REST APIs, ~65 IoT machines",
				stack: ["Node.js", "Express.js", "React", "PostgreSQL", "MQTT", "Modbus", "Azure", "AWS EC2"],
				location: personalInfo.location,
			},
			null,
			2
		);
		navigator.clipboard.writeText(profileText);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section
			id="about"
			className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
		>
			{/* Subtle Ambient Background Grid */}
			<div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:28px_28px]" />

			<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
					
					{/* Left Column: Personal, Human Introduction */}
					<div className="lg:col-span-7 space-y-6">
						
						{/* Friendly Personal Tag */}
						<motion.div
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
							className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-sm"
						>
							<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
							<span>Senior Software Engineer • Promoted to Software Manager</span>
						</motion.div>

						{/* Personal Name & Human Hook */}
						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="space-y-3"
						>
							<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
								Hey, I'm Prakhar. <br />
								<span className="text-zinc-500 dark:text-zinc-400 font-bold text-3xl sm:text-5xl">
									Full Stack Engineer & Software Manager.
								</span>
							</h1>
							<p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl font-normal pt-1">
								With 4+ years of hands-on experience building enterprise SaaS platforms, 12+ module ERP systems, and 24×7 Industrial IoT applications. Promoted from SDE to Software Manager at <strong className="font-semibold text-zinc-900 dark:text-white">YM Automation</strong>, combining deep full-stack architecture with cross-functional technical leadership.
							</p>
						</motion.div>

						{/* Stack Pills */}
						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-zinc-600 dark:text-zinc-400"
						>
							<span className="text-zinc-400 dark:text-zinc-500 font-sans mr-1 text-xs">Primary toolkit:</span>
							{["Node.js", "Express", "React", "PostgreSQL", "Azure", "AWS", "MQTT / Modbus"].map((tech) => (
								<span
									key={tech}
									className="px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium"
								>
									{tech}
								</span>
							))}
						</motion.div>

						{/* Direct Actions */}
						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="flex flex-wrap items-center gap-3 pt-2"
						>
							<a
								href="#projects"
								className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-xs hover:opacity-90 transition-opacity shadow-sm"
							>
								<span>See What I've Built</span>
								<ArrowDown className="w-3.5 h-3.5" />
							</a>

							<a
								href={personalInfo.resumeUrl}
								target="_blank"
								rel="noreferrer"
								download="Prakhar_CV_2026.pdf"
								className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-xs hover:border-zinc-900 dark:hover:border-white transition-colors"
							>
								<FileText className="w-3.5 h-3.5" />
								<span>Download CV</span>
							</a>

							<div className="flex items-center gap-1.5 pl-1">
								<a
									href={personalInfo.github}
									target="_blank"
									rel="noreferrer"
									aria-label="GitHub"
									className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
								>
									<Github className="w-4 h-4" />
								</a>
								<a
									href={personalInfo.linkedin}
									target="_blank"
									rel="noreferrer"
									aria-label="LinkedIn"
									className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
								>
									<Linkedin className="w-4 h-4" />
								</a>
								<a
									href={`mailto:${personalInfo.email}`}
									aria-label="Email"
									className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
								>
									<Mail className="w-4 h-4" />
								</a>
							</div>
						</motion.div>
					</div>

					{/* Right Column: Interactive Developer Terminal */}
					<div className="lg:col-span-5">
						<motion.div
							initial={{ opacity: 0, scale: 0.97 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xl overflow-hidden font-mono text-xs"
						>
							{/* Window Header with Clickable Tabs */}
							<div className="px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<div className="w-3 h-3 rounded-full bg-rose-500/80" />
									<div className="w-3 h-3 rounded-full bg-amber-500/80" />
									<div className="w-3 h-3 rounded-full bg-emerald-500/80" />
								</div>

								{/* Terminal Tab Switcher */}
								<div className="flex items-center gap-1 text-[11px]">
									<button
										onClick={() => setActiveTab("profile")}
										className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
											activeTab === "profile"
												? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-xs"
												: "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
										}`}
									>
										<Code2 className="w-3 h-3" />
										<span>profile.json</span>
									</button>

									<button
										onClick={() => setActiveTab("telemetry")}
										className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
											activeTab === "telemetry"
												? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-xs"
												: "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
										}`}
									>
										<Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
										<span>telemetry.log</span>
									</button>

									<button
										onClick={() => setActiveTab("git")}
										className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
											activeTab === "git"
												? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-xs"
												: "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
										}`}
									>
										<GitCommit className="w-3 h-3 text-indigo-500" />
										<span>git_log</span>
									</button>
								</div>

								<button
									onClick={handleCopy}
									title="Copy JSON"
									className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
								>
									{copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
								</button>
							</div>

							{/* Terminal Body with Animated Transitions */}
							<div className="p-5 sm:p-6 min-h-[310px] flex flex-col justify-between">
								<AnimatePresence mode="wait">
									{/* Tab 1: Profile JSON */}
									{activeTab === "profile" && (
										<motion.div
											key="profile"
											initial={{ opacity: 0, y: 4 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -4 }}
											transition={{ duration: 0.2 }}
											className="space-y-2 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] sm:text-xs"
										>
											<div>
												<span className="text-indigo-600 dark:text-indigo-400">const</span>{" "}
												<span className="text-amber-600 dark:text-amber-300">prakhar</span> = &#123;
											</div>

											<div className="pl-4 space-y-1">
												<div>
													<span className="text-zinc-400">role:</span>{" "}
													<span className="text-emerald-600 dark:text-emerald-400">"Senior Software Engineer | Software Manager"</span>,
												</div>
												<div>
													<span className="text-zinc-400">company:</span>{" "}
													<span className="text-emerald-600 dark:text-emerald-400">"YM Automation Pvt Ltd"</span>,
												</div>
												<div>
													<span className="text-zinc-400">track:</span>{" "}
													<span className="text-amber-600 dark:text-amber-400">"Promoted: SDE -> Software Manager"</span>,
												</div>
												<div>
													<span className="text-zinc-400">scale:</span> &#123;
													<div className="pl-4 text-zinc-600 dark:text-zinc-400">
														modules: <span className="text-amber-500">"12+ ERP/SaaS modules"</span>,<br />
														apis: <span className="text-amber-500">"300+ REST APIs (100+ Tables)"</span>,<br />
														iot: <span className="text-amber-500">"~65 machines @ ~1s polling"</span>
													</div>
													&#125;,
												</div>
												<div>
													<span className="text-zinc-400">stack:</span> [
													<div className="pl-4 text-emerald-600 dark:text-emerald-400">
														"Node.js", "Express", "React", "PostgreSQL",<br />
														"MQTT", "Modbus", "Azure", "AWS EC2"
													</div>
													]
												</div>
											</div>

											<div>&#125;;<span className="animate-pulse text-emerald-500 font-bold ml-1">_</span></div>
										</motion.div>
									)}

									{/* Tab 2: Live IoT Telemetry Logs */}
									{activeTab === "telemetry" && (
										<motion.div
											key="telemetry"
											initial={{ opacity: 0, y: 4 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -4 }}
											transition={{ duration: 0.2 }}
											className="space-y-2.5 font-mono text-[11px]"
										>
											<div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-400">
												<span className="flex items-center gap-1.5">
													<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
													LIVE SHOPFLOOR TELEMETRY DAEMON
												</span>
												<span>SUB-SECOND</span>
											</div>

											<div className="space-y-2">
												{logs.map((log) => (
													<motion.div
														key={log.id}
														initial={{ opacity: 0, x: -4 }}
														animate={{ opacity: 1, x: 0 }}
														className="flex items-start gap-2 leading-relaxed"
													>
														<span className="text-zinc-400 shrink-0">[{log.time}]</span>
														<span className="px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] shrink-0">
															{log.tag}
														</span>
														<span className="text-zinc-700 dark:text-zinc-300 truncate">
															{log.msg}
														</span>
													</motion.div>
												))}
											</div>
										</motion.div>
									)}

									{/* Tab 3: Git Architecture Activity */}
									{activeTab === "git" && (
										<motion.div
											key="git"
											initial={{ opacity: 0, y: 4 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -4 }}
											transition={{ duration: 0.2 }}
											className="space-y-2.5 font-mono text-[11px]"
										>
											<div className="pb-2 border-b border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-400 flex items-center justify-between">
												<span>$ git log --oneline -n 4</span>
												<span className="text-emerald-500">branch: main</span>
											</div>

											<div className="space-y-2 text-zinc-700 dark:text-zinc-300">
												<div className="flex items-center gap-2">
													<span className="text-amber-500 font-bold">d4f9a21</span>
													<span>feat(erp): evolve monolithic services to multi-tenant SaaS</span>
												</div>
												<div className="flex items-center gap-2">
													<span className="text-amber-500 font-bold">88c1b90</span>
													<span>perf(iot): optimize Modbus RTU polling cycle to 80ms</span>
												</div>
												<div className="flex items-center gap-2">
													<span className="text-amber-500 font-bold">3a17e04</span>
													<span>feat(reports): automate scheduled PDF dispatch via cron</span>
												</div>
												<div className="flex items-center gap-2">
													<span className="text-amber-500 font-bold">c901e12</span>
													<span>chore(team): establish code review SLA & onboarding docs</span>
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>

								{/* Bottom Status Ticker */}
								<div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
									<div className="flex items-center gap-1.5">
										<span className="w-2 h-2 rounded-full bg-emerald-500" />
										<span>process status: production ready</span>
									</div>
									<span className="font-semibold text-zinc-800 dark:text-zinc-200">PORT 8080</span>
								</div>
							</div>
						</motion.div>
					</div>

				</div>

				{/* Key CV Metrics Strip */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80"
				>
					{personalInfo.stats.map((stat, idx) => (
						<div
							key={idx}
							className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between"
						>
							<div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
								{stat.value}
							</div>
							<div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1">
								{stat.label}
							</div>
							<div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
								{stat.sub}
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
