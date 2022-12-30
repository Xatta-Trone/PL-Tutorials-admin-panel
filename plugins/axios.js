export default ({ $axios, env }) => {
  $axios.onRequest((config) => {
    config.headers.common['API-V'] = `2`
  })
}
