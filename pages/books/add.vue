
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="Book add"
          :urlto="'/books'"
          urltxt="Go back"
        ></pageheader>
        <div class="card">
          <div class="card-content">
            <form class="form form-vertical">
              <div class="form-body">
                <div class="row">
                  <custom-form :validator="$v.form.name" attribute="Title">
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
                            placeholder="Book title"
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

                  <custom-form :validator="$v.form.author" attribute="Author">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">Author</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.author.$error }"
                            v-model="form.author"
                            @input="$v.form.author.$touch()"
                            name="author"
                            type="text"
                            class="form-control"
                            placeholder="Book author "
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="author"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <div class="col-12">
                    <fieldset class="form-group">
                      <label for="basicSelect">Department (optional)</label>
                      <select
                        class="form-select"
                        id="Department"
                        v-model.trim="form.department_slug"
                        name="department_slug"
                        @change="getlevelterms"
                      >
                        <option value="">Select department</option>
                        <option
                          v-for="(department, i) in departments"
                          :key="i"
                          :value="department.slug"
                        >
                          {{ department.name }}
                        </option>
                      </select>
                    </fieldset>
                  </div>

                  <div class="col-12">
                    <fieldset class="form-group">
                      <label for="basicSelect">Level Term (optional)</label>
                      <select
                        @change="getcourses"
                        class="form-select"
                        id="Level Term"
                        v-model.trim="form.level_term_slug"
                        name="level_term_slug"
                      >
                        <option value="">Select Level Term</option>
                        <option
                          v-for="(levelterm, i) in levelterms"
                          :key="i"
                          :value="levelterm.slug"
                        >
                          {{ levelterm.name }}
                        </option>
                      </select>
                    </fieldset>
                  </div>

                  <div class="col-12">
                    <fieldset class="form-group">
                      <label for="basicSelect">Course (optional)</label>
                      <select
                        @change="getcourses"
                        class="form-select"
                        id="Level Term"
                        v-model.trim="form.course_id"
                        name="course_id"
                      >
                        <option value="">Select Course</option>
                        <option
                          v-for="(course, i) in courses"
                          :key="i"
                          :value="course.id"
                        >
                          {{ course.course_name }} ({{
                            course.slug.toUpperCase()
                          }})
                        </option>
                      </select>
                    </fieldset>
                  </div>

                  <custom-form :validator="$v.form.link" attribute="Link">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="link">Link</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.link.$error }"
                            v-model="form.link"
                            @input="$v.form.link.$touch()"
                            name="link"
                            type="url"
                            class="form-control"
                            placeholder="https://www.google.com/"
                            id="link"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="link"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <div class="col-12">
                    <label for="formFile" class="form-label"
                      >Image (optional)</label
                    >
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      accept="image/*"
                      name="image"
                      @change="uploadImage($event)"
                    />
                    <img
                      v-if="imagepreview"
                      :src="imagepreview"
                      class="uploading-image"
                      height="150"
                    />
                  </div>

                  <custom-form
                    :validator="$v.form.post_type"
                    attribute="Post type"
                  >
                    <div class="col-12">
                      <div class="">
                        <div>
                          <input
                            :class="{ 'is-invalid ': $v.form.post_type.$error }"
                            v-model="form.post_type"
                            @input="$v.form.post_type.$touch()"
                            name="post_type"
                            type="hidden"
                            id="post_type"
                          />
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="post_type"
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
                          <option value="1" selected="">Publish</option>
                          <option value="2">Pending</option>
                          <option value="3">Draft</option>
                          <option value="4">Private</option>
                          <option value="5">Rejected</option>
                        </select>
                      </fieldset>
                    </div>
                  </custom-form>

                  <div class="col-12">
                    <label for="formFile" class="form-label"
                      >Description (optional)</label
                    >
                    <quill-editor
                      v-model="form.description"
                      ref="myQuillEditor"
                      minheight="300"
                    >
                    </quill-editor>
                  </div>

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
        name: '',
        author: '',
        department_slug: '',
        level_term_slug: '',
        course_id: '',
        post_type: 'book',
        link: '',
        image: '',
        status: 1,
        description: '',
      },
      departments: [],
      levelterms: [],
      courses: [],
      imagepreview: '',
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
        bodyFormData.append(key, this.form[key])
      }

      console.log(bodyFormData)

      this.$axios
        .post('admin/' + this.form.post_type + 's/', bodyFormData, {
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

          this.form.name = ''
          this.form.author = ''
          this.form.department_slug = ''
          this.form.level_term_slug = ''
          this.form.course_id = ''
          this.form.link = ''
          this.form.image = ''
          this.form.description = ''
          this.imagepreview = ''

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
        .get('admin/getdepartments/')
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
        return dept.slug == this.form.department_slug
      })

      console.log(dept_id, this.form.department_slug)

      this.$axios
        .get('getlevelterms/' + dept_id[0]['id'])
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

    getcourses() {
      let dept = this.departments.filter((dept) => {
        return dept.slug == this.form.department_slug
      })

      let levelterm = this.levelterms.filter((levelterm) => {
        return levelterm.slug == this.form.level_term_slug
      })

      this.$axios
        .get('getcourse/' + dept[0]['id'] + '/' + levelterm[0]['id'])
        .then((res) => {
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.courses = res.data.data
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
    uploadImage(e) {
      const image = e.target.files[0]

      let size = image.size / 1024 / 1024

      if (size > 1) {
        alert('upload a file less than 1Mb')
        return
      }

      this.form.image = e.target.files[0]

      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.imagepreview = e.target.result
      }
    },
  },
  mounted() {
    this.getdepartments()
  },
  validations: {
    form: {
      name: {
        required,
      },
      author: {
        required,
      },

      status: {
        required,
      },
      link: {
        required,
        url,
      },
      post_type: {
        required,
      },
    },
  },
}
</script>
