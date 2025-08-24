module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				// Primary brand colors
				primary: {
					50: "#f0f9ff", // Very light blue
					100: "#e0f2fe", // Light blue
					200: "#bae6fd", // Lighter blue
					300: "#7dd3fc", // Light blue
					400: "#38bdf8", // Blue (main brand color)
					500: "#0ea5e9", // Darker blue
					600: "#0284c7", // Even darker blue
					700: "#0369a1", // Dark blue
					800: "#075985", // Very dark blue
					900: "#0c4a6e", // Deepest blue
				},

				// Background colors
				surface: {
					primary: "#0f172a", // Slate 900 - main dark background
					secondary: "#1e3a8a", // Blue 800 - accent background
					tertiary: "#1e293b", // Slate 800 - card backgrounds
				},

				// Text colors
				content: {
					primary: "#ffffff", // Pure white
					secondary: "rgba(255, 255, 255, 0.90)", // White 90% opacity
					muted: "rgba(255, 255, 255, 0.70)", // White 70% opacity
					subtle: "rgba(255, 255, 255, 0.60)", // White 60% opacity
					accent: "#60a5fa", // Blue 400
				},
			},
		},
	},
	plugins: [],
};
