import Vue from 'vue'

var mixin = {
  data: function () {
    return {
      serverurl: 'http://localhost:8080/api/v1/',
    }
  },
  methods: {
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
