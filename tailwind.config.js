/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    black: '#0a0a0a',
                    dark: '#111111',
                    panel: '#1a1a1a',
                    primary: '#00f0ff', // Cyan
                    secondary: '#7000ff', // Electric Purple
                    dim: 'rgba(0, 240, 255, 0.1)',
                    text: '#e0e0e0',
                    muted: '#858585'
                }
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'],
                sans: ['"Space Grotesk"', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scanline': 'scanline 4s linear infinite',
                'speaking': 'speaking 0.4s ease-in-out infinite',
            },
            keyframes: {
                scanline: {
                    '0%': { top: '-20%' },
                    '100%': { top: '100%' },
                },
                speaking: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                    '50%': { transform: 'scale(1.4)', opacity: '0.6' },
                }
            }
        }
    },
    plugins: [],
}
