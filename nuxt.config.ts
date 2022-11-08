export default defineNuxtConfig({
	modules: ['@nuxtjs/critters', '@unocss/nuxt', '@vueuse/nuxt'],
	unocss: {
		preflight: true
	},
	critters: {
		config: {
			preload: false
		}
	}
})
