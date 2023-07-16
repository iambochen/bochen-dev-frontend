// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',    // https://nuxt.com/modules/icon
    ],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },
    css: ['~/assets/scss/main.scss'],
    googleFonts: {
        families: {
            Montserrat: true,
            'Open+Sans': true,
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
        },
    },
    vite: {
        server: {
            hmr: {
                protocol: 'ws',
                host: 'localhost'
            }
        },
    },
    plugins: [
        {
            src: '~/plugins/vercel.js',
            mode: 'client',
        },
    ],
})
