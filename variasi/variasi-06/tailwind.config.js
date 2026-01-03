/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'cta-pulse': 'pulse-orange 2s infinite',
            },
            keyframes: {
                'pulse-orange': {
                    '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.7)' },
                    '70%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(249, 115, 22, 0)' },
                    '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(249, 115, 22, 0)' },
                }
            }
        }
    },
    plugins: [],
}
