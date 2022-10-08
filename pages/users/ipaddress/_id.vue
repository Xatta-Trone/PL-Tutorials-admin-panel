
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        :title="'Ip Address :' + $nuxt.$route.params.id"
        :urlto="$nuxt.context.from ? $nuxt.context.from.fullPath : '/users'"
        urltxt="Go back"
      ></pageheader>
      <div class="row">
        <div class="col-12">
          <h5 class="mt-3">Users who have used this IP address</h5>
          <v-server-table
            :url="
              serverurl + 'admin/users/ip-data/' + $nuxt.$route.params.id
            "
            :columns="location.columns"
            :options="location.options"
          >
            <div slot="created_at" slot-scope="{ row }">
              {{ formatDateTime(row.created_at) }}
            </div>
            <div slot="user" slot-scope="{ row }">
              {{ row.user.name }} ({{ row.user.student_id }})
            </div>
            <div slot="actions" slot-scope="{ row }">
              <button class="btn" @click="showUserDetail(row)" title="User detail">
                <font-awesome-icon :icon="['fas', 'user']" />
              </button>
              <button class="btn" @click="gotoDevice(row)" title="Device details">
                <font-awesome-icon :icon="['fas', 'laptop']" />
              </button>
              <span v-show="row.pat_id != null">
                <button class="btn" @click="showUserDetailByLogin(row)" title="Details by login id">
                <font-awesome-icon :icon="['fas', 'list']" />
              </button>
              </span>
            </div>
          </v-server-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',

  data() {
    return {
      loading: false,
      form: {},
      location: {
        columns: [
          'id',
          'user_ip',
          'user',
          'location',
          'device',
          'created_at',
          'actions',
        ],
        options: {
          perPage: 10,
          perPageValues: [5, 10, 15, 25, 50, 100],
          pagination: { chunk: 5 },
          orderBy: { ascending: false },
          headings: {
            user_ip: 'IP address',
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
      },
    }
  },
  mounted() {
    console.log(this.$nuxt.$route.params.id)
  },

  methods: {
    formatDateTime(stringdate) {
      // console.log(stringdate)
      var date = new Date(stringdate)
      // return today.toLocaleString('en-us', options)

      var strArray = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      var d = date.getDate()
      var m = strArray[date.getMonth()]
      var y = date.getFullYear()
      var hours = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()
      var minutes = date.getMinutes()
      var ampm = hours >= 12 ? 'PM' : 'AM'
      return (
        '' +
        (d <= 9 ? '0' + d : d) +
        '-' +
        m +
        '-' +
        y +
        ' ' +
        hours +
        ':' +
        minutes +
        ' ' +
        ampm
      )
    },

    showLocationDetails(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/ipaddress/' + data.user_ip)
    },
    showUserDetail(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/detail/' + data.user_id)
    },
     showUserDetailByLogin(data) {
      console.log(data)
      this.$nuxt.$router.push('/users/detail/' + data.pat_id)
    },
     gotoDevice(data){
      console.log(data)
      this.$nuxt.$router.push('/users/device/' + data.fingerprint)
    }
  },
}
</script>
