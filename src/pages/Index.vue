<template>
  <Layout>    
    <div class="row g-2 mb-7 d-flex justify-content-center">
      <h2 class="font-size-700 text-center fw-bold mb-2">Give us your email and we’ll give you our stories.</h2>
      <div class="col-md-6">
        <form>
          <div class="form-floating">
            <input type="email" class="form-control form-control-lg" id="floatingInputValue" placeholder="email@domain.com">
            <label for="floatingInputValue">Your Email</label>
          </div>
        </form>
      </div>
      <div class="col-md-2 d-grid">
        <g-link to="/" class="btn btn-xl btn-success mb-3">Submit</g-link>
      </div>
    </div>
    
    <div class="row mx-sm-6">
      <div class="col text-center">
        <img src="@/assets/images/residents-brad.png" class="avatar mb-2" width="80" alt="">
        <h3 class="font-size-900 fw-black font-secondary">Brad</h3>
      </div>
      <div class="col text-center">
        <img src="@/assets/images/residents-nic.png" class="avatar mb-2" width="80" alt="">
        <h3 class="font-size-900 fw-black font-secondary">Nic</h3>
      </div>
      <div class="col text-center">
        <img src="@/assets/images/residents-steph.png" class="avatar mb-2" width="80" alt="">
        <h3 class="font-size-900 fw-black font-secondary">Steph</h3>
      </div>
      <div class="col text-center">
        <img src="@/assets/images/residents-lydia.png" class="avatar mb-2" width="80" alt="">
        <h3 class="font-size-900 fw-black font-secondary">Lydia</h3>
      </div>
      <div class="col text-center">
        <img src="@/assets/images/residents-ringle.png" class="avatar mb-2" width="80" alt="">
        <h3 class="font-size-900 fw-black font-secondary">Ringle</h3>
      </div>
    </div>
    
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'The Maypole | A family newsletter from The Sieferts.'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
