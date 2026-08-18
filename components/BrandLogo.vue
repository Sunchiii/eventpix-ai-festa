<script setup lang="ts">
// Mirrors eventpix/frontend/components/brand/brand-logo.tsx. The logo asset is a
// single-colour silhouette, so it is painted with a CSS mask — that lets the
// aperture-"P" mark inherit the brand colour (red on light, white on dark)
// instead of being locked to the file's black fill.
defineProps({
  size: { type: Number, default: 28 },
  color: { type: String, default: 'var(--ep-primary)' },
  showMark: { type: Boolean, default: true },
  wordmark: { type: Boolean, default: true },
})
</script>

<template>
  <span class="lockup" :style="{ gap: `${size * 0.28}px` }">
    <span
      v-if="showMark"
      class="mark"
      :style="{ width: `${size}px`, height: `${size}px`, backgroundColor: color }"
    />
    <span v-if="wordmark" class="word" :style="{ fontSize: `${size * 0.95}px` }">EventPix</span>
  </span>
</template>

<style scoped>
.lockup { display: inline-flex; align-items: center; }
.mark {
  display: inline-block;
  flex-shrink: 0;
  -webkit-mask-image: url(/eventpix-logo.svg);
  mask-image: url(/eventpix-logo.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
.word { font-weight: 700; letter-spacing: -0.025em; color: var(--ep-fg); line-height: 1; }
</style>
