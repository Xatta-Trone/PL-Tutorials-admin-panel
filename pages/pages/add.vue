
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="page add"
          :urlto="'/pages'"
          urltxt="Go back"
        ></pageheader>
        <div class="card p-3">
          <div class="card-content">
            <form class="form form-vertical">
              <div class="form-body">
                <div class="row">
                  <custom-form :validator="$v.form.title" attribute="title">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">title</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.title.$error }"
                            v-model="form.title"
                            @input="$v.form.title.$touch()"
                            @keyup="slugify"
                            name="title"
                            type="text"
                            class="form-control"
                            placeholder="Page title "
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="title"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <custom-form :validator="$v.form.slug" attribute="slug">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">slug</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.slug.$error }"
                            v-model="form.slug"
                            @input="$v.form.slug.$touch()"
                            name="slug"
                            type="text"
                            class="form-control"
                            placeholder="Page slug "
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
                          <option value="1">Publish</option>
                          <option value="0" selected="">Draft</option>
                        </select>
                      </fieldset>
                    </div>
                  </custom-form>

                  <custom-form :validator="$v.form.body" attribute="body">
                    <div class="col-12">
                      <label for="">Body</label>
                      <v-md-editor
                        v-model.trim="$v.form.body.$model"
                        height="400px"
                      ></v-md-editor>
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
        slug: '',
        title: '',
        status: 0,
        body: '',
      },
    }
  },
  computed: {},
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
        .post('admin/pages', bodyFormData, {
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

          this.form.slug = ''
          this.form.title = ''
          this.form.body = ''

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

    slugify() {
      let str = this.form.title
      str = str.replace(/^\s+|\s+$/g, '') // trim
      str = str.toLowerCase()

      // remove accents, swap ñ for n, etc
      var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
      var to = 'aaaaaaeeeeiiiioooouuuunc------'

      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
      }

      str = str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes

      this.form.slug = str
    },
  },
  mounted() {},
  validations: {
    form: {
      title: {
        required,
      },
      slug: {
        required,
      },
      body: {
        required,
      },

      status: {
        required,
      },
    },
  },
}
</script>
