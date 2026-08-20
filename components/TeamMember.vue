<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  name: { type: String, default: '' },
  role: { type: String, default: 'Team member' },
  photo: { type: String, default: '' },
})

const failed = ref(false)

/** Initials fallback: first letter of each name word, skipping the honorific. */
const initials = computed(() => {
  const words = props.name
    .split(/\s+/)
    .filter((w) => w && !/^(dr|mr|ms|mrs)\.?$/i.test(w))
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase()
})

const showPhoto = computed(() => Boolean(props.photo) && !failed.value)
</script>

<template>
  <div class="member">
    <div class="ep-avatar">
      <template v-if="showPhoto">
        <!-- Base copy is desaturated; the colour copy on top is masked to a centred
             radial gradient, so only the background outside the face loses its colour. -->
        <img class="ep-base" :src="photo" :alt="name" @error="failed = true" />
        <img class="ep-focus" :src="photo" alt="" aria-hidden="true" />
      </template>
      <span v-else class="ep-initials data">{{ initials }}</span>
    </div>
    <div class="body">
      <div class="n">{{ name }}</div>
      <div class="r">{{ role }}</div>
    </div>
  </div>
</template>

<style scoped>
.member {
  display: flex; gap: .85rem; align-items: center;
  padding: .55rem .85rem;
  border-radius: 18px;
  background: var(--ep-bg);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ep-fg) 10%, transparent);
}
/* Prefixed to dodge UnoCSS's `avatar`-adjacent utilities; see CLAUDE.md. */
.ep-avatar {
  width: 3.25rem; height: 3.25rem; flex: none;
  border-radius: 999px; overflow: hidden;
  background: var(--ep-muted);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ep-fg) 8%, transparent);
  display: flex; align-items: center; justify-content: center;
}
.ep-avatar { position: relative; }
.ep-avatar img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center; display: block;
}
.ep-base { filter: grayscale(1) contrast(.92) brightness(1.06); }
.ep-focus {
  -webkit-mask-image: radial-gradient(circle at 50% 42%, #000 30%, rgba(0,0,0,0) 46%);
  mask-image: radial-gradient(circle at 50% 42%, #000 30%, rgba(0,0,0,0) 46%);
}
.ep-initials { font-size: .95rem; color: var(--ep-muted-fg); letter-spacing: .02em; }
.n { font-weight: 600; font-size: .95rem; line-height: 1.25; }
.r { font-size: .72rem; color: var(--ep-primary); margin-top: .1rem; }
</style>
