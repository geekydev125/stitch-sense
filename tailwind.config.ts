import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#45B6B2"
				},
				darkGreen: "#35908d",
				dark: "#3d3d3d",
				light: "#f1f1f1"

			},
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#45B6B2",
				}
			}
		]
	},
	plugins: [
		require("daisyui")
	],
};
export default config;
