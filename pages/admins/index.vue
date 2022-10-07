
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        title="Admin"
        :urlto="this.$nuxt.$route.fullPath + '/add'"
        urltxt="Add Admin"
      ></pageheader>


      <v-server-table
        :url="serverurl + 'admin/admins?type=' + selectData"
        :columns="columns"
        :options="options"
      >
        <div slot="status" slot-scope="{ row }">
          <span
            v-show="row.deleted_at == null"
            v-if="row.status == 0"
            class="badge bg-danger"
            >Inactive</span
          >
          <span
            v-show="row.deleted_at == null"
            v-if="row.status == 1"
            class="badge bg-primary"
            >Active</span
          >
          <span v-show="row.deleted_at != null" class="badge bg-danger"
            >Deleted</span
          >
        </div>

        <div slot="roles" slot-scope="{ row }">
          <span v-text="row.roles.map((a) => a.name).join(',')"></span>
        </div>

        <div
          slot="actions"
          slot-scope="{ row }"
          class="d-flex justify-content-around"
        >
          <a
            v-show="$can('admin_update')"
            href=""
            @click.prevent="edit(row)"
            title="Admin Edit"
            ><font-awesome-icon :icon="['far', 'edit']"
          /></a>

          <a
            v-show="$can('admin_delete')"
            href=""
            title="Admin Delete"
            @click.prevent="userdelete(row, i)"
            ><font-awesome-icon
              class="text-danger"
              :icon="['far', 'trash-alt']"
          /></a>

          <a
            v-show="$can('admin_view')"
            href=""
            title="Admin Detail"
            @click.prevent="userdetail(row)"
            ><font-awesome-icon
              class="text-danger"
              :icon="['fas', 'info-circle']"
          /></a>

          <a
            v-if="row.deleted_at != null"
            v-show="$can('admin_update')"
            href=""
            title="Admin Delete"
            @click.prevent="userrestore(row)"
            ><font-awesome-icon class="text-danger" :icon="['fas', 'redo-alt']"
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
        'student_id',
        'status',
        'roles',
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
  mounted() {},
  methods: {
    edit(data) {
      console.log(data)
      this.$nuxt.$router.push('/admins/edit/' + data.id)
      // this.$router.push({
      //   path: '/admins/edit/' + data.id,
      // })
    },

    userdetail(data) {
      console.log(data)
      this.$nuxt.$router.push('/admins/detail/' + data.id)
    },

    userdelete(data, i) {
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
            '/admin/admins/' +
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

    userrestore(data) {
      console.log(data)

      if (confirm('Are you sure ?')) {
        console.log(data.deleted_at != null)
        let vm = this
        vm.loading = true

        this.$axios
          .get('admin/admins/restore/' + data.id)
          .then((res) => {
            vm.loading = false
            this.selectData = 'all'
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
            } else {
              this.getmessage('')
            }
          })
      }
    },

    userresetpass(data) {
      console.log(data)

      if (confirm('Are you sure to change the password ?')) {
        console.log(data.deleted_at != null)
        let vm = this
        vm.loading = true

        this.$axios
          .get('admin/admins/resetpass/' + data.id)
          .then((res) => {
            vm.loading = false

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
            } else {
              this.getmessage('')
            }
          })
      }
    },
  },
}
</script>
