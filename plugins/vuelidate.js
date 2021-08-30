import Vue from 'vue'
import vuelidate from 'vuelidate'
import vuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'
import CustomForm from '@/components/vuelidate/CustomForm.vue'

Vue.use(vuelidate)
Vue.use(vuelidateErrorExtractor, {
  /**
   * Optionally provide the template in the configuration.
   * or register like so Vue.component("FormField", templates.singleErrorExtractor.foundation6)
   */
  template: CustomForm, // you can also pass your own custom template
  // template: templates.singleErrorExtractor.bootstrap4, // you can also pass your own custom template
  messages: {
    required: 'The {attribute} field is required',
    email: 'Please enter a valid email address',
    integer: 'Please enter a valid integer',
    maxLength: 'The {attribute} must be {max} characters',
    url: 'The {attribute} must be a valid url',
  }, // error messages to use
  attributes: {
    // maps form keys to actual field names
    email: 'Email',
    first_name: 'First name',
    last_name: 'Last name',
    student_id: 'Student Id',
  },
})
