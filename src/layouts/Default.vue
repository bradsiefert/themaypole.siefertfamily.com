<template>
<div class="app">
  <main>
    <div class="container-xl wide-contain">
      <div class="row">
        <div class="col text-center">
          <g-link to="/"><img src="@/assets/images/logo.svg" class="img-fluid mb-7 px-3 px-sm-0" alt="Logo for The Maypole Newsletter"></g-link>
        </div>
      </div>
      
      <div class="row">
        <div class="col text-center">
          <h1 class="slogan mb-3 mx-sm-5">A quarterly* newsletter about the goings on at the Siefert & Linquist household.</h1>
          <p class="mb-0">*We’re going to try to make it <strong>quarterly</strong>, but it might be more like <em>occasionally</em>.</p>
        </div>
      </div>
      
      <hr class="divider">
      <slot/>
      <hr class="divider">
      
      <!-- <h3 class="font-size-700 fw-bold text-center mb-3">Wanna read our old newsletters?</h3>
      <div class="d-grid col-lg-4 col-md-5 mx-auto">
        <g-link to="/" class="btn btn-xl btn-success mb-3">Read Archives</g-link>
      </div> -->
    </div>
  </main>
  
  <div class="footer d-flex align-items-center">
    <div class="container-xl wide-contain">
    	<div class="row d-flex font-secondary fw-black font-size-500 lh-sm">
    		<div class="col-lg">
          <span class="text-uppercase">Made by:</span>&nbsp; <a target="_new" href="https://bradsiefert.com">Brad Siefert</a><br>
          <span class="text-uppercase">License:</span>&nbsp; <a target="_new" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0</a><br>
        </div>
        
        <div class="col-lg">
          <span class="text-uppercase">Illustrations by:</span>&nbsp; <a target="_new" href="https://www.caseyvstelstudio.com">Casey VanderStel</a><br>
          <span class="text-uppercase">Credits:</span>&nbsp; <a target="_blank" rel="noopener" title="Link to Gridsome" href="https://gridsome.org">Gridsome</a>, 
          <a target="_blank" rel="noopener" title="Link to Bootstrap" href="https://getbootstrap.com">Bootstrap</a>,
          <a target="_blank" rel="noopener" title="Link to Netlify" href="https://netlify.com">Netlify</a>, & <a target="_blank" rel="noopener" title="Link to Mailchimp" href="https://mailchimp.com">Mailchimp</a>
        </div>
      </div>
  	</div>
  </div>
</div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'A family newsletter from The Sieferts.',
      meta: [
        { property: "og:type", content: 'article' },
        { property: "og:title", content: "The Maypole" },
        { property: "og:description", content: "The Maypole, a family newsletter from The Sieferts." },
        { property: "og:url", content: "https://themaypole.siefertfamily.com/" },
        { property: "og:image", content: "https://themaypole.siefertfamily.com/sharing.jpg" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "The Maypole" },
        { name: "twitter:description", content: "The Maypole, a family newsletter from The Sieferts." },
        { name: "twitter:site", content: "@bksiefert" },
        { name: "twitter:creator", content: "@bksiefert" },
        { name: "twitter:image", content: "https://themaypole.siefertfamily.com/sharing.jpg" }
      ]
    };
  },
}
</script>