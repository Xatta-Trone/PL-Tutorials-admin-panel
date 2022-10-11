
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader
        :title="'BUG #' + $nuxt.$route.params.id + ''"
        urlto="/bugs"
        urltxt="Go back"
      ></pageheader>
      <div class="card">
        <div class="card-content">
          <form class="form form-vertical">
            <div class="form-body">
              <div class="row">
                <ul class="list-group" v-if="bug">
                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1">Detail</span>
                    {{ bug.message }}
                  </li>
                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1">Is seen</span>
                    {{ bug.is_seen ? 'Yes' : 'No' }}
                  </li>
                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1"
                      >Attachments</span
                    >

                    <span v-show="bug.files">
                      <span v-for="file in JSON.parse(bug.files)" :key="file">
                        <img
                          :src="mainurl + '/storage/bugs/' + file"
                          class="uploading-image"
                        />
                      </span>
                    </span>
                  </li>

                  <li class="list-group-item">
                    <span class="badge bg-danger badge-pill ml-1"
                      >Submitted</span
                    >
                    {{ bug.created_at }}
                  </li>
                </ul>
              </div>
            </div>
          </form>
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
      bug: null,
    }
  },
  mounted() {
    console.log(this.$nuxt.$route.params.id)
    this.getData()
  },

  computed: {
    images() {
      if (this.bug && this.bug.files.length > 0) {
        return this.bug.files.map((file) => {
          return this.mainurl + '/storage/bugs/' + file
        })
      }
    },
  },

  methods: {
    getData() {
      let vm = this
      let id = vm.$nuxt.$route.params.id
      vm.loading = true
      console.log(id)
      vm.$axios
        .get('admin/bugs/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.bug = res.data.data

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
