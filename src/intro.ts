import {
	RiGithubLine,
	RiLinkedinLine,
	RiTwitterXLine,
	RiWhatsappFill,
} from "react-icons/ri";

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
		link: "https://wa.me/7082765880",
		icon: RiWhatsappFill,
		variants: "green",
	},
];

export const myInfo = {
	name: "hey, i'm Varun Rana 👋",
	avatar: "/avatar.JPG",
	bio: "Hello there! I'm a passionate web enthusiast and problem solver. I thrive on the thrill of crafting captivating web experiences that seamlessly blend creativity and functionality. With an unwavering focus on user satisfaction, I meticulously design interfaces that leave a lasting impression. Whether it's building sleek landing pages or dynamic web applications, I am driven to create meaningful digital journeys that inspire and engage. Let's collaborate and bring your unique vision to life!",
	workBefore: workSection,
	socials,
};
