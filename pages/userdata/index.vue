
<template>
  <div>
    <div>{{ $can('dashboard') }}</div>
    <pageheader title="User data"></pageheader>
    <v-server-table
      url="http://pltutorials8.xt:8080/api/v1/admin/userdatas/"
      :columns="columns"
      :options="options"
    >
      <div slot="actions" slot-scope="{ row }">
        <a v-if="row.status == 0" href="" @click.prevent="handle(row)"
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
        // templates: {
        //   customdelete,
        // },
      },
    }
  },
  methods: {
    handle(data) {
      console.log(data)
    },
    test() {},
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
