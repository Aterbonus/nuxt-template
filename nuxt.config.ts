export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4
	},
	modules: ['@unocss/nuxt', '@vueuse/nuxt'],
	unocss: {
		preflight: true
	}
})
