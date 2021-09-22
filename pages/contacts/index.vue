
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader title="Contacts"></pageheader>

      <div class="col-12"></div>
      <v-server-table
        :url="serverurl + 'admin/contacts?type=' + selectData"
        :columns="columns"
        :options="options"
      >
        <div slot="created_at" slot-scope="{ row }">
          {{ timeSince(row.created_at) }}
        </div>
        <div slot="status" slot-scope="{ row }">
          <span v-if="row.status == 0" class="badge bg-primary">New</span>
          <span v-if="row.status == 1 && row.replied == 0" class="badge bg-info"
            >Not replied</span
          >
          <span v-if="row.replied == 1" class="badge bg-secondary"
            >Replied</span
          >
        </div>
        <div
          slot="actions"
          slot-scope="{ row }"
          class="d-flex justify-content-around"
        >
          <a
            v-show="$can('contact_reply')"
            href=""
            @click.prevent="edit(row)"
            title="Contact reply"
            ><font-awesome-icon :icon="['fas', 'reply']"
          /></a>

          <a
            v-show="$can('contact_delete')"
            href=""
            title="Contact Delete"
            @click.prevent="handleDelete(row, i)"
            ><font-awesome-icon
              class="text-danger"
              :icon="['far', 'trash-alt']"
          /></a>
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
        'name',
        'email',
        'subject',
        'created_at',
        'status',
        'admin_name',
        'actions',
      ],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {
          created_at: 'Date',
          admin_name: 'Seen by',
        },
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
    edit(data) {
      console.log(data)
      this.$nuxt.$router.push('/contacts/reply/' + data.id)
    },

    handleDelete(data, i) {
      console.log(data, i)
      let msg = 'Are you sure '
      if (data.deleted_at != null) {
        msg += 'to completely delete '
      }
      msg += '?'

      if (confirm(msg)) {
        let vm = this
        vm.loading = true
        console.log(data.deleted_at != null)
        let forcedelete = data.deleted_at != null
        this.$axios
          .delete(
            '/admin/contacts/' +
              data.id +
              '?forcedelete=' +
              forcedelete.toString()
          )
          .then((res) => {
            vm.loading = false
            this.selectData = data.deleted_at != null ? 'all' : 'deleted'
            if (res.data.hasOwnProperty('message')) {
              this.getmessage(res.data.message)
            }
            // if (res.data.hasKey('status')) this.getmessage()
          })
          .catch((err) => {
            vm.loading = false
            console.log(err)
            if (err.response.data.hasOwnProperty('message')) {
              this.getmessage(err.response.data.message)
            }
          })
      }
    },
  },
}
</script>
