export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	future: {
		compatibilityVersion: 5
	},
	devtools: { enabled: true },
	modules: ['@unocss/nuxt', '@vueuse/nuxt'],
	unocss: {
		preflight: true
	}
})
