/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
	plugins: [],
	darkMode: "class",
};
