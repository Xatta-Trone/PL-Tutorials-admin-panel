export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mazer-static-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap',
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/bootstrap.css',
      },

      {
        rel: 'stylesheet',
        href: '/assets/vendors/bootstrap-icons/bootstrap-icons.css',
      },

      {
        rel: 'stylesheet',
        href: '/assets/css/app.css',
      },
    ],
    script: [
      // {
      //   src: '/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js',
      //   type: 'text/javascript',
      //   body: true,
      // },
      // {
      //   src: '/assets/js/bootstrap.bundle.min.js',
      //   body: true,
      // },
      // {
      //   src: '/assets/js/main.js',
      //   body: true,
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  script: [
    // '/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js',
    // '/assets/js/bootstrap.bundle.min.js',
    // '/assets/js/main.js',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {
    //   src: '~/plugins/mazer/vendors/perfect-scrollbar/perfect-scrollbar.min.js',
    //   ssr: false,
    // },
    {
      src: '~/plugins/mazer/js/bootstrap.min.js',
      ssr: false,
    },
    // {
    //   src: '~/plugins/perfect-scrollbar.js',
    //   ssr: false,
    // },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'nuxt-lazy-load',
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
