/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0f172a", // Slate 900
                    light: "#1e293b",   // Slate 800
                },
                accent: {
                    DEFAULT: "#3b82f6", // Blue 500
                    glow: "rgba(59, 130, 246, 0.5)",
                },
                secondary: "#06b6d4", // Cyan 500
                background: {
                    light: "#f8fafc",
                    white: "#ffffff",
                },
                text: {
                    dark: "#0f172a",
                    muted: "#64748b",
                    light: "#f1f5f9",
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [],
}
