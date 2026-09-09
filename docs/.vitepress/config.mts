import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'
if (!/^\/(?:[A-Za-z0-9._~-]+\/)*$/.test(base) || base.split('/').some(x => x === '.' || x === '..')) {
  throw new Error('Invalid VITEPRESS_BASE')
}
export default defineConfig({
  lang: 'zh-CN', title: 'Colab Daily', description: '每日研究、新闻与政策正式报告',
  base, cleanUrls: true, lastUpdated: false,
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Public artifact names must stay inside the deployment allowlist charset;
          // the local-search virtual module id contains '@'.
          sanitizeFileName: (name: string) => name.replace(/\0/g, '').replace(/@/g, '_'),
        },
      },
    },
  },
  themeConfig: { nav: [{ text: '每日报告', link: '/' }], search: { provider: 'local' },
    outline: { level: 2, label: '文章目录' }, footer: { message: 'Colab Daily · 研究 / 新闻 / 政策' } }
})
