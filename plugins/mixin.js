import Vue from 'vue'
// import { AbilityBuilder } from '@casl/ability'

// const baseURL = 'https://pl8.xattabyte.com/'
// const serverURL = 'https://pl8.xattabyte.com/api/v1/'

// const baseURL = 'http://pltutorials8.xt:8080/'
// const serverURL = 'http://pltutorials8.xt:8080/api/v1/'

const baseURL = process.env.AUTH_URL
const serverURL = process.env.SERVER_URL

var mixin = {
  async asyncData({ $axios, store, app }) {
    $axios
      .get('/admin/permissions')
      .then((res) => {
        console.log(process.env.AUTH_URL)
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

    extractmessage(statusmessage = '') {
      // input the exception messages here and include in the getmessagecustom function
      let exceptions = [
        'INVALID_EMAIL_PASSWORD',
        'SOMETHING_WENT_WRONG',
        'LOGGED_OUT',
        'USER_ALREADY_REGISTERED',
        'AUTH_SUCCESS',
        'DUPLICATR_STUDENT_ID',
        'TOKEN_EXPIRED',
        'ADMIN_MUST_HAVE_USER_ACCOUNT',
      ]

      if (exceptions.includes(statusmessage)) {
        return this.getmessagecustom(statusmessage)
      }

      if (statusmessage.indexOf(' ') >= 0) {
        console.log('Something went wrong')
        return this.$toast.error('Something went wrong!!!' + statusmessage + '')
      }

      // split the strings
      let strings = statusmessage.split('_').map((e) => e.toLowerCase())

      if (strings.includes('not') || strings.includes('error')) {
        return this.errormessage(strings.join(' '))
      } else {
        return this.successmessage(strings.join(' '))
      }
    },

    successmessage(msg) {
      console.log('msg')
      return this.$toast.success(msg)
    },

    errormessage(msg) {
      console.log('msg')
      return this.$toast.error(msg)
    },

    infomessage(msg) {
      console.log('msg')
      return this.$toast.info(msg)
    },

    getmessage(statusmessage = '') {
      this.extractmessage(statusmessage)
    },

    getmessagecustom(statusmessage = '') {
      switch (statusmessage) {
        case 'INVALID_EMAIL_PASSWORD':
          console.log('INVALID_EMAIL_PASSWORD')
          this.$toast.error('Invalid Email or password')
          break

        case 'AUTH_SUCCESS':
          console.log('AUTH_SUCCESS')
          this.$toast.success('Login successful. Redirecting....')
          break
        case 'SOMETHING_WENT_WRONG':
          console.log('SOMETHING_WENT_WRONG')
          this.$toast.error('Something went wrong!!!')
          break

        case 'LOGGED_OUT':
          console.log('LOGGED_OUT')
          this.$toast.success('Logged out')
          break
        case 'USER_ALREADY_REGISTERED':
          console.log('USER_ALREADY_REGISTERED')
          this.$toast.error('User has already been registered.')
          break
        case 'TOKEN_EXPIRED':
          console.log('TOKEN_EXPIRED')
          this.$toast.error('Token has expired.')
          break

        case 'DUPLICATR_STUDENT_ID':
          console.log('DUPLICATR_STUDENT_ID')
          this.$toast.error('Student id already registered.')
          break

        case 'ADMIN_MUST_HAVE_USER_ACCOUNT':
          console.log('ADMIN_MUST_HAVE_USER_ACCOUNT')
          this.$toast.error('Admin must have user account first')
          break

        default:
          console.log('Something went wrong')
          this.$toast.error('Something went wrong!!!' + statusmessage + '')
      }
    },
  },
}

Vue.mixin(mixin)
