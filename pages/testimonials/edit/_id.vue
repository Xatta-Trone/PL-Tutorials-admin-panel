
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="testimonials Edit"
          :urlto="'/testimonials'"
          urltxt="Go back"
        ></pageheader>
        <div class="card p-3">
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
                            placeholder="Person name"
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

                  <custom-form
                    :validator="$v.form.dept_batch"
                    attribute="dept_batch"
                  >
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-dept_batch-icon"
                          >Department batch (i.e. CE'15)</label
                        >
                        <div class="position-relative">
                          <input
                            :class="{
                              'is-invalid ': $v.form.dept_batch.$error,
                            }"
                            v-model="form.dept_batch"
                            @input="$v.form.dept_batch.$touch()"
                            name="dept_batch"
                            type="text"
                            class="form-control"
                            placeholder="Person dept_batch"
                            id="first-dept_batch-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="dept_batch"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <custom-form :validator="$v.form.message" attribute="message">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="first-message-icon">Testimonial msg</label>
                        <div class="position-relative">
                          <textarea
                            name="message"
                            :class="{
                              'is-invalid ': $v.form.message.$error,
                            }"
                            v-model="form.message"
                            @input="$v.form.message.$touch()"
                            cols="30"
                            rows="5"
                            class="form-control"
                            placeholder="Write testimonial"
                            id="first-message-icon"
                          ></textarea>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="message"
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
                          <option value="1" selected="">Active</option>
                          <option value="0">Inactive</option>
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
  </div>
</template>

<script>
import { required, url } from 'vuelidate/lib/validators'
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
        dept_batch: '',
        message: '',
        status: '1',
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
        .get('admin/testimonials/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.form = res.data.post

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
        .post('admin/testimonials/' + id + '?_method=PUT', this.form)
        .then((res) => {
          vm.loading = false
          console.log(res)

          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.$v.$reset()
          this.$router.push('/testimonials')
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
      dept_batch: {
        required,
      },
      message: {
        required,
      },
      status: {
        required,
      },
    },
  },
}
</script>
