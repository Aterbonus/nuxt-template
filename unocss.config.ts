import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Lato',
					weights: [400]
				}
			}
		})
	],
	transformers: [transformerVariantGroup()],
	theme: {
		container: {
			center: true
		},
		breakpoints: {
			sm: '640px',
			md: '768px',
			lg: '1140px'
		}
	}
})
