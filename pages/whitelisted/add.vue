
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="Whitelisted user data add"
          :urlto="'/whitelisted'"
          urltxt="Go back"
        ></pageheader>
        <form class="form form-vertical">
          <div class="form-body">
            <div class="row">
              <!-- student id -->
              <custom-form :validator="$v.form.student_id" attribute="student_id">
                <div class="col-12">
                  <div class="form-group has-icon-left">
                    <label for="first-name-icon">Student id (Must be registered)</label>
                    <div class="position-relative">
                      <input
                        :class="{ 'is-invalid ': $v.form.student_id.$error }"
                        v-model="form.student_id"
                        @input="$v.form.student_id.$touch()"
                        name="student_id"
                        type="text"
                        class="form-control"
                        placeholder="student_id"
                        maxlength="7"
                        minlength="7"
                        id="first-name-icon"
                      />
                      <div class="form-control-icon">
                        <i class="bi bi-person"></i>
                      </div>
                    </div>
                    <custom-error :servererrors="serverErrors" chkkey="student_id" />
                  </div>
                </div>
              </custom-form>
              <!-- access_type type -->
               <custom-form :validator="$v.form.access_type" attribute="access_type">
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="basicSelect">Access type</label>
                        <select
                          class="form-select"
                          id="basicSelect"
                          v-model.trim="$v.form.access_type.$model"
                          @input="$v.form.access_type.$touch()"
                          :class="{ 'is-invalid ': $v.form.access_type.$error }"
                          name="access_type"
                        >
                          <option value="whitelisted">Whitelisted</option>
                          <option value="blacklisted">Blacklisted</option>
                        </select>
                      </fieldset>
                    </div>
              </custom-form>

              <!-- data_type -->
               <custom-form :validator="$v.form.data_type" attribute="data_type">
                    <div class="col-12">
                      <fieldset class="form-group">
                        <label for="data_type">Data type</label>
                        <select
                          class="form-select"
                          id="data_type"
                          v-model.trim="$v.form.data_type.$model"
                          @input="$v.form.data_type.$touch()"
                          :class="{ 'is-invalid ': $v.form.data_type.$error }"
                          name="data_type"
                        >
                          <option value="ip">IP Address</option>
                          <option value="location">ISP Location</option>
                        </select>
                      </fieldset>
                    </div>
              </custom-form>

                <!-- student id -->
              <custom-form :validator="$v.form.data" attribute="data">
                <div class="col-12">
                  <div class="form-group has-icon-left">
                    <label for="first-name-icon">Data</label>
                    <div class="position-relative">
                      <input
                        :class="{ 'is-invalid ': $v.form.data.$error }"
                        v-model="form.data"
                        @input="$v.form.data.$touch()"
                        name="data"
                        type="text"
                        class="form-control"
                        placeholder="data"
                        id="first-name-icon"
                      />
                      <div class="form-control-icon">
                        <i class="bi bi-person"></i>
                      </div>
                    </div>
                    <custom-error :servererrors="serverErrors" chkkey="data" />
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
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
        student_id: '',
        access_type: 'whitelisted',
        data_type:'location',
        data:'',
      },
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

      this.$axios
        .post('admin/whitelisted', this.form)
        .then((res) => {
          vm.loading = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.form.level = ''

          this.$v.$reset()
          this.$router.push('/whitelisted')
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

  validations: {
    form: {
      student_id: {
        required,
      },
      access_type: {
        required,
      },
       data_type: {
        required,
      },
       data: {
        required,
      },
    },
  },
}
</script>
