
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader title="User Traces"></pageheader>

      <v-server-table
        :url="serverurl + 'admin/usertraces'"
        :columns="columns"
        :options="options"
      >
        <div slot="user_name" slot-scope="{ row }">
          <span @click="view(row)">{{ row.user_name }}</span>
        </div>
      </v-server-table>
    </div>
  </div>
</template>

<script>
// import customdelete from '~/components/datatables/customdelete.vue'
export default {
  // middleware: 'guest',
  layout: 'app',

  data() {
    return {
      loading: false,
      error: false,
      selectData: 'all',
      columns: [
        'id',
        'user_name',
        'user_ip',
        'device',
        'location',
        'fingerprint',
      ],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {},
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
  mounted() {},
  methods: {
    view(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/detail/' + data.user_id)
    },
  },
}
</script>
