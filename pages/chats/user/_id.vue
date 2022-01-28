
<template>
  <div>
    <content-placeholders v-if="loading">
      <content-placeholders-heading :img="true" />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
    <div v-else>
      <pageheader title="Chat" urlto="/users" urltxt="Go back"></pageheader>
      <section class="section">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <div class="media d-flex align-items-center">
                  <div class="avatar me-3">
                    <img
                      src="~/static/assets/images/faces/1.jpg"
                      alt=""
                      srcset=""
                    />
                    <span class="avatar-status bg-success"></span>
                  </div>
                  <div class="name flex-grow-1">
                    <h6 class="mb-0" v-if="user">{{ user.name }}</h6>
                    <span class="text-xs">Online</span>
                  </div>
                  <button class="btn btn-sm">
                    <i data-feather="x"></i>
                  </button>
                </div>
              </div>
              <div class="card-body pt-4 bg-grey">
                <div class="chat-content">
                  <div
                    class="chat"
                    :class="{ 'chat-left': msg.replied_by == null }"
                    v-for="msg in messages"
                    :key="msg.id"
                  >
                    <div class="chat-body">
                      <div class="chat-message">
                        <small>{{ timeSince(msg.created_at) }}</small
                        ><br />

                        {{ msg.message }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div
                  class="
                    message-form
                    d-flex
                    flex-direction-column
                    align-items-center
                  "
                >
                  <a href="http://" class="black"
                    ><i data-feather="smile"></i
                  ></a>
                  <div class="d-flex flex-grow-1 ml-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Type your message.."
                      v-model="currentmessage.message"
                      @keyup.enter="submit"
                      :disabled="chatboxdisabled"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import CustomForm from '~/components/vuelidate/CustomForm.vue'
import CustomError from '~/components/vuelidate/CustomError.vue'

export default {
  layout: 'app',
  components: { CustomForm, CustomError },

  data() {
    return {
      loading: false,
      chatboxdisabled: false,
      user: null,
      messages: [],
      currentmessage: {
        message: '',
        user_id: this.$nuxt.$route.params.id,
        replied_by:
          this.$nuxt.$auth.user.name + '||' + this.$nuxt.$auth.user.student_id,
      },
    }
  },
  mounted() {
    console.log(this.$nuxt.$route.params.id)
    this.getData()
    // this.getUser()
  },

  methods: {
    removeError(i) {
      console.log(i)
      this.serverErrors.splice(i, 1)
    },
    getData() {
      let vm = this
      let id = vm.$nuxt.$route.params.id
      vm.loading = true

      vm.$axios
        .get('admin/users/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.user = res.data.user
        })
        .then(() => this.getMessages())
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

    getMessages() {
      let vm = this
      let id = vm.$nuxt.$route.params.id
      vm.loading = true

      vm.$axios
        .get('admin/users/chat/' + id)
        .then((res) => {
          vm.loading = false
          console.log(res)
          vm.messages = res.data.chat

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

    submit() {
      console.log('submit!')
      this.$v.$touch()
      this.serverErrors = []

      if (this.$v.$invalid) {
        return this.$toast.error('Filup the required fields!!')
      }
      let vm = this
      let id = vm.$nuxt.$route.params.id
      vm.chatboxdisabled = true
      this.$axios
        .post('admin/chats/create', this.currentmessage)
        .then((res) => {
          vm.messages.push(res.data.chat)
          vm.currentmessage.message = ''
          vm.chatboxdisabled = false
          console.log(res)
          if (res.data.hasOwnProperty('message')) {
            this.getmessage(res.data.message)
          }

          this.$v.$reset()
          // this.$router.push('/users')
        })
        .catch((err) => {
          vm.chatboxdisabled = false
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
    currentmessage: {
      message: {
        required,
      },
      user_id: {
        required,
      },
      replied_by: {
        required,
      },
    },
  },
}
</script>

<style scoped>
.chat {
  border-radius: 5px;
}
.chat.chat-left .chat-message {
  background: #5a8dee !important;
  color: #fff;
  float: left !important;
}
.chat .chat-message {
  background-color: #fafbfb !important;
  border-radius: 0.267rem !important;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3) !important;
  clear: both !important;
  color: #525361;
  float: right !important;
  margin: 0.2rem 0 1.8rem 0.2rem !important;
  max-width: calc(100% - 5rem) !important;
  padding: 0.75rem 1rem !important;
  position: relative !important;
  text-align: left !important;
  word-break: break-word !important;
}
</style>
