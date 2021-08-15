import Vue from 'vue'
// import { AbilityBuilder } from '@casl/ability'

var mixin = {
  async asyncData({ $axios, store, app }) {
    $axios
      .get('/admin/permissions')
      .then((res) => {
        // console.log(app)
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
      serverErrors: [],
    }
  },
  computed: {
    errBag: function () {
      // return (id) => this.itemById(id).description
      return function (key) {
        console.log('==========', key)
        this.serverErrors.forEach((element) => {
          if (element[0] == key) {
            return element[1].join(',').toString()
          } else {
            return ''
          }
        })
      }
    },
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
    this.serverErrors = []
  },
  beforeDestroy() {
    this.serverErrors = []
  },
  watch: {
    // whenever question changes, this function will run
    // serverErrors: function () {
    //   this.serverErrors = []
    // },
  },
  methods: {
    getpermission() {
      this.$axios
        .get('/admin/permissions')
        .then((res) => this.$gates.setPermissions(res.data))
        .catch((err) => console.log(err))
    },

    showmessage(msg = '') {
      this.$toast.success(msg)
    },

    showerror(msg = '') {
      this.$toast.error(msg)
    },

    toggleElClass(el, classname) {
      el.classList.toggle(classname)
    },
    checkServerErrorExists(key) {
      console.log('key', key)
      this.serverErrors.forEach((e) => {
        console.log(e[0] == key)
        return e[0] == key
      })
    },
    getServerErrorMsg(key) {
      console.log('key', key)
      this.serverErrors.forEach((e) => {
        return e[0] == key ? e[1].join(',') : null
      })
    },

    getmessage(statusmessage = '') {
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
          this.$toast.error('Something went wrong!!!')
          break

        case 'USER_ALREADY_REGISTERED':
          console.log('USER_ALREADY_REGISTERED')
          this.$toast.error('User has already been registered.')
          break

        case 'USER_CREATED':
          console.log('USER_CREATED')
          this.$toast.success('User created.')
          break

        case 'USER_CREATION_ERROR':
          console.log('USER_CREATION_ERROR')
          this.$toast.error('User not created.')
          break

        case 'USER_NOT_FOUND':
          console.log('USER_NOT_FOUND')
          this.$toast.error('User not found.')
          break

        case 'USER_FOUND':
          console.log('USER_FOUND')
          this.$toast.success('User found.')
          break

        case 'USER_NOT_UPDATED':
          console.log('USER_NOT_UPDATED')
          this.$toast.error('User not updated.')
          break

        case 'USER_UPDATED':
          console.log('USER_UPDATED')
          this.$toast.success('User updated.')
          break

        case 'USER_NOT_DELETED':
          console.log('USER_NOT_DELETED')
          this.$toast.error('User not deleted.')
          break

        case 'USER_DELETED':
          console.log('USER_DELETED')
          this.$toast.success('User deleted.')
          break

        case 'USER_NOT_RESTORED':
          console.log('USER_NOT_RESTORED')
          this.$toast.error('User not restored.')
          break

        case 'USER_RESTORED':
          console.log('USER_RESTORED')
          this.$toast.success('User restored.')
          break

        case 'USER_NOT_PASSWORD_RESET':
          console.log('USER_NOT_PASSWORD_RESET')
          this.$toast.error('User password not reset.')
          break

        case 'USER_PASSWORD_RESET':
          console.log('USER_PASSWORD_RESET')
          this.$toast.success('User password reset successfully.')
          break

        default:
          console.log('Something went wrong')
          this.$toast.error('Something went wrong!!!' + statusmessage + '')
      }
    },
  },
}

Vue.mixin(mixin)
