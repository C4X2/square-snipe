/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        extend: {
            colors: {
                'unreal-blue': 'rgb(51,84,126)',
                'wheat': {
                    '50': '#fbeddb',
                    '100': '#f5dcb8',
                    '200': '#d7c1a2',
                    '300': '#b9a68c',
                    '400': '#9c8d77',
                    '500': '#807462',
                    '600': '#655c4e',
                    '700': '#4c453b',
                    '800': '#342f29',
                    '900': '#1d1b18',
                    '950': '#12110f',
                }
            }
        }
    },
    plugins: [],
}

