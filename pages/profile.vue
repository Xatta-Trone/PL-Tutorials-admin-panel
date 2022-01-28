
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          :title="'Edit profile (' + $auth.user.student_id + ')'"
        ></pageheader>
        <div class="card">
          <div class="card-content">
            <form class="form form-vertical">
              <div class="form-body">
                <div class="row">
                  <custom-form :validator="$v.form.name" attribute="name">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">Your name</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.name.$error }"
                            v-model="form.name"
                            @input="$v.form.name.$touch()"
                            name="name"
                            type="text"
                            class="form-control"
                            placeholder="name of faq"
                            id="first-name-icon"
                            readonly
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="name"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <custom-form :validator="$v.form.email" attribute="Email">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="email-id-icon">Email</label>

                        <div class="position-relative">
                          <input
                            v-model.trim="$v.form.email.$model"
                            @input="$v.form.email.$touch()"
                            :class="{ 'is-invalid ': $v.form.email.$error }"
                            name="email"
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            id="email-id-icon"
                            readonly
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-envelope"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="email"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <!-- <div class="col-12 d-flex justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-primary me-1 mb-1"
                      @click.prevent="submit"
                      :disabled="loading"
                    >
                      Update
                    </button>
                  </div> -->
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="card">
          <h3>Change password</h3>
          <custom-form :validator="$v.password.password" attribute="Password">
            <div class="col-12">
              <div class="form-group has-icon-left">
                <label for="first-name-icon">Password</label>
                <div class="position-relative">
                  <input
                    :class="{ 'is-invalid ': $v.password.password.$error }"
                    v-model="password.password"
                    @input="$v.password.password.$touch()"
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
                <custom-error :servererrors="serverErrors" chkkey="password" />
              </div>
            </div>
          </custom-form>

          <custom-form
            :validator="$v.password.password_confirmation"
            attribute="Password"
          >
            <div class="col-12">
              <div class="form-group has-icon-left">
                <label for="first-name-icon">Retype Password</label>
                <div class="position-relative">
                  <input
                    :class="{
                      'is-invalid ': $v.password.password_confirmation.$error,
                    }"
                    v-model="password.password_confirmation"
                    @input="$v.password.password_confirmation.$touch()"
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

          <div class="col-12 d-flex justify-content-end">
            <button
              type="submit"
              class="btn btn-primary me-1 mb-1"
              @click.prevent="resetPassword"
              :disabled="loading"
            >
              Change password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
import CustomForm from '~/components/vuelidate/CustomForm.vue'
import CustomError from '~/components/vuelidate/CustomError.vue'

export default {
  // middleware: 'guest',
  layout: 'app',
  components: { CustomForm, CustomError },

  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        student_id: '',
      },
      password: {
        password: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    removeError(i) {
      console.log(i)
      this.serverErrors.splice(i, 1)
    },

    getData() {
      let vm = this
      let id = vm.$nuxt.$route.params.id
      vm.loading = true
      console.log(id)
      vm.$axios
        .get('admin/me/')
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.form = res.data
        })
        .catch((err) => {
          vm.loading = false
          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          } else {
            this.getmessage('')
          }
        })
    },

    submit() {
      this.loading = true
      console.log('submit!')
      this.$v.$touch()
      this.serverErrors = []

      if (this.$v.$invalid) {
        this.loading = false
        return this.$toast.error('Filup the required fields!!')
      }
      let vm = this

      let id = vm.$nuxt.$route.params.id
      this.$axios
        .post('admin/faqs/' + id + '?_method=PUT', this.form)
        .then((res) => {
          vm.loading = false
          console.log(res)

          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.$v.$reset()
          this.$router.push('/faqs')
        })
        .catch((err) => {
          vm.loading = false
          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          }

          if (err.response.data.hasOwnProperty('errors')) {
            this.serverErrors = Object.entries(err.response.data.errors)
          }
        })
    },
    resetPassword() {
      this.loading = true

      this.$v.$touch()
      this.serverErrors = []

      // console.log(this.$route.query.email, this.$route.query.token)

      if (this.$v.$invalid) {
        this.loading = false
        return this.$toast.error('Filup the required fields!!')
      }

      let vm = this

      let data = { ...this.password, id: this.$auth.user.id }
      console.log(data)

      this.$axios
        .post('admin/reset-pass', data)
        .then((res) => {
          vm.loading = false
          this.password.password = ''
          this.password.password_confirmation = ''

          this.$v.$reset()
          // this.$router.push('/login')

          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          if (res.data.hasKey('status')) this.getmessage()
        })
        .catch((err) => {
          vm.loading = false

          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          }

          if (err.response.data.hasOwnProperty('errors')) {
            this.serverErrors = Object.entries(err.response.data.errors)
          }
        })
    },
  },
  mounted() {
    this.getData()
  },

  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
      },
    },
    password: {
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
