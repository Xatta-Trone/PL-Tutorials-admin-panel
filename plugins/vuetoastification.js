import Vue from 'vue'
import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const options = {
  position: 'bottom-right',
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
}

Vue.use(Toast, options)
