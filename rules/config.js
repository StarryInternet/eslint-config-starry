/* eslint-disable max-len */

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: [
    '@starryinternet/starry',
    'node'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    'no-undef': 2,
    'block-scoped-var': 2,
    'no-eq-null': 2,
    'eqeqeq': 2,
    'curly': 2,
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-unused-vars': [ 2, { ignoreRestSiblings: true } ],
    'no-use-before-define': [ 2, 'nofunc' ],
    'no-var': 2,
    'one-var': [ 2, 'never' ],
    'indent': [ 2, 2, { SwitchCase: 1, MemberExpression: 0 } ],
    'quotes': [ 2, 'single', { allowTemplateLiterals: true } ],
    'semi': [ 2, 'always' ],
    'comma-dangle': [ 2, 'never' ],
    'array-bracket-spacing': [ 2, 'always' ],
    'block-spacing': [ 2, 'always' ],
    'brace-style': [ 2, '1tbs', { allowSingleLine: true } ],
    'comma-spacing': [ 2, { before: false, after: true } ],
    'comma-style': [ 2, 'last' ],
    '@starryinternet/starry/computed-property-spacing': [ 2, 'always' ],
    'eol-last': [ 2, 'unix' ],
    'key-spacing': [ 2, { beforeColon: false, afterColon: true, mode: 'minimum' } ],
    'linebreak-style': [ 2, 'unix' ],
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': [ 2, 'always' ],
    'semi-spacing': [ 2, { before: false, after: true } ],
    'space-before-blocks': [ 2, 'always' ],
    'space-before-function-paren': [ 2, 'never' ],
    'keyword-spacing': [ 2, { before: true, after: true } ],
    '@starryinternet/starry/space-in-parens': [ 2, 'always', { exceptions: [ '{}', '[]', 'empty' ] } ],
    'max-len': [ 2, 80, 2 ],
    'space-infix-ops': [ 2 ],
    '@starryinternet/starry/aligned-requires': [ 2, 'always' ],
    'object-shorthand': [ 2, 'always' ],
    'template-curly-spacing': [ 2, 'always' ],
    'space-unary-ops': [ 2, { words: true, nonwords: false } ],
    'prefer-const': 2,
    'prefer-arrow-callback': 2,
    'strict': [ 2, 'never' ],
    'no-const-assign': 2,
    'quote-props': [ 2, 'consistent-as-needed' ],

    // Node
    'node/no-exports-assign': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',
    'node/process-exit-as-throw': 'error',
    'node/no-deprecated-api': 'error',
    'node/shebang': 'error'
  }
};
