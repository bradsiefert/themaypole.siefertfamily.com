<script setup lang="ts">
const route = useRoute()

// Query the content - try multiple path variations to handle different path formats
const { data: page } = await useAsyncData(`content-${route.path}`, async () => {
  // Try exact path first
  let content = await queryCollection('newsletters' as any).path(route.path).first()
  
  // If not found, try path variations
  if (!content) {
    // Try with leading number if path doesn't have one (e.g., /an-addition -> /1.an-addition)
    if (!/^\d+\./.test(route.path)) {
      const pathWithNumber = route.path.replace(/^\//, '/1.')
      content = await queryCollection('newsletters' as any).path(pathWithNumber).first()
    }
    
    // Try without leading number if path has one (e.g., /1.an-addition -> /an-addition)
    if (!content && /^\/\d+\./.test(route.path)) {
      const pathWithoutNumber = route.path.replace(/^\/\d+\./, '/')
      content = await queryCollection('newsletters' as any).path(pathWithoutNumber).first()
    }
  }
  
  return content
})

if (!page.value) {
  throw createError({
    status: 404,
    message: 'Page Not Found'
  })
}

// Set the layout from frontmatter
const layout = (page.value as any).layout || 'default'
setPageLayout(layout)

// Set page meta from content
useHead({
  title: (page.value as any).title || 'The Maypole'
})
</script>

<template>
  <div class="post-content">
    <ContentRenderer :value="page" />
  </div>
</template>

