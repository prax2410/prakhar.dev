import resumePdf from "../assets/Prakhar_CV_2026.pdf";

export const personalInfo = {
	name: "Prakhar",
	title: "Senior Software Engineer | Full Stack Developer",
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
	bio: "Senior Software Engineer with 4+ years of experience in early-stage startup environments, building enterprise SaaS, ERP, and Industrial IoT applications. Progressed from sole developer as SDE to Software Manager, combining hands-on engineering, end-to-end project ownership, system architecture, client engagement, and technical leadership. Independently delivered 12+ projects and contributed to approximately 20 projects overall, with experience across Node.js, React, PostgreSQL, and 300+ REST APIs.",
	noticeStatus: "Available Immediately",
	availability: "Bengaluru · On-site / Hybrid / Remote",
	workModes: "On-site / Hybrid / Remote",
	targetRoles: "Senior Software Engineer · Full Stack · Tech Lead",
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
			sub: "300+ REST APIs · 100+ Tables · 5 Companies",
		},
		{
			label: "IIoT Scale",
			value: "Up to 65 Devices",
			sub: "MQTT · Modbus TCP/RTU · Real-Time Telemetry",
		},
		{
			label: "Delivery Track",
			value: "12+ Projects",
			sub: "Independently Delivered · ~20 Projects Overall",
		},
	],
	coreKeywords: [
		"Node.js",
		"React.js",
		"Express.js",
		"PostgreSQL",
		"JavaScript",
		"REST APIs",
		"WebSockets",
		"Authentication",
		"RBAC",
		"MQTT",
		"Modbus TCP/RTU",
		"AWS EC2",
		"Microsoft Azure",
		"GitHub Actions",
	],
};

export const teamStructure = [
	{ role: "Frontend", count: 1 },
	{ role: "Backend", count: 1 },
	{ role: "Mobile", count: 1 },
	{ role: "UI/UX", count: 2 },
	{ role: "Interns", count: 3 },
];

export const experienceData = [
	{
		id: 1,
		role: "Software Manager",
		company: "YM Automation Private Limited",
		location: "Coimbatore, Tamil Nadu",
		period: "Oct 2024 – Oct 2026",
		highlights: [
			{
				tag: "Engineering Leadership & Team",
				text: "Led a cross-functional team of 5 across backend, frontend, mobile, and UI/UX, along with interns. Owned software architecture, technology selection, technical planning, resource allocation, and engineering execution.",
			},
			{
				tag: "Project Delivery & Customer Scope",
				text: "Led delivery of 7–8 projects across approximately 10 customer organizations, managing requirements, estimation, development, deployment, and maintenance.",
			},
			{
				tag: "Founder Partnership & Pre-Sales",
				text: "Collaborated with the founder on business leads, client meetings, technical feasibility, solution proposals, and development cost/timeline estimation.",
			},
			{
				tag: "Hands-On Mentorship & Rapid Rollouts",
				text: "Conducted code reviews, mentored developers, and remained hands-on with architecture, development, debugging, and production support; coordinated delivery of 3 projects from design to production within 5 working days.",
			},
			{
				tag: "Reusable Components & Protocols",
				text: "Developed reusable frontend components and backend MQTT/Modbus integration setups, improving consistency across projects.",
			},
		],
		tech: ["Node.js", "React.js", "Express.js", "PostgreSQL", "MQTT", "Modbus", "AWS EC2", "Microsoft Azure", "GitHub Actions"],
	},
	{
		id: 2,
		role: "Software Development Engineer",
		company: "YM Automation Private Limited",
		location: "Remote, Bengaluru, Karnataka",
		period: "Jul 2022 – Oct 2024",
		highlights: [
			{
				tag: "Sole Developer & Full SDLC Ownership",
				text: "Joined as the sole software developer in an early-stage startup, working directly with the founder. Owned the complete SDLC, including client requirements, solution design, architecture, estimation, full-stack development, deployment, and maintenance.",
			},
			{
				tag: "Concurrent Production Delivery",
				text: "Independently managed client interactions, requirement gathering, technical discussions, and delivered 12+ production projects while managing 2–4 concurrent projects.",
			},
			{
				tag: "Enterprise ERP Architecture",
				text: "Contributed to the design and development of 300+ REST APIs and PostgreSQL data architecture comprising 100+ tables for an enterprise ERP platform.",
			},
			{
				tag: "BOM Reporting & Keyset Pagination",
				text: "Optimized BOM reporting APIs using dynamic filtering and cursor-based pagination, supporting 1,000+ rows per project.",
			},
			{
				tag: "Relational Database Design",
				text: "Designed PostgreSQL schemas and optimized queries using indexing, transactions, relationships, and JSONB.",
			},
			{
				tag: "Industrial IoT Integration",
				text: "Developed Industrial IoT solutions integrating PLCs and up to 65 machines across multiple sites using MQTT, Modbus TCP/RTU, and TCP sockets.",
			},
		],
		tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MQTT", "Modbus TCP/RTU", "TCP Sockets", "JSONB", "Keyset Pagination"],
	},
];

export const projectsData = [
	{
		id: "enterprise-erp-saas",
		title: "Enterprise ERP & SaaS Platform",
		category: "Enterprise SaaS",
		tenure: "Software Manager & SDE",
		badge: "12+ Modules · 5 Companies",
		tagline: "HRMS, payroll, inventory, CRM, project management, and enterprise workflows on isolated tenant DBs.",
		clients: [
			"YM Automation Pvt. Ltd.",
			"Cogent Automation Pvt. Ltd.",
			"Medicare Enviro System",
			"MWP Energy Infra Private Limited",
			"Monsoon Ex Brand",
		],
		businessProblem: "Replaced fragmented manual spreadsheets with unified multi-tenant workflows and strict physical data isolation.",
		architecture: "React.js frontend + Express API Gateway + Bounded per-tenant PostgreSQL connection pools (100+ tables + JSONB).",
		sqlAndPerformance: "300+ REST APIs, transaction-based payroll and inventory workflows, and multi-tenant schema isolation.",
		ownership: "Contributed to system architecture, 12+ core modules, 300+ REST APIs, PostgreSQL data model (100+ tables), authentication, RBAC, and 5-company rollout (300–400 employees represented).",
		architectureDecisions: [
			"Separate PostgreSQL database per company via JWT-derived pool router for physical data isolation.",
			"PostgreSQL ACID transactions for automated payroll disbursements and inventory ledgers.",
			"100+ normalized tables paired with JSONB flexible attributes and centralized RBAC middleware.",
		],
		keyChallenges: "Correlating attendance, payroll, and inventory consistently across 5 separate company databases without data leakage.",
		engineeringOutcomes: "5 onboarded companies and approximately 300–400 employees actively supported in production.",
		tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "RBAC", "Multi-Tenant"],
	},
	{
		id: "production-tracking-workflow",
		title: "Production Tracking & Workflow System",
		category: "Shopfloor Workflow",
		tenure: "Software Development Engineer",
		badge: "12-Stage Routing · Keyset Pagination",
		tagline: "Configurable 12-stage manufacturing workflows with routing logic and dynamic BOM reporting.",
		clients: ["Cogent Automation Pvt. Ltd."],
		businessProblem: "Non-linear rework and scrap routing caused WIP tracking mismatches and sluggish OFFSET-based BOM reports.",
		architecture: "Finite-state machine workflow engine + Transactional PostgreSQL row locks + Keyset cursor SQL.",
		sqlAndPerformance: "Pessimistic SELECT ... FOR UPDATE row locks preventing race conditions; (created_at, id) cursor filters on 1,000+ row BOMs.",
		ownership: "Full-stack development of 12-stage routing engine, state validation logic, dynamic BOM filtering, and keyset pagination APIs.",
		architectureDecisions: [
			"Configurable 12-stage production workflows with routing and branching logic.",
			"Pessimistic row locking (SELECT ... FOR UPDATE) inside transactions for concurrent shopfloor operators.",
			"Keyset cursor pagination replacing OFFSET scans for sub-50ms queries on 1,000+ row BOM reports.",
		],
		keyChallenges: "Preventing double stage transitions and inconsistent WIP counts during concurrent shopfloor operator updates.",
		engineeringOutcomes: "Accurate stage traceability, production status, and fast cursor-paginated BOM reports (1,000+ rows per project) deployed at Cogent Automation.",
		tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Keyset Pagination", "Row Locking"],
	},
	{
		id: "iiot-monitoring-platform",
		title: "Industrial IoT Monitoring Platform",
		category: "Industrial IoT & Telemetry",
		tenure: "SDE & Software Manager",
		badge: "Up to 65 Machines · MQTT & Modbus",
		tagline: "Real-time industrial machine telemetry, live monitoring dashboards, alarms & historical analytics.",
		clients: [
			"Salzer Electronics Limited – Unit II",
			"Armor Grandeur Pvt. Ltd.",
			"Medicare Enviro System",
			"Cogent Automation Pvt. Ltd.",
			"TE Connectivity India Pvt. Ltd. (via Cogent)",
			"The Tata Power Company Limited (via Renso)",
		],
		businessProblem: "Multi-site manufacturing plants lacked centralized visibility into PLC status, machine faults, and operational downtime.",
		architecture: "Modbus TCP/RTU + MQTT (QoS 1) + TCP sockets → Node.js ingestion daemon → PostgreSQL + React real-time UI.",
		sqlAndPerformance: "Per-device in-flight concurrency locks preventing poll pile-ups; batch inserts + composite time-series indexing.",
		ownership: "End-to-end full-stack engineering of machine data acquisition, PLC protocol bridges, real-time dashboards, historical analytics, and reporting workflows.",
		architectureDecisions: [
			"Multi-protocol acquisition supporting MQTT, Modbus TCP/RTU, and raw TCP sockets across up to 65 machines.",
			"Concurrency lock per device with backoff retry to prevent event-loop congestion on noisy factory networks.",
			"Composite indexing on (device_id, recorded_at) for sub-second historical analytics and alarm reporting.",
		],
		keyChallenges: "Acquiring telemetry reliably from up to 65 heterogeneous industrial controllers without blocking Node.js event-loop.",
		engineeringOutcomes: "Deployed across 6 major industrial client organizations (including Salzer, Armor Grandeur, TE Connectivity, and Tata Power) with 24×7 uptime.",
		tech: ["React.js", "Node.js", "PostgreSQL", "MQTT", "Modbus TCP/RTU", "TCP/IP", "TCP Sockets"],
	},
];

export const skillsData = [
	{
		category: "Frontend",
		skills: ["React.js", "HTML5", "CSS3", "Axios", "State Management", "Responsive UI", "JavaScript"],
	},
	{
		category: "Backend",
		skills: ["Node.js", "Express.js", "JavaScript", "REST APIs", "WebSockets", "Authentication", "RBAC", "API Development", "Business Logic"],
	},
	{
		category: "Database",
		skills: ["PostgreSQL", "SQL", "Database Design", "Query Optimization", "Indexing", "Transactions", "JSONB", "MongoDB"],
	},
	{
		category: "Cloud & Deployment",
		skills: ["Microsoft Azure", "AWS EC2", "Linux", "Nginx", "PM2", "GitHub Actions", "SSL", "DNS"],
	},
	{
		category: "Industrial IoT",
		skills: ["MQTT", "Modbus TCP/RTU", "TCP/IP", "TCP Sockets", "PLC Integration", "Real-time Data Processing"],
	},
	{
		category: "Engineering",
		skills: ["Full-Stack Development", "System Architecture", "Database Architecture", "Performance Optimization", "Code Review", "Debugging"],
	},
];

export const educationData = {
	institution: "Siddaganga Institute of Technology, Tumakuru",
	degree: "Bachelor of Engineering – Computer Science and Engineering",
	location: "Tumakuru, Karnataka",
};
