
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        :title="form.name + '\'s profile'"
       :urlto="$nuxt.context.from ? $nuxt.context.from.fullPath : '/users'"
        urltxt="Go back"
      ></pageheader>
      <div class="row">
        <ul class="list-group" v-if="form">
          <li class="list-group-item">
            <span class="badge bg-dark badge-pill ml-1">Email</span>
            {{ form.email }}
          </li>
          <li class="list-group-item">
            <span class="badge bg-dark badge-pill ml-1">Student ID</span>
            {{ form.student_id }}
          </li>
          <li class="list-group-item">
            <span class="badge bg-dark badge-pill ml-1">User Letter</span>
            {{ form.user_letter }}
          </li>
          <li class="list-group-item">
            <span class="badge bg-dark badge-pill ml-1">Account Active</span>
            {{ form.whitelisted == 0 ? 'No' : 'Yes' }}
          </li>
          <li class="list-group-item">
            <span class="badge bg-dark badge-pill ml-1">Whitelisted</span>
            {{ form.whitelisted == 0 ? 'No' : 'Yes' }}
          </li>
          <li class="list-group-item">
            <span class="badge bg-dark badge-pill ml-1">Joined</span>
            {{ formatDateTime(form.created_at) }}
          </li>
        </ul>

        <div class="col-12">
          <h5 class="mt-3">User Logins</h5>
          <v-server-table
            :url="
              serverurl + 'admin/users/locationdata/' + $nuxt.$route.params.id
            "
            :columns="location.columns"
            :options="location.options"
          >
            <div slot="created_at" slot-scope="{ row }">
              {{ formatDateTime(row.created_at) }}
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

        <div class="col-12">
          <h5 class="mt-3">Saved devices</h5>
          <v-server-table
            :url="
              serverurl + 'admin/users/saved-devices/' + $nuxt.$route.params.id
            "
            :columns="devices.columns"
            :options="devices.options"
          >
            <div slot="created_at" slot-scope="{ row }">
              {{ formatDateTime(row.created_at) }}
            </div>
            <div slot="actions" slot-scope="{ row }">

              <a href="" @click.prevent="gotoDevice(row.fingerprint)" title="Device history"><font-awesome-icon :icon="['fas', 'laptop']"
              /></a>
              <button class="btn" @click="showLocationDetails(row.ip_address)" title="IP Address detail">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
              </button>

            </div>
          </v-server-table>
        </div>

        <div class="col-12">
          <h5 class="mt-3">Activity</h5>
          <v-server-table
            :url="
              serverurl + 'admin/users/activitydata/' + $nuxt.$route.params.id
            "
            :columns="activity.columns"
            :options="activity.options"
          >
            <div slot="created_at" slot-scope="{ row }">
              {{ formatDateTime(row.created_at) }}
            </div>
             <div slot="actions" slot-scope="{ row }">


              <span v-show="row.pat_id != null">
                <button class="btn" @click="showUserDetailByLogin(row)" title="Activity by login">
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
      activity: {
        columns: ['id', 'activity', 'label', 'created_at','actions'],
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
      },
      location: {
        columns: [
          'id',
          'user_ip',
          'location',
          'device',
          'fingerprint',
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

      devices: {
        columns: [
          'id',  'ip_address', 'location', 'device', 'fingerprint', 'platform', 'created_at' ,'actions'
        ],
        options: {
          perPage: 10,
          perPageValues: [5, 10, 15, 25, 50, 100],
          pagination: { chunk: 5 },
          orderBy: { ascending: false },
          headings: {
            ip_address: 'IP address',
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
    this.getData()
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

    getData() {
      let vm = this
      let id = vm.$nuxt.$route.params.id
      vm.loading = true
      console.log(id)
      vm.$axios
        .get('admin/users/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.form = res.data.user

          // if (res.data.hasKey('status')) this.getmessage()
        })
        .catch((err) => {
          vm.loading = false
          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          } else {
            this.getmessage('')
          }
        })
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
