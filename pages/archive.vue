<script setup lang="ts">
  const { data: newsletters } = await useAsyncData('newsletters', () => {
    return queryCollection('newsletters' as any)
      .where('draft', '=', false)
      .order('postdate', 'DESC')
      .all()
  })

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

  <div class="row archive">
    <div class="col-12 mb-4" v-for="newsletter in newsletters" :key="(newsletter as any).path || (newsletter as any)._path">
      <NuxtLink class="newsletter" :to="(newsletter as any).path || (newsletter as any)._path">
        <h2 class="font-size-1000 mb-1 fw-bold">{{ (newsletter as any).title }}</h2>
      </NuxtLink>

      <div class="d-flex post-details">
        <div class="me-4">Issue {{ (newsletter as any).issue }}</div>
        <div class="">{{ (newsletter as any).prettydate }}</div>
      </div>
    </div>
  </div>
</template>