
<template>
  <div>
    {{ $config.BASE_URL }}
    <pageheader title="Users"></pageheader>
    <v-server-table
      url="http://pltutorials8.xt:8080/api/v1/admin/users"
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
        <a href="" @click.prevent="handle(row)"
          ><font-awesome-icon :icon="['far', 'edit']"
        /></a>
        <a href="" @click.prevent="handle(row)"
          ><font-awesome-icon class="text-danger" :icon="['far', 'trash-alt']"
        /></a>
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
      columns: ['id', 'name', 'email', 'student_id', 'status', 'actions'],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
      },
    }
  },
  methods: {
    handle(data) {
      console.log(data)
    },
  },
}
</script>
