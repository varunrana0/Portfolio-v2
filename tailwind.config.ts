import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(at top left, purple,transparent), radial-gradient(at bottom right, red,transparent,transparent),radial-gradient(at bottom left, green,skyblue,transparent,transparent)",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-center":
					"linear-gradient(to-right, transparent, transparent, #fff, transparent,transparent)",
			},
			backgroundColor: {
				"border-gradient":
					"linear-gradient(to right, transparent, white, transparent)",
			},
			colors: {
				skyblue: "rgb(20, 158, 202, 1)",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
