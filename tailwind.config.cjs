/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
	theme: {
		extend: {
			colors: {
				burgundy: "#780000",
				burgundyLight: "#8E0000",
				darkGray: "#1E1919",
				dividerGray: "#787575",
				marianDark: "#37687C",
				marianMedium: "#4b7789",
				marianLight: "#A6BDC9",
				francBrown: "#6E5A50",
				cream: "#EBE9DF",
				creamLight: "#FAFAF9",
				creamCard: "#EBE9DF",
				crownGray: "#CDCDCD",
				errorRed: "#DC2626",
			},
			dropShadow: {
				card: [
					"2px 4px 4px rgba(64, 64, 64, .10)",
					"-2px -1px 2px rgba(64, 64, 64, .10)",
				],
				"4xl": [
					"0 35px 35px rgba(0, 0, 0, 0.25)",
					"0 45px 65px rgba(0, 0, 0, 0.15)",
				],
			},
			fontFamily: {
				sans: ["'Lato'", "sans-serif"],
				serif: ["Capitolium2_regular", "serif"],
			},
			screens: {
				xs: "320px",
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
}
