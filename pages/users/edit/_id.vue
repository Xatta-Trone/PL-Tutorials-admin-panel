
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        title="Edit user"
        urlto="/users"
        urltxt="Go back"
      ></pageheader>
      <div class="card">
        <div class="card-content">
          <form class="form form-vertical">
            <div class="form-body">
              <div class="row">
                <custom-form :validator="$v.form.name" attribute="Name">
                  <div class="col-12">
                    <div class="form-group has-icon-left">
                      <label for="first-name-icon">Name</label>
                      <div class="position-relative">
                        <input
                          :class="{ 'is-invalid ': $v.form.name.$error }"
                          v-model="form.name"
                          @input="$v.form.name.$touch()"
                          name="name"
                          type="text"
                          class="form-control"
                          placeholder="Student name"
                          id="first-name-icon"
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
                <custom-form
                  :validator="$v.form.student_id"
                  attribute="Student ID"
                >
                  <div class="col-12">
                    <div class="form-group has-icon-left">
                      <label for="mobile-id-icon">Student ID</label>
                      <div class="position-relative">
                        <input
                          readonly
                          v-model.trim="$v.form.student_id.$model"
                          @input="$v.form.student_id.$touch()"
                          :class="{ 'is-invalid ': $v.form.student_id.$error }"
                          name="studentID"
                          type="text"
                          class="form-control"
                          placeholder="Student id"
                          id="mobile-id-icon"
                        />
                        <div class="form-control-icon">
                          <i class="bi bi-person-badge"></i>
                        </div>
                      </div>
                      <custom-error
                        :servererrors="serverErrors"
                        chkkey="student_id"
                      />
                    </div>
                  </div>
                </custom-form>

                <custom-form
                  :validator="$v.form.user_letter"
                  attribute="User Letter"
                >
                  <div class="col-12">
                    <div class="form-group has-icon-left">
                      <label for="mobile-id-icon">User Letter</label>
                      <div class="position-relative">
                        <input
                          v-model.trim="$v.form.user_letter.$model"
                          @input="$v.form.user_letter.$touch()"
                          :class="{ 'is-invalid ': $v.form.user_letter.$error }"
                          name="userLetter"
                          type="text"
                          class="form-control"
                          placeholder="User Letter"
                          id="mobile-id-icon"
                        />
                        <div class="form-control-icon">
                          <i class="bi bi-person-badge"></i>
                        </div>
                      </div>
                      <custom-error
                        :servererrors="serverErrors"
                        chkkey="user_letter"
                      />
                    </div>
                  </div>
                </custom-form>

                <custom-form :validator="$v.form.status" attribute="Status">
                  <div class="col-12">
                    <fieldset class="form-group">
                      <label for="basicSelect">Status</label>
                      <select
                        class="form-select"
                        id="basicSelect"
                        v-model.trim="$v.form.status.$model"
                        @input="$v.form.status.$touch()"
                        :class="{ 'is-invalid ': $v.form.status.$error }"
                        name="status"
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </select>
                    </fieldset>
                  </div>
                </custom-form>

                <custom-form
                  :validator="$v.form.whitelisted"
                  attribute="whitelisted"
                >
                  <div class="col-12">
                    <fieldset class="form-group">
                      <label for="whitelisted">Whitelisted</label>
                      <select
                        class="form-select"
                        id="whitelisted"
                        v-model.trim="$v.form.whitelisted.$model"
                        @input="$v.form.whitelisted.$touch()"
                        :class="{ 'is-invalid ': $v.form.whitelisted.$error }"
                        name="whitelisted"
                      >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </fieldset>
                  </div>
                </custom-form>

                <div class="col-12 d-flex justify-content-end">
                  <button
                    type="submit"
                    class="btn btn-primary me-1 mb-1"
                    @click.prevent="submit"
                    :disabled="loading"
                  >
                    Update
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
const taken = (value) => {
  return true
}
export default {
  // async asyncData({ params }) {
  //   const id = params.id
  //   return { id }
  // },
  // middleware: 'guest',
  layout: 'app',
  components: { CustomForm, CustomError },

  data() {
    return {
      loading: false,
      form: {
        name: '',
        student_id: '',
        email: '',
        status: 1,
        whitelisted: 1,
        user_letter: '',
      },
    }
  },
  mounted() {
    console.log(this.$nuxt.$route.params.id)
    this.getData()
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
        .get('admin/users/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.form = res.data.user

          // if (res.data.hasKey('status')) this.getmessage()
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
        .put('admin/users/' + id, this.form)
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
      name: {
        required,
      },
      email: {
        required,
        email,
        taken,
      },
      student_id: {
        required,
        integer,
        maxLength: maxLength(7),
      },
      status: {
        required,
      },
      whitelisted: {
        required,
      },
      user_letter: {
        required,
      },
    },
  },
}
</script>
