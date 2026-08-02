import { defineConfig } from 'vitepress'
import type { PageSplitSection } from 'vitepress'
import { readFileSync } from 'node:fs'

const headingRegex = /<h(\d*).*?>(.*?<a.*? href="#.*?".*?>.*?<\/a>)<\/h\1>/gi
const headingContentRegex = /(.*?)<a.*? href="#(.*?)".*?>.*?<\/a>/i

function clearHtmlTags(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim()
}

function articleTitleFromSource(path: string): string {
  const source = readFileSync(path, 'utf8')
  const match = source.match(/^title:\s*(?:"([^"]+)"|'([^']+)'|(.+?))\s*$/m)
  return match?.[1] ?? match?.[2] ?? match?.[3]?.trim() ?? 'Colab Daily'
}

function splitSearchSections(path: string, html: string): PageSplitSection[] {
  const articleTitle = articleTitleFromSource(path)
  const result = html.split(headingRegex)
  result.shift()
  const sections: PageSplitSection[] = []
  const parentTitles: string[] = [articleTitle]

  for (let index = 0; index < result.length; index += 3) {
    const level = Number.parseInt(result[index], 10) - 1
    const headingResult = headingContentRegex.exec(result[index + 1])
    const title = clearHtmlTags(headingResult?.[1] ?? '')
    const anchor = headingResult?.[2] ?? ''
    const text = clearHtmlTags(result[index + 2] ?? '')
    if (!title) continue

    if (level === 0) {
      continue
    }
    if (!text) continue

    parentTitles.length = level
    parentTitles[level] = title
    sections.push({
      anchor,
      titles: [...parentTitles.slice(0, level + 1)],
      text
    })
  }

  return sections
}

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
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          _splitIntoSections: splitSearchSections
        }
      }
    }
  }
})
