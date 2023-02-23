<template>
  <div class="row">
    <div class="col text-center">
      <h1 class="slogan mb-5 mx-sm-6">An <em>occasional</em> newsletter about the goings on around the Siefert family</h1>
    </div>
  </div>

  <div class="row text-center">
    <h2 class="font-size-700 text-center fw-bold mb-3">
      Give us your email and we’ll send you our updates. ❤️
    </h2>

    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form
        action="https://siefertfamily.us7.list-manage.com/subscribe/post?u=a7630d1d6791ce52dccabb2dc&amp;id=72a1272d4c&amp;f_id=003fbee2f0" method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_self"
      >
        <div id="mc_embed_signup_scroll"  class="row g-2 d-flex justify-content-center">
          <div class="col-md-6">
            <div class="form-floating">
              <input type="email" value="" placeholder="Your Email" name="EMAIL" class="required email form-control form-control-lg" id="mce-EMAIL" required>
              <label for="mce-EMAIL">Your Email</label>
              <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
            </div>
          </div>

          <div class="col-md-2 d-grid">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-xl btn-success mb-3">
          </div>

          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a7630d1d6791ce52dccabb2dc_72a1272d4c" tabindex="-1" value=""></div>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'a newletter from The Sieferts'
})
</script>