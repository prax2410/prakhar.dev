import resumePdf from "../assets/Prakhar_CV_2026.pdf";

export const personalInfo = {
	name: "Prakhar",
	title: "Senior Software Engineer | Software Manager",
	subtitle: "Full Stack • Node.js • React • PostgreSQL • Enterprise SaaS • Industrial IoT",
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
		"Senior Software Engineer with 4+ years of experience building enterprise SaaS, ERP, and Industrial IoT applications across the full software development lifecycle. Hands-on experience with Node.js, Express.js, React, JavaScript, and PostgreSQL, with ownership spanning frontend development, backend services, REST APIs, database design, integrations, deployment, and production support. Built and supported a 12+ module ERP platform with 300+ APIs and production applications used across multiple customer organizations. Experienced in real-time industrial applications integrating PLCs and automation systems through MQTT, Modbus, and TCP/IP. Promoted from Software Development Engineer to Software Manager, combining hands-on engineering with technical leadership and end-to-end delivery.",
	bio: "Senior Software Engineer & Software Manager with 4+ years of experience building enterprise SaaS platforms, 12+ module ERP systems, and 24×7 Industrial IoT applications integrating up to 65+ machines.",
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
			label: "Industrial IoT",
			value: "~65 Devices",
			sub: "24×7 Real-time ~1s Polling",
		},
		{
			label: "Leadership Track",
			value: "4+ Years",
			sub: "Promoted SDE to Manager",
		},
	],
};

export const teamStructure = [
	{
		role: "UI/UX Design",
		count: 2,
		desc: "Figma design systems and intuitive user flows for ERP & IoT dashboards.",
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
			"Promoted to lead cross-functional software teams while remaining hands-on with application architecture, development, debugging, and production support.",
		highlights: [
			"Led a cross-functional software team across backend, frontend, mobile, and UI/UX while remaining hands-on with application architecture, development, debugging, and production support.",
			"Designed and developed full-stack architectures for enterprise SaaS, ERP, and Industrial IoT applications, covering frontend interfaces, REST APIs, business logic, data models, integrations, and deployment.",
			"Led 7–8 projects across ~10 customer companies, including multi-site industrial deployments and 24×7 IoT systems integrating PLCs through MQTT, Modbus TCP/RTU, and TCP/IP.",
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
			"Built and supported 24×7 Industrial IoT applications for machine monitoring, production, energy, alarms, events, and analytics, integrating up to ~65 machines/devices.",
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
		title: "24×7 Industrial IoT Deployments (~65 Devices)",
		description:
			"Real-time integrations with PLCs using MQTT, Modbus TCP/RTU, and TCP sockets with ~1-second polling intervals across multi-site industrial plants.",
		tag: "IoT & Hardware Automation",
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
		title: "Rapid Leadership Progression: SDE to Software Manager",
		description:
			"Promoted from SDE to Software Manager within 2 years, steering cross-functional engineering teams, sprint delivery, and customer enterprise solutions.",
		tag: "Leadership & Mentorship",
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
		id: "industrial-iot-monitoring",
		title: "Industrial IoT Monitoring Platform",
		category: "IoT & Automation",
		badge: "24×7 Real-Time • ~65 Devices",
		isProprietary: true,
		organization: "YM Automation Clients",
		tagline:
			"High-frequency telemetry pipeline connecting industrial PLCs to live dashboards.",
		description:
			"Developed full-stack production applications for 24×7 real-time monitoring of industrial machinery and automation systems. Built React-based monitoring interfaces and Node.js backend services for machine status, production data, alarms, events, and historical analytics.",
		impact: "Integrated PLCs and machines through MQTT, Modbus TCP/RTU, TCP/IP, and TCP sockets with typical ~1-second polling intervals, supporting systems with up to ~65 machines/devices.",
		highlightMetric: "~1s Polling Interval",
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
		category: "IoT & Automation",
		badge: "Energy & Metric Analytics",
		isProprietary: true,
		organization: "YM Automation Clients",
		tagline:
			"Telemetry intelligence platform for real-time energy usage and machine efficiency.",
		description:
			"Developed full-stack functionality for real-time and historical production, energy, machine, alarm, and event monitoring. Built REST APIs, database workflows, and frontend monitoring views for operational dashboards and analytics.",
		impact: "Optimized SQL queries and database workflows using indexing, transactions, and efficient data-access patterns for high-throughput production monitoring and historical trend reporting.",
		highlightMetric: "Real-Time & Historical",
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
		category: "Industrial IoT",
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
	"Code Review & Mentoring",
	"Production Support & Debugging",
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
