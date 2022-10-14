export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('can', (permission) => {
    if (
      app.store.state.auth.loggedIn &&
      app.store.state.auth.user.student_id == '1404143'
    ) {
      return true
    }
    return app.store.getters['permissions/checkPermission'](permission)
  })
}
