// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import DocDate from './components/DocDate.vue' // ← 明確匯入

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocDate', DocDate) // ← 全域註冊
  }
}