<template>
  <div class="container-xl wide-contain">
    <header class="row">
      <div class="col text-center">
        <NuxtLink to="/"><img src="@/assets/images/logo.svg" class="img-fluid mb-7 px-3 px-sm-0" alt="Logo for The Maypole Newsletter"></NuxtLink>
      </div>
    </header>

    <main>
      <NuxtPage/>

      <hr class="divider">
      <div class="row mx-sm-6">
        <div class="col-6 col-md text-center">
          <img src="@/assets/images/residents-brad.png" class="avatar mb-2" width="80" height="80" alt="Illustration avatar for Brad">
          <h3 class="font-size-900 fw-black font-secondary mb-6 mb-sm-0">Brad</h3>
        </div>
        <div class="col-6 col-md text-center">
          <img src="@/assets/images/residents-lydia.png" class="avatar mb-2" width="80" height="80" alt="Illustration avatar for Lydia">
          <h3 class="font-size-900 fw-black font-secondary mb-6 mb-sm-0">Lydia</h3>
        </div>
        <div class="col-12 col-md text-center">
          <img src="@/assets/images/residents-ringle.png" class="avatar mb-2" width="80" height="80" alt="Illustration avatar for our dog Coco">
          <h3 class="font-size-900 fw-black font-secondary mb-6 mb-sm-0">Coco</h3>
        </div>
      </div>

      <hr class="divider">
    </main>
  </div>

  <footer class="footer d-flex align-items-center">
    <div class="container-xl wide-contain">
      <div class="row d-flex font-secondary fw-black lh-sm">
        <div class="col-lg">
          <span class="text-uppercase">Made by:</span>&nbsp; <a target="_new" href="https://bradsiefert.com">Brad Siefert</a><br>
          <span class="text-uppercase">License:</span>&nbsp; <a target="_new" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0</a><br>
        </div>

        <div class="col-lg">
          <span class="text-uppercase">Illustrations by:</span>&nbsp; <a target="_new" href="https://www.caseyvstelstudio.com">Casey VanderStel</a><br>
          <span class="text-uppercase">Credits:</span>&nbsp; <a target="_blank" rel="noopener" title="Link to Gridsome" href="https://nuxt.com">Nuxt 3</a>,
          <a target="_blank" rel="noopener" title="Link to Bootstrap" href="https://getbootstrap.com">Bootstrap</a>,
          <a target="_blank" rel="noopener" title="Link to Netlify" href="https://netlify.com">Netlify</a>, & <a target="_blank" rel="noopener" title="Link to Mailchimp" href="https://mailchimp.com">Mailchimp</a>
        </div>
      </div>
    </div>
  </footer>
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