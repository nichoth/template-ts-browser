import neostandard from 'neostandard'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: [
            'lib.es5.d.ts',
            'dist/**',
            'public/**',
            'test/*.js'
        ]
    },

    // JavaScript Standard Style, TypeScript-aware (flat-config successor
    // to `eslint-config-standard`). Stylistic rules live under the
    // `@stylistic/` namespace.
    ...neostandard({ ts: true }),

    // Standard Style overrides, applied to every file.
    {
        rules: {
            '@stylistic/operator-linebreak': 'off',
            '@stylistic/multiline-ternary': 'off',
            '@stylistic/no-multiple-empty-lines': ['error', {
                max: 1,
                maxEOF: 1
            }],
            '@stylistic/indent': ['error', 4, {
                SwitchCase: 1,
                ignoredNodes: ['TemplateLiteral *']
            }],
            '@stylistic/comma-dangle': 'off',
            '@stylistic/no-multi-spaces': ['error', {
                ignoreEOLComments: true
            }]
        }
    },

    // `@typescript-eslint/recommended` plus our TypeScript overrides,
    // scoped to TypeScript files where the parser and plugin are active.
    {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [tseslint.configs.recommended],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }],
            '@typescript-eslint/consistent-type-imports': ['error', {
                prefer: 'type-imports'
            }]
        }
    }
)
