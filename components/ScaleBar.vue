<script setup lang="ts">
defineProps({
  label: { type: String, default: '' },
  note: { type: String, default: '' },
  value: { type: String, default: '' },
  pct: { type: Number, default: 0 },
  /* 0-2, indexing the same three-tone red ramp the revenue split uses on the money slide. */
  tone: { type: Number, default: 1 },
})

const RAMP = ['#ff6b78', '#e60023', '#8a0015']
</script>

<template>
  <!-- `ep-` prefixed throughout: bare names like `.bar` or `.track` collide with UnoCSS. -->
  <div class="ep-bar">
    <div class="ep-bar-head">
      <span class="ep-bar-label">{{ label }}<span v-if="note" class="subtle ml-1">{{ note }}</span></span>
      <span class="ep-bar-value data" :style="{ color: RAMP[tone] }">{{ value }}</span>
    </div>
    <div class="ep-bar-track">
      <div class="ep-bar-fill" :style="{ width: `${pct}%`, background: RAMP[tone] }" />
    </div>
  </div>
</template>

<style scoped>
.ep-bar-head {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: .75rem; margin-bottom: .3rem;
}
.ep-bar-label { font-size: .8rem; font-weight: 600; }
.ep-bar-value { font-size: 1.05rem; font-weight: 600; }
/* 26px pill, matching the app's button radius. */
.ep-bar-track {
  height: 10px;
  border-radius: 26px;
  background: var(--ep-muted);
  overflow: hidden;
}
.ep-bar-fill {
  height: 100%;
  border-radius: 26px;
  transition: width .5s cubic-bezier(.22, 1, .36, 1);
}

@media (prefers-reduced-motion: reduce) {
  .ep-bar-fill { transition: none; }
}
</style>
