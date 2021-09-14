
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          :title="post_type.toLowerCase() + ' edit'"
          :urlto="'/' + post_type.toLowerCase() + 's'"
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
                            placeholder="Post title"
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

                  <div class="col-12">
                    <div class="form-group has-icon-left">
                      <label for="first-name-icon">Author(optional)</label>
                      <div class="position-relative">
                        <input
                          v-model="form.author"
                          name="author"
                          type="text"
                          class="form-control"
                          placeholder="Author"
                          id="first-name-icon"
                        />
                        <div class="form-control-icon">
                          <i class="bi bi-person"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <custom-form
                    :validator="$v.form.department_slug"
                    attribute="Department"
                  >
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="basicSelect">Department</label>
                        <select
                          class="form-select"
                          id="Department"
                          v-model.trim="$v.form.department_slug.$model"
                          @input="$v.form.department_slug.$touch()"
                          :class="{
                            'is-invalid ': $v.form.department_slug.$error,
                          }"
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
                  </custom-form>

                  <custom-form
                    :validator="$v.form.level_term_slug"
                    attribute="Level Term"
                  >
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="LevelTerm">Level Term</label>
                        <select
                          @change="getcourses"
                          class="form-select"
                          id="LevelTerm"
                          v-model.trim="$v.form.level_term_slug.$model"
                          @input="$v.form.level_term_slug.$touch()"
                          :class="{
                            'is-invalid ': $v.form.level_term_slug.$error,
                          }"
                          name="level_term_slug"
                        >
                          <option value="" selected>Select Level Term</option>
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
                  </custom-form>

                  <div class="col-12">
                    <fieldset class="form-group">
                      <label for="basicSelect">Course (optional)</label>
                      <select
                        class="form-select"
                        id="Level Term"
                        v-model="form.course_id"
                        name="course_id"
                      >
                        <option value="" selected>Select Course</option>
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
  props: ['post_type'],

  data() {
    let form = {
      name: '',
      author: '',
      department_slug: '',
      level_term_slug: '',
      course_id: '',
      post_type: 'post',
      link: '',
      image: '',
      status: 1,
      description: '',
    }

    Object.assign(form, { post_type: this.post_type })

    return {
      loading: false,
      form: form,
      departments: [],
      levelterms: [],
      courses: [],
      imagepreview: '',
    }
  },
  mounted() {
    this.getdepartments()
  },
  computed: {
    // previewImage: function () {
    //   this.form.image == ''
    //     ? this.imagepreview
    //     : this.serverurl + '/storage/' + this.form.post_type + this.form.image
    // },
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
        .get('admin/' + this.form.post_type + 's/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.form = res.data.post

          // if (res.data.hasKey('status')) this.getmessage()
        })
        .then(() => {
          this.imagepreview =
            this.form.image == null
              ? ''
              : this.baseurl +
                'storage/' +
                this.form.post_type +
                '/' +
                this.form.image
          this.getlevelterms()
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

      var bodyFormData = new FormData()

      for (const key in this.form) {
        bodyFormData.append(key, this.form[key])
      }

      console.log(bodyFormData)
      let id = vm.$nuxt.$route.params.id
      this.$axios
        .post(
          'admin/' + this.form.post_type + 's/' + id + '?_method=PUT',
          bodyFormData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((res) => {
          vm.loading = false
          console.log(res)

          // this.form.name = ''
          // this.form.author = ''
          // this.form.department_slug = ''
          // this.form.level_term_slug = ''
          // this.form.course_id = ''
          // this.form.link = ''
          // this.form.image = ''
          // this.form.description = ''
          // this.imagepreview = ''
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.$v.$reset()
          this.$router.push('/' + this.form.post_type + 's')
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
        .get('/admin/getdepartments')
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
    getlevelterms() {
      let dept_id = this.departments.filter((dept) => {
        return dept.slug == this.form.department_slug
      })

      console.log(dept_id, this.form.department_slug)

      this.$axios
        .get('/admin/getlevelterms/' + dept_id[0]['id'])
        .then((res) => {
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.levelterms = res.data.data
        })
        .then(() => {
          this.getcourses()
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
        .get('/admin/getcourse/' + dept[0]['id'] + '/' + levelterm[0]['id'])
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

  validations: {
    form: {
      name: {
        required,
      },
      department_slug: {
        required,
      },
      level_term_slug: {
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
