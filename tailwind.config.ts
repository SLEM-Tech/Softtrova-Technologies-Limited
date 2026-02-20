import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				// Clean Sans-serif for UI
				sans: ["Inter", "var(--font-poppins)", "sans-serif"],
				// The new image uses an elegant Serif for main headings
				serif: ["Playfair Display", "serif"],
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",

				/* ========== Softtrova Luxury Palette ========== */
				brand: {
					// The Antique Gold seen in "New Selection" badges and underlines
					gold: "#B1976B",
					// The primary black used for "ORDER NOW" buttons
					black: "#0A0A0A",
					// The creamy off-white background of the whole site
					cream: "#F5F4F0",
				},

				background: "#F5F4F0", // Main site off-white background
				surface: "#FFFFFF", // Pure white for product card backgrounds
				panel: "#EBEAE4", // Slightly darker cream for sections like "Our Services"

				primary: {
					// Black is the primary action color in this design
					100: "#DAA556",
					200: "#A3A3A3",
					300: "#404040",
					400: "#1A1A1A",
					500: "#0A0A0A", // Main Order Button color
					DEFAULT: "#0A0A0A",
					foreground: "#FFFFFF",
				},

				// Warm, Sophisticated Grays
				gray: {
					50: "#FAFAF9",
					100: "#F5F5F4",
					200: "#E7E5E4",
					300: "#D6D3D1",
					400: "#A8A29E",
					500: "#78716C", // Body text
					600: "#57534E",
					700: "#44403C",
					800: "#292524", // Heading color
					900: "#1C1917",
				},

				// Using the Gold accent for success/highlights
				success: {
					DEFAULT: "#B1976B",
					foreground: "#FFFFFF",
				},

				accent: "#B1976B",
				price: "#B1976B", // Gold color used for prices in the grid
			},

			animation: {
				"fade-in": "fadeIn 0.6s ease-out",
				"slide-up": "slideUp 0.5s ease-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
		},
		screens: {
			xs: "400px",
			xmd: "800px",
			slg: "999px",
			...require("tailwindcss/defaultTheme").screens,
		},
	},
	darkMode: "class",
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#0A0A0A",
							foreground: "#FFFFFF",
						},
						focus: "#B1976B",
					},
				},
			},
		}),
	],
};
export default config;
