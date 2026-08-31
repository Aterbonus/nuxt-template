import antfu from '@antfu/eslint-config'
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
	{
		stylistic: {
			indent: 'tab',
		},
	},
	eslintPluginTailwindcss.configs['flat/recommended']
	|| eslintPluginTailwindcss.configs.recommended,
	{
		settings: {
			// Define the tailwindcss settings with the MANDATORY `cssConfigPath`
			tailwindcss: {
				cssConfigPath: './app/assets/css/main.css',
			},
		},
	},
)
