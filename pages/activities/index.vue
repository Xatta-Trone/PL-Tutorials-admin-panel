
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader title="Activities"></pageheader>

      <div class="col-12"></div>
      <v-server-table
        :url="serverurl + 'admin/activities'"
        :columns="columns"
        :options="options"
      >
        <div slot="created_at" slot-scope="{ row }">
          {{ formatDateTime(row.created_at) }}
        </div>
        <div slot="causer.name" slot-scope="{ row }">
          {{ row.causer.name }} ({{ row.causer.student_id }})
        </div>
        <div slot="causer_type" slot-scope="{ row }">
          {{ row.causer_type.split('\\').slice(-1).pop() }}
        </div>
        <div slot="actions" slot-scope="{ row }">
          <span v-show="row.pat_id != null">
            <button
              class="btn"
              @click="showUserDetailByLogin(row.pat_id)"
              :title="'Activity by login id::' + row.pat_id"
            >
              <font-awesome-icon :icon="['fas', 'list']" />
            </button>
            <button
              class="btn"
              @click="showUserDetail(row)"
              title="User detail"
            >
              <font-awesome-icon :icon="['fas', 'user']" />
            </button>
          </span>
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
        'causer.name',
        'causer_type',
        'activity',
        'label',
        'created_at',
        'actions',
      ],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {
          'causer.name': 'Name',
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
      this.$nuxt.$router.push('/activities/edit/' + data.id)
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
            '/admin/activities/' +
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
    showUserDetailByLogin(patId) {
      console.log(patId)
      this.$nuxt.$router.push('/users/activity-by-login/' + patId)
    },
    showUserDetail(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/detail/' + data.causer_id)
    },
  },
}
</script>
