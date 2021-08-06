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
  layout: 'app',
  mounted() {
    // this.$forceUpdate()
    // this.$nextTick(() => window.location.reload())
  },
  methods: {
    async logout() {
      try {
        let response = await this.$auth.logout('laravelSanctum')
        console.log(response)
        this.$gates.setPermissions([])

        // if (response.data == 1) {
        //   console.log(response.data)
        // }
        // this.$router.push('/login')
      } catch (err) {
        console.log('err', err)
      }
    },
  },
}
</script>
