/** @type {import('tailwindcss').Config} */

module.exports = {
	plugins: [require("tailwindcss"), require("autoprefixer")],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				theme: "rgba(var(--c-theme), <alpha-value>)",

				t: "rgba(var(--c-txt), <alpha-value>)",
				tp: "rgba(var(--c-txt-pri), <alpha-value>)",
				ts: "rgba(var(--c-txt-sec), <alpha-value>)",
				tl: "rgba(var(--c-txt-light), <alpha-value>)",
				tb: "rgba(var(--c-txt-btn), <alpha-value>)",

				b: "rgba(var(--c-bg), <alpha-value>)",
				bp: "rgba(var(--c-bg-pri), <alpha-value>)",
				bs: "rgba(var(--c-bg-sec), <alpha-value>)",
				bl: "rgba(var(--c-bg-light), <alpha-value>)",

				err: "rgba(var(--c-error), <apha-value>)",
			},
			boxShadow: {
				b: "var(--box-shadow)",
			},
			fontSize: {
				xsr: ".75rem",
				smr: ".875rem",
				tinyr: ".875rem",
				baser: "1rem",
				lgr: "1.125rem",
				xlr: "1.25rem",
				"2xlr": "clamp(1.25rem, 1.1522rem + 0.4348vw, 1.5rem)",
				"3xlr": "clamp(1.5rem, 1.3533rem + 0.6522vw, 1.875rem)",
				"4xlr": "clamp(1.875rem, 1.7283rem + 0.6522vw, 2.25rem)",
				"5xlr": "clamp(2rem, 1.6087rem + 1.7391vw, 3rem)",
				"6xlr": "clamp(2.25rem, 1.5652rem + 3.0435vw, 4rem);",
				"7xlr": "clamp(2.5rem, 1.7174rem + 3.4783vw, 4.5rem)",
			},
			fontFamily: {
				nunito: "var(--font-nunito)",
				creat: ['"Creattion Demo"'],
				robotomono: ['"Roboto Mono"', "monospace"],
			},
			padding: {
				"14r": "clamp(1rem, 0.0217rem + 4.3478vw, 3.5rem);",
				"12r": "clamp(0.7rem, -1.0250rem + 7.6667vw, 3rem)",
				"8r": "clamp(0.5rem, -0.0870rem + 2.6087vw, 2rem)",
			},
		},
	},
};
