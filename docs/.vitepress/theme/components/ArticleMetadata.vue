<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const isArticle = computed(() => Boolean(frontmatter.value.candidateId))
</script>

<template>
  <div
    v-if="isArticle"
    hidden
    data-article-contract="true"
    :data-candidate-id="frontmatter.candidateId"
    :data-date="frontmatter.date"
    :data-category="frontmatter.category"
    :data-group-rank="frontmatter.groupRank ?? frontmatter.rank"
    :data-group-score="frontmatter.groupScore ?? frontmatter.score"
    :data-score-scale="frontmatter.scoreScale"
    :data-rating-track="frontmatter.ratingTrack"
  />
</template>
