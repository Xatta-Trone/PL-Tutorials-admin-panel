<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>

        <div v-if="this.$auth.user">{{ this.$auth.user.name }}</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // middleware: 'guest',
  data() {
    return {
      user: null,
      login: {
        email: 'monzurul.ce.buet@gmail.com',
        password: '123456',
      },
    }
  },
  methods: {
    async userLogin() {
      // this.$axios.get('api/v1/sanctum/csrf-cookie').then((response) => {
      //   console.log(response.data)
      // })

      try {
        let response = await this.$auth.loginWith('laravelSanctum', {
          data: this.login,
        })
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
