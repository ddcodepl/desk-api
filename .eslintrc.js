module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['**/*.js.snap'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
    },
    rules: {
        indent: ['error', 4],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'comma-dangle': ['error', 'only-multiline'],
        'space-before-function-paren': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        'max-len': ['error', { code: 160 }],
        'import/extensions': [
            'error',
            'never',
            {
                js: 'never',
                ts: 'never',
                mjs: 'never',
                jsx: 'never',
                tsx: 'never',
                json: 'never',
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: true,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'linebreak-style': 0,
        'no-underscore-dangle': 'off',
        'prefer-const': 'off',
        'global-require': 'off',
        'no-use-before-define': 'off',
        'no-useless-escape': 'off',
        'import/no-extraneous-dependencies': [
            0,
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'import/no-dynamic-import': 'off',
        'func-names': 'off',
        'object-curly-newline': 'off',
        camelcase: [
            0,
            {
                properties: 'never', // does not check property names
                ignoreDestructuring: true, // does not check destructured identifiers (but still checks any use of those identifiers later in the code)
                ignoreImports: true, // does not check ES2015 imports (but still checks any use of the imports later in the code except function arguments)
                ignoreGlobals: true, // does not enforce camelcase style for global variables
            },
        ],
        'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
        'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
        'arrow-body-style': ['error', 'as-needed'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        'no-param-reassign': 'warn',
        'no-return-await': 'warn',
        'new-cap': 'warn',
    },
};
