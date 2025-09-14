import antfu from '@antfu/eslint-config'

export default antfu({
	formatters: true,
	stylistic: {
		indent: 'tab',
		quotes: 'single',
		semi: false,
	},
	rules: {
		'node/prefer-global/process': 'off',
	},
})
