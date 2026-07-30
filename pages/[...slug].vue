<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(`content-${route.path}`, () => {
  return queryCollection('newsletters').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

useHead({
  title: page.value.title || 'The Maypole'
})
</script>

<template>
  <hr class="divider thick">
  <article class="post">
    <div class="d-flex post-details mb-4">
      <div class="me-5">Issue {{ page.issue }}</div>
      <div>{{ page.prettydate }}</div>
    </div>

    <div class="post-content">
      <ContentRenderer :value="page" />
    </div>

    <div class="d-grid col-lg-3 col-md-4 mx-auto mt-5">
      <NuxtLink to="/archive" class="btn btn-lg btn-neutral mb-3">Read Archives</NuxtLink>
    </div>
  </article>
</template>
