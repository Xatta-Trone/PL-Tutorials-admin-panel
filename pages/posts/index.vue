
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        title="Posts"
        :urlto="this.$nuxt.$route.fullPath + '/add'"
        urltxt="Add Post"
      ></pageheader>

      <div class="col-12"></div>
      <v-server-table
        :url="serverurl + 'admin/posts?type=' + selectData"
        :columns="columns"
        :options="options"
      >
        <div slot="status" slot-scope="{ row }">
          <span v-if="row.status == 1" class="badge bg-primary">Active</span>
          <span v-if="row.status == 2" class="badge bg-info">Peding</span>
          <span v-if="row.status == 3" class="badge bg-secondary">Draft</span>
          <span v-if="row.status == 4" class="badge bg-warning">Private</span>
          <span v-if="row.status == 5" class="badge bg-danger">Rejected</span>
        </div>
        <div
          slot="actions"
          slot-scope="{ row }"
          class="d-flex justify-content-around"
        >
          <a
            v-show="$can('post_update')"
            href=""
            @click.prevent="edit(row)"
            title="Post Edit"
            ><font-awesome-icon :icon="['far', 'edit']"
          /></a>

          <a
            v-show="$can('post_delete')"
            href=""
            title="Post Delete"
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
        'department_slug',
        'level_term_slug',
        'course_slug',
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
          department_slug: 'Department',
          level_term_slug: 'Leverl Term',
          course_slug: 'Course',
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
      this.$nuxt.$router.push('/posts/edit/' + data.id)
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
            '/admin/posts/' + data.id + '?forcedelete=' + forcedelete.toString()
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
