import type { Theme } from 'vitepress'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ArticleMetadata from './components/ArticleMetadata.vue'
import DailyIndexPage from './components/DailyIndexPage.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-before': () => h(ArticleMetadata)
  }),
  enhanceApp({ app }) {
    app.component('DailyIndexPage', DailyIndexPage)
  }
} satisfies Theme
