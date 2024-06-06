/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue-pug/vue3-recommended',
    '@vue/standard'],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
