<template>
  <div id="auth">
    <div class="row h-100">
      <div class="col-lg-5 col-12" v-if="isSuccessful">
        <div id="auth-left">
          <div class="auth-logo">
            <router-link to="/">PL Tutorials</router-link>
          </div>
          <h1 class="auth-title">Request successful</h1>
          <p class="auth-subtitle mb-5">
            Password has been changed successfuly. please login using your new
            password from below.
          </p>

          <div class="text-center mt-5 text-lg fs-4">
            <p class="text-gray-600">
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
          <h1 class="auth-title">Reset password</h1>
          <p class="auth-subtitle mb-5">Please type your new password.</p>

          <form @submit.prevent="resetPassword">
            <custom-form :validator="$v.form.password" attribute="Password">
              <div class="col-12">
                <div class="form-group has-icon-left">
                  <label for="first-name-icon">Password</label>
                  <div class="position-relative">
                    <input
                      :class="{ 'is-invalid ': $v.form.password.$error }"
                      v-model="form.password"
                      @input="$v.form.password.$touch()"
                      name="password"
                      type="password"
                      class="form-control"
                      placeholder="Enter your password"
                      id="first-name-icon"
                    />
                    <div class="form-control-icon">
                      <i class="bi bi-person"></i>
                    </div>
                  </div>
                  <custom-error
                    :servererrors="serverErrors"
                    chkkey="password"
                  />
                </div>
              </div>
            </custom-form>

            <custom-form
              :validator="$v.form.password_confirmation"
              attribute="Password"
            >
              <div class="col-12">
                <div class="form-group has-icon-left">
                  <label for="first-name-icon">Retype Password</label>
                  <div class="position-relative">
                    <input
                      :class="{
                        'is-invalid ': $v.form.password_confirmation.$error,
                      }"
                      v-model="form.password_confirmation"
                      @input="$v.form.password_confirmation.$touch()"
                      name="password_confirmation"
                      type="password"
                      class="form-control"
                      placeholder="Enter your password"
                      id="first-name-icon"
                    />
                    <div class="form-control-icon">
                      <i class="bi bi-person"></i>
                    </div>
                  </div>
                  <custom-error
                    :servererrors="serverErrors"
                    chkkey="password_confirmation"
                  />
                </div>
              </div>
            </custom-form>

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
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
import CustomForm from '~/components/vuelidate/CustomForm.vue'
import CustomError from '~/components/vuelidate/CustomError.vue'

export default {
  auth: false,
  components: { CustomForm, CustomError },
  head: {
    title: 'Forget password',
    meta: [],
  },
  data() {
    return {
      user: null,
      btntxt: 'Reset',
      form: {
        password: '',
        password_confirmation: '',
        email: this.$route.query.email,
        token: this.$route.query.token,
      },
      isSending: false,
      isSuccessful: false,
    }
  },
  mounted() {
    // this.visitorId()
  },
  methods: {
    resetPassword() {
      this.isSending = true

      this.$v.$touch()
      this.serverErrors = []

      // console.log(this.$route.query.email, this.$route.query.token)

      if (this.$v.$invalid) {
        this.isSending = false
        return this.$toast.error('Filup the required fields!!')
      }

      this.btntxt = 'Resetting......'

      let vm = this

      this.$axios
        .post('admin/reset-password', this.form)
        .then((res) => {
          vm.isSending = false
          this.btntxt = 'Reset'
          this.isSuccessful = true

          this.form.password = ''
          this.form.password_confirmation = ''

          this.$v.$reset()
          // this.$router.push('/login')

          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          if (res.data.hasKey('status')) this.getmessage()
        })
        .catch((err) => {
          vm.isSending = false
          this.btntxt = 'Reset'
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

  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8),
      },
      password_confirmation: {
        sameAsPassword: sameAs('password'),
      },
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
