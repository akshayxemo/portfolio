/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			screens: {
				msm: "550px",
				xsm: "420px",
				xxsm: "300px",
			},
			keyframes: {
				textHorizontalScrollInfinite: {
					"0%": { transform: "translate(0, 0)" },
					"100%": { transform: "translate(-100%, 0)" },
				},
				spin360: {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(360deg)" },
				},
				drop: {
					from: {
						right: "-500px",
						// opacity: "0.5",
					},
					to: {
						right: "0px",
						// opacity: "1",
					},
				},
				dropBack: {
					from: {
						right: "0px",
						// opacity: "1",
					},
					to: {
						right: "-500px",
						// opacity: "0",
						display: "none",
					},
				},
				scrollY: {
					from: {
						transform: "translateY(0%)",
					},
					to: {
						transform: "translateY(-75%)",
					},
				},
			},
			animation: {
				"spin-one": "spin360 1s linear 1 forwards",
				"drop-t": "drop 0.8s linear 1 forwards",
				"drop-t-back": "dropBack 1s linear 1 forwards",
				"scroll-y": "scrollY 10s linear 1 forwards",
				marquee: "textHorizontalScrollInfinite 10s linear infinite",
			},
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			body: ["Hind", "sans-serif"],
		},
	},
	plugins: [
		addVariablesForColors,
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-grid-small": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-dot": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	],
	darkMode: "class",
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
