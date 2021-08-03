<template>
  <h1>
    hello admin

    <span v-if="this.$store.state.auth.loggedIn"
      >{{ this.$auth.user.name }}
    </span>
    <button @click="logout">logout</button>
  </h1>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    async logout() {
      try {
        let response = await this.$auth.logout('laravelSanctum')
        console.log(response)

        if (response.data == 1) {
          console.log(response.data)
        }
        this.$router.push('/login')
      } catch (err) {
        console.log('err', err)
      }
    },
  },
}
</script>
