---
layout: page
title: 每日精选
---

<script setup>
import { data as archive } from './.vitepress/data/daily.data'
</script>

<DailyIndexPage :archive="archive" />
