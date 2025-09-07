<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ date?: string }>()
// 支援 YYYY-MM-DD 或 ISO 字串；無值則不顯示
const display = computed(() => {
  if (!props.date) return ''
  const d = new Date(props.date)
  if (Number.isNaN(d.getTime())) return String(props.date)
  // 依你偏好可換成 toLocaleDateString('zh-TW')
  return d.toISOString().slice(0, 10)  // 2025-09-07
})
</script>

<template>
  <div v-if="display" class="doc-date">🗓️ {{ display }}</div>
</template>

<style scoped>
.doc-date{
  text-align: right;
  font-size: .9rem;
  color: var(--vp-c-text-2);
  margin: .25rem 0 1rem;
}
</style>