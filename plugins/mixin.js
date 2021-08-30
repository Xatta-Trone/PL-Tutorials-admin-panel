import Vue from 'vue'
// import { AbilityBuilder } from '@casl/ability'

const baseURL = 'http://localhost:8000/'
const serverURL = 'http://pltutorials8.xt:8080/api/v1/'

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
      // serverurl: 'http://localhost:8000/api/v1/',
      // baseurl: 'http://localhost:8000',
      serverErrors: [],
      get baseurl() {
        return baseURL
      },
      get serverurl() {
        return serverURL
      },
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

    timeSince(date) {
      console.log(date)
      var seconds = Math.floor((new Date() - Date.parse(date)) / 1000)
      // console.log(date, seconds)
      var interval = seconds / 31536000

      if (interval > 1) {
        return Math.floor(interval) + ' years ago'
      }
      interval = seconds / 2592000
      if (interval > 1) {
        return Math.floor(interval) + ' months ago'
      }
      interval = seconds / 86400
      if (interval > 1) {
        return Math.floor(interval) + ' days ago'
      }
      interval = seconds / 3600
      if (interval > 1) {
        return Math.floor(interval) + ' hours ago'
      }
      interval = seconds / 60
      if (interval > 1) {
        return Math.floor(interval) + ' minutes ago'
      }
      return Math.floor(seconds) + ' seconds ago'
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

        case 'POST_CREATED':
          console.log('POST_CREATED')
          this.$toast.success('Post created.')
          break

        case 'POST_CREATION_ERROR':
          console.log('POST_CREATION_ERROR')
          this.$toast.error('Post not created.')
          break

        case 'POST_NOT_FOUND':
          console.log('POST_NOT_FOUND')
          this.$toast.error('Post not found.')
          break

        case 'POST_FOUND':
          console.log('POST_FOUND')
          this.$toast.success('Post found.')
          break

        case 'POST_NOT_UPDATED':
          console.log('POST_NOT_UPDATED')
          this.$toast.error('Post not updated.')
          break

        case 'POST_UPDATED':
          console.log('POST_UPDATED')
          this.$toast.success('Post updated.')
          break

        case 'POST_NOT_DELETED':
          console.log('POST_NOT_DELETED')
          this.$toast.error('Post not deleted.')
          break

        case 'POST_DELETED':
          console.log('POST_DELETED')
          this.$toast.success('Post deleted.')
          break

        case 'POST_NOT_RESTORED':
          console.log('POST_NOT_RESTORED')
          this.$toast.error('Post not restored.')
          break

        case 'SOFTWARE_CREATED':
          console.log('SOFTWARE_CREATED')
          this.$toast.success('SOFTWARE created.')
          break

        case 'SOFTWARE_CREATION_ERROR':
          console.log('SOFTWARE_CREATION_ERROR')
          this.$toast.error('SOFTWARE not created.')
          break

        case 'SOFTWARE_NOT_FOUND':
          console.log('SOFTWARE_NOT_FOUND')
          this.$toast.error('SOFTWARE not found.')
          break

        case 'SOFTWARE_FOUND':
          console.log('SOFTWARE_FOUND')
          this.$toast.success('SOFTWARE found.')
          break

        case 'SOFTWARE_NOT_UPDATED':
          console.log('SOFTWARE_NOT_UPDATED')
          this.$toast.error('SOFTWARE not updated.')
          break

        case 'SOFTWARE_UPDATED':
          console.log('SOFTWARE_UPDATED')
          this.$toast.success('SOFTWARE updated.')
          break

        case 'SOFTWARE_NOT_DELETED':
          console.log('SOFTWARE_NOT_DELETED')
          this.$toast.error('SOFTWARE not deleted.')
          break

        case 'SOFTWARE_DELETED':
          console.log('SOFTWARE_DELETED')
          this.$toast.success('SOFTWARE deleted.')
          break

        case 'SOFTWARE_NOT_RESTORED':
          console.log('SOFTWARE_NOT_RESTORED')
          this.$toast.error('SOFTWARE not restored.')
          break

        case 'BOOK_CREATED':
          console.log('BOOK_CREATED')
          this.$toast.success('BOOK created.')
          break

        case 'BOOK_CREATION_ERROR':
          console.log('BOOK_CREATION_ERROR')
          this.$toast.error('BOOK not created.')
          break

        case 'BOOK_NOT_FOUND':
          console.log('BOOK_NOT_FOUND')
          this.$toast.error('BOOK not found.')
          break

        case 'BOOK_FOUND':
          console.log('BOOK_FOUND')
          this.$toast.success('BOOK found.')
          break

        case 'BOOK_NOT_UPDATED':
          console.log('BOOK_NOT_UPDATED')
          this.$toast.error('BOOK not updated.')
          break

        case 'BOOK_UPDATED':
          console.log('BOOK_UPDATED')
          this.$toast.success('BOOK updated.')
          break

        case 'BOOK_NOT_DELETED':
          console.log('BOOK_NOT_DELETED')
          this.$toast.error('BOOK not deleted.')
          break

        case 'BOOK_DELETED':
          console.log('BOOK_DELETED')
          this.$toast.success('BOOK deleted.')
          break

        case 'BOOK_NOT_RESTORED':
          console.log('BOOK_NOT_RESTORED')
          this.$toast.error('BOOK not restored.')
          break

        default:
          console.log('Something went wrong')
          this.$toast.error('Something went wrong!!!' + statusmessage + '')
      }
    },
  },
}

Vue.mixin(mixin)
