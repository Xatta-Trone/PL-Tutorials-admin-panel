
<template>
  <div>
    <pageheader
      title="User data"
      :urlto="this.$nuxt.$route.fullPath + '/import'"
      urltxt="Import data"
    ></pageheader>
    <v-server-table
      :url="serverurl + 'admin/userdatas'"
      :columns="columns"
      :options="options"
    >
      <div slot="actions" slot-scope="{ row }">
        <a v-if="row.status == 0 && $can('user_create')" href="" @click.prevent="add(row)"
          ><font-awesome-icon icon="user-plus"
        /></a>
        <span v-if="row.status == 1"
          ><font-awesome-icon :icon="['far', 'meh']"
        /></span>
      </div>
    </v-server-table>
  </div>
</template>

<script>
// import customdelete from '~/components/datatables/customdelete.vue'
export default {
  // middleware: 'guest',
  layout: 'app',
  data() {
    return {
      columns: [
        'id',
        'student_name',
        'merit',
        'student_id',
        'hall_name',
        'actions',
      ],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        requestFunction(data) {
          let vm = this
          return this.$axios
            .get(this.url, {
              params: data,
            })
            .catch(function (e) {
              // this.dispatch('error', e)
              console.log('Err in datatble', e)
              vm.getmessage('Err in datatble')
            })
        },
      },
    }
  },
  methods: {
    add(data) {
      console.log(data)
      this.$nuxt.$router.push({
        path: '/userdata/add/' + data.id,
        query: { name: data.student_name, studentid: data.student_id },
      })
    },
  },
  mounted() {
    // Event.$on('vue-tables.error', (e) => {
    //   this.options.texts.loading = 'An error!'
    // })
    // Event.$on('vue-tables.loading', (e) => {
    //   this.options.texts.loading = 'Loading...'
    // })
  },
}
</script>

<style lang="css">
.VueTables__error {
  color: red;
}
</style>
