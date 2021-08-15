
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        title="Add User"
        urlto="/userdatas"
        urltxt="Go back"
      ></pageheader>
      <div class="card">
        <div class="card-content">
          <form class="form form-vertical">
            <div class="form-body">
              <div class="row">
                <p>
                  Just enter the email of
                  <span class="badge bg-primary">{{
                    $nuxt.$route.query.name
                  }}</span>
                  ||

                  <span class="badge bg-primary">{{
                    $nuxt.$route.query.studentid
                  }}</span>
                </p>
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

                <div class="col-12 d-flex justify-content-end">
                  <button
                    type="submit"
                    class="btn btn-primary me-1 mb-1"
                    @click.prevent="submit"
                    :disabled="loading"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, integer, email, maxLength } from 'vuelidate/lib/validators'
import CustomForm from '~/components/vuelidate/CustomForm.vue'

import CustomError from '~/components/vuelidate/CustomError.vue'

export default {
  layout: 'app',
  components: { CustomForm, CustomError },

  data() {
    return {
      loading: false,
      form: {
        email: '',
      },
    }
  },
  mounted() {
    console.log(this.$nuxt.$route)
    // this.getData()
  },

  methods: {
    removeError(i) {
      console.log(i)
      this.serverErrors.splice(i, 1)
    },

    submit() {
      console.log('submit!')
      this.$v.$touch()
      this.serverErrors = []

      if (this.$v.$invalid) {
        return this.$toast.error('Filup the required fields!!')
      }
      let vm = this
      let id = vm.$nuxt.$route.params.id
      vm.loading = true
      this.$axios
        .put('admin/userdatas/' + id, this.form)
        .then((res) => {
          vm.loading = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.$v.$reset()
          this.$router.push('/users')
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

  validations: {
    form: {
      email: {
        required,
        email,
      },
    },
  },
}
</script>
