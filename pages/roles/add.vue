
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="role add"
          :urlto="'/roles'"
          urltxt="Go back"
        ></pageheader>
        <div class="card p-3">
          <div class="card-content">
            <form class="form form-vertical">
              <div class="form-body">
                <div class="row">
                  <custom-form :validator="$v.form.name" attribute="name">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">role name </label>
                        <div class="position-relative">
                          <input
                            :class="{ 'is-invalid ': $v.form.name.$error }"
                            v-model="form.name"
                            @input="$v.form.name.$touch()"
                            name="name"
                            type="text"
                            class="form-control"
                            placeholder="role name"
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
                    :validator="$v.form.permissions"
                    attribute="permissions"
                  >
                    <div class="col-12">
                      <label class="my-2">permissions</label>
                      <br />
                      <div class="form-check d-inline-block">
                        <div class="checkbox my-3" @click="selectallpermission">
                          <input
                            type="checkbox"
                            id="chki"
                            class="form-check-input"
                            :checked="selectall"
                          />
                          <label for="chki">Select all</label>
                        </div>
                      </div>

                      <ul class="list-unstyled mb-0">
                        <li
                          class="d-inline-block me-2 mb-1"
                          v-for="permisson in permissions"
                          :key="permisson.name"
                        >
                          <div class="form-check">
                            <div class="checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                :value="permisson.id"
                                v-model="form.permissions"
                                :id="permisson.id"
                              />
                              <label :for="permisson.id">{{
                                permisson.name
                              }}</label>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <custom-error
                        :servererrors="serverErrors"
                        chkkey="permissions"
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
        name: '',
        permissions: [],
      },
      permissions: [],
      selectall: false,
    }
  },
  mounted() {
    this.getpermissions()
  },
  methods: {
    removeError(i) {
      console.log(i)
      this.serverErrors.splice(i, 1)
    },
    selectallpermission() {
      this.selectall = !this.selectall
      // console.log(this.form.permissions.length, this.permissions.length)
      if (this.form.permissions.length == this.permissions.length) {
        this.form.permissions = []
      } else {
        // console.log(this.permissions.map((e) => e.id))
        this.form.permissions = this.permissions.map((e) => e.id)
      }
    },

    getpermissions() {
      this.loading = true
      this.$axios
        .get('admin/getpermissions')
        .then((res) => {
          this.loading = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }
          this.permissions = res.data.data

          // if (res.data.hasKey('status')) this.getmessage()
        })
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
        .post('admin/roles', this.form)
        .then((res) => {
          vm.loading = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.form.name = ''
          this.form.permissions = []

          this.$v.$reset()
          this.$router.push('/roles')
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
      name: {
        required,
      },
      permissions: {
        required,
      },
    },
  },
}
</script>
