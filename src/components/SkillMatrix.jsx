import React from "react";
import {
	Code2,
	Database,
	Layers,
	Radio,
	GitBranch,
	Cloud,
} from "lucide-react";

const EXPERTISE_DOMAINS = [
	{
		id: "full-stack",
		title: "Full-Stack Application Engineering",
		icon: Code2,
		skills: ["React.js", "Node.js", "Express.js", "JavaScript (ES6+)", "REST APIs", "WebSockets", "Responsive UI"],
		description:
			"End-to-end web architectures connecting responsive, componentized React.js frontends with robust Node.js/Express backends. Designed 300+ secure RESTful endpoints, custom auth middleware, and low-latency WebSocket event streams.",
		highlights: [
			"300+ REST APIs architected, documented, and deployed",
			"Modular React component systems with clean state lifecycles",
			"Bi-directional WebSocket streaming for live operations",
		],
	},
	{
		id: "database",
		title: "Database Engineering & Optimization",
		icon: Database,
		skills: ["PostgreSQL", "Query Optimization", "B-Tree Indexing", "ACID Transactions", "JSONB", "Keyset Cursors", "MongoDB"],
		description:
			"Relational architectures scaling past 100+ tables. Specializes in PostgreSQL performance tuning, composite indexing, keyset pagination (420ms to 1.8ms), pessimistic locking (SELECT ... FOR UPDATE), and JSONB semi-structured documents.",
		highlights: [
			"100+ tables relational schema design with ACID guarantees",
			"Keyset cursor pagination reducing query latency to 1.8ms",
			"Pessimistic row locking for zero concurrency collisions",
		],
	},
	{
		id: "enterprise-saas",
		title: "Enterprise Application Development & SaaS",
		icon: Layers,
		skills: ["Multi-Tenant Arch", "PostgreSQL Routing", "RBAC & JWT", "HRMS & Payroll", "Inventory ERP", "Audit Logging"],
		description:
			"Multi-tenant architectures with strict physical database isolation per tenant. Built 12+ enterprise modules spanning biometric HRMS, automated statutory payroll, and double-entry inventory tracking across 5 onboarded organizations.",
		highlights: [
			"Physical DB segregation with dynamic tenant pool routing",
			"12+ modules supporting 300–400 active client employees",
			"Granular role-based access control (RBAC) and audit trails",
		],
	},
	{
		id: "industrial-iot",
		title: "Industrial IoT & Hardware Interfacing",
		icon: Radio,
		skills: ["Modbus TCP/RTU", "MQTT Broker", "TCP Sockets", "PLC Integration", "RS-485 Serial", "Telemetry Pipelines"],
		description:
			"Connecting software platforms directly with factory automation controllers (Siemens, Delta PLCs, CNC machinery). Built protocol drivers over Modbus TCP (Ethernet) and Modbus RTU (RS-485 serial), parsing raw hex registers into telemetry.",
		highlights: [
			"Continuous polling of up to 65 devices across factory plants",
			"In-flight concurrency mutex locks preventing serial collisions",
			"MQTT broker integration with QoS 1 ring-buffer persistence",
		],
	},
	{
		id: "leadership",
		title: "Architecture & Engineering Leadership",
		icon: GitBranch,
		skills: ["System Architecture", "Tech Roadmap", "PR Code Reviews", "Sprint Planning", "Team Mentoring", "Production Ops"],
		description:
			"Hands-on engineering leader promoted to Software Manager. Directed a 5-engineer team (backend, frontend, mobile, UI/UX) and interns while owning architecture blueprints, sprint delivery, code reviews, and production releases.",
		highlights: [
			"Led cross-functional team of 5 engineers plus interns",
			"Rapid turnaround: 3 production systems delivered in 5 days",
			"12+ solo delivered projects (~20 overall client deliveries)",
		],
	},
	{
		id: "cloud-ops",
		title: "Cloud Infrastructure & Operations",
		icon: Cloud,
		skills: ["Microsoft Azure", "AWS EC2", "Ubuntu Linux", "Nginx Reverse Proxy", "PM2 Clustering", "GitHub Actions CI/CD"],
		description:
			"Production server administration and continuous delivery pipelines across AWS EC2 and Azure Linux virtual machines. Configured Nginx reverse proxies, automated SSL renewals, PM2 process clustering, and GitHub Actions CI/CD.",
		highlights: [
			"Zero-downtime PM2 cluster process management in Linux",
			"Nginx reverse proxy with automated Let's Encrypt SSL",
			"Automated GitHub Actions CI/CD with health probes",
		],
	},
];

export default function SkillMatrix() {
	return (
		<section
			id="skills"
			className="py-[70px] sm:py-[85px] border-b border-[#e5e7eb] dark:border-[#262628] bg-white dark:bg-black transition-colors"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
				{/* Section Header */}
				<div className="space-y-2 border-b border-[#e5e7eb] dark:border-[#262628] pb-5">
					<p className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
						05 · Technical Capabilities
					</p>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
						Engineering &amp; Technical Expertise
					</h2>
					<p className="text-base sm:text-lg text-[#86868b] max-w-3xl font-normal leading-relaxed">
						Core engineering competencies demonstrated through production enterprise software, database architecture, and industrial hardware integrations.
					</p>
				</div>

				{/* 6 Structured Engineering Domain Cards - Balanced & Harmonized */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{EXPERTISE_DOMAINS.map((domain) => {
						const Icon = domain.icon;
						return (
							<div
								key={domain.id}
								className="p-5 sm:p-6 rounded-2xl border border-[#e5e7eb] dark:border-[#262628] bg-[#f9f9fb] dark:bg-[#111112] flex flex-col justify-between space-y-5 transition-colors h-full"
							>
								<div className="space-y-3.5 flex-1 flex flex-col">
									{/* Title Header with Guaranteed Uniform Height */}
									<div className="flex items-center gap-2.5 min-h-[44px]">
										<div className="w-8 h-8 rounded-lg bg-white dark:bg-[#1c1c1f] border border-[#e5e7eb] dark:border-[#2d2d2f] flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] shrink-0">
											<Icon className="w-4 h-4" />
										</div>
										<h3 className="font-bold text-[15px] sm:text-[16px] text-[#1d1d1f] dark:text-white leading-snug">
											{domain.title}
										</h3>
									</div>

									{/* Description with Uniform Vertical Space */}
									<p className="text-xs sm:text-[13px] text-[#86868b] leading-relaxed font-normal min-h-[72px]">
										{domain.description}
									</p>

									{/* Key Evidence Points with Consistent Height */}
									<div className="space-y-1.5 pt-3 border-t border-[#e5e7eb] dark:border-[#262628] text-xs flex-1">
										{domain.highlights.map((h, i) => (
											<div key={i} className="flex items-start gap-1.5 text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90 leading-snug">
												<span className="text-[#0071e3] dark:text-[#2997ff] font-bold">•</span>
												<span>{h}</span>
											</div>
										))}
									</div>
								</div>

								{/* Tech Pills Container with Uniform Height */}
								<div className="flex flex-wrap content-start gap-1.5 pt-3 border-t border-[#e5e7eb] dark:border-[#262628] min-h-[62px]">
									{domain.skills.map((skill) => (
										<span
											key={skill}
											className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-[#1a1a1c] border border-[#e5e7eb] dark:border-[#2d2d2f] text-[#1d1d1f] dark:text-[#f5f5f7] whitespace-nowrap"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
