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
              Log in
            </button>
          </form>
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
  layout: 'auth',
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [],
  },
  data() {
    return {
      user: null,
      login: {
        email: 'monzurul.ce.buet@gmail.com',
        password: '123456',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('laravelSanctum', {
          data: this.login,
        })

        // if (response.data.message == 'ACCOUNT_NOT_ACTIVE') {
        //   this.getmessage(response.data.message)
        // }
        // console.log(response.data)
      } catch (err) {
        console.log(err)

        if ((err.response.status = 401)) {
          this.getmessage(err.response.data.message)
        } else {
          this.getmessage('Something went wrong')
        }
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
