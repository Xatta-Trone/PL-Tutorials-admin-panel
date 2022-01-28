
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="ban days add"
          :urlto="'/bandays'"
          urltxt="Go back"
        ></pageheader>
        <div class="card">
          <div class="card-content">
            <form class="form form-vertical">
              <div class="form-body">
                <div class="row">
                  <custom-form :validator="$v.form.level" attribute="level">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">level to ban</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.level.$error }"
                            v-model="form.level"
                            @input="$v.form.level.$touch()"
                            name="level"
                            type="number"
                            min="0"
                            class="form-control"
                            placeholder="level of ban"
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="level"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <custom-form :validator="$v.form.days" attribute="days">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">days to ban</label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.days.$error }"
                            v-model="form.days"
                            @input="$v.form.days.$touch()"
                            name="days"
                            type="number"
                            min="0"
                            class="form-control"
                            placeholder="days of ban"
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="days"
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
        level: '',
        days: 0,
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
        .post('admin/bandays', this.form)
        .then((res) => {
          vm.loading = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.form.level = ''

          this.$v.$reset()
          this.$router.push('/bandays')
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
      level: {
        required,
      },
      days: {
        required,
      },
    },
  },
}
</script>
