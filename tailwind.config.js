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
                    black: 'var(--color-cyber-black)',
                    dark: 'var(--color-cyber-dark)',
                    panel: 'var(--color-cyber-panel)',
                    primary: 'var(--color-cyber-primary)',
                    secondary: 'var(--color-cyber-secondary)',
                    dim: 'var(--color-cyber-dim)',
                    text: 'var(--color-cyber-text)',
                    muted: 'var(--color-cyber-muted)'
                }
            },
            fontFamily: {
                mono: ['var(--font-family-mono)', 'monospace'],
                sans: ['var(--font-family-sans)', 'sans-serif'],
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
