
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        :title="form.name + '\'s profile'"
        urlto="/admins"
        urltxt="Go back"
      ></pageheader>
      <div class="card">
        <div class="card-content">
          <form class="form form-vertical">
            <div class="form-body">
              <div class="row">
                <ul class="list-group" v-if="form">
                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1">Email</span>
                    {{ form.email }}
                  </li>
                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1"
                      >Student ID</span
                    >
                    {{ form.student_id }}
                  </li>
                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1"
                      >User Letter</span
                    >
                    {{ form.user_letter }}
                  </li>
                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1"
                      >Account Active</span
                    >
                    {{ form.status == 0 ? 'No' : 'Yes' }}
                  </li>

                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1">Joined</span>
                    {{ formatDateTime(form.created_at) }}
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h5 class="mt-3">Activity</h5>
          <v-server-table
            :url="
              serverurl + 'admin/admins/activitydata/' + $nuxt.$route.params.id
            "
            :columns="activity.columns"
            :options="activity.options"
          >
            <div slot="created_at" slot-scope="{ row }">
              {{ formatDateTime(row.created_at) }}
            </div>
            <div slot="model_type" slot-scope="{ row }">
              {{ row.model_type.split('\\').pop() }}
            </div>
            <div slot="actions" slot-scope="{ row }" v-show="row.data">
              <button
                type="button"
                class="btn btn-outline-primary block"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
                @click="selectedData = row"
              >
                Detail
              </button>
            </div>
          </v-server-table>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        style="display: none"
        aria-hidden="true"
      >
        <div
          class="
            modal-dialog
            modal-dialog-centered
            modal-dialog-centered
            modal-dialog-scrollable
            modal-xl
          "
          role="document"
        >
          <div class="modal-content" v-if="selectedData">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                {{ selectedData.label }}
              </h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <div class="table-responsive">
                <table class="table table-lg">
                  <thead>
                    <tr>
                      <th>Old Data</th>
                      <th>New Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td>
                        <span v-if="JSON.parse(selectedData.data).oldData != null">
                        {{ Object.keys(JSON.parse(selectedData.data).oldData).join("::")  }}
                        {{ Object.values(JSON.parse(selectedData.data).oldData).join("::")  }}
                        </span>
                      </td>
                      <td>
                        <span v-if="JSON.parse(selectedData.data).newData != null">
                        {{ Object.keys(JSON.parse(selectedData.data).newData).join("::")  }}
                        {{ Object.values(JSON.parse(selectedData.data).newData).join("::")  }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-light-secondary"
                data-bs-dismiss="modal"
              >
                <i class="bx bx-x d-block d-sm-none"></i>
                <span class="d-none d-sm-block">Close</span>
              </button>
            </div>
          </div>
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
      selectedData: null,
      activity: {
        columns: [
          'id',
          'activity',
          'model_type',
          'label',
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
      },
      location: {
        columns: [
          'id',
          'user_ip',
          'location',
          'device',
          'fingerprint',
          'created_at',
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
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
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
        .get('admin/admins/' + id)
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
  },
}
</script>
