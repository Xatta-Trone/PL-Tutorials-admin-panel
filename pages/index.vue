<template>
  <div>
    hello admin

    <span v-if="this.$store.state.auth.loggedIn"
      >{{ this.$auth.user.name }}
    </span>
    <button @click="logout">logout</button>

    <div class="row" v-if="dashboard">
      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon purple">
                  <i class="iconly-boldActivity"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Activities</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_activities }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Total Users</h6>
                <h6 class="font-extrabold mb-0">{{ dashboard.users_total }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">New Contact</h6>
                <h6 class="font-extrabold mb-0">{{ dashboard.new_contact }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Online users</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.online_users }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Total downloads</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_downloads }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Total userdata</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_userdatas }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Total software</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_softwares }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Total books</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_books }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Total posts</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_posts }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Total testimonials</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_testimonial }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldUser"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Total faqs</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_faq }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <h4>Activities in last 30 days</h4>
      <apexchart
        ref="realtimeChart"
        width="100%"
        height="300"
        type="line"
        :options="activity.options"
        :series="activity.series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'app',
  data() {
    return {
      loading: false,
      dashboard: {},
      chartData: [],
      activity: {
        options: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [],
            type: 'category',
          },
          noData: {
            text: 'Loading...',
          },
        },
        series: [],
      },
    }
  },
  mounted() {
    // this.$forceUpdate()
    // this.$nextTick(() => window.location.reload())
    this.getData()
    this.getChartData()
  },
  methods: {
    async logout() {
      try {
        let response = await this.$auth.logout('laravelSanctum')
        console.log(response)
        this.$gates.setPermissions([])

        // if (response.data == 1) {
        //   console.log(response.data)
        // }
        // this.$router.push('/login')
      } catch (err) {
        console.log('err', err)
      }
    },
    getData() {
      let vm = this
      vm.loading = true
      vm.$axios
        .get('admin/dashboard/all')
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.dashboard = res.data
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

    getChartData() {
      let vm = this
      vm.$axios
        .get('admin/dashboard/chartdata')
        .then((res) => {
          console.log(res)
          vm.chartData = res.data

          vm.activity.options = {
            ...vm.activity.options,

            xaxis: {
              categories: res.data['date'],
            },
          }

          vm.$refs.realtimeChart.updateSeries(res.data['data'])
        })
        .catch((err) => {
          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          } else {
            this.getmessage('')
          }
        })
    },
  },
}
</script>
