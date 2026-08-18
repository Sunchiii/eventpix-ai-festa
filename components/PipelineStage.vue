<script setup lang="ts">
defineProps({
  n: { type: [Number, String], default: '' },
  title: { type: String, default: '' },
  detail: { type: String, default: '' },
  shipped: { type: Boolean, default: true },
})
</script>

<template>
  <div class="stage" :class="{ pending: !shipped }">
    <div class="n data">{{ n }}</div>
    <div class="body">
      <div class="t">{{ title }}<slot name="title" /></div>
      <div class="d">{{ detail }}<slot /></div>
    </div>
  </div>
</template>

<style scoped>
.stage {
  display: flex; gap: .75rem; align-items: flex-start;
  padding: .6rem .85rem;
  border-radius: 12px;
  background: var(--ep-primary-soft);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ep-primary) 18%, transparent);
}
.stage.pending {
  background: var(--ep-muted);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ep-fg) 8%, transparent);
}
.n {
  font-size: .72rem; color: var(--ep-primary);
  padding-top: .2rem; min-width: 1.4em;
}
.stage.pending .n { color: var(--ep-muted-fg); }
.t { font-weight: 600; font-size: .95rem; line-height: 1.25; }
.d { font-size: .78rem; color: var(--ep-muted-fg); line-height: 1.45; margin-top: .15rem; }
</style>
