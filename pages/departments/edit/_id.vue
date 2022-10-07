
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="department edit"
          :urlto="'/departments'"
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
                            placeholder="department title"
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

                  <custom-form :validator="$v.form.code" attribute="code">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">code (04/06/11)</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.code.$error }"
                            v-model="form.code"
                            @input="$v.form.code.$touch()"
                            name="code"
                            type="text"
                            class="form-control"
                            placeholder="Department code "
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="code"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <custom-form :validator="$v.form.slug" attribute="slug">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">slug (ce/eee)</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.slug.$error }"
                            v-model="form.slug"
                            @input="$v.form.slug.$touch()"
                            name="slug"
                            type="text"
                            class="form-control"
                            placeholder="Department slug "
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
                    :validator="$v.form.can_be_accessed_by"
                    attribute="can_be_accessed_by"
                  >
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="can_be_accessed_by">Accessible departments</label>
                        <select
                          class="choices form-select multiple-remove"
                          id="can_be_accessed_by"
                          v-model.trim="form.can_be_accessed_by"
                          name="can_be_accessed_by"
                          multiple="multiple"
                        >
                          <option value="">Select departments that can access</option>
                          <option
                            v-for="department in accessible_departments"
                            :key="department"
                            :value="department"
                          >
                            {{ department }}
                          </option>
                        </select>

                      </fieldset>
                      <custom-error
                        :servererrors="serverErrors"
                        chkkey="can_be_accessed_by"
                      />
                    </div>
                  </custom-form>

                  <custom-form :validator="$v.form.image" attribute="image">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="formFile" class="form-label">Image </label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.image.$error }"
                            @input="$v.form.image.$touch()"
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
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="image"
                        />
                      </div>
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
// import Multiselect from 'vue-multiselect'

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
        code: '',
        slug: '',
        image: '',
        can_be_accessed_by: [''],
      },
      imagepreview: '',
      accessible_departments: [
        'arch',
        'bme',
        'ce',
        'che',
        'cse',
        'eee',
        'ipe',
        'me',
        'mme',
        'name',
        'urp',
        'wre',
      ],
    }
  },
  mounted() {
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
        .get('admin/departments/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          if (res.data.post.can_be_accessed_by == null) {
            res.data.post.can_be_accessed_by = []
          } else {
            res.data.post.can_be_accessed_by =
              res.data.post.can_be_accessed_by.split(',')
          }
          vm.form = res.data.post
          // if (res.data.hasKey('status')) this.getmessage()
        })
        .then(() => {
          this.imagepreview =
            this.form.image == null
              ? ''
              : this.mainurl + '/storage/departments' + '/' + this.form.image
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
        .post('admin/departments/' + id + '?_method=PUT', bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          vm.loading = false
          console.log(res)

          this.form.name = ''
          this.form.code = ''
          this.form.slug = ''
          this.form.image = ''
          this.imagepreview = ''

          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.$v.$reset()
          this.$router.push('/departments')
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
      code: {
        required,
      },
      slug: {
        required,
      },

      image: {
        required,
      },

      can_be_accessed_by: {
        required,
      },
    },
  },
}
</script>

<style scoped></style>
