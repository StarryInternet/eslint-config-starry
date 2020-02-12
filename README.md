# eslint-config-starry

Starry JavaScript Styleguide for ESLint.

Based heavily on [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/),
with some additional rules to enfore ES6 features like using `let` or `const`
instead of `var`.

### Usage

`npm install @starryinternet/eslint-config-starry @starryinternet/eslint-plugin-starry --save-dev`

Then drop an `.eslintrc` file in your project root that looks like this:

```json
{
  "root": true,
  "extends": "@starryinternet/starry"
}
```
