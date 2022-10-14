<template>
  <div>
    <div class="row" v-if="dashboard">
      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon green">
                  <i class="iconly-boldDiscount"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">New Contact</h6>
                <h6 class="font-extrabold mb-0">{{ dashboard.new_contact }}</h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/contacts" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon red">
                  <i class="iconly-boldProfile"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">New User (today)</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.new_user_today }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/users" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon red">
                  <i class="iconly-boldProfile"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">New User (week)</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.new_user_thisweek }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/users" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

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
          <div class="card-text text-center">
            <nuxt-link to="/activities" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon red">
                  <i class="iconly-boldProfile"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Currently Online</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.online_users }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/users" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
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
                <h6 class="text-muted font-semibold">Users (total)</h6>
                <h6 class="font-extrabold mb-0">{{ dashboard.users_total }}</h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/users" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon red">
                  <i class="iconly-boldPaper-Download"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Downloads</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_downloads }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/activities" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldWork"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">User Data</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_userdatas }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/userdata" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon green">
                  <i class="iconly-boldScan"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Softwares</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_softwares }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/softwares" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon purple">
                  <i class="iconly-boldInfo-Square"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Books</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_books }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/books" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon blue">
                  <i class="iconly-boldBookmark"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Posts</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_posts }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/posts" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon green">
                  <i class="iconly-boldMessage"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Testimonials</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_testimonial }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/testimonials" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon red">
                  <i class="iconly-boldPaper-Fail"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Faqs</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.total_faq }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/faqs" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body px-3 py-4-5">
            <div class="row">
              <div class="col-md-4">
                <div class="stats-icon red">
                  <i class="iconly-boldPaper-Fail"></i>
                </div>
              </div>
              <div class="col-md-8">
                <h6 class="text-muted font-semibold">Bugs</h6>
                <h6 class="font-extrabold mb-0">
                  {{ dashboard.bugs }}
                </h6>
              </div>
            </div>
          </div>
          <div class="card-text text-center">
            <nuxt-link to="/bugs" class="btn btn-light w-100"
              >Visit page</nuxt-link
            >
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

    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="chart-tab"
              data-bs-toggle="tab"
              href="#chart"
              role="tab"
              aria-controls="chart"
              aria-selected="true"
              >Chart View</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              tabindex="-1"
              >Table view</a
            >
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade active show"
            id="chart"
            role="tabpanel"
            aria-labelledby="chart-tab"
          >
            <apexchart
              ref="piechart"
              width="100%"
              height="300"
              type="pie"
              :options="deptbachDataChart.options"
              :series="deptbachDataChart.series"
            ></apexchart>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <v-client-table
              ref="deptData"
              :data="tabledata.deptBatchDataTable"
              :columns="tabledata.columns"
              :options="tabledata.options"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'app',
  head: {
    title: 'Dashboard',
    meta: [],
  },
  computed: {
    getDeptBatchDataForTable() {
      if (this.deptBatchData.length > 0) {
        return this.deptBatchData.labels.map(label, (index) => {
          return {
            deptBatch: label,
            count: this.deptBatchData.data[index],
          }
        })
      }

      return []
    },
  },
  data() {
    return {
      loading: false,
      dashboard: {},
      chartData: [],
      deptBatchData: [],
      deptBatchDataTable: [],
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
      deptbachDataChart: {
        options: {
          chart: {
            id: 'vuechart-pie',
          },
          labels: [],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
          noData: {
            text: 'Loading...',
          },
        },
        series: [],
      },
      tabledata: {
        columns: ['label', 'data'],
        deptBatchDataTable: [],
        options: {},
      },
    }
  },
  mounted() {
    // this.$forceUpdate()
    // this.$nextTick(() => window.location.reload())
    this.getData()
    this.getChartData()
    this.getDeptBatchData()
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

    getDeptBatchData() {
      let vm = this
      vm.$axios
        .get('admin/dashboard/deptbatchdatapie')
        .then((res) => {
          console.log(res.data)
          vm.deptBatchData = res.data

          vm.deptbachDataChart.options = {
            ...vm.deptbachDataChart.options,

            labels: res.data['labels'],
            series: res.data['data'],
          }

          // add to table data

          if (res.data['labels']) {
            // console.log(res.data.labels);

            this.$refs.deptData.setLoadingState(true)

            vm.tabledata.deptBatchDataTable = res.data.labels.map(
              (label, index) => {
                return { label, data: res.data.data[index] }
              }
            )
          }

          this.$refs.deptData.setLoadingState(false)

          // vm.$refs.realtimeChart.updateSeries(res.data['data'])
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
