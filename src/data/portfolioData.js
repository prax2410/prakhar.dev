import resumePdf from "../assets/Prakhar_CV_2026.pdf";

export const personalInfo = {
	name: "Prakhar",
	title: "Software Manager | Full Stack Engineer",
	subtitle: "Node.js • React • PostgreSQL • AWS • Azure • Industrial IoT",
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
		"Software Manager with 4+ years of experience in enterprise ERP and SaaS development. Hands-on experience with Node.js, Express.js, React, PostgreSQL, and Azure, with expertise in backend development, system architecture, database optimization, production support, and industrial IoT integrations. Experienced in team leadership, customer requirements, technical problem-solving, and end-to-end product delivery.",
	bio: "Software Manager & Full Stack Engineer with 4+ years of experience building enterprise ERP, SaaS platforms, and industrial IoT solutions. Hands-on with Node.js, React, PostgreSQL, Azure, and AWS EC2.",
	stats: [
		{
			label: "Industry XP",
			value: "4+ Years",
			sub: "Enterprise ERP, SaaS & IoT",
		},
		{
			label: "Engineering Scope",
			value: "7 Members",
			sub: "Design, Web, Mobile & Interns",
		},
		{
			label: "Flagship Platform",
			value: "Multi-Module",
			sub: "Ground-up ERP evolved to SaaS",
		},
		{
			label: "Cloud Production",
			value: "Azure & AWS",
			sub: "Scalable Infrastructure",
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
		period: "Jul 2022 - Present",
		type: "Full-Time Leadership",
		summary:
			"Leading technical decisions, team coordination, mentoring, deployments, customer requirements, troubleshooting, and production support.",
		highlights: [
			"Independently designed and developed multiple industrial IoT and automation solutions for clients, owning requirements, architecture, development, deployment, and production support.",
			"Designed and developed a custom ERP solution, covering HRMS, Projects, Inventory, Purchase, Sales, Attendance, Payroll, and other business operations.",
			"Helped evolve the custom ERP into a multi-module SaaS platform, establishing reusable architecture and distributing development responsibilities across the software team.",
			"Built scalable applications and REST APIs using Node.js, Express.js, React, PostgreSQL, with production deployments on AWS EC2 and Microsoft Azure.",
			"Integrated industrial systems using MQTT, Modbus, and TCP/IP, connecting automation equipment with web-based applications.",
			"Progressed into a Software Manager role, leading technical decisions, team coordination, mentoring, deployments, customer requirements, troubleshooting, and production support.",
		],
		tech: [
			"Node.js",
			"Express.js",
			"React",
			"PostgreSQL",
			"AWS EC2",
			"Microsoft Azure",
			"MQTT",
			"Modbus",
			"TCP/IP",
			"PM2",
			"REST APIs",
			"System Architecture",
		],
	},
	{
		id: 2,
		role: "Full Stack Engineer (Foundational Engineering & Projects)",
		company: "Autonomous Engineering & Academic",
		location: "Bengaluru, Karnataka",
		period: "Mar 2019 - Jul 2022",
		type: "Foundational Engineering",
		summary:
			"Built production-ready web applications, mastered full-stack paradigms, and completed engineering degree.",
		highlights: [
			"Mastered full-stack paradigms building end-to-end web applications with Node.js, Express.js, React, PostgreSQL, and MongoDB.",
			"Engineered secure authentication, authorization, RESTful API architecture, and database optimization techniques.",
			"Built production-ready E-commerce suite with payment gateway integration and dynamic administrative dashboard.",
			"Completed Bachelor of Engineering in Computer Science and Engineering from Siddaganga Institute of Technology.",
		],
		tech: [
			"React.js",
			"Node.js",
			"PostgreSQL",
			"MongoDB",
			"Express.js",
			"REST APIs",
			"Git",
			"JWT Auth",
		],
	},
];

export const keyAchievements = [
	{
		id: 1,
		title: "End-to-End Industrial IoT & Automation Software",
		description:
			"Independently built multiple industrial IoT and automation software solutions for clients during the early stage of the company's software development, owning development from requirements through deployment.",
		tag: "IoT & Automation",
	},
	{
		id: 2,
		title: "Ground-Up Custom ERP Solution",
		description:
			"Designed and developed a custom ERP solution from the ground up, covering HRMS, Projects, Inventory, Purchase, Sales, Attendance, Payroll, and other business operations.",
		tag: "Enterprise Architecture",
	},
	{
		id: 3,
		title: "Multi-Module SaaS Platform Transformation",
		description:
			"Contributed to transforming the custom ERP into a scalable SaaS platform, helping establish reusable architecture and transition development from individual ownership to a team-based engineering model.",
		tag: "SaaS & Scale",
	},
	{
		id: 4,
		title: "Engineering Leadership & Management",
		description:
			"Progressed from hands-on software development to Software Manager, taking ownership of technical architecture, team coordination, mentoring, customer requirements, deployments, and production systems.",
		tag: "Team Leadership",
	},
];

export const projectsData = [
	{
		id: "custom-erp-saas",
		title: "Custom Enterprise ERP & Multi-Module SaaS Platform",
		category: "Enterprise SaaS & ERP",
		badge: "Core Enterprise Platform",
		isProprietary: true,
		organization: "YM Automation Pvt Ltd",
		tagline:
			"Centralized business operations into a multi-tenant SaaS architecture.",
		description:
			"Designed and developed a custom ERP solution from the ground up, covering HRMS, Projects, Inventory, Purchase, Sales, Attendance, Payroll, and other business operations. Evolved the system into a scalable multi-module SaaS platform, establishing reusable architecture and distributing development responsibilities across the software team.",
		impact: "Centralized all core enterprise business workflows into a scalable SaaS architecture, transitioning development from individual ownership to a team-based engineering model.",
		highlightMetric: "8+ Business Modules",
		tech: [
			"Node.js",
			"Express.js",
			"React.js",
			"PostgreSQL",
			"AWS EC2",
			"Microsoft Azure",
			"REST APIs",
		],
		links: {},
	},
	{
		id: "industrial-iot-telemetry",
		title: "Industrial IoT & Equipment Automation Suite",
		category: "IoT & Automation",
		badge: "MQTT & Modbus Integration",
		isProprietary: true,
		organization: "YM Automation Clients",
		tagline:
			"Connecting factory machines directly to live browser dashboards.",
		description:
			"Independently designed and developed multiple industrial IoT and automation solutions for clients, connecting automation equipment and factory machines with web-based applications using MQTT, Modbus, and TCP/IP protocols.",
		impact: "Enabled real-time equipment telemetry and remote industrial machine monitoring, bridging physical factory automation hardware with responsive web analytics.",
		highlightMetric: "Sub-second Telemetry",
		tech: [
			"Node.js",
			"MQTT",
			"Modbus RTU/TCP",
			"TCP/IP",
			"React.js",
			"PostgreSQL",
			"Socket.io",
			"PM2",
		],
		links: {},
	},
	{
		id: "automated-reports",
		title: "Automated Enterprise Reporting & Visualization Engine",
		category: "Enterprise System",
		badge: "50% Time Saved",
		isProprietary: true,
		organization: "YM Automation Pvt Ltd",
		tagline:
			"Scheduled background service compiling and dispatching operational KPIs.",
		description:
			"Automated report generation and data visualization engine producing analytical visual graphs and automated HTML/PDF reports dispatched to plant managers and enterprise leaders.",
		impact: "Reduced manual reporting overhead by 50%, saving hours weekly through scheduled, automated dispatch of critical production metrics.",
		highlightMetric: "100% Scheduled",
		tech: [
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"Nodemailer",
			"CRON Jobs",
			"PM2",
		],
		links: {},
	},
	{
		id: "ecommerce-admin",
		title: "E-Commerce Suite & Scalable Admin Dashboard",
		category: "Full Stack Web App",
		badge: "Payment & Auth Integrated",
		isProprietary: false,
		organization: "Foundational Engineering Project",
		tagline:
			"Online shopping platform with inventory tracking and secure payment flows.",
		description:
			"Comprehensive online shopping platform featuring real-time inventory management, payment gateway integrations, dynamic search filtering, and JWT-secured administrative analytics.",
		impact: "Implemented secure payment workflows and dynamic administrative catalog controls with database optimization.",
		highlightMetric: "Payment Integrated",
		tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs", "JWT Auth"],
		links: {
			github: "https://github.com/prax2410",
		},
	},
];

export const skillsData = [
	{
		category: "Backend",
		skills: [
			"Node.js",
			"Express.js",
			"REST APIs",
		],
	},
	{
		category: "Frontend",
		skills: [
			"React.js",
			"JavaScript",
			"HTML",
			"CSS",
		],
	},
	{
		category: "Database & Cloud",
		skills: [
			"PostgreSQL",
			"MongoDB",
			"Microsoft Azure",
			"AWS EC2",
		],
	},
	{
		category: "IoT & Automation",
		skills: [
			"MQTT",
			"Modbus",
			"TCP/IP",
		],
	},
	{
		category: "Tools",
		skills: [
			"Git",
			"GitHub",
			"PM2",
		],
	},
];

export const engineeringCompetencies = [
	"System Architecture",
	"Database Optimization",
	"Production Support",
	"API Development",
	"Team Leadership",
	"Customer Requirements",
	"Technical Problem-Solving",
	"End-to-End Product Delivery",
];

export const languages = [
	{ name: "English", proficiency: "Professional" },
	{ name: "Hindi", proficiency: "Native" },
];

export const educationData = {
	institution: "Siddaganga Institute of Technology, Tumakuru",
	degree: "B.E. in Computer Science and Engineering",
	cgpa: "6.62",
	location: "Tumakuru, Karnataka",
};
