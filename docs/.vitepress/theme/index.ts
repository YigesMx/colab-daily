import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DailyIndexPage from './components/DailyIndexPage.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DailyIndexPage', DailyIndexPage)
  }
} satisfies Theme
