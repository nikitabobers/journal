module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['import', '@typescript-eslint', 'react-hooks'],
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/prefer-default-export': 'off',
        'import/newline-after-import': ['error', { count: 1 }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: ['key'],
            },
        ],
        'react/jsx-max-props-per-line': [
            'error',
            { maximum: { single: 5, multi: 1 } },
        ],
        'react/jsx-curly-spacing': [
            'error',
            'never',
            {
                allowMultiline: true,
            },
        ],
        // 'react/jsx-no-bind': ['error','always'],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-boolean-value': 'error',
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'import/no-default-export': 'error',
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'max-params': ['error', 2],
        camelcase: [2, { properties: 'always' }],
        'arrow-parens': [2, 'always'],
        'consistent-return': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'object-shorthand': ['error', 'always'],
        eqeqeq: ['error', 'always'],
        'no-useless-computed-key': 'error',
        'prefer-destructuring': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                allowSeparatedGroups: false,
            },
        ],
        'block-spacing': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
    },
    settings: {
        react: {
            version: 'latest',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src'],
            },
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
    overrides: [
        {
            files: ['pages/**'],
            rules: {
                'import/prefer-default-export': 'error',
                'import/no-default-export': 'off',
            },
        },
    ],
}
