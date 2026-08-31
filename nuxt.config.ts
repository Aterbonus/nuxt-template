export default defineNuxtConfig({
	compatibilityDate: '2026-08-30',
	future: {
		compatibilityVersion: 5,
	},
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'@vueuse/nuxt',
	],
	css: [
		'~/assets/css/main.css',
	],
})
