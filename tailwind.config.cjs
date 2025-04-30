
module.exports = {
    content: ['./src/**/*/*.{astro,html,js,jsx,tsx, vue, svelte}'],
    theme: {
        extends:{

        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}