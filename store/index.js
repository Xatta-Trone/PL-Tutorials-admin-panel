import Vue from 'vue'
import sideBarItems from './data/sideBarItems'

export const state = () => ({
  sideBarItems,
  URL: 'http://pltutorials8.xt:8080/api/v1/',
  permissions: [],
})

export const mutations = {
  addPermissions(state, permissions) {
    state.permissions = permissions
  },
  removePermissions(state) {
    state.permissions = []
  },
}

export const getters = {
  checkPermission: (state) => (permission) => {
    console.log(permission, state.permissions.includes(permission))
    return state.permissions.includes(permission)
  },
}
