/*
 * @Author: 
 * @Date: 2022-02-09 16:40:57
 * @LastEditors: 
 * @LastEditTime: 2022-02-09 16:49:35
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off'
  }
}
