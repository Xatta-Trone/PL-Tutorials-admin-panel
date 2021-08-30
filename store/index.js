import Vue from 'vue'
import sideBarItems from './data/sideBarItems'

export const state = () => ({
  sideBarItems,

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
    // console.log(permission, state.permissions.includes(permission))
    return state.permissions.includes(permission)
  },
}
