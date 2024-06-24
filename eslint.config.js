import antfu from '@antfu/eslint-config'

export default antfu(
	{
		stylistic: {
			indent: 'tab'
		},
		unocss: true
	},
	{
		rules: {
			'style/comma-dangle': ['error', 'never']
		}
	}
)
