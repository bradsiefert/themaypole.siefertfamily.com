<script setup lang="ts">
const route = useRoute()
const { data: doc } = await useAsyncData(`layout-${route.path}`, () => {
  return queryCollection('newsletters' as any).path(route.path).first()
})
</script>

<template>
  <hr class="divider thick">
  <article class="post" v-if="doc">
    <div class="d-flex post-details mb-4">
      <div class="me-5">Issue {{ (doc as any).issue }}</div>
      <div>{{ (doc as any).prettydate }}</div>
    </div>
    <slot />

    <div class="d-grid col-lg-3 col-md-4 mx-auto mt-5">
      <NuxtLink to="/archive" class="btn btn-lg btn-neutral mb-3">Read Archives</NuxtLink>
    </div>
  </article>
</template>