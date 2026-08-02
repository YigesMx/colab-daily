import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Colab Daily',
  titleTemplate: ':title | Colab Daily',
  description: '每日 AI 研究、产品与行业动态精选',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  appearance: false,
  lastUpdated: false,
  themeConfig: {
    nav: [{ text: '每日精选', link: '/' }],
    outline: {
      level: [2, 3],
      label: '本文目录'
    },
    search: {
      provider: 'local'
    }
  }
})
