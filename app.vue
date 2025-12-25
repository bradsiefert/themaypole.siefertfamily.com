<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `The Maypole, ${titleChunk}`: 'a newletter from The Sieferts';
    }
  }),
  useServerSeoMeta({
    description: 'An occasional newsletter about the goings on around the Siefert family.',
    ogImage: 'https://themaypole.siefertfamily.com/sharing.png',
    ogTitle: 'The Maypole, a newletter from The Sieferts',
    ogDescription: 'An occasional newsletter about the goings on around the Siefert family.',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://themaypole.siefertfamily.com/sharing.png',
    twitterTitle: 'The Maypole, a newletter from The Sieferts',
    twitterDescription: 'An occasional newsletter about the goings on around the Siefert family.',
  })
</script>