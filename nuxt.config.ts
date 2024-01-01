export default defineNuxtConfig({
	modules: ['@unocss/nuxt', '@vueuse/nuxt'],
	unocss: {
		preflight: true
	},
	features: {
		inlineStyles: false
	}
})
