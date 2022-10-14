import Vue from 'vue'
import { ServerTable, ClientTable, Event } from 'vue-tables-2'
import MySortControl from '~/components/datatables/MySortControl'

// Vue.use(
//   ServerTable,
//   [(options = {})],
//   [(useVuex = false)],
//   [(theme = 'bootstrap3')],
//   [(swappables = {})]
// )
Vue.use(ClientTable)
Vue.use(ServerTable, {}, false, 'bootstrap4', {
  sortControl: MySortControl,
})
window.axios = require('axios')
