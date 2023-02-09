<template>
  <hr class="divider thick">
  <article class="post">

    <ContentDoc v-slot="{ doc }">
      <div class="d-flex post-details mb-4">
        <div class="me-5">Issue {{ doc.issue }}</div>
        <div>{{ doc.prettydate }}</div>
      </div>
      <ContentRenderer :value="doc" />
    </ContentDoc>

    <div class="d-grid col-lg-3 col-md-4 mx-auto mt-5">
      <NuxtLink to="/archive" class="btn btn-lg btn-success mb-3">Read Archives</NuxtLink>
    </div>

  </article>
</template>