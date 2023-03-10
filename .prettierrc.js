// prettier.config.js or .prettierrc.js
module.exports = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'off',
	htmlWhitespaceSensitivity: 'ignore',
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 120,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
	vueIndentScriptAndStyle: false,
	singleAttributePerLine: true,
	overrides: [
		{
			files: '*.html',
			options: {
				singleAttributePerLine: false,
			},
		}
	],
}
