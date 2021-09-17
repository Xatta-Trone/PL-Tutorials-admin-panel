
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        title="testimonials"
        :urlto="this.$nuxt.$route.fullPath + '/add'"
        urltxt="Add testimonials"
      ></pageheader>

      <div class="col-12"></div>
      <v-server-table
        :url="serverurl + 'admin/testimonials?type=' + selectData"
        :columns="columns"
        :options="options"
      >
        <div slot="status" slot-scope="{ row }">
          <span v-if="row.status == 0" class="badge bg-danger">Inactive</span>
          <span v-if="row.status == 1" class="badge bg-primary">Active</span>
        </div>
        <div
          slot="actions"
          slot-scope="{ row }"
          class="d-flex justify-content-around"
        >
          <a
            v-show="$can('testimonial_update')"
            href=""
            @click.prevent="edit(row)"
            title="Testimonial Edit"
            ><font-awesome-icon :icon="['far', 'edit']"
          /></a>

          <a
            v-show="$can('testimonial_delete')"
            href=""
            title="Testimonial Delete"
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
      columns: ['id', 'name', 'user_letter', 'dept_batch', 'status', 'actions'],
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
      this.$nuxt.$router.push('/testimonials/edit/' + data.id)
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
            '/admin/testimonials/' +
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
