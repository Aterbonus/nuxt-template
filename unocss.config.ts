import { defineConfig, presetIcons, presetWebFonts, presetWind4, transformerVariantGroup } from 'unocss'

export default defineConfig({
	presets: [
		presetWind4(),
		presetIcons(),
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Lato',
					weights: [400, 700],
				},
			},
		}),
	],
	transformers: [transformerVariantGroup()],
	theme: {
		container: {
			center: true,
		},
	},
})
