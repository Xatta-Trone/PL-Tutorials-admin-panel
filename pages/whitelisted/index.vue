
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        title="Whitelisted user data"
        :urlto="this.$nuxt.$route.fullPath + '/add'"
        urltxt="Add new item"

      ></pageheader>

      <div class="col-12"></div>
      <v-server-table
        :url="serverurl + 'admin/whitelisted'"
        :columns="columns"
        :options="options"
      >
       <div slot="created_at" slot-scope="{ row }">
          {{ formatDateTime(row.created_at) }}
        </div>
        <div
          slot="actions"
          slot-scope="{ row }"
          class="d-flex justify-content-around"
        >
          <a
            v-show="$can('user_update')"
            href=""
            @click.prevent="edit(row)"
            title="Edit"
            ><font-awesome-icon :icon="['far', 'edit']"
          /></a>

          <a
            v-show="$can('user_delete')"
            href=""
            title="Delete"
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
        'user_name',
        'user_student_id',
        'access_type',
        'data_type',
        'data',
        'created_at',
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
      this.$nuxt.$router.push('/whitelisted/edit/' + data.id)
    },

    handleDelete(data, i) {
      console.log(data, i)
      let msg = 'Are you sure ?'


      if (confirm(msg)) {
        let vm = this
        vm.loading = true
        this.$axios
          .delete(
            '/admin/whitelisted/' +
              data.id
          )
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
            }
          })
      }
    },
  },
}
</script>
