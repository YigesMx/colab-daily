<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import type { DailyArchive, DailyArticle } from '../../data/daily.data'

const props = defineProps<{ archive: DailyArchive }>()

const selectedDate = ref(props.archive.dates[0]?.date ?? '')
const selectedKeyword = ref('全部')
const datePicker = ref<HTMLDetailsElement>()
const activeSection = ref('')
let sectionObserver: IntersectionObserver | undefined = undefined

const currentGroup = computed(() =>
  props.archive.dates.find((group) => group.date === selectedDate.value)
)
const keywordFacets = computed(() => [
  { name: '全部', count: currentGroup.value?.articleCount ?? 0 },
  ...(currentGroup.value?.keywords ?? [])
])
const visibleSections = computed(() =>
  (currentGroup.value?.sections ?? []).map((section) => ({
    ...section,
    articles: section.articles.filter(
      (article) => selectedKeyword.value === '全部' || article.keywords.includes(selectedKeyword.value)
    )
  }))
)
const visibleArticleCount = computed(() =>
  visibleSections.value.reduce((total, section) => total + section.articles.length, 0)
)

watch(selectedDate, () => {
  selectedKeyword.value = '全部'
})

function validArchiveDate(value: string | null): string | null {
  return value && props.archive.dates.some((group) => group.date === value) ? value : null
}

function syncDateToUrl(date: string): void {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  url.searchParams.set('date', date)
  window.history.replaceState(window.history.state, '', url)
}

function syncSectionHash(category: string): void {
  const hash = `#section-${category.toLowerCase()}`
  if (!category || window.location.hash === hash) return
  const url = new URL(window.location.href)
  url.hash = hash
  window.history.replaceState(window.history.state, '', url)
}

function observeSections(): void {
  sectionObserver?.disconnect()
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting && entry.intersectionRatio > 0)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]
      const category = visible?.target.getAttribute('data-daily-category')
      if (category) {
        activeSection.value = category
        syncSectionHash(category)
      }
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.05, 0.2, 0.5, 1] }
  )
  document.querySelectorAll<HTMLElement>('.category-section').forEach((element) => sectionObserver?.observe(element))
}

onMounted(() => {
  const requestedDate = validArchiveDate(new URLSearchParams(window.location.search).get('date'))
  if (requestedDate && requestedDate !== selectedDate.value) selectedDate.value = requestedDate
  else if (selectedDate.value) syncDateToUrl(selectedDate.value)
  const initialCategory = window.location.hash.replace('#section-', '')
  if (['paper', 'news', 'policy'].includes(initialCategory)) activeSection.value = initialCategory
  void nextTick(observeSections)
})

onBeforeUnmount(() => sectionObserver?.disconnect())

function imageUrl(article: DailyArticle): string {
  return article.previewImage ? withBase(article.previewImage) : ''
}

function isTopPaper(article: DailyArticle): boolean {
  return article.category === 'Paper' && article.groupRank <= 3
}

function selectDate(date: string): void {
  selectedDate.value = date
  syncDateToUrl(date)
  datePicker.value?.removeAttribute('open')
  void nextTick(observeSections)
}

function scoreLabel(article: DailyArticle): string {
  return article.scoreKind === 'historical' ? '历史评分' : '组内评分'
}
</script>

<template>
  <main class="daily-index">
    <header class="daily-header">
      <div>
        <p class="daily-header__eyebrow">AI RESEARCH BRIEFING</p>
        <h1>Colab Daily</h1>
      </div>
      <div class="daily-header__edition" aria-label="当前日报信息">
        <details ref="datePicker" class="date-picker">
          <summary class="date-picker__button">
            <span>{{ selectedDate || '暂无期次' }}</span>
            <span class="date-picker__chevron" aria-hidden="true">⌄</span>
          </summary>
          <div class="date-picker__menu" aria-label="选择日报日期">
            <button
              v-for="group in archive.dates"
              :key="group.date"
              type="button"
              :aria-pressed="selectedDate === group.date"
              :class="{ 'date-picker__option--active': selectedDate === group.date }"
              @click="selectDate(group.date)"
            >
              <span>{{ group.date }}</span>
              <small>{{ group.articleCount }} 篇</small>
            </button>
          </div>
        </details>
        <span>{{ currentGroup?.articleCount ?? 0 }} 篇精选</span>
      </div>
    </header>

    <nav v-if="archive.dates.length" class="quick-nav" aria-label="分组快速导航">
      <a
        v-for="section in currentGroup?.sections ?? []"
        :key="section.category"
        :href="`#section-${section.category.toLowerCase()}`"
        class="quick-nav__button"
        :class="[`quick-nav__button--${section.category.toLowerCase()}`, { 'quick-nav__button--active': activeSection === section.category }]"
        :aria-current="activeSection === section.category ? 'true' : undefined"
      >
        {{ section.label }}
        <span>{{ section.articles.length }}</span>
      </a>
    </nav>

    <section v-if="archive.dates.length" class="facets" aria-label="关键词筛选">
      <div class="facet-row">
        <h2>关键词</h2>
        <div class="facet-row__options">
          <button
            v-for="facet in keywordFacets"
            :key="facet.name"
            type="button"
            class="facet"
            :class="{ 'facet--active': selectedKeyword === facet.name }"
            :aria-pressed="selectedKeyword === facet.name"
            @click="selectedKeyword = facet.name"
          >
            {{ facet.name }} <span>{{ facet.count }}</span>
          </button>
        </div>
      </div>
    </section>

    <div v-if="archive.dates.length" class="result-line" aria-live="polite">
      <span v-if="selectedKeyword === '全部'">按类别展示本期 {{ visibleArticleCount }} 篇内容</span>
      <span v-else>“{{ selectedKeyword }}”匹配 {{ visibleArticleCount }} / {{ currentGroup?.articleCount ?? 0 }} 篇</span>
    </div>

    <div v-if="archive.dates.length" class="category-sections">
      <section
        v-for="(section, sectionIndex) in visibleSections"
        :key="section.category"
        class="category-section"
        :class="`category-section--${section.category.toLowerCase()}`"
        :aria-labelledby="`section-${section.category.toLowerCase()}`"
        data-daily-section="true"
        :data-daily-category="section.category"
        :data-section-order="sectionIndex + 1"
      >
        <header class="category-section__header">
          <div>
            <span class="category-section__index" aria-hidden="true">
              {{ String(sectionIndex + 1).padStart(2, '0') }}
            </span>
            <div>
              <p>{{ section.category }}</p>
              <h2 :id="`section-${section.category.toLowerCase()}`">{{ section.label }}</h2>
            </div>
          </div>
          <span class="category-section__count">
            {{ section.articles.length }}<small> / {{ currentGroup?.sections.find((item) => item.category === section.category)?.articles.length ?? 0 }}</small>
          </span>
        </header>

        <div v-if="section.articles.length" class="article-grid">
          <article
            v-for="article in section.articles"
            :key="article.candidateId"
            class="article-card"
            :class="{ 'article-card--top': isTopPaper(article) }"
            :data-card-candidate-id="article.candidateId"
            :data-card-category="article.category"
            :data-card-group-rank="article.groupRank"
            :data-card-emphasis="isTopPaper(article) ? 'true' : 'false'"
            :data-score-kind="article.scoreKind"
            :data-score-scale="article.scoreScale"
            :data-rating-track="article.ratingTrack"
          >
            <div class="article-card__topline">
              <span
                class="article-card__rank"
                :class="{ 'article-card__rank--top': isTopPaper(article) }"
              >
                <span v-if="isTopPaper(article)" class="article-card__rank-arrow" aria-hidden="true">↑</span>
                NO. {{ String(article.groupRank).padStart(2, '0') }}
              </span>
              <span
                class="article-card__score"
                :aria-label="`${scoreLabel(article)} ${article.groupScore}`"
                :title="scoreLabel(article)"
              >
                {{ article.groupScore.toFixed(1) }}
              </span>
            </div>
            <div class="article-card__preview">
              <img
                v-if="article.previewImage"
                :src="imageUrl(article)"
                :alt="`${article.title} 预览图`"
                loading="lazy"
              />
              <div v-else class="pseudo-cover" aria-hidden="true">
                <div class="pseudo-cover__grid"></div>
                <span>COLAB / {{ article.date.slice(5) }}</span>
                <strong>{{ article.keywords[0] || 'AI' }}</strong>
                <small>{{ article.candidateId }}</small>
              </div>
            </div>
            <div class="article-card__content">
              <p class="article-card__authors">{{ article.authors.join(' · ') }}</p>
              <h3><a :href="withBase(article.url)" class="article-card__link">{{ article.title }}</a></h3>
              <p class="article-card__summary">{{ article.summary }}</p>
              <div class="article-card__keywords" aria-label="关键词">
                <span v-for="keyword in article.keywords.slice(0, 4)" :key="keyword">{{ keyword }}</span>
              </div>
            </div>
            <footer class="article-card__sources" aria-label="原始来源">
              <a
                v-for="source in article.sources"
                :key="`${source.name}-${source.url}`"
                :href="source.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ source.name }}<span class="sr-only">（新窗口打开）</span>
              </a>
            </footer>
          </article>
        </div>

        <div v-else class="section-empty">
          <strong>{{ selectedKeyword === '全部' ? `本期暂无${section.label}内容` : `没有匹配“${selectedKeyword}”的${section.label}内容` }}</strong>
          <span v-if="selectedKeyword !== '全部'">可选择其他关键词或“全部”查看本组。</span>
        </div>
      </section>
    </div>

    <section v-else class="empty-state">
      <strong>暂无日报内容</strong>
    </section>
  </main>
</template>

<style scoped>
.daily-index {
  min-height: calc(100vh - var(--vp-nav-height));
  padding: 44px 32px 80px;
  background:
    radial-gradient(circle at 12% -10%, rgba(59, 130, 246, 0.18), transparent 28%),
    radial-gradient(circle at 92% 12%, rgba(45, 212, 191, 0.09), transparent 22%),
    #0f1117;
  color: #eef2f7;
}

.daily-header,
.quick-nav,
.facets,
.result-line,
.category-sections,
.empty-state {
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
}

.daily-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #2b3341;
}

.daily-header__eyebrow {
  margin: 0 0 9px;
  color: #60a5fa;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.17em;
}

.daily-header h1 {
  margin: 0;
  color: #f6f8fb;
  font-size: clamp(34px, 5vw, 62px);
  line-height: 0.98;
  letter-spacing: -0.045em;
}

.daily-header__edition {
  display: grid;
  flex: 0 0 auto;
  gap: 3px;
  text-align: right;
}

.daily-header__edition > span {
  color: #8f99aa;
  font-size: 13px;
  font-weight: 800;
}

.date-picker {
  position: relative;
  z-index: 3;
  min-width: 164px;
}

.date-picker summary { list-style: none; }
.date-picker summary::-webkit-details-marker { display: none; }

.date-picker__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-width: 164px;
  height: 42px;
  box-sizing: border-box;
  padding: 0 12px 0 14px;
  border: 1px solid rgba(245, 158, 11, 0.58);
  border-radius: 7px;
  background: #191e28;
  color: #fbbf24;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
}

.date-picker__button:hover,
.date-picker[open] .date-picker__button {
  border-color: #fbbf24;
  background: #24212a;
}

.date-picker__chevron {
  color: #f59e0b;
  font-size: 18px;
  line-height: 1;
  transform: translateY(-2px);
}

.date-picker__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  display: grid;
  width: 220px;
  max-height: min(360px, calc(100vh - var(--vp-nav-height) - 96px));
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 6px;
  border: 1px solid #3c4555;
  border-radius: 8px;
  background: #191e28;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.4);
}

.date-picker__menu button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 38px;
  padding: 0 9px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: #dbe3ee;
  font: inherit;
  font-size: 13px;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
}

.date-picker__menu button:hover,
.date-picker__option--active {
  background: rgba(245, 158, 11, 0.14) !important;
  color: #fbbf24 !important;
}

.date-picker__menu small {
  color: #8994a5;
  font-size: 11px;
  font-weight: 700;
}

.quick-nav {
  display: flex;
  justify-content: center;
  padding: 22px 0 0;
}

.quick-nav__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 132px;
  min-height: 38px;
  padding: 0 18px;
  border: 1px solid #303949;
  border-radius: 999px;
  background: #171c25;
  color: #d6dde8;
  font: inherit;
  font-size: 13px;
  font-weight: 850;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: transform 120ms ease, border-color 120ms ease, background 120ms ease, color 120ms ease;
}

.quick-nav__button + .quick-nav__button { margin-left: 10px; }

.quick-nav__button:hover { transform: translateY(-1px); border-color: #59667d; color: #fff; }
.quick-nav__button span { color: #7f8a9b; font-size: 11px; }
.quick-nav__button--paper.quick-nav__button--active { border-color: #60a5fa; background: rgba(96,165,250,.16); color: #b7d0ff; }
.quick-nav__button--news.quick-nav__button--active { border-color: #5ee2b4; background: rgba(94,226,180,.14); color: #a7f3d6; }
.quick-nav__button--policy.quick-nav__button--active { border-color: #c4a7ff; background: rgba(196,167,255,.14); color: #ddd0ff; }
.quick-nav__button--active span { color: currentColor; opacity: .72; }

.facets {
  padding: 18px 0;
  border-bottom: 1px solid #242c39;
}

.facet-row {
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.facet-row h2 {
  margin: 0;
  padding-top: 8px;
  color: #8f99aa;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.facet-row__options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.facet {
  min-height: 32px;
  padding: 0 12px;
  border: 1px solid #303949;
  border-radius: 999px;
  background: #191e28;
  color: #c5cdd9;
  font: inherit;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 120ms ease, border-color 120ms ease, background 120ms ease;
}

.facet:hover {
  transform: translateY(-1px);
  border-color: #536077;
}

.facet span {
  margin-left: 4px;
  color: #7f8a9b;
  font-size: 11px;
}

.facet--active {
  border-color: #5ee2b4;
  background: #4fd1a5;
  color: #06251a;
}

.facet--active span {
  color: currentColor;
  opacity: 0.72;
}

.result-line {
  margin-top: 20px;
  color: #8f99aa;
  font-size: 13px;
  font-weight: 800;
}

.category-sections {
  display: grid;
  gap: 64px;
  margin-top: 18px;
}

.category-section {
  --section-accent: #60a5fa;
  --section-glow: rgba(96, 165, 250, 0.12);
  scroll-margin-top: calc(var(--vp-nav-height) + 20px);
}

.category-section--news {
  --section-accent: #5ee2b4;
  --section-glow: rgba(94, 226, 180, 0.1);
}

.category-section--policy {
  --section-accent: #c4a7ff;
  --section-glow: rgba(196, 167, 255, 0.1);
}

.category-section__header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
  padding: 0 2px 13px;
  border-bottom: 1px solid color-mix(in srgb, var(--section-accent) 38%, #2b3341);
}

.category-section__header > div {
  display: flex;
  align-items: center;
  gap: 13px;
}

.category-section__index {
  color: var(--section-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.05em;
}

.category-section__header p {
  margin: 0 0 1px;
  color: var(--section-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.category-section__header h2 {
  margin: 0;
  color: #f2f5f9;
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1;
  letter-spacing: -0.035em;
}

.category-section__count {
  color: var(--section-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 24px;
  font-weight: 900;
}

.category-section__count small {
  color: #788294;
  font-size: 12px;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.article-card {
  position: relative;
  display: flex;
  min-width: 0;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid #2b3341;
  border-top: 2px solid var(--section-accent);
  border-radius: 9px;
  background: linear-gradient(180deg, var(--section-glow), transparent 95px), #191e28;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2);
  transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.article-card--top {
  border-top-width: 3px;
  border-top-color: #f59e0b;
  background: linear-gradient(180deg, rgba(245, 158, 11, 0.1), transparent 110px), #191e28;
}

.article-card:hover {
  transform: translateY(-3px);
  border-color: #465269;
  border-top-color: var(--section-accent);
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.28);
}

.article-card--top:hover { border-top-color: #fbbf24; }

.article-card:focus-within {
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.22), 0 22px 44px rgba(0, 0, 0, 0.28);
}

.article-card__topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 18px 12px;
}

.article-card__rank {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--section-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.05em;
}

.article-card__rank--top {
  color: #f59e0b;
  font-size: 15px;
  font-weight: 950;
}

.article-card__rank-arrow {
  color: #f59e0b;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 20px;
  font-weight: 950;
  line-height: 0.7;
}

.article-card__score {
  padding: 4px 8px;
  border: 1px solid color-mix(in srgb, var(--section-accent) 42%, transparent);
  border-radius: 999px;
  color: var(--section-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  font-weight: 900;
}

.article-card--top .article-card__score {
  border-color: rgba(245, 158, 11, 0.4);
  color: #fbbf24;
}

.article-card__preview {
  aspect-ratio: 1.8;
  margin: 0 18px;
  overflow: hidden;
  border: 1px solid #30394a;
  border-radius: 7px;
  background: #111620;
}

.article-card__preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
}

.article-card:hover .article-card__preview img { transform: scale(1.025); }

.pseudo-cover {
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
  background: linear-gradient(135deg, var(--section-glow), transparent 55%), #111722;
}

.pseudo-cover::after {
  position: absolute;
  right: -8%;
  bottom: -45%;
  width: 58%;
  aspect-ratio: 1;
  border: 30px solid color-mix(in srgb, var(--section-accent) 16%, transparent);
  border-radius: 50%;
  content: '';
}

.pseudo-cover__grid {
  position: absolute;
  inset: 0;
  opacity: 0.28;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: linear-gradient(to right, black, transparent 80%);
}

.pseudo-cover span,
.pseudo-cover strong,
.pseudo-cover small { position: relative; z-index: 1; }

.pseudo-cover span,
.pseudo-cover small {
  color: #8ea0b9;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.pseudo-cover strong {
  max-width: 80%;
  color: #eef5ff;
  font-size: clamp(22px, 3vw, 34px);
  line-height: 1;
  letter-spacing: -0.04em;
}

.pseudo-cover small { align-self: flex-end; }

.article-card__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 17px 18px 15px;
}

.article-card__authors {
  display: -webkit-box;
  margin: 0 0 6px;
  overflow: hidden;
  color: #8692a4;
  font-size: 12px;
  font-weight: 700;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.article-card h3 {
  margin: 0;
  color: #edf1f7;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.015em;
}

.article-card__link { color: inherit; text-decoration: none; }

.article-card__link::after {
  position: absolute;
  z-index: 1;
  inset: 0;
  content: '';
}

.article-card__link:focus-visible { outline: none; }

.article-card__summary {
  display: -webkit-box;
  margin: 11px 0 17px;
  overflow: hidden;
  color: #c5cdd8;
  font-size: 14px;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.article-card__keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.article-card__keywords span {
  padding: 4px 8px;
  border: 1px solid #334054;
  border-radius: 999px;
  background: #131923;
  color: #aab6c7;
  font-size: 11px;
  font-weight: 800;
}

.article-card__sources {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding: 13px 18px 16px;
  border-top: 1px solid #2a3240;
}

.article-card__sources a {
  padding: 5px 9px;
  border: 1px solid color-mix(in srgb, var(--section-accent) 42%, transparent);
  border-radius: 5px;
  background: var(--section-glow);
  color: var(--section-accent);
  font-size: 11px;
  font-weight: 900;
  text-decoration: none;
}

.article-card__sources a:hover,
.article-card__sources a:focus-visible {
  border-color: var(--section-accent);
  background: color-mix(in srgb, var(--section-accent) 18%, transparent);
  color: #edf6ff;
}

.section-empty {
  display: grid;
  min-height: 150px;
  place-content: center;
  gap: 5px;
  border: 1px dashed color-mix(in srgb, var(--section-accent) 35%, #344052);
  border-radius: 8px;
  background: linear-gradient(135deg, var(--section-glow), transparent 55%);
  color: #8f99aa;
  text-align: center;
}

.section-empty strong { color: #dce3ec; font-size: 17px; }
.section-empty span { font-size: 13px; }

.empty-state {
  display: grid;
  min-height: 260px;
  margin-top: 24px;
  place-content: center;
  border: 1px dashed #344052;
  border-radius: 8px;
  color: #e8edf5;
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (max-width: 1120px) {
  .article-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  .daily-index { padding: 28px 16px 52px; }
  .daily-header { align-items: start; flex-direction: column; gap: 20px; }
  .daily-header__edition { align-items: start; text-align: left; }
  .date-picker__menu { right: auto; left: 0; }
  .quick-nav { flex-wrap: wrap; gap: 8px; padding-top: 16px; }
  .quick-nav__button { flex: 1 1 130px; }
  .quick-nav__button + .quick-nav__button { margin-left: 0; }
  .facet-row { grid-template-columns: 1fr; }
  .facet-row h2 { padding-top: 0; }
  .category-sections { gap: 48px; }
  .category-section__header { align-items: center; }
  .article-grid { grid-template-columns: 1fr; }
  .article-card__summary { -webkit-line-clamp: 5; }
}

@media (max-width: 420px) {
  .daily-index { padding-right: 12px; padding-left: 12px; }
  .facet-row__options { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 5px; }
  .facet { flex: 0 0 auto; }
  .category-section__header { gap: 12px; }
  .category-section__index { display: none; }
  .article-card__preview { margin-right: 14px; margin-left: 14px; }
  .article-card__topline,
  .article-card__content,
  .article-card__sources { padding-right: 14px; padding-left: 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .article-card, .article-card__preview img, .facet, .quick-nav__button { transition: none; }
}
</style>
