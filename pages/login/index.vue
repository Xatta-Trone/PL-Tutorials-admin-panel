<template>
  <div id="auth">
    <div class="row h-100">
      <div class="col-lg-5 col-12">
        <div id="auth-left">
          <div class="auth-logo">
            <router-link to="/">PL Tutorials</router-link>
          </div>
          <h1 class="auth-title">Log in.</h1>

          <form @submit.prevent="userLogin">
            <div class="form-group position-relative has-icon-left mb-4">
              <input
                type="text"
                class="form-control form-control-xl"
                placeholder="email"
                v-model="login.email"
              />
              <div class="form-control-icon">
                <i class="bi bi-envelope"></i>
              </div>
            </div>
            <div class="form-group position-relative has-icon-left mb-4">
              <input
                type="password"
                class="form-control form-control-xl"
                placeholder="Password"
                v-model="login.password"
              />
              <div class="form-control-icon">
                <i class="bi bi-shield-lock"></i>
              </div>
            </div>

            <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">
              {{ btntxt }}
            </button>
          </form>
          <div class="text-center mt-5 text-lg fs-4">
            <p class="text-gray-600">
              Don't remember your password ?

              <router-link class="font-bold" to="/auth/forgot-password"
                >Reset password</router-link
              >
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
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [],
  },
  data() {
    return {
      user: null,
      btntxt: 'Log in',
      login: {
        email: 'monzurul.ce.buet@gmail.com',
        password: 'password',
        visitorid: '',
      },
    }
  },
  mounted() {
    // this.visitorId()
  },
  methods: {
    async userLogin() {
      try {
        this.btntxt = 'Logging in.....'
        let response = await this.$auth
          .loginWith('laravelSanctum', {
            data: this.login,
          })
          .then((res) => {
            this.btntxt = 'Login successful'
            console.log('asdfsf')
            this.$axios
              .get('/admin/permissions')
              .then((res) => this.$gates.setPermissions(res.data))
              // .then((res) => this.$forceUpdate())
              .catch((err) => console.log(err))
          })
      } catch (err) {
        this.btntxt = 'Log in'
        console.log(err)

        if ((err.response.status = 401)) {
          this.getmessage(err.response.data.message)
        } else {
          this.getmessage('Something went wrong')
        }
      }
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
