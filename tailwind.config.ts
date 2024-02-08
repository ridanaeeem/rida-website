import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				emphasis: "#8fb684",
				transparent: "transparent",
				white: "#FFFFFF",
				gray: "#B7B7B7",
				ddgreen: "#161915",
				dgreen: "#1E231C",
				mgreen: "#323B2F",
				bgreen: "#B8F2A8",
			},
		},
	},
	plugins: [],
};
export default config;
