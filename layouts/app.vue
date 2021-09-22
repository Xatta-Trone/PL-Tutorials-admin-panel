<template>
  <div id="app">
    <Sidebar></Sidebar>

    <div id="main">
      <Theheader></Theheader>
      <Nuxt />
      <Thefooter></Thefooter>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      isfirst: false,
    }
  },
  mounted() {
    if (this.isfirst) {
      window.location.reload()
      this.isfirst = false
    }
  },
}
</script>
