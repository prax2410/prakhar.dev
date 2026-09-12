import resumePdf from "../assets/Prakhar_CV_2026.pdf";

export const personalInfo = {
	name: "Prakhar",
	title: "Senior Software Engineer",
	subtitle:
		"Full Stack | Node.js | React | PostgreSQL | Enterprise SaaS | IIoT",
	company: "YM Automation Pvt Ltd",
	period: "Jul 2022 - Present",
	location: "Bengaluru, Karnataka, India",
	workLocation: "Coimbatore, Tamil Nadu",
	email: "prakhar2410kr@gmail.com",
	phone: "+91 7019954505",
	phoneRaw: "7019954505",
	github: "https://github.com/prax2410",
	githubUsername: "prax2410",
	linkedin: "https://linkedin.com/in/prakhar-prakhar-b1b052106",
	linkedinUsername: "Prakhar",
	resumeUrl: resumePdf,
	summary:
		"Senior Software Engineer with 4+ years of experience building enterprise SaaS, ERP, and IIoT applications across the full software development lifecycle. Hands-on experience with Node.js, Express.js, React, JavaScript, and PostgreSQL, with ownership spanning frontend development, backend services, REST APIs, database design, integrations, deployment, and production support. Built and supported a 12+ module ERP platform with 300+ APIs and production applications used across multiple customer organizations. Experienced in real-time industrial applications integrating PLCs and automation systems through MQTT, Modbus, and TCP/IP. Promoted from Software Development Engineer to Software Manager, combining hands-on engineering with technical leadership and end-to-end delivery.",
	bio: "Senior Software Engineer with 4+ years of experience building enterprise SaaS, ERP, and IIoT applications. Promoted from Software Development Engineer to Software Manager at YM Automation Pvt Ltd.",
	stats: [
		{
			label: "Platform Scale",
			value: "12+ Modules",
			sub: "300+ APIs & 100+ Tables",
		},
		{
			label: "Projects Delivered",
			value: "12 Projects",
			sub: "7–8 Projects across ~10 Cos",
		},
		{
			label: "IIoT Scale",
			value: "~65 Devices",
			sub: "24×7 Real-time ~1s Polling",
		},
		{
			label: "Career Track",
			value: "SDE → Software Manager",
			sub: "YM Automation (Jul 2022 - Present)",
		},
	],
};

export const teamStructure = [
	{
		role: "UI/UX Design",
		count: 2,
		desc: "Figma design systems and intuitive user flows for ERP & IIoT dashboards.",
	},
	{
		role: "Frontend Engineering",
		count: 1,
		desc: "High-performance React web interfaces and live telemetry state management.",
	},
	{
		role: "Backend Engineering",
		count: 1,
		desc: "Node.js RESTful APIs, WebSockets, and PostgreSQL database schemas.",
	},
	{
		role: "Mobile App Development",
		count: 1,
		desc: "Cross-platform mobile apps for on-the-go plant monitoring and alerts.",
	},
	{
		role: "Software Interns",
		count: 3,
		desc: "Mentoring junior engineers in clean code, PERN stack, and code reviews.",
	},
];

export const experienceData = [
	{
		id: 1,
		role: "Software Manager",
		company: "YM Automation Pvt Ltd",
		location: "Coimbatore, Tamil Nadu",
		period: "Oct 2024 - Present",
		type: "Technical Leadership & Full Stack",
		isCurrent: true,
		summary:
			"Leading cross-functional software teams while remaining hands-on with application architecture, development, debugging, and production support.",
		highlights: [
			"Led a cross-functional software team across backend, frontend, mobile, and UI/UX while remaining hands-on with application architecture, development, debugging, and production support.",
			"Designed and developed full-stack architectures for enterprise SaaS, ERP, and IIoT applications, covering frontend interfaces, REST APIs, business logic, data models, integrations, and deployment.",
			"Led 7–8 projects across ~10 customer companies, including multi-site industrial deployments and 24×7 IIoT systems integrating PLCs through MQTT, Modbus TCP/RTU, and TCP/IP.",
			"Managed end-to-end technical delivery including customer requirements, estimation, proposals, architecture, development planning, deployment, troubleshooting, and production support.",
			"Conducted code reviews and mentoring, allocated technical tasks, tracked delivery, and resolved technical blockers across frontend and backend development.",
		],
		tech: [
			"Node.js",
			"Express.js",
			"React.js",
			"PostgreSQL",
			"Microsoft Azure",
			"AWS EC2",
			"MQTT",
			"Modbus TCP/RTU",
			"TCP/IP",
			"PM2",
			"GitHub Actions",
			"System Architecture",
		],
	},
	{
		id: 2,
		role: "Software Development Engineer",
		company: "YM Automation Pvt Ltd",
		location: "Coimbatore, Tamil Nadu",
		period: "Jul 2022 - Oct 2024",
		type: "Full Stack Engineering",
		isCurrent: false,
		summary:
			"Independently designed, developed, deployed, and supported 12 production software projects, contributing across frontend, backend, database, and integrations.",
		highlights: [
			"Independently designed, developed, deployed, and supported 12 production software projects, contributing across frontend, backend, database, integrations, and production environments.",
			"Developed full-stack web applications using React.js, JavaScript, Node.js, Express.js, and PostgreSQL, building responsive interfaces, REST APIs, business logic, authentication, RBAC, and application workflows.",
			"Designed PostgreSQL schemas and implemented SQL queries, relationships, indexing, transactions, JSONB, and database optimization for production applications.",
			"Developed real-time integrations with PLCs and industrial systems using MQTT, Modbus TCP/RTU, TCP/IP, TCP sockets, and polling, with typical polling intervals of ~1 second depending on requirements.",
			"Built and supported 24×7 IIoT applications for machine monitoring, production, energy, alarms, events, and analytics, integrating up to ~65 machines/devices.",
		],
		tech: [
			"React.js",
			"JavaScript",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"SQL & JSONB",
			"MQTT",
			"Modbus TCP/RTU",
			"TCP Sockets",
			"REST APIs",
			"RBAC",
			"PM2",
		],
	},
];

export const keyAchievements = [
	{
		id: 1,
		title: "12+ Module Enterprise ERP & SaaS Platform",
		description:
			"Architected full-stack ERP covering HRMS, projects, attendance, payroll, inventory, purchase, sales, CRM, with 300+ REST APIs and 100+ PostgreSQL tables.",
		tag: "Enterprise SaaS & Scale",
	},
	{
		id: 2,
		title: "24×7 IIoT Deployments (~65 Devices)",
		description:
			"Real-time integrations with PLCs using MQTT, Modbus TCP/RTU, and TCP sockets with ~1-second polling intervals across multi-site industrial plants.",
		tag: "IIoT & Hardware Automation",
	},
	{
		id: 3,
		title: "12 Independent Production Software Projects",
		description:
			"Delivered 12 complete production software projects from technical requirements and DB architecture through cloud deployment and 24×7 production support.",
		tag: "Full-Stack Delivery",
	},
	{
		id: 4,
		title: "Career Track: SDE → Software Manager",
		description:
			"Progressed from SDE to Software Manager at YM Automation, leading cross-functional engineering teams while driving full-stack application architecture and cloud deployments.",
		tag: "YM Automation Progression",
	},
];

export const projectsData = [
	{
		id: "enterprise-erp-saas",
		title: "Enterprise ERP & SaaS Platform",
		category: "Enterprise SaaS & ERP",
		badge: "12+ Modules • 300+ APIs",
		isProprietary: true,
		organization: "YM Automation Pvt Ltd",
		tagline:
			"Scalable multi-company platform with 300+ APIs and 100+ PostgreSQL tables.",
		description:
			"Designed and developed a 12+ module ERP/SaaS platform covering HRMS, projects, attendance, payroll, inventory, purchase, sales, CRM, and other enterprise operations. Built full-stack functionality using React.js, Node.js, Express.js, and PostgreSQL, developing reusable UI components, REST APIs, business workflows, authentication, RBAC, validation, and data persistence.",
		impact: "Developed 300+ REST APIs and designed a PostgreSQL data model with 100+ tables (transactions, JSONB, indexing). Built the platform to support 100+ companies, with 4 companies onboarded and 300–400 active employees represented.",
		highlightMetric: "12+ Modules | 300+ APIs",
		architectureDecisions: [
			"Selected relational PostgreSQL over NoSQL to enforce strict ACID transactional consistency across interdependent inventory, financial, and payroll ledgers.",
			"Architected 100+ normalized tables paired with JSONB columns for polymorphic company attributes, eliminating recurring schema migrations per onboarded tenant.",
			"Built centralized RBAC middleware with granular role-permission mapping, ensuring strict data boundary isolation across multi-tenant organizations."
		],
		keyChallenges: "Managing high schema normalization without sacrificing latency across cross-module queries (e.g. correlating biometric attendance with automated payroll deductions).",
		engineeringOutcomes: "Delivered sub-100ms API response times across core transactional modules; safely scaled to 4 active onboarded companies with capacity for 100+.",
		tech: [
			"React.js",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"100+ Tables",
			"300+ REST APIs",
			"RBAC",
			"JSONB",
			"Transactions",
		],
		links: {},
	},
	{
		id: "production-tracking-workflow",
		title: "Production Tracking & Workflow System",
		category: "Enterprise System",
		badge: "12-Stage Routing",
		isProprietary: true,
		organization: "YM Automation Pvt Ltd",
		tagline:
			"Configurable 12-stage workflow engine with branching routes and stage transitions.",
		description:
			"Developed a full-stack production tracking system supporting 12-stage production workflows with branching routes based on operational requirements. Built frontend workflows and backend APIs to manage stage transitions, routing, production status, quantities, and workflow progress.",
		impact: "Implemented application logic for tracking production movement across different workflow paths, providing seamless real-time visibility into ongoing plant operations.",
		highlightMetric: "12-Stage Branching",
		architectureDecisions: [
			"Engineered a deterministic finite-state engine governing 12 stages to prevent illegal state jumps and race conditions during simultaneous operator entries.",
			"Applied database row-level locking (SELECT FOR UPDATE) during batch status transitions to prevent duplicate inventory deduction under concurrent operator requests.",
			"Decoupled workflow topology definitions from execution instances, enabling zero-downtime routing modifications for custom plant lines."
		],
		keyChallenges: "Handling non-linear branching routes (rework, bypass, scrap) while maintaining accurate work-in-progress (WIP) quantities and complete audit traceability.",
		engineeringOutcomes: "Eliminated manual shopfloor paperwork delays across 12 stages, providing instant bottleneck visibility for plant supervisors.",
		tech: [
			"React.js",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"REST APIs",
			"Workflow Engine",
			"State Routing",
		],
		links: {},
	},
	{
		id: "iiot-monitoring-platform",
		title: "IIoT Monitoring Platform",
		category: "IIoT & Automation",
		badge: "24×7 Real-Time • ~65 Devices",
		isProprietary: true,
		organization: "YM Automation Clients",
		tagline:
			"High-frequency telemetry pipeline connecting industrial PLCs to live dashboards.",
		description:
			"Developed full-stack production applications for 24×7 real-time monitoring of industrial machinery and automation systems. Built React-based monitoring interfaces and Node.js backend services for machine status, production data, alarms, events, and historical analytics.",
		impact: "Integrated PLCs and machines through MQTT, Modbus TCP/RTU, TCP/IP, and TCP sockets with typical ~1-second polling intervals, supporting systems with up to ~65 machines/devices.",
		highlightMetric: "~1s Polling Interval",
		architectureDecisions: [
			"Selected MQTT (QoS 1) and Modbus TCP/RTU over HTTP polling to minimize packet overhead and survive noisy factory Wi-Fi/Ethernet environments.",
			"Engineered an in-memory buffer with backoff reconnection logic in the Node.js daemon to prevent telemetry data loss during edge gateway disconnects.",
			"Optimized PostgreSQL connection pooling (pg-pool) and composite indexing on (device_id, timestamp) for high-frequency sub-second inserts."
		],
		keyChallenges: "Preventing event-loop starvation and memory leaks in a 24×7 Node.js daemon polling up to ~65 industrial machine controllers every second.",
		engineeringOutcomes: "Maintained 24×7 real-time telemetry uptime across multi-site industrial deployments with sub-second dashboard updates.",
		tech: [
			"MQTT",
			"Modbus TCP/RTU",
			"TCP/IP",
			"TCP Sockets",
			"React.js",
			"Node.js",
			"PostgreSQL",
			"PM2",
		],
		links: {},
	},
	{
		id: "production-energy-monitoring",
		title: "Production & Energy Monitoring System",
		category: "IIoT & Automation",
		badge: "Energy & Metric Analytics",
		isProprietary: true,
		organization: "YM Automation Clients",
		tagline:
			"Telemetry intelligence platform for real-time energy usage and machine efficiency.",
		description:
			"Developed full-stack functionality for real-time and historical production, energy, machine, alarm, and event monitoring. Built REST APIs, database workflows, and frontend monitoring views for operational dashboards and analytics.",
		impact: "Optimized SQL queries and database workflows using indexing, transactions, and efficient data-access patterns for high-throughput production monitoring and historical trend reporting.",
		highlightMetric: "Real-Time & Historical",
		architectureDecisions: [
			"Designed automated aggregation workers running via cron to downsample raw telemetry into hourly and daily summary tables, preventing dashboard latency degrade.",
			"Implemented transactional database rollbacks and read/write query separation to isolate intensive analytics queries from live machine ingestion.",
			"Structured reusable React SVG gauge and trend chart components that render efficiently without re-rendering the entire dashboard on incoming socket events."
		],
		keyChallenges: "Executing multi-million row historical energy trend queries without impacting concurrent live shopfloor sensor streaming.",
		engineeringOutcomes: "Reduced management reporting generation from manual hours to automated real-time dispatch with zero database deadlocks.",
		tech: [
			"React.js",
			"Node.js",
			"PostgreSQL",
			"SQL Optimization",
			"Indexing",
			"Transactions",
			"REST APIs",
		],
		links: {},
	},
];

export const seniorEngineeringPrinciples = [
	{
		title: "Pragmatic Architecture over Resume-Driven Tech",
		principle: "Choose proven, robust primitives (PostgreSQL, Node.js, React) and master them deeply. System simplicity, reliability, and business ROI always trump unneeded complexity.",
		tag: "System Design",
	},
	{
		title: "Contract-First & Defensive Boundaries",
		principle: "Validate early at the system edge. Strict DTO schemas, idempotent mutations, atomic transactions, and predictable error contracts ensure systems fail safely.",
		tag: "Reliability",
	},
	{
		title: "Observability Built-in from Day 1",
		principle: "If you cannot monitor or trace it in production, it is not production-ready. Structured logging, health checks, and daemon metrics must be engineered alongside features.",
		tag: "Operations",
	},
	{
		title: "Mentorship as an Engineering Multiplier",
		principle: "Seniority is defined by how much you elevate your team. Thorough code reviews, architecture documentation, and pairing turn junior engineers into confident owners.",
		tag: "Leadership",
	},
];

export const skillsData = [
	{
		category: "Frontend",
		skills: [
			"React.js",
			"HTML5",
			"CSS3",
			"Axios",
			"State Management",
			"Responsive UI",
			"JavaScript",
		],
	},
	{
		category: "Backend",
		skills: [
			"Node.js",
			"Express.js",
			"JavaScript",
			"REST APIs",
			"WebSockets",
			"Authentication",
			"RBAC",
			"API Development",
			"Business Logic",
		],
	},
	{
		category: "Database",
		skills: [
			"PostgreSQL",
			"SQL",
			"Database Design",
			"Query Optimization",
			"Indexing",
			"Transactions",
			"JSONB",
			"MongoDB",
		],
	},
	{
		category: "Cloud & Deployment",
		skills: [
			"Microsoft Azure",
			"AWS EC2",
			"Linux",
			"Nginx",
			"PM2",
			"GitHub Actions",
			"SSL",
			"DNS",
		],
	},
	{
		category: "IIoT",
		skills: [
			"MQTT",
			"Modbus TCP/RTU",
			"TCP/IP",
			"TCP Sockets",
			"PLC Integration",
			"Real-time Data Processing",
		],
	},
	{
		category: "Engineering Competencies",
		skills: [
			"Full-Stack Development",
			"System Architecture",
			"Database Architecture",
			"API Development",
			"Performance Optimization",
			"Authentication & RBAC",
			"Code Review",
			"Debugging",
		],
	},
];

export const engineeringCompetencies = [
	"Full-Stack Development",
	"System Architecture",
	"Database Architecture",
	"API Development",
	"Performance Optimization",
	"Authentication & RBAC",
	"Code Review",
	"Debugging",
];

export const languages = [
	{ name: "English", proficiency: "Professional" },
	{ name: "Hindi", proficiency: "Native" },
];

export const educationData = {
	institution: "Siddaganga Institute of Technology, Tumakuru",
	degree: "Bachelor of Engineering in Computer Science and Engineering",
	cgpa: "6.62",
	period: "2011 - 2018",
	location: "Tumakuru, Karnataka",
};
