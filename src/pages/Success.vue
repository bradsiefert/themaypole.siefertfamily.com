<template>
  <Layout>
    <div class="row text-center mb-5">
      <h2 class="font-size-800 text-center fw-bold">Success.</h2>
      <p class="font-size-600">You're all signed up! You'll get our next newsletter we send out.</p>
    </div>
    
    <div class="row mx-sm-6">
      <div class="col text-center">
        <img src="@/assets/images/residents-brad.png" class="avatar mb-2" width="80" height="80" alt="Illustration avatar for Brad">
        <h3 class="font-size-900 fw-black font-secondary">Brad</h3>
      </div>
      <div class="col text-center">
        <img src="@/assets/images/residents-nic.png" class="avatar mb-2" width="80" height="80" alt="Illustration avatar for Nic">
        <h3 class="font-size-900 fw-black font-secondary">Nic</h3>
      </div>
      <div class="col text-center">
        <img src="@/assets/images/residents-steph.png" class="avatar mb-2" width="80" height="80" alt="Illustration avatar for Steph">
        <h3 class="font-size-900 fw-black font-secondary">Steph</h3>
      </div>
      <div class="col text-center">
        <img src="@/assets/images/residents-lydia.png" class="avatar mb-2" width="80" height="80" alt="Illustration avatar for Lydia">
        <h3 class="font-size-900 fw-black font-secondary">Lydia</h3>
      </div>
      <div class="col text-center">
        <img src="@/assets/images/residents-ringle.png" class="avatar mb-2" width="80" height="80" alt="Illustration avatar for Ringle">
        <h3 class="font-size-900 fw-black font-secondary">Ringle</h3>
      </div>
    </div>
    
  </Layout>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  metaInfo: {
    title: 'A family newsletter from The Sieferts.'
  },
  components: {
    MailchimpSubscribe,
  },
  methods: {
    onError() {
      // handle error
      // console.log('Error!');
    },
    onSuccess() {
      // handle success
      // console.log('Success!');
      window.location.href = "/success";
    },
  },
}
</script>