<script setup lang="ts">
  import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
  const queryNewsletters: QueryBuilderParams = { path: '/', sort: { date: -1 } }
  definePageMeta({
    documentDriven: false
  })
  useHead({
    title: 'Past Newsletters'
  })
</script>

<template>
  <h1 class="font-size-1100 fw-bold">Past Newsletters</h1>
  <hr class="divider mb-5">

  <ContentList :query="queryNewsletters" v-slot="{ list }">
    <div class="row archive">
      <div class="col-12 mb-4" v-for="newsletter in list" :key="newsletter._path">
        <NuxtLink class="newsletter" :to="newsletter._path">
          <h2 class="font-size-1000 mb-1 fw-bold">{{ newsletter.title }}</h2>
        </NuxtLink>

        <div class="d-flex post-details">
          <div class="me-4">Issue {{ newsletter.issue }}</div>
          <div class="">{{ newsletter.prettydate }}</div>
        </div>
      </div>
    </div>
  </ContentList>
</template>