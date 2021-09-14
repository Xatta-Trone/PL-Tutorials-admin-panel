
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <div>
        <pageheader
          title="Contact reply"
          :urlto="'/contacts'"
          urltxt="Go back"
        ></pageheader>

        <div class="card" v-if="form.id">
          <div class="card-content">
            <div class="card-body">
              <h4 class="card-title">From: {{ form.name }}</h4>
              <h6 class="card-subtitle my-1">Subject: {{ form.subject }}</h6>
              <h6 class="card-subtitle my-1">Email: {{ form.email }}</h6>
              <h6 class="card-subtitle my-1" v-show="form.admin != null">
                Seen By: {{ form.admin.name }}
              </h6>
              <p class="card-text">
                {{ form.body }}
              </p>
            </div>
          </div>
        </div>


          <div class="card">
          <div class="card-content">
            <form class="form form-vertical">
              <div class="form-body">
                <h4 class="card-title">Write new reply</h4>
                <div class="row">
                  <custom-form
                    :validator="$v.new_reply.subject"
                    attribute="Subject"
                  >
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">Subject</label>
                        <div class="position-relative">
                          <input
                            :class="{
                              'is-invalid ': $v.new_reply.subject.$error,
                            }"
                            v-model="new_reply.subject"
                            @input="$v.new_reply.subject.$touch()"
                            name="subject"
                            type="text"
                            class="form-control"
                            placeholder="Emeil subject"
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="subject"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">Mail to</label>
                        <div class="position-relative">
                          <input
                            :class="{
                              'is-invalid ': $v.new_reply.mailto.$error,
                            }"
                            v-model="new_reply.mailto"
                            @input="$v.new_reply.mailto.$touch()"
                            name="mailto"
                            type="text"
                            class="form-control"
                            placeholder="Emeil mailto"
                            id="first-name-icon"
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="mailto"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <custom-form
                    :validator="$v.new_reply.contact_id"
                    attribute="Post type"
                  >
                    <div class="col-12">
                      <div class="">
                        <div>
                          <input
                            :class="{
                              'is-invalid ': $v.new_reply.contact_id.$error,
                            }"
                            v-model="new_reply.contact_id"
                            @input="$v.new_reply.contact_id.$touch()"
                            name="contact_id"
                            type="hidden"
                            id="contact_id"
                          />
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="contact_id"
                        />
                      </div>
                    </div>
                  </custom-form>



                  <custom-form
                    :validator="$v.new_reply.body"
                    attribute="Email body"
                  >
                    <div class="col-12">
                      <div class="">
                        <label for="first-name-icon">Email body</label>
                        <div>
                          <quill-editor
                            :class="{
                              'is-invalid ': $v.new_reply.body.$error,
                            }"
                            v-model="new_reply.body"
                            @input="$v.new_reply.body.$touch()"
                            name="body"
                            type="hidden"
                            id="body"
                            rows="10"
                          >
                          </quill-editor>
                        </div>
                        <custom-error
                          :servererrors="serverErrors"
                          chkkey="body"
                        />
                      </div>
                    </div>
                  </custom-form>

                  <div class="col-12 d-flex justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-primary me-1 mb-1"
                      @click.prevent="submit"
                      :disabled="loading"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <section id="list-group-icons" v-if="form.replies.length > 0">
          <div class="row match-height">
            <div class="col-lg-12 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Replies</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div class="list-group">
                      <div
                        href="#"
                        class="list-group-item list-group-item-action active my-2"
                        v-for="reply in form.replies"
                        :key="reply.id"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1 text-white">
                            {{ reply.subject }}
                          </h5>
                          <small>{{ timeSince(reply.created_at) }}</small>
                        </div>
                        <p class="mb-1" v-html="reply.body">

                        </p>
                        <small>{{ reply.repliedby.name }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  </div>
</template>

<script>
import { required, url } from 'vuelidate/lib/validators'
import CustomForm from '~/components/vuelidate/CustomForm.vue'
import CustomError from '~/components/vuelidate/CustomError.vue'

export default {
  // middleware: 'guest',
  layout: 'app',
  components: { CustomForm, CustomError },

  data() {
    return {
      loading: false,
      form: {
        id: '',
        name: '',
        email: '',
        subject: '',
        body: '',
        status: '',
        replied: '',
        replied_by: '',
        created_at: '',
        updated_at: '',
        replies: [],
        admin: [],
      },
      new_reply: {
        contact_id: '',
        subject: '',
        body: '',
        mailto: '',
      },
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  methods: {
    removeError(i) {
      console.log(i)
      this.serverErrors.splice(i, 1)
    },

    getData() {
      let vm = this
      let id = vm.$nuxt.$route.params.id
      vm.loading = true
      console.log(id)
      vm.$axios
        .get('admin/contacts/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.form = res.data.post

          // if (res.data.hasKey('status')) this.getmessage()
        })
        .then(() => {
          this.new_reply.contact_id = this.form.id
          this.new_reply.mailto = this.form.email
          this.new_reply.subject =
            this.form.subject != null ? 'Re: ' + this.form.subject : 'Response'
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

    submit() {
      this.loading = true
      console.log('submit!')
      this.$v.$touch()
      this.serverErrors = []

      if (this.$v.$invalid) {
        this.loading = false
        return this.$toast.error('Filup the required fields!!')
      }
      let vm = this

      var bodyFormData = new FormData()

      for (const key in this.form) {
        bodyFormData.append(key, this.form[key])
      }

      console.log(bodyFormData)
      let id = vm.$nuxt.$route.params.id
      this.$axios
        .put('admin/contacts/' + id, this.new_reply)
        .then((res) => {
          vm.loading = false
          console.log(res)

          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.$v.$reset()
          this.$router.push('/contacts')
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
  },

  validations: {
    new_reply: {
      contact_id: {
        required,
      },
      subject: {
        required,
      },

      body: {
        required,
      },

      mailto: {
        required,
      },
    },
  },
}
</script>
