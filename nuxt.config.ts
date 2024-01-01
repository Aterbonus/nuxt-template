export default defineNuxtConfig({
	modules: ['@nuxtjs/critters', '@unocss/nuxt', '@vueuse/nuxt'],
	unocss: {
		preflight: true
	},
	critters: {
		config: {
			// @ts-expect-error false exists as an option, but the typing is wrong
			preload: false
		}
	}
})
