
<template>
  <div>
    <pageheader
      title="Bugs"

    ></pageheader>
    <v-server-table
      :url="serverurl + 'admin/bugs'"
      :columns="columns"
      :options="options"
    >
      <div slot="actions" slot-scope="{ row }">
        <a href="" @click.prevent="view(row.id)"
          ><font-awesome-icon icon="bug"
        /></a>

      </div>
      <div slot="is_seen" slot-scope="{ row }">
        {{ row.is_seen ? 'Yes' : 'No'}}

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
        'msg',
        'is_seen',
        'updated_at',
        'actions',
      ],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
         orderBy: { ascending: false },
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

    view(id){
      this.$nuxt.$router.push('/bugs/view/' + id)
    }

  },
  mounted() {

  },
}
</script>

<style lang="css">
.VueTables__error {
  color: red;
}
</style>
