<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import type { DailyArchive, DailyArticle } from '../../data/daily.data'

const props = defineProps<{ archive: DailyArchive }>()

const selectedDate = ref(props.archive.dates[0]?.date ?? '')
const selectedSource = ref('全部')
const selectedKeyword = ref('全部')
const selectedSort = ref('rank')

const currentGroup = computed(() =>
  props.archive.dates.find((group) => group.date === selectedDate.value)
)
const sourceFacets = computed(() => [
  { name: '全部', count: currentGroup.value?.articles.length ?? 0 },
  ...(currentGroup.value?.sources ?? [])
])
const keywordFacets = computed(() => [
  { name: '全部', count: currentGroup.value?.articles.length ?? 0 },
  ...(currentGroup.value?.keywords ?? [])
])

const matchingArticles = computed(() => {
  const articles = (currentGroup.value?.articles ?? []).filter((article) => {
    const sourceMatched = selectedSource.value === '全部' ||
      article.sources.some((source) => source.name === selectedSource.value)
    const keywordMatched = selectedKeyword.value === '全部' ||
      article.keywords.includes(selectedKeyword.value)
    return sourceMatched && keywordMatched
  })

  return articles.sort((left, right) => {
    if (selectedSort.value === 'score') return right.score - left.score || left.rank - right.rank
    if (selectedSort.value === 'title') return left.title.localeCompare(right.title, 'zh-CN')
    return left.rank - right.rank
  })
})

const visibleArticles = computed(() => matchingArticles.value.slice(0, 15))

watch(selectedDate, () => {
  selectedSource.value = '全部'
  selectedKeyword.value = '全部'
})

function imageUrl(article: DailyArticle) {
  if (!article.previewImage) return ''
  return withBase(article.previewImage)
}
</script>

<template>
  <main class="daily-index">
    <header class="daily-header">
      <div>
        <h1>Colab Daily</h1>
      </div>
      <div class="daily-header__edition" aria-label="当前日报信息">
        <details class="date-picker">
          <summary class="date-picker__button">
            <span>{{ selectedDate || '暂无期次' }}</span>
            <span class="date-picker__chevron" aria-hidden="true">⌄</span>
          </summary>
          <div class="date-picker__menu" role="listbox" aria-label="选择日报日期">
            <button
              v-for="group in archive.dates"
              :key="group.date"
              type="button"
              role="option"
              :aria-selected="selectedDate === group.date"
              :class="{ 'date-picker__option--active': selectedDate === group.date }"
              @click="selectedDate = group.date"
            >
              <span>{{ group.date }}</span>
              <small>{{ group.articles.length }} 篇</small>
            </button>
          </div>
        </details>
        <span>{{ currentGroup?.articles.length ?? 0 }} 篇精选</span>
      </div>
    </header>

    <section v-if="archive.dates.length" class="facets" aria-label="聚合筛选">
      <div class="facet-row">
        <h2>来源</h2>
        <div class="facet-row__options">
          <button
            v-for="facet in sourceFacets"
            :key="facet.name"
            type="button"
            class="facet"
            :class="{ 'facet--source-active': selectedSource === facet.name }"
            :aria-pressed="selectedSource === facet.name"
            @click="selectedSource = facet.name"
          >
            {{ facet.name }} <span>{{ facet.count }}</span>
          </button>
        </div>
      </div>
      <div class="facet-row">
        <h2>关键词</h2>
        <div class="facet-row__options">
          <button
            v-for="facet in keywordFacets"
            :key="facet.name"
            type="button"
            class="facet"
            :class="{ 'facet--keyword-active': selectedKeyword === facet.name }"
            :aria-pressed="selectedKeyword === facet.name"
            @click="selectedKeyword = facet.name"
          >
            {{ facet.name }} <span>{{ facet.count }}</span>
          </button>
        </div>
      </div>
    </section>

    <label v-if="archive.dates.length" class="control control--sort">
      <span>排序</span>
      <select v-model="selectedSort">
        <option value="rank">按编辑排名</option>
        <option value="score">按综合分</option>
        <option value="title">按标题</option>
      </select>
    </label>

    <div v-if="archive.dates.length" class="result-line" aria-live="polite">
      <span>显示 {{ visibleArticles.length }} / {{ matchingArticles.length }} 篇</span>
      <span v-if="matchingArticles.length > 15">每期最多展示 15 篇</span>
    </div>

    <section v-if="visibleArticles.length" class="article-grid" aria-label="每日文章列表">
      <article v-for="article in visibleArticles" :key="article.candidateId" class="article-card">
        <div class="article-card__topline">
          <span class="article-card__rank" :class="{ 'article-card__rank--top': article.rank <= 5 }">
            <span v-if="article.rank <= 5" class="article-card__rank-arrow" aria-hidden="true">↑</span>
            NO. {{ String(article.rank).padStart(2, '0') }}
          </span>
          <span class="article-card__score" :aria-label="`综合分 ${article.score}`">{{ article.score.toFixed(1) }}</span>
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
          <h2><a :href="withBase(article.url)" class="article-card__link">{{ article.title }}</a></h2>
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
    </section>

    <section v-else class="empty-state">
      <strong>{{ archive.dates.length ? '没有匹配的文章' : '暂无日报内容' }}</strong>
      <span v-if="archive.dates.length">请调整来源或关键词筛选条件。</span>
    </section>
  </main>
</template>

<style scoped>
.daily-index {
  min-height: calc(100vh - var(--vp-nav-height));
  padding: 44px 32px 72px;
  background:
    radial-gradient(circle at 12% -10%, rgba(59, 130, 246, 0.18), transparent 28%),
    radial-gradient(circle at 92% 12%, rgba(45, 212, 191, 0.09), transparent 22%),
    #0f1117;
  color: #eef2f7;
}

.daily-header,
.facets,
.result-line,
.article-grid,
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
  margin-bottom: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #2b3341;
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

.daily-header__edition span {
  color: #8f99aa;
  font-size: 13px;
  font-weight: 800;
}

.control {
  display: grid;
  gap: 7px;
}

.control > span,
.facet-row h2 {
  margin: 0;
  color: #8f99aa;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.control select {
  width: 100%;
  height: 46px;
  border: 1px solid #303949;
  border-radius: 7px;
  outline: none;
  background: #191e28;
  color: #e8edf5;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  transition: border-color 140ms ease, box-shadow 140ms ease;
}

.control select { padding: 0 36px 0 13px; }

.control select:focus-visible {
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.18);
}

.facets {
  display: grid;
  gap: 12px;
  padding: 18px 0;
  border-bottom: 1px solid #242c39;
}

.control--sort {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin: 12px auto 0;
}

.control--sort select {
  width: 190px;
  height: 40px;
}

.date-picker {
  position: relative;
  z-index: 3;
  min-width: 164px;
}

.date-picker summary {
  list-style: none;
}

.date-picker summary::-webkit-details-marker {
  display: none;
}

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

.facet-row {
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.facet-row h2 { padding-top: 8px; }

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

.facet--source-active {
  border-color: #60a5fa;
  background: #3b82f6;
  color: #fff;
}

.facet--keyword-active {
  border-color: #5ee2b4;
  background: #4fd1a5;
  color: #06251a;
}

.facet--source-active span,
.facet--keyword-active span {
  color: currentColor;
  opacity: 0.72;
}

.result-line {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 14px;
  color: #8f99aa;
  font-size: 13px;
  font-weight: 800;
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
  border-top: 3px solid #f59e0b;
  border-radius: 9px;
  background: #191e28;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2);
  transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.article-card:hover {
  transform: translateY(-3px);
  border-color: #465269;
  border-top-color: #fbbf24;
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.28);
}

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
  color: #6db2ff;
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
  border: 1px solid rgba(245, 158, 11, 0.4);
  border-radius: 999px;
  color: #fbbf24;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  font-weight: 900;
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
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.27), transparent 55%), #111722;
}

.pseudo-cover::after {
  position: absolute;
  right: -8%;
  bottom: -45%;
  width: 58%;
  aspect-ratio: 1;
  border: 30px solid rgba(94, 226, 180, 0.16);
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

.article-card h2 {
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
  border: 1px solid rgba(96, 165, 250, 0.34);
  border-radius: 5px;
  background: rgba(59, 130, 246, 0.08);
  color: #8ec5ff;
  font-size: 11px;
  font-weight: 900;
  text-decoration: none;
}

.article-card__sources a:hover,
.article-card__sources a:focus-visible {
  border-color: #60a5fa;
  background: rgba(59, 130, 246, 0.18);
  color: #d1e8ff;
}

.empty-state {
  display: grid;
  min-height: 260px;
  place-content: center;
  gap: 5px;
  border: 1px dashed #344052;
  border-radius: 8px;
  color: #8f99aa;
  text-align: center;
}

.empty-state strong { color: #e8edf5; font-size: 20px; }

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
  .daily-index { padding: 28px 16px 48px; }
  .daily-header { align-items: start; flex-direction: column; gap: 20px; }
  .daily-header__edition { text-align: left; }
  .article-grid { grid-template-columns: 1fr; }
  .control--sort { grid-template-columns: 1fr; gap: 7px; }
  .daily-header__edition { align-items: start; }
  .date-picker__menu { right: auto; left: 0; }
  .facet-row { grid-template-columns: 1fr; }
  .facet-row h2 { padding-top: 0; }
  .result-line { align-items: start; flex-direction: column; gap: 3px; }
}

@media (prefers-reduced-motion: reduce) {
  .article-card, .article-card__preview img, .facet { transition: none; }
}
</style>
