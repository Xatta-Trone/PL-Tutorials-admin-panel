<template>
  <div id="auth">
    <div class="row h-100">
      <div class="col-lg-5 col-12" v-if="tokenCreated">
        <div id="auth-left">
          <div class="auth-logo">
            <router-link to="/">PL Tutorials</router-link>
          </div>
          <h1 class="auth-title">Request successful</h1>
          <p class="auth-subtitle mb-5">
            Check your email and click on the link to reset your password.
            Expires in {{ expires || '' }} minutes.
          </p>

          <div class="text-center mt-5 text-lg fs-4">
            <p class="text-gray-600">
              Have your credentials ?

              <router-link class="font-bold" to="/login">Log in</router-link>
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-5 col-12" v-else>
        <div id="auth-left">
          <div class="auth-logo">
            <router-link to="/">PL Tutorials</router-link>
          </div>
          <h1 class="auth-title">Forgot Password</h1>
          <p class="auth-subtitle mb-5">
            Input your email and we will send you reset password link.
          </p>

          <form @submit.prevent="requestToken">
            <div class="form-group position-relative has-icon-left mb-4">
              <input
                type="text"
                class="form-control form-control-xl"
                placeholder="email"
                required
                v-model="form.email"
              />
              <div class="form-control-icon">
                <i class="bi bi-envelope"></i>
              </div>
            </div>

            <button
              :disabled="isSending"
              class="btn btn-primary btn-block btn-lg shadow-lg mt-5"
            >
              {{ btntxt }}
            </button>
          </form>

          <div class="text-center mt-5 text-lg fs-4">
            <p class="text-gray-600">
              Have your credentials ?

              <router-link class="font-bold" to="/login">Log in</router-link>
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-7 d-none d-lg-block">
        <div id="auth-right"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  auth: false,
  head: {
    title: 'Forget password',
    meta: [],
  },
  data() {
    return {
      user: null,
      btntxt: 'Send',
      form: {
        email: 'monzurul.ce.buet@gmail.com',
      },
      isSending: false,
      tokenCreated: false,
      expires: null,
    }
  },
  mounted() {
    // this.visitorId()
  },
  methods: {
    requestToken() {
      this.isSending = true
      this.btntxt = 'Sending.....'
      console.log('submit!')
      this.serverErrors = []

      let vm = this

      this.$axios
        .post('admin/request-password', this.form)
        .then((res) => {
          vm.isSending = false
          this.btntxt = 'Send'
          this.expires = res.data.expires
          this.tokenCreated = true
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          if (res.data.hasKey('status')) this.getmessage()
        })
        .catch((err) => {
          vm.isSending = false
          this.btntxt = 'Send'
          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          }

          if (err.response.data.hasOwnProperty('errors')) {
            this.serverErrors = Object.entries(err.response.data.errors)
          }
        })
    },
    visitorId() {
      // console.log(fingerprint.visitorId)
      if (fingerprint != undefined) {
        this.visitorid = fingerprint.visitorId
      }
    },
  },
}
</script>

<style scoped>
.auth-logo {
  color: #61d2b4 !important;
  font-size: x-large;
  font-weight: bold;
}
</style>
