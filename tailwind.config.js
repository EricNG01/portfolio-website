/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundSize: {
                'keyword-background-no-underline': '0% 2px',
                'keyword-background-underline': '100% 2px',
            },
            transition: {
                'bg-size-1000': 'background-size 1s',
            }
        },
    },
    plugins: [],
}

