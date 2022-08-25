// const baseURL = 'https://pl8.xattabyte.com/api/v1'
// const serverURL = 'https://pl8.xattabyte.com/api/v1/'

const baseURL = process.env.AUTH_URL
const serverURL = process.env.SERVER_URL

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  generate: {
    concurrency: 1,
  },
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
        href: '/assets/vendors/iconly/bold.css',
      },

      {
        rel: 'stylesheet',
        href: '/assets/css/app.css',
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/custom.css',
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
    {
      src: '~/plugins/mazer/js/bootstrap.min.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-tables-2.js',
    },
    {
      src: '~/plugins/fontawesome.js',
    },
    {
      src: '~/plugins/vuetoastification.js',
    },
    {
      src: '~/plugins/mixin.js',
    },
    {
      src: '~/plugins/vue-gates.js',
    },
    {
      src: '~/plugins/can.js',
    },
    {
      src: '~/plugins/vuelidate.js',
    },
    {
      src: '~/plugins/contentplaceholder.js',
    },
    {
      src: '~/plugins/quill.js',
    },
    {
      src: '~/plugins/fingerprint.js',
    },

    {
      src: '~/plugins/apexchart.js',
    },
    {
      src: '~/plugins/markdown.js',
    },

    {
      src: '~/plugins/echo.js',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      '@nuxtjs/laravel-echo',
      {
        broadcaster: 'pusher',
        key: '0d804a37eb14ea67a5ce',
        cluster: 'ap1',
        forceTLS: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'nuxt-lazy-load',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
  ],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: baseURL,

        endpoints: {
          login: { url: '/admin/login', method: 'post' },
          logout: { url: '/admin/logout', method: 'get' },
          user: { url: '/admin/me', method: 'get' },
        },
        user: {
          // property: 'user',
          autoFetch: true,
        },
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer',
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/',
    },
    localStorage: false,
    resetOnError: true,
    rewriteRedirects: true,
    watchLoggedIn: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    baseURL: serverURL,
    requestInterceptor: (config, { store }) => {
      config.headers.common['access-token'] =
        store.state.user.headers.access_token
      config.headers.common['token-type'] = store.state.user.headers.token_type
      config.headers.common['client'] = store.state.user.headers.client
      config.headers.common['expiry'] = store.state.user.headers.expiry
      config.headers.common['uid'] = store.state.user.headers.uid
      config.headers.common['Access-Control-Allow-Origin'] = '*'

      return config
    },
    responseInterceptor: (res, ctx) => {},
    // proxy: true,
    // prefix: '/admin/',
  },
  // proxy: {
  //   '/api/': { target: serverURL, pathRewrite: { '^/api/': '' } },
  // },

  // proxy: {
  //   // '/admin/': {
  //   //   target: serverURL,
  //   // },
  //   // '/laravel': {
  //   //   target: baseURL,
  //   //   pathRewrite: { '^/laravel': '/' },
  //   // },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // use vue mixins
    transpile: ['mixins'],
  },
  router: {
    middleware: ['auth'],
  },
  echo: {},
}
