module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                '#': 'prettier config in here :)',
                singleQuote: true,
                tabWidth: 4
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
};
// module.exports = {
//     root: true,
//     env: {
//         node: true
//     },
//     extends: ["plugin:vue/essential", "@vue/prettier"],
//     rules: {
//         "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
//         "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
//         "curly": "error",
//         "indent": ["error", "tab"],
//         "quotes": ["error", "single"]
//     },
//     parser: "babel-eslint",
//     parserOptions: {
//         parser: "babel-eslint"
//     },
//     plugins: ["prettier"],
//     overrides: [
//         {
//             files: [
//                 "**/__tests__/*.{j,t}s?(x)",
//                 "**/tests/unit/**/*.spec.{j,t}s?(x)"
//             ],
//             env: {
//                 jest: true
//             }
//         }
//     ]
// };
