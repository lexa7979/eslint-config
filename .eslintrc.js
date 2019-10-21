module.exports = {
	// https://eslint.org/docs/user-guide/configuring#specifying-environments
    "env": {
        "browser": true,
		"es6": true,
		"node": true,
		// "jest/globals": true,
	},
	// https://eslint.org/docs/user-guide/configuring#extending-configuration-files
	// "extends": "eslint:recommended",
	"extends": [
		"eslint:all",
		// "plugin:react/recommended",
	],
	// https://eslint.org/docs/user-guide/configuring#specifying-globals
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
	},
	// https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    "parserOptions": {
        // "sourceType": "module",
        "ecmaVersion": 2018,
        // "ecmaFeatures": {
        //     "jsx": true
        // }
	},
	// https://eslint.org/docs/user-guide/configuring#configuring-plugins
    plugins: [
		// "react",
		// "jest",
	],
	// https://eslint.org/docs/user-guide/configuring#configuring-rules
    rules: {
		"array-bracket-spacing": [ "error", "always" ],
		"array-element-newline": [ "error", "consistent" ],
		"arrow-parens": [ "error", "as-needed" ],
		"brace-style": [ "error", "1tbs", { allowSingleLine: true } ],
		"capitalized-comments": "off",
		"comma-dangle": [ "error", "always-multiline" ],
		"dot-location": [ "error", "property" ],
		"eqeqeq": [ "error", "always", { null: "ignore" } ],
		"func-style": [ "error", "declaration", { allowArrowFunctions: true } ],
		"function-call-argument-newline": [ "error", "consistent" ],
		"function-paren-newline": [ "error", "consistent" ],
		"indent": [ "error", "tab" ],
		"key-spacing": [ "error", {
			beforeColon: false,
			afterColon: true,
			mode: "minimum",
			align: "value",
		} ],
		"line-comment-position": "off",
		"lines-around-comment": [ "error", {
			beforeLineComment: false,
			beforeBlockComment: true,
			afterLineComment: false,
			allowClassStart: true,
			allowObjectStart: true,
		} ],
		"max-len": [ "error", {
			code: 120,
			tabWidth: 4,
			ignoreComments: true,
		} ],
		"max-lines": [ "error", 500 ],
		"max-lines-per-function": [ "warn", 50 ],
		"max-statements": [ "warn", 20 ],
		"multiline-comment-style": "off",
		"multiline-ternary": [ "error", "always-multiline" ],
		"no-eq-null": "off",
		"no-extra-parens": [ "error", "all", {
			nestedBinaryExpressions: false,
			enforceForArrowConditionals: false,
		} ],
		"no-inline-comments": "off",
		"no-magic-numbers": "off",
		"no-mixed-operators": [ "error" ],
		"no-multi-spaces": [ "error", {
			ignoreEOLComments: true,
			exceptions: {
				Property: true,
				VariableDeclarator: true,
				ImportDeclaration: true,
			}
		} ],
		"no-plusplus": "off",
		"no-tabs": "off",
		"no-ternary": "off",
		"object-curly-spacing": [ "error", "always" ],
		"object-property-newline": [ "error", {
			allowAllPropertiesOnSameLine: true,
		} ],
		"one-var": [ "error", {
			initialized: "never",
			uninitialized: "always"
		} ],
		"operator-linebreak": [ "error", "before" ],
		"padded-blocks": [ "error", "never" ],
		"prefer-destructuring": [
			"error",
			{
				VariableDeclarator: { array: false, object: true },
				AssignmentExpression: { array: false, object: true }
			},
			{ enforceForRenamedProperties: false }
		],
		"quote-props": [ "error", "as-needed" ],
		"require-jsdoc": [ "error", {
			require: {
				FunctionDeclaration: true,
				MethodDefinition: true,
				ClassDeclaration: true,
				ArrowFunctionExpression: true,
				FunctionExpression: true
			}
		} ],
		"require-unicode-regexp": "off",
		"sort-imports": "off",
		"sort-keys": "off",
		"space-before-function-paren": [ "error", {
			anonymous: "always",
			named: "never",
			asyncArrow: "always"
		} ],
		"space-in-parens": [ "error", "always" ],
		"strict": [ "error", "global" ],
		"wrap-regex": "off",

		// "jest/no-large-snapshots": [ "warn", { maxSize: 50 } ],
	},
	// https://github.com/yannickcr/eslint-plugin-react#configuration
	settings: {
		// react: {
		// 	version: "detect"
		// }
	}
};
