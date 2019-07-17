module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'prettier/prettier': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'vue/no-use-v-if-with-v-for': ['off'],
    'vue/component-name-in-template-casing': ['off'],
    'vue/html-closing-bracket-newline': ['off'],
    'vue/multiline-html-element-content-newline': ['off'],
    'vue/no-unused-components': ['off'],
    'vue/max-attributes-per-line': 0,
    'eqeqeq': ['off'],
    'no-new': ['off'],
    'space-before-function-paren': [2, 'always']
  }
}
