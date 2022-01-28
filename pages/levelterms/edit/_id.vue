
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="levelterm edit"
          :urlto="'/levelterms'"
          urltxt="Go back"
        ></pageheader>
        <div class="card">
          <div class="card-content">
            <form class="form form-vertical">
              <div class="form-body">
                <div class="row">
                  <custom-form :validator="$v.form.name" attribute="name">
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="basicSelect">Select Level Term</label>
                        <select
                          class="form-select"
                          id="Department"
                          v-model.trim="form.name"
                          name="name"
                        >
                          <option value="">Select Level Term</option>
                          <option
                            v-for="(name, i) in names"
                            :key="i"
                            :value="name"
                          >
                            {{ name.name }}
                          </option>
                        </select>
                      </fieldset>
                      <custom-error
                        :servererrors="serverErrors"
                        chkkey="name"
                      />
                    </div>
                  </custom-form>

                  <custom-form
                    :validator="$v.form.department_id"
                    attribute="department_id"
                  >
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="basicSelect">Department</label>
                        <select
                          class="form-select"
                          id="Department"
                          v-model.trim="form.department_id"
                          name="department_id"
                        >
                          <option value="">Select department</option>
                          <option
                            v-for="(department, i) in departments"
                            :key="i"
                            :value="department.id"
                          >
                            {{ department.name }}
                          </option>
                        </select>
                      </fieldset>
                      <custom-error
                        :servererrors="serverErrors"
                        chkkey="department_id"
                      />
                    </div>
                  </custom-form>

                  <div class="col-12"></div>

                  <div class="col-12 d-flex justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-primary me-1 mb-1"
                      @click.prevent="submit"
                      :disabled="loading"
                    >
                      Submit
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
  props: ['post_type'],

  data() {
    return {
      loading: false,
      form: {
        name: '',
        department_id: '',
      },
      departments: [],
      names: [
        {
          name: 'Level 1 Term 1',
          slug: '1-1',
        },
        {
          name: 'Level 1 Term 2',
          slug: '1-2',
        },
        {
          name: 'Level 2 Term 1',
          slug: '2-1',
        },
        {
          name: 'Level 2 Term 2',
          slug: '2-2',
        },
        {
          name: 'Level 3 Term 1',
          slug: '3-1',
        },
        {
          name: 'Level 3 Term 2',
          slug: '3-2',
        },
        {
          name: 'Level 4 Term 1',
          slug: '4-1',
        },
        {
          name: 'Level 4 Term 2',
          slug: '4-2',
        },
      ],
    }
  },
  mounted() {
    this.getdepartments()
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
        .get('admin/levelterms/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.form = res.data.post

          let filtername = this.names.filter(
            (e) => e.slug == res.data.post.slug
          )
          vm.form.name = filtername[0]

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

      let data = {
        name: this.form.name.name,
        slug: this.form.name.slug,
        department_id: this.form.department_id,
      }

      let id = vm.$nuxt.$route.params.id
      this.$axios
        .post('admin/levelterms/' + id + '?_method=PUT', data)
        .then((res) => {
          vm.loading = false
          console.log(res)

          this.form.name = ''
          this.form.department_id = ''

          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.$v.$reset()
          this.$router.push('/levelterms')
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
    getdepartments() {
      this.loading = true
      this.$axios
        .get('admin/getdepartments')
        .then((res) => {
          this.loading = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.departments = res.data.data
        })
        .then(() => this.getData())
        .catch((err) => {
          this.loading = false
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

      department_id: {
        required,
      },
    },
  },
}
</script>
