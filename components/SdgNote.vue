<script setup lang="ts">
/*
 * One official UN Sustainable Development Goal tile plus a single line of our own copy.
 * The artwork in public/sdg/ is the UN's flat goal icon, scaled and nothing else — per the
 * UN's SDG communications guidelines it must not be recoloured, cropped or rotated, and it
 * carries no UN emblem. Do not restyle the <img>; style the line instead.
 *
 * Class names are ep-prefixed: a bare .tile or .note would collide with a UnoCSS utility
 * (see CLAUDE.md — .ring once drew a box round every confidence ring).
 */
const props = defineProps({
  goal: { type: [Number, String], required: true },
  side: { type: String, default: 'left' },   // which side of the line the tile sits on
  size: { type: Number, default: 38 },       // px; below ~30 the number stops reading
})

const NAMES: Record<string, string> = {
  '3': 'UN Sustainable Development Goal 3 — Good Health and Well-being',
  '8': 'UN Sustainable Development Goal 8 — Decent Work and Economic Growth',
  '9': 'UN Sustainable Development Goal 9 — Industry, Innovation and Infrastructure',
}

const key = String(Number(props.goal))
const src = `/sdg/sdg-${key.padStart(2, '0')}.png`
const alt = NAMES[key] ?? `UN Sustainable Development Goal ${key}`
</script>

<template>
  <div class="ep-sdg" :class="{ 'ep-sdg-right': side === 'right' }">
    <img :src="src" :alt="alt" :style="{ width: size + 'px', height: size + 'px' }" />
    <div class="ep-sdg-line"><slot /></div>
  </div>
</template>

<style scoped>
.ep-sdg {
  display: flex;
  align-items: center;
  gap: .5rem;
}
.ep-sdg-right { flex-direction: row-reverse; }
.ep-sdg img {
  flex: none;
  border-radius: 3px;
  display: block;
}
.ep-sdg-line {
  font-size: 11px;
  line-height: 1.3;
  color: var(--ep-muted-fg);
}
</style>
