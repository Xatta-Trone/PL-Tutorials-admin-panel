<template>
  <div class="page-heading">
    <div class="page-title">
      <div class="row">
        <div class="col-12 col-md-6 order-md-1 order-last">
          <h3>{{ title.replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase()) }}</h3>
        </div>
        <div class="col-12 col-md-6 order-md-2 order-first">
          <nav
            aria-label="breadcrumb"
            class="breadcrumb-header float-start float-lg-end"
          >
            <router-link
              v-show="urlto != ''"
              :to="urlto"
              class="btn btn-primary"
              >{{ urltxt }}</router-link
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    urlto: {
      type: String,
      default: '',
    },
    urltxt: {
      type: String,
      default: 'Add',
    },
  },
  mounted() {
    console.log(this.$nuxt.$route)
  },
}
</script>
<style lang="css" scoped>
.page-heading {
  margin: 0 0 1rem;
}
</style>
