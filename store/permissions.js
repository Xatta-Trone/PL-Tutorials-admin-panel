export const state = () => ({
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

    // state.permissions.filter(function (e) {
    //   return e.name === permission
    // }).length > 0
  },
}
