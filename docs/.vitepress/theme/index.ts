// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import DocDate from './components/DocDate.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocDate', DocDate) 
  }
}