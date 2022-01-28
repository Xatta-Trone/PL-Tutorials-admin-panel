
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="Course add"
          :urlto="'/courses'"
          urltxt="Go back"
        ></pageheader>
        <div class="card">
          <div class="card-content">
            <form class="form form-vertical">
              <div class="form-body">
                <div class="row">
                  <custom-form
                    :validator="$v.form.course_name"
                    attribute="Course name"
                  >
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">Course Name</label>
                        <div class="position-relative">
                          <input
                            :class="{
                              'is-invalid ': $v.form.course_name.$error,
                            }"
                            v-model="form.course_name"
                            @input="$v.form.course_name.$touch()"
                            name="course_name"
                            type="text"
                            class="form-control"
                            placeholder="Enter Course Name"
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="course_name"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <custom-form :validator="$v.form.slug" attribute="Slug">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon"
                          >Course Code (i.e. ce101 eee310)</label
                        >
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.slug.$error }"
                            v-model="form.slug"
                            @input="$v.form.slug.$touch()"
                            name="slug"
                            type="text"
                            class="form-control"
                            placeholder="Course Code "
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="slug"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <custom-form
                    :validator="$v.form.department_id"
                    attribute="Department_id"
                  >
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="department_id">Department_id</label>
                        <select
                          class="form-select"
                          id="department_id"
                          v-model.trim="form.department_id"
                          name="department_id"
                          @change="getlevelterms"
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

                  <custom-form
                    :validator="$v.form.department_id"
                    attribute="Department_id"
                  >
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="basicSelect">Level Term</label>
                        <select
                          class="form-select"
                          id="Level Term"
                          v-model.trim="form.level_term_id"
                          name="level_term_id"
                        >
                          <option value="">Select Level Term</option>
                          <option
                            v-for="(levelterm, i) in levelterms"
                            :key="i"
                            :value="levelterm.id"
                          >
                            {{ levelterm.name }}
                          </option>
                        </select>
                      </fieldset>
                      <custom-error
                        :servererrors="serverErrors"
                        chkkey="level_term_id"
                      />
                    </div>
                  </custom-form>

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

  data() {
    return {
      loading: false,
      form: {
        course_name: '',
        slug: '',
        department_id: '',
        level_term_id: '',
      },
      departments: [],
      levelterms: [],
    }
  },
  methods: {
    removeError(i) {
      console.log(i)
      this.serverErrors.splice(i, 1)
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

      var bodyFormData = new FormData()

      for (const key in this.form) {
        // console.log(this.form[key], this.form[key] === '')
        if (this.form[key] !== '') {
          bodyFormData.append(key, this.form[key])
        }
      }

      console.log(bodyFormData)

      this.$axios
        .post('admin/courses', bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          vm.loading = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.form.course_name = ''
          this.form.slug = ''
          this.form.department_id = ''
          this.form.level_term_id = ''

          this.$v.$reset()

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

    getdepartments() {
      this.$axios
        .get('admin/getdepartments')
        .then((res) => {
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.departments = res.data.data
        })
        .catch((err) => {
          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          }

          if (err.response.data.hasOwnProperty('errors')) {
            this.serverErrors = Object.entries(err.response.data.errors)
          }
        })
    },
    getlevelterms() {
      let dept_id = this.departments.filter((dept) => {
        return dept.id == this.form.department_id
      })

      console.log(dept_id, this.form.department_slug)

      this.$axios
        .get('admin/getlevelterms/' + dept_id[0]['id'])
        .then((res) => {
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.levelterms = res.data.data
        })
        .catch((err) => {
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
    this.getdepartments()
  },
  validations: {
    form: {
      course_name: {
        required,
      },
      slug: {
        required,
      },

      level_term_id: {
        required,
      },
      department_id: {
        required,
      },
    },
  },
}
</script>
