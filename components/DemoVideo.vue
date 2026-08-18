<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

defineProps({
  src: { type: String, required: true },
  poster: { type: String, default: '' },
})

const el = ref<HTMLVideoElement | null>(null)

onSlideEnter(() => {
  const v = el.value
  if (!v) return
  v.currentTime = 0
  v.play().catch(() => {})
})

onSlideLeave(() => el.value?.pause())
</script>

<template>
  <video
    ref="el"
    :src="src"
    :poster="poster || undefined"
    muted
    playsinline
    loop
    controls
    class="demo"
  />
</template>

<style scoped>
.demo {
  display: block;
  max-width: 100%;
  border-radius: 12px;
  /* Matches the app's phone-frame treatment. */
  box-shadow:
    inset 0 0 0 1px color-mix(in srgb, var(--ep-fg) 10%, transparent),
    0 24px 60px -20px rgba(0, 0, 0, .55);
  background: var(--ep-muted);
}
</style>
