import Vue from 'vue'
// import { AbilityBuilder } from '@casl/ability'

var mixin = {
  async asyncData({ $axios, store, app }) {
    $axios
      .get('/admin/permissions')
      .then((res) => {
        console.log(app)
        if (res.status == 200) {
          store.commit('addPermissions', res.data)
          app.$gates.setPermissions(res.data)

          console.log(app.$gates.getPermissions())
          // const { can, rules } = new AbilityBuilder()
          // $ability.update(can(...res.data))
        }
      })
      .catch((err) => console.log(err))
  },
  data: function () {
    return {
      serverurl: 'http://localhost:8080/api/v1/',
    }
  },
  mounted() {
    // this.$nextTick(function () {
    //   this.getpermission()
    // })
  },
  created() {
    // this.getpermission()
  },
  beforeMount() {
    // this.getpermission()
  },
  methods: {
    getpermission() {
      this.$axios
        .get('/admin/permissions')
        .then((res) => this.$gates.setPermissions(res.data))
        .catch((err) => console.log(err))
    },

    getmessage(statusmessage) {
      switch (statusmessage) {
        case 'INVALID_EMAIL_PASSWORD':
          console.log('INVALID_EMAIL_PASSWORD')
          this.$toast.error('Invalid Email or password')
          break
        case 'ACCOUNT_NOT_ACTIVE':
          console.log('ACCOUNT_NOT_ACTIVE')
          this.$toast.error('Account not active')
          break
        case 'AUTH_SUCCESS':
          console.log('AUTH_SUCCESS')
          this.$toast.success('Login successful. Redirecting....')
          break
        case 'SOMETHING_WENT_WRONG':
          console.log('SOMETHING_WENT_WRONG')
          this.$toast.success('Something went wrong!!!')
          break

        default:
          console.log('Something went wrong')
          this.$toast.error('Something went wrong!!!')
      }
    },
  },
}

Vue.mixin(mixin)
