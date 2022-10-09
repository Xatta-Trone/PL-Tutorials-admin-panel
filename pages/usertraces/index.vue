
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
          <span @click="view(row)" style="cursor:pointer;">{{ row.user_name }}</span>
        </div>
         <div slot="actions" slot-scope="{ row }">

              <a href="" @click.prevent="gotoDevice(row.fingerprint)" title="Device history"><font-awesome-icon :icon="['fas', 'laptop']"
              /></a>
              <button class="btn" @click="showLocationDetails(row.user_ip)" title="IP Address detail">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
              </button>
              <span v-show="row.pat_id != null">
                <button class="btn" @click="showUserDetailByLogin(row)" title="Activity by login">
                <font-awesome-icon :icon="['fas', 'list']" />
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
        'user_name',
        'user_student_id',
        'user_ip',
        'device',
        'location',
        'created_at',
        'fingerprint',
        'actions'
      ],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {
          user_student_id: 'Student ID',
          user_name: 'Name',
          user_ip: 'IP',
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
    view(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/detail/' + data.user_id)
    },
    gotoDevice(data){
      console.log(data)
      this.$nuxt.$router.push('/users/device/' + data)
    },

    showLocationDetails(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/ipaddress/' + data)
    },
    showUserDetail(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/detail/' + data.user_id)
    },
     showUserDetailByLogin(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/activity-by-login/' + data.pat_id)
    },
  },
}
</script>
