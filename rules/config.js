module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true,
    'es6': true
  },
  'plugins': [
    'starry'
  ],
  "parserOptions": {
    "ecmaVersion": 2018
  },
  'rules': {
    'no-undef': 2,
    'block-scoped-var': 2,
    'no-eq-null': 2,
    'eqeqeq': 2,
    'curly': 2,
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-unused-vars': [ 2, { "ignoreRestSiblings": true } ],
    'no-use-before-define': [ 2, 'nofunc' ],
    'no-var': 2,
    'one-var': [ 2, 'never' ],
    'indent': [ 2, 2, { 'SwitchCase': 1, 'MemberExpression': 0 } ],
    'quotes': [ 2, 'single', { allowTemplateLiterals: true } ],
    'semi': [ 2, 'always' ],
    'comma-dangle': [ 2, 'never' ],
    'array-bracket-spacing': [ 2, 'always' ],
    'block-spacing': [ 2, 'always' ],
    'brace-style': [ 2, '1tbs', { 'allowSingleLine': true } ],
    'comma-spacing': [ 2, { 'before': false, 'after': true } ],
    'comma-style': [ 2, 'last' ],
    'starry/computed-property-spacing': [ 2, 'always' ],
    'eol-last': [ 2, 'unix' ],
    'key-spacing': [ 2, { 'beforeColon' : false, 'afterColon': true, mode: 'minimum' } ],
    'linebreak-style': [ 2, 'unix' ],
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': [ 2, 'always' ],
    'semi-spacing': [ 2, { 'before': false, 'after': true } ],
    'space-before-blocks': [ 2, 'always' ],
    'space-before-function-paren': [ 2, 'never' ],
    'keyword-spacing': [ 2, { before: true, after: true } ],
    'starry/space-in-parens': [ 2, 'always', { 'exceptions': [ '{}', '[]', 'empty' ] } ],
    'max-len': [ 2, 80, 2 ],
    'space-infix-ops': [ 2 ],
    'starry/aligned-requires': [ 2, 'always' ],
    'object-shorthand': [ 2, 'always' ],
  }
};
