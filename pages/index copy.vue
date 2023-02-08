<template>
  <div class="row text-center">
    <h2 class="font-size-700 text-center fw-bold mb-3">
      Give us your email and we’ll send you our updates. ❤️
    </h2>
    <template>
      <mailchimp-subscribe
        url="https://siefertfamily.us7.list-manage.com/subscribe/post-json"
        user-id="a7630d1d6791ce52dccabb2dc"
        list-id="72a1272d4c"
        @error="onError"
        @success="onSuccess"
      >
        <template v-slot="{ subscribe, setEmail, error, success, loading }">
          <form @submit.prevent="subscribe">
            <div class="row g-2 mb-7 d-flex justify-content-center">
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="email" class="form-control form-control-lg" id="floatingInputValue" placeholder="email@domain.com" @input="setEmail($event.target.value)" />
                  <label for="floatingInputValue">Your Email</label>
                </div>
              </div>
              <div class="col-md-2 d-grid">
                <button type="submit" class="btn btn-xl btn-success mb-3">Submit</button>
              </div>
              <div v-if="error">
                <div v-html="error"></div>

              </div>
              <div v-if="success">Yay!</div>
              <div v-if="loading">Loading…</div>
            </div>
          </form>
        </template>
      </mailchimp-subscribe>
    </template>
  </div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  components: {
    MailchimpSubscribe,
  },
  methods: {
    onError() {
      // handle error
      console.log('Error!');
    },
    onSuccess() {
      // handle success
      console.log('Success!');
      window.location.href = "/success";
    },
  },
}
</script>