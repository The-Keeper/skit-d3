import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
    content: {
        filesystem: ['src/**/*.svelte', 'src/**/*.html', './node_modules/stdf/**/*.svelte'],
    },
    presets: [
        presetAttributify({ /* preset options */ }),
        presetUno(),
        // ...custom presets
    ],
})