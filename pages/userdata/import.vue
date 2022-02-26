
<template>
  <div>
    <pageheader
      title="Import User Data"
      :urlto="'/userdata'"
      urltxt="Go back"
    ></pageheader>

    <div class="row">
      <div class="col-12">
        <ul class="list-group">
          <li class="list-group-item active">Follow the steps</li>
          <li class="list-group-item">
            1. Download a backup first of old data.
            <a
              _target="blank"
              :href="`${$axios.defaults.baseURL}admin/dummyuserdata/download`"
              class="btn icon icon-left btn-primary"
              >Download backup data</a
            >
          </li>
          <li class="list-group-item">2. Now upload the new data</li>
          <li class="list-group-item">
            <input
              class="form-control"
              type="file"
              id="formFile"
              name="image"
              @change="uploadExcel($event)"
            />
          </li>
          <li class="list-group-item">
            3. Now upload the data
            <button
              :disabled="loading"
              href="#"
              class="btn icon icon-left btn-primary"
              @click.prevent="submit"
            >
              {{ loading ? 'Uploading data' : 'Upload data' }}
            </button>

            <small class="text-danger"
              >It may take a minute or two, please wait till notification
              appears</small
            >
          </li>
          <li class="list-group-item">
            4. If successfully uploaded then click on the button below.

            <span class="text-danger">
              If not successful contact
              <a
                target="_blank"
                href="https://www.facebook.com/monzurul.islam1112"
                >Monzurul ISLAM</a
              >
              immediately.
            </span>
          </li>
          <li class="list-group-item">
            5. Merge data if successully uploaded
            <button
              :disabled="!loadingmerge"
              href="#"
              class="btn icon icon-left btn-primary"
              @click.prevent="merge"
            >
              {{ mergedatatext }}
            </button>
          </li>
        </ul>
      </div>
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
      file: '',
      loading: false,
      loadingmerge: false,
      mergedatatext: 'Merge data',
    }
  },
  methods: {
    uploadExcel(e) {
      // const image = e.target.files[0]
      this.file = e.target.files[0]
    },
    submit() {
      this.loading = true
      console.log('submit!')
      let vm = this

      var bodyFormData = new FormData()
      bodyFormData.append('file', this.file)

      this.$axios
        .post('admin/dummyuserdata', bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          vm.loading = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          if (res.data.hasOwnProperty('count')) {
            this.successmessage(
              res.data.count + ' records inserted successfully'
            )
          }
          this.loadingmerge = true

          if (res.data.hasKey('status')) this.getmessage()
        })
        .catch((err) => {
          vm.loading = false
          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          }
          if (err.response.data.hasOwnProperty('errors')) {
            this.serverErrors = Object.entries(err.response.data.errors)
          }
        })
    },
    merge() {
      this.loadingmerge = false
      this.mergedatatext = 'Merging data...'
      console.log('submit!')
      let vm = this

      this.$axios
        .get('admin/dummyuserdata')
        .then((res) => {
          vm.loadingmerge = true
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
            this.successmessage('congratulations on success')
          }

          if (res.data.hasKey('status')) this.getmessage()
        })
        .catch((err) => {
          vm.loadingmerge = true
          console.log('Errrr', err)
          if (err.response.data.hasOwnProperty('message')) {
            this.getmessage(err.response.data.message)
          }
          if (err.response.data.hasOwnProperty('errors')) {
            this.serverErrors = Object.entries(err.response.data.errors)
          }
        })
        .finally(() => {
          this.mergedatatext = 'Merge data'
        })
    },
  },
  mounted() {},
}
</script>

<style lang="css">
.VueTables__error {
  color: red;
}
</style>
