module.exports = {
	extends: ['@nuxt/eslint-config', '@unocss', 'plugin:prettier/recommended'],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'any',
					normal: 'always',
					component: 'always'
				},
				svg: 'always',
				math: 'always'
			}
		]
	},
	ignorePatterns: ['node_modules', 'build', 'dist', 'public', '.nuxt', '.output']
}
