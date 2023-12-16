import {
	RiGithubLine,
	RiLinkedinLine,
	RiTwitterXLine,
	RiWhatsappFill,
} from "react-icons/ri";

export const techData = {
	frontend: [
		{
			name: "HTML",
			icon: "FaHtml5",
			img: "/techs/HTML5.png",
		},
		{
			name: "CSS",
			icon: "FaCss3",
			img: "/techs/CSS3.png",
		},
		{
			name: "JavaScript",
			icon: "FaCode",
			img: "/techs/JavaScript-logo.png",
		},
		{
			name: "TypeScript",
			icon: "FaCode",
			img: "/techs/typescript.png",
		},
		{
			name: "React.js",
			icon: "FaReact",
			img: "/techs/React-icon.svg",
		},
		{
			name: "Next.js",
			icon: "FaNextjs",
			img: "/techs/nextjs.ico",
		},
		{
			name: "Tailwind CSS",
			icon: "FaTailwindcss",
			img: "/techs/tailwindcss.png",
		},
		{
			name: "HTMX",
			icon: "FaRProject",
			img: "/techs/htmx.jpeg",
		},
		{
			name: "Styled Components",
			icon: "FaCube",
			img: "/techs/styled-components.png",
		},
		{
			name: "React Table",
			icon: "FaReactTable",
			img: "/techs/react-table.png",
		},
	],
	backend: [
		{
			name: "Node.js",
			icon: "FaNodeJs",
			img: "/techs/nodejs.png",
		},
	],
	databases: [
		{
			name: "Upstash",
			icon: "FaYarn",
			img: "/techs/upstash.png",
		},
		{
			name: "MongoDB",
			icon: "FaDatabase",
			img: "/techs/mongodb.ico",
		},
		{
			name: "Supabase",
			icon: "FaSupabase",
			img: "/techs/supabase.png",
		},
		{
			name: "Firebase",
			icon: "FaSupabase",
			img: "/techs/firebase.png",
		},
	],
	"Components Libraries": [
		{
			name: "Chakra UI",
			icon: "FaChakra",
			img: "/techs/chakraui.png",
		},
		{
			name: "Material UI",
			icon: "FaMaterialUi",
			img: "/techs/materialui.ico",
		},
		{
			name: "Daisy UI",
			icon: "FaMaterialUi",
			img: "/techs/daisyui.png",
		},
		{
			name: "Nextjs UI",
			icon: "FaMaterialUi",
			img: "/techs/nextui.ico",
		},
	],
	testing: [
		{
			name: "Jest",
			icon: "FaJest",
			img: "/techs/jest.ico",
		},
		{
			name: "Cypress",
			icon: "FaJest",
			img: "/techs/cypress.svg",
		},
		{
			name: "Playwright",
			icon: "FaPlaystation",
			img: "/techs/playwright-logo.svg",
		},
		{
			name: "React Testing Library",
			icon: "FaPlaystation",
			img: "/techs/reacttestinglibrary.png",
		},
	],
	"data Fetching": [
		{
			name: "Axios",
			icon: "FaAxios",
			img: "/techs/axios.svg",
		},
		{
			name: "React Query",
			icon: "FaReact",
			img: "/techs/react-query.png",
		},
		{
			name: "Prisma",
			icon: "FaReact",
			img: "/techs/prisma.png",
		},
	],
	"form Management": [
		{
			name: "Formik",
			icon: "FaRProject",
			img: "/techs/formik.png",
		},
		{
			name: "React Hook Form",
			icon: "FaReact",
			img: "/techs/react-hook-form-logo.png",
		},
		{
			name: "Mantine Form",
			icon: "FaReact",
			img: "/techs/mantine.svg",
		},
	],
	"form Validation": [
		{
			name: "Yup",
			icon: "FaYarn",
			img: "/techs/yup.png",
		},
		{
			name: "Zod",
			icon: "FaZod",
			img: "/techs/zod.ico",
		},
	],
	"build Tools": [
		{
			name: "CI/CD",
			icon: "FaGithub",
			img: "/techs/github.png",
		},
		{
			name: "Git",
			icon: "FaGithub",
			img: "/techs/github.png",
		},
	],

	blogs: [
		{
			name: "Contentlayer",
			icon: "FaContentLayer",
			img: "/techs/contentlayer.png",
		},
	],
};

export const projects = [
	{
		name: "Portfolio",
		url: "https://varunrana.info",
		projectImg: "/projects/portfolio_project.webp",
		skills: ["ReactJs", "Tailwind Css", "Git", "GitHub"],
		desc: "A Simple, Effective and Easier way to get hired by the top companies is by showing them your skills as well a good portolio helps more.",
		sourceCode: "https://github.com/varunrana0/my_portfolio",
	},
	{
		name: "Colors Finder",
		url: "https://color-finder-v2.vercel.app/",
		projectImg: "/projects/colors_finder_v2.png",
		skills: [
			"ReactJs",
			"Tailwind Css",
			"NodeJs",
			"mongoDB",
			"Git",
			"GitHub",
			"RestAPIs",
		],
		desc: "Colors Finder is a web-based tool that allows you to easily fetch the color scheme of any website by simply entering its URL. Whether you're a designer seeking inspiration or a developer looking to match a website's color scheme to your project, Colors Finder has got you covered. With the ability to fetch colors from global files or CSS files, you can get an accurate representation of any website's color palette. Try Colors Finder today and elevate your design and development workflow.",
		sourceCode: "https://github.com/varunrana0/whichColorOnSite",
	},
	{
		name: "gitHub user finder",
		url: "https://find-github-profile.netlify.app",
		projectImg: "/projects/find-github-profile.png",
		skills: ["ReactJs", "React spinners", "Tailwind Css", "Git", "GitHub"],
		desc: "A Simple, Effective and Easier way to find any gitHub user Repository. just enter user login name and see their repo name, when they joined github and more.",
		sourceCode: "https://github.com/varunrana0/GitHub-User-Finder",
	},
	{
		name: "Blogs with nextjs and contentlayer",
		url: "https://contentlayers-blogs.vercel.app/",
		projectImg: "/projects/contentlayer_blog.webp",
		skills: ["Nextjs", "Contentlayer", "Tailwind Css", "Git", "GitHub"],
		desc: "Quickstart Guide: Setting Up a Blog with Next.js and ContentLayer",
		sourceCode: "https://github.com/varunrana0/contentlayers-blogs",
	},
	{
		name: "Trivia game quiz with context api",
		url: "https://trivia-gaming-quiz-with-context-api.vercel.app/",
		projectImg: "/projects/trivia_game.webp",
		skills: ["Reactjs", "Context API", "Tailwind Css", "Git", "GitHub"],
		desc: "Trivia Quiz game with react and context api.",
		sourceCode:
			"https://github.com/varunrana0/trivia_gaming_quiz_with_contextAPI",
	},
	{
		name: "pomodro timer app",
		url: "https://pomodrotimer.netlify.app",
		projectImg: "/projects/pomodrotimer.png",
		skills: [
			"ReactJs",
			"React spinners",
			"react router",
			"firebase",
			"Tailwind Css",
			"Git",
			"GitHub",
		],
		desc: "timer app with 25 minutes work schedule with a 5 minute break to get relaxed.",
		sourceCode: "https://github.com/varunrana0/pomodro-timer-app",
	},
	{
		name: "onboarding steps form",
		url: "https://onboarding-steps-form.netlify.app/",
		projectImg: "/projects/onBoarding.png",
		skills: ["ReactJs", "Tailwind Css", "Git", "GitHub"],
		desc: "Build workspace with this cool multi steps form with some animations.",
		sourceCode: "https://github.com/varunrana0/OnBoarding_Steps_Form",
	},
	{
		name: "portfolio one",
		url: "https://varun-rana.netlify.app",
		projectImg: "/projects/portfolio.png",
		skills: ["ReactJs", "Tailwind Css", "react router", "Git", "GitHub"],
		desc: "A Simple, Effective and Easier way to get hired by the top companies is by showing them your skills as well a good portolio helps more.",
		sourceCode: "https://github.com/varunrana0/PortFolio-Website",
	},
	{
		name: "Elite Vibes Management Company",
		url: "https://elitevibes.in",
		projectImg: "/projects/elite-vibes.webp",
		skills: [
			"ReactJs",
			"React spinners",
			"Tailwind Css",
			"NodeJs",
			"react router",
			"firebase",
			"mongoDB",
			"Express.js",
			"Git",
			"GitHub",
		],
		desc: "EliteVibes Is One Of The Most Premier Entertainment Company In Pune That Covers All Aspects Of Entertainment Such As Gaming, Live Concerts, Networking Events, Private Parties And Holistic Festival Management. Get In Touch With Us For More Details.",
		sourceCode: "https://github.com/varunrana0/Ellite-Vibes-React",
	},
];

export const technologies = [
	"chakra ui",
	"CI/CD",
	"codux",
	"css",
	"formik",
	"git",
	"github",
	"html",
	"htmx",
	"javascript",
	"jest",
	"material ui",
	"mongoDB",
	"next.js",
	"node.js",
	"playwright",
	"react hook form",
	"react.js",
	"react query",
	"react table",
	"styled components",
	"supabase",
	"tailwind css",
	"typescript",
	"upstash",
	"yup",
	"zod",
	"axios",
	"contentlayer",
];

// export const myInfo = {
// 	name: "hey, i'm Palvi thakur 👋",
// 	avatar: "/profile-logo.jpg",
// 	bio: "Experienced backend developer skilled in creating and maintaining robust server-side systems for web applications,ensuring seamless data management and functionality.",
// 	workBefore: [
// 		{
// 			companyName: "Nexg Solution",
// 			workDuration: "3/2021 - 30/2022",
// 			workResponsibilities: [
// 				"Developed backend services using Node.js, Typescript, MongoDB and Nest.js.",
// 				"Broker down the large functionalities to microservices for quick turn around and less impact.",
// 				"Responsible for fully managed deployment pipeline (with auto-approval workflows based on different testing methodologies) setup for the developed services.",
// 				"Worked on MongoDB, Typescript and Express framework.",
// 				"Build Restful APIs and debug codes as per the business requirements.",
// 			],
// 		},
// 	],
// };

const workSection = [
	{
		companyName: "MtechZilla: Website - App development",
		workDuration: "Nov 2022 - Present",
		position: "Software Engineer",
		city: "Pune",
		state: " Maharashtra",
		workResponsibilities: [
			"At Mtechzilla, I have been responsible for designing and implementing features that enhance the user experience and streamline processes. This has involved working closely with the product team to understand requirements, brainstorming solutions, and collaborating with other developers to bring ideas to life.",
		],
	},
	{
		companyName: "Botmatic Solutions Pvt Ltd.",
		workDuration: "Jan 2022 - July 2022",
		position: "Intern",
		city: "Pune",
		state: " Maharashtra",
		workResponsibilities: [
			"I completed an internship at Botmatic Solutions Pvt Ltd, a software development company focused on building intelligent automation solutions. I gained valuable experience in programming languages such as JavaScript, as well as in agile software development methodologies. Overall, my internship at Botmatic Solutions Pvt Ltd was a great learning experience and helped me develop my skills in software engineering.",
		],
	},

	// {
	// 	position: "Intern",
	// 	city: "Pune",
	// 	state: " Maharashtra",
	// 	date: "Jan 2022 - July 2022",
	// 	timelinePostion: "left",
	// 	website: "https://botmaticsolutions.com/",
	// 	name: "Botmatic Solutions Pvt Ltd.",
	// 	desc: "I completed an internship at Botmatic Solutions Pvt Ltd, a software development company focused on building intelligent automation solutions. I gained valuable experience in programming languages such as JavaScript, as well as in agile software development methodologies. Overall, my internship at Botmatic Solutions Pvt Ltd was a great learning experience and helped me develop my skills in software engineering.",
	// 	delay: "400",
	// 	shadow: "-5px 5px 0 1px black",
	// },
];

const socials = [
	{
		title: "twitter",
		link: "https://twitter.com/Varun_Ranaa",
		icon: RiTwitterXLine,
		variants: "red",
	},
	{
		title: "linkedin",
		link: "https://www.linkedin.com/in/varunranaa/",
		icon: RiLinkedinLine,
		variants: "green",
	},
	{
		title: "github",
		link: "https://github.com/varunrana0",
		icon: RiGithubLine,
		variants: "orange",
	},
	{
		title: "Whatsapp",
		link: "https://wa.me/7827304056",
		icon: RiWhatsappFill,
		variants: "green",
	},
];

export const myInfo = {
	name: "Varun Rana 👋",
	avatar: "/avatar.JPG",
	bio: "I'm a passionate web enthusiast and problem solver. I thrive on the thrill of crafting captivating web experiences that seamlessly blend creativity and functionality. With an unwavering focus on user satisfaction, I meticulously design interfaces that leave a lasting impression. Whether it's building sleek landing pages or dynamic web applications,",
	workBefore: workSection,
	socials,
	projects,
	technologies,
	techData,
};
