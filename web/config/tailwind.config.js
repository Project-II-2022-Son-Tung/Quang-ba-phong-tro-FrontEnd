/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    "src/pages/**/*.{js,ts,jsx,tsx}",
		"src/components/**/*.{js,ts,jsx,tsx}",
		"src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: "1280px",
			},
		},
		extend: {
			colors: {
				"brand-primary": "#4640DE",
				"brand-secondary": "#CCCCF5",
				"brand-tertiary": "#E7F6FD",
				"brand-second-1": "#FFBC99",
				"brand-second-2": "#CADDFF",
				"brand-second-3": "#B1E5FC",
				"brand-second-4": "#B5E4CA",
				"brand-second-5": "#FFD88D",
        "brand-second-6": "#4291C8",
				light: "#FFFFFF",
				"grey-light": "#FAFBFC",
				grey: "#F6F8FA",
				black: "#24292E",
				"status-yellow": "#FFB836",
				"status-green": "#28A745",
				"status-red": "#FF6550",
				"status-blue": "#26A4FF",
				"status-purple": "#7B61FF",
				green: "#28A745",
				red: "#FF6550",
        star: "#FF8E35",
				neutral: {
					100: "#25324B",
					80: "#515B6F",
					60: "#7C8493",
					40: "#A8ADB7",
					10: "#F8F8FD",
					20: "#D6DDEB",
					0: "#FFFFFF",
				},
				border: "#EFF0F6",
			},
			flex: {
				50: "0 0 50%",
			},
			screens: {
				xxs: "320px",
				xs: "480px",
			},
		},
	},
  plugins: [
    require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms")({
			strategy: "class",
			strategy: "base",
		}),
  ],
}
