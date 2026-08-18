<script setup lang="ts">
// Mirrors eventpix/frontend/components/landing/face-box.tsx — the only
// match-percentage UI that actually ships. Four white L-shaped corner ticks over
// a photo, with an optional score chip.
//
// White, not brand red: red rectangles over red-heavy event photography read as
// an error state. (That reasoning is the frontend component's own.)
defineProps({
  conf: { type: Number, default: 0 },
  showScore: { type: Boolean, default: false },
  // percentages, positioning the box over its parent
  top: { type: String, default: '20%' },
  left: { type: String, default: '20%' },
  width: { type: String, default: '30%' },
  height: { type: String, default: '34%' },
})
</script>

<template>
  <div class="face-box" :style="{ top, left, width, height }">
    <span class="tick tl" />
    <span class="tick tr" />
    <span class="tick bl" />
    <span class="tick br" />
    <span v-if="showScore" class="score data">{{ conf }}%</span>
  </div>
</template>

<style scoped>
.face-box { position: absolute; pointer-events: none; }

.tick {
  position: absolute;
  width: 12px; height: 12px;
  border-color: rgba(255, 255, 255, .9);
  border-style: solid;
  border-width: 0;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, .45));
}
.tl { top: 0; left: 0; border-top-width: 2px; border-left-width: 2px; }
.tr { top: 0; right: 0; border-top-width: 2px; border-right-width: 2px; }
.bl { bottom: 0; left: 0; border-bottom-width: 2px; border-left-width: 2px; }
.br { bottom: 0; right: 0; border-bottom-width: 2px; border-right-width: 2px; }

.score {
  position: absolute;
  left: 0; bottom: -1.35rem;
  border-radius: 3px;
  background: var(--ep-primary);
  color: #fff;
  padding: .1rem .35rem;
  font-size: .6rem;
  font-weight: 600;
  line-height: 1.3;
}
</style>
