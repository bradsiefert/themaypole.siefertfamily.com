<template>
<div class="app">
  <main>
    <div class="container-xl wide-contain">
      <div class="row">
        <div class="col text-center">
          <img src="@/assets/images/logo.svg" class="img-fluid mb-7 px-3 px-sm-0" alt="Logo for The Maypole Newsletter">
        </div>
      </div>
      
      <div class="row">
        <div class="col text-center">
          <h1 class="slogan mb-3">A quarterly* newsletter about the goings on at the Siefert & Linquist household.</h1>
          <p class="mb-0">*We’re going to try to make it <strong>quarterly</strong>, but it might be more like <em>occasionally</em>.</p>
        </div>
      </div>
      
      <hr class="divider">
      <slot/>
      <hr class="divider">
      
      <h3 class="font-size-700 fw-bold text-center mb-3">Wanna read our old newsletters?</h3>
      <div class="d-grid col-lg-4 col-md-5 mx-auto">
        <g-link to="/" class="btn btn-xl btn-success mb-3">Read Archives</g-link>
      </div>
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
          <a target="_blank" rel="noopener" title="Link to Netlify" href="https://netlify.com">Netlify</a>, & ConvertKit<br>
        </div>
      </div>
  	</div>
  </div>
</div>
</template>