import resumePdf from "../assets/Prakhar_CV_2026.pdf";

export const personalInfo = {
	name: "Prakhar",
	title: "Senior Full Stack Engineer",
	roleLine: "Node.js · React.js · PostgreSQL · Enterprise SaaS · Industrial IoT",
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
	bio: "Senior Full Stack Engineer with 4+ years of professional software development experience in early-stage startup environments, building scalable enterprise SaaS, ERP, and Industrial IoT applications. Progressed from sole founding developer as SDE to Software Manager at YM Automation, balancing ~70% hands-on engineering (Node.js, React.js, PostgreSQL, 300+ REST APIs, hardware protocols) with ~30% technical leadership (system architecture, sprint planning, PR reviews, team mentoring). Independently delivered 12+ production projects and guided delivery across 7–8 client projects for approximately 10 customer organizations.",
	noticeStatus: "Available Immediately",
	availability: "Bengaluru · On-site / Hybrid / Remote",
	workModes: "On-site / Hybrid / Remote",
	targetRoles: "Senior Full Stack Engineer · Senior Software Engineer · Technical Lead",
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
			sub: "Contributed to 300+ APIs · 100+ Tables · 5 Companies",
		},
		{
			label: "IIoT Scale",
			value: "Up to 65 Devices",
			sub: "MQTT · Modbus TCP/RTU · Real-Time Telemetry",
		},
		{
			label: "Delivery Track",
			value: "12+ Projects",
			sub: "Independently Delivered · 7–8 Projects Guided",
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
				tag: "Reusable React & Protocol Integrations",
				text: "Built reusable React components and backend integrations using MQTT and Modbus.",
			},
			{
				tag: "Architecture & Production Engineering",
				text: "Contributed hands-on to system architecture, development, debugging, and production engineering.",
			},
			{
				tag: "Technical Solutions & Project Delivery",
				text: "Designed technical solutions and guided delivery across 7–8 customer projects.",
			},
			{
				tag: "Full-Stack Implementation & Troubleshooting",
				text: "Supported frontend, backend, and mobile development through implementation guidance and troubleshooting.",
			},
			{
				tag: "Rapid 5-Day Delivery Execution",
				text: "Coordinated three projects from design to production within five working days.",
			},
			{
				tag: "Code Review & Team Mentorship",
				text: "Reviewed code and mentored developers across a five-member cross-functional team.",
			},
			{
				tag: "Client Feasibility & Technical Scoping",
				text: "Collaborated with the founder on client requirements, technical feasibility, and development estimates.",
			},
		],
		tech: ["Node.js", "React.js", "Express.js", "PostgreSQL", "MQTT", "Modbus", "AWS EC2", "Microsoft Azure", "GitHub Actions"],
	},
	{
		id: 2,
		role: "Software Development Engineer",
		company: "YM Automation Private Limited",
		location: "Bengaluru, Karnataka (Remote)",
		period: "Jul 2022 – Oct 2024",
		highlights: [
			{
				tag: "Sole Developer & Founder Partnership",
				text: "Joined as the sole software developer, working directly with the founder.",
			},
			{
				tag: "Complete SDLC Ownership",
				text: "Owned requirements, architecture, estimation, full-stack development, deployment, and production maintenance.",
			},
			{
				tag: "12+ Production Deployments",
				text: "Independently delivered 12+ production projects, managing 2–4 concurrent engagements.",
			},
			{
				tag: "Enterprise ERP & API Architecture",
				text: "Contributed to 300+ REST APIs and PostgreSQL architecture spanning 100+ tables.",
			},
			{
				tag: "BOM Reporting & Keyset Pagination",
				text: "Optimized BOM reporting with dynamic filters and cursor pagination for 1,000+ rows.",
			},
			{
				tag: "Relational Schemas & Query Tuning",
				text: "Designed PostgreSQL schemas and optimized queries using indexing, transactions, and JSONB.",
			},
			{
				tag: "Industrial IoT & PLC Hardware Interfacing",
				text: "Integrated PLCs across multiple sites, connecting up to 65 machines through industrial protocols.",
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
		category: "Backend",
		skills: ["Node.js", "Express.js", "JavaScript", "REST APIs", "Authentication", "RBAC", "Business Logic"],
	},
	{
		category: "Frontend",
		skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI", "State Management"],
	},
	{
		category: "Databases",
		skills: ["PostgreSQL", "MongoDB", "SQL", "JSONB", "Indexing", "Transactions", "Database Design", "Query Optimization"],
	},
	{
		category: "Cloud & Infrastructure",
		skills: ["AWS EC2", "Microsoft Azure", "Linux", "Nginx", "PM2", "GitHub Actions", "DNS", "SSL"],
	},
	{
		category: "Real-Time & Industrial IoT",
		skills: ["MQTT", "Modbus TCP/RTU", "TCP/IP", "TCP Sockets", "WebSockets", "Socket.IO", "PLC Integration"],
	},
	{
		category: "Engineering & Leadership",
		skills: [
			"System Architecture",
			"Full-Stack Development",
			"Performance Optimization",
			"SDLC",
			"Debugging",
			"Production Support",
			"Technical Estimation",
			"Code Review",
			"Cross-Functional Collaboration",
			"Technical Leadership",
			"Team Mentoring",
		],
	},
];

export const educationData = {
	institution: "Siddaganga Institute of Technology, Tumakuru",
	degree: "Bachelor of Engineering – Computer Science and Engineering",
	location: "Tumakuru, Karnataka",
};
