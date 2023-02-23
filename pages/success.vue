<template>
  <div class="row text-center mb-5">
    <h1 class="text-center fw-bold">Success</h1>
    <p class="font-size-600">You're all signed up! You'll get the next newsletter we send out.</p>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    documentDriven: false
  })
  useHead({
    title: 'Success'
  })
</script>