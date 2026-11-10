import resumePdf from "../assets/Prakhar_CV_2026.pdf";

export const personalInfo = {
	name: "Prakhar",
	title: "Senior Full Stack & Backend Engineer",
	roleLine: "Node.js · React.js · PostgreSQL · Enterprise SaaS & IIoT",
	company: "YM Automation Pvt Ltd",
	period: "Jul 2022 – Oct 2026",
	location: "Bengaluru, Karnataka, India",
	email: "prakhar2410kr@gmail.com",
	phone: "+91 7019954505",
	phoneRaw: "7019954505",
	github: "https://github.com/prax2410",
	githubUsername: "prax2410",
	linkedin: "https://linkedin.com/in/prakhar-prakhar-b1b052106",
	resumeUrl: resumePdf,
	bio: "4+ years scaling multi-tenant SaaS ERPs & 24×7 industrial telemetry. Ex-Software Manager, YM Automation (Jul 2022 – Oct 2026).",
	noticeStatus: "Available Immediately",
	availability: "Bengaluru · Hybrid / Remote",
	targetRoles: "Senior Full Stack · Backend · Tech Lead",
	experienceYears: "4+ Years Exp",
	getWhatsAppUrl: (
		customText = "Hi Prakhar, reviewed your portfolio and would like to connect regarding an engineering role."
	) => `https://wa.me/917019954505?text=${encodeURIComponent(customText)}`,
	stats: [
		{
			label: "Experience",
			value: "4+ Years",
			sub: "SDE → Software Manager (Jul 2022 – Oct 2026)",
		},
		{
			label: "ERP Platform",
			value: "12+ Modules",
			sub: "300+ APIs · 100+ Tables · 5 Companies (DB/Tenant)",
		},
		{
			label: "IIoT Scale",
			value: "Up to 65 Devices",
			sub: "24×7 PLC Telemetry · MQTT · Modbus · ~1s Poll",
		},
		{
			label: "Delivery Track",
			value: "12+ Prod Apps",
			sub: "~10 Client Orgs · AWS EC2 · Azure · PM2",
		},
	],
	coreKeywords: [
		"Node.js",
		"Express.js",
		"React.js",
		"PostgreSQL",
		"REST APIs",
		"RBAC",
		"ACID Transactions",
		"Cursor Pagination",
		"MQTT",
		"Modbus TCP/RTU",
		"AWS EC2",
		"Microsoft Azure",
		"Nginx",
		"PM2",
		"GitHub Actions",
	],
};

export const teamStructure = [
	{ role: "UI/UX", count: 2 },
	{ role: "Frontend", count: 1 },
	{ role: "Backend", count: 1 },
	{ role: "Mobile", count: 1 },
	{ role: "Interns", count: 3 },
];

export const experienceData = [
	{
		id: 1,
		role: "Software Manager (Hands-On Tech Lead)",
		company: "YM Automation Pvt Ltd",
		location: "Coimbatore, Tamil Nadu",
		period: "Oct 2024 – Oct 2026",
		highlights: [
			{
				tag: "Delivery",
				text: "Owned 7–8 client projects across ~10 organizations (scoping → cloud release).",
			},
			{
				tag: "Architecture",
				text: "Built reusable React UI components & shared MQTT/Modbus integration setups.",
			},
			{
				tag: "Leadership",
				text: "Led BE, FE, Mobile & UI/UX execution; PR reviews, task scoping & mentoring.",
			},
			{
				tag: "Cloud Ops",
				text: "Managed AWS EC2 & Azure production deployments via Nginx, PM2, SSL & GitHub Actions.",
			},
		],
		tech: ["Node.js", "React.js", "PostgreSQL", "MQTT", "Modbus", "AWS EC2", "Azure", "GitHub Actions"],
	},
	{
		id: 2,
		role: "Software Development Engineer",
		company: "YM Automation Pvt Ltd",
		location: "Remote, Bengaluru, Karnataka",
		period: "Jul 2022 – Oct 2024",
		highlights: [
			{
				tag: "ERP SaaS",
				text: "Built 12+ modules, 300+ REST APIs & 100+ PostgreSQL tables (separate DB per company, 5 clients).",
			},
			{
				tag: "SQL & Concurrency",
				text: "Implemented cursor-based BOM pagination (1,000+ rows) & FOR UPDATE stage locking.",
			},
			{
				tag: "IIoT Pipeline",
				text: "Engineered 24×7 PLC monitoring over MQTT, Modbus TCP/RTU & TCP sockets (~1s poll, up to 65 devices).",
			},
			{
				tag: "Ownership",
				text: "Independently designed, shipped, and supported 12+ full-stack production applications.",
			},
		],
		tech: ["React.js", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "JSONB", "RBAC", "TCP Sockets"],
	},
];

export const projectsData = [
	{
		id: "enterprise-erp-saas",
		title: "Enterprise ERP & Multi-Company SaaS",
		category: "Enterprise SaaS",
		badge: "12+ Modules · 5 Companies",
		organization: "YM Automation Pvt Ltd",
		tagline: "HRMS, payroll, inventory, procurement, sales & CRM on isolated tenant DBs.",
		businessProblem: "Replaced fragmented spreadsheets with unified multi-tenant workflows and strict data isolation.",
		architecture: "Express + JWT/RBAC · Separate PostgreSQL DB per company · 100+ normalized tables + JSONB.",
		sqlAndPerformance: "Bounded per-tenant pg.Pool routing, parameterized SQL, ACID transactions across payroll & stock.",
		ownership: "Core schema, 300+ REST APIs, React modules & 5-company rollout (~300–400 employees).",
		architectureDecisions: [
			"Separate PostgreSQL database per company via JWT-derived pool router for physical tenant isolation.",
			"Relational PostgreSQL + ACID transactions for payroll, inventory, and financial consistency.",
			"100+ normalized tables paired with JSONB columns and centralized RBAC middleware.",
		],
		keyChallenges: "Correlating attendance, payroll, and inventory consistently across 5 separate company databases.",
		engineeringOutcomes: "Zero cross-tenant leakage across 5 live organizations (~300–400 active employees).",
		tech: ["Node.js", "Express.js", "React.js", "PostgreSQL", "DB-per-Tenant", "RBAC", "JSONB"],
	},
	{
		id: "production-tracking-workflow",
		title: "Production Tracking & BOM Workflow",
		category: "Enterprise System",
		badge: "12-Stage Routing · Cursor SQL",
		organization: "YM Automation Pvt Ltd",
		tagline: "Branching 12-stage shopfloor routing and fast BOM reporting.",
		businessProblem: "Non-linear rework/scrap routing caused WIP mismatches and slow offset-based BOM queries.",
		architecture: "Finite-state routing API · Transactional PostgreSQL row locking · Keyset pagination.",
		sqlAndPerformance: "SELECT ... FOR UPDATE prevents double-transitions; (created_at, id) cursor pagination on 1,000+ row BOMs.",
		ownership: "State-transition APIs, SQL query tuning, dynamic filters & React workflow/BOM views.",
		architectureDecisions: [
			"State-graph validation preventing illegal jumps across 12 branching manufacturing stages.",
			"Pessimistic row locking (SELECT ... FOR UPDATE) inside transactions for concurrent operators.",
			"Replaced OFFSET scans with indexed dynamic filters + keyset cursor pagination on BOM reports.",
		],
		keyChallenges: "Maintaining accurate WIP counts during concurrent operator updates and rework/scrap branches.",
		engineeringOutcomes: "Consistent stage traceability and fast cursor-paginated BOM reports (1,000+ rows/project).",
		tech: ["Node.js", "PostgreSQL", "Cursor Pagination", "Row Locking", "React.js", "REST APIs"],
	},
	{
		id: "iiot-monitoring-platform",
		title: "24×7 Industrial IoT Monitoring",
		category: "IIoT & Telemetry",
		badge: "Up to 65 Devices · ~1s Poll",
		organization: "Client Plants",
		tagline: "Real-time PLC telemetry, machine alarms & production tracking across sites.",
		businessProblem: "Plants lacked continuous visibility into PLC faults, downtime, and machine status across sites.",
		architecture: "Modbus TCP/RTU + MQTT (QoS 1) → Node.js PM2 workers → PostgreSQL + WebSockets UI.",
		sqlAndPerformance: "Per-device in-flight locks prevent poll pile-ups; pg-pool batch writes + composite (device_id, timestamp) index.",
		ownership: "PLC/MQTT/Modbus ingestion daemons, WebSocket feeds, DB schemas & reusable setup modules.",
		architectureDecisions: [
			"MQTT (QoS 1) + Modbus TCP/RTU over HTTP polling for noisy factory networks.",
			"In-flight device concurrency guard + reconnect backoff preventing overlapping slow-PLC ticks.",
			"Composite time-series indexing + pg-pool batch inserts for 24×7 ingestion stability.",
		],
		keyChallenges: "Preventing event-loop blocking while polling up to 65 industrial controllers at ~1s cycles.",
		engineeringOutcomes: "Continuous 24×7 machine status, alarm, and event tracking across multi-site deployments.",
		tech: ["Node.js", "MQTT", "Modbus TCP/RTU", "TCP Sockets", "PostgreSQL", "React.js", "PM2"],
	},
	{
		id: "production-energy-monitoring",
		title: "Production & Energy Analytics",
		category: "IIoT & Analytics",
		badge: "SQL Rollups · Idempotent Upsert",
		organization: "Client Plants",
		tagline: "Live and historical energy consumption, OEE & alarm analytics dashboards.",
		businessProblem: "Querying raw sensor logs directly stalled historical energy dashboards during live ingestion.",
		architecture: "Scheduled hourly/daily SQL rollup workers + REST analytics APIs + React chart views.",
		sqlAndPerformance: "Transactional INSERT ... ON CONFLICT DO UPDATE rollups + composite time-bucket indexes.",
		ownership: "Rollup SQL schema, aggregation workers, analytics APIs & reusable React chart modules.",
		architectureDecisions: [
			"Downsampled raw telemetry into hourly/daily summary tables to keep trend queries fast.",
			"Idempotent ON CONFLICT upserts inside explicit transactions so job retries never double-count kWh.",
			"Shared React dashboard components reused across multiple client monitoring rollouts.",
		],
		keyChallenges: "Isolating multi-week historical energy aggregations from continuous live sensor writes.",
		engineeringOutcomes: "Replaced manual spreadsheet reporting with live energy dashboards and fast historical trends.",
		tech: ["PostgreSQL", "SQL Rollups", "Indexing", "Transactions", "Node.js", "React.js"],
	},
];

export const skillsData = [
	{
		category: "Backend & APIs",
		skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT Auth", "RBAC", "Transactions"],
	},
	{
		category: "Frontend",
		skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Axios", "State Management", "HTML5 / CSS3"],
	},
	{
		category: "Database",
		skills: ["PostgreSQL", "Schema Design", "Query Tuning", "Indexing", "Cursor Pagination", "JSONB", "MongoDB"],
	},
	{
		category: "Industrial IoT",
		skills: ["MQTT", "Modbus TCP/RTU", "TCP/IP", "TCP Sockets", "PLC Integration", "Real-Time Polling"],
	},
	{
		category: "Cloud & DevOps",
		skills: ["AWS EC2", "Microsoft Azure", "Linux", "Nginx", "PM2", "GitHub Actions", "SSL / DNS"],
	},
	{
		category: "Engineering",
		skills: ["System Architecture", "Code Review", "Technical Scoping", "Mentoring", "Production Support"],
	},
];

export const educationData = {
	institution: "Siddaganga Institute of Technology, Tumakuru",
	degree: "B.E. in Computer Science and Engineering",
	location: "Tumakuru, Karnataka",
};
