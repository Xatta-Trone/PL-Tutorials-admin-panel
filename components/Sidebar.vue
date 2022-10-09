<template>
  <div id="sidebar" class="active">
    <div class="sidebar-wrapper active">
      <div class="sidebar-header">
        <div class="d-flex justify-content-between">
          <div class="logo">
            <router-link to="/"
              ><img
                data-src="~/static/assets/images/logo/logo.png"
                v-lazy-load
                alt="Logo"
                srcset=""
            /></router-link>
          </div>
          <div class="toggler">
            <a href="#" class="sidebar-hide d-xl-none d-block"
              ><i class="bi bi-x bi-middle"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul class="menu">
          <li class="sidebar-title">
            <div class="avatar bg-primary me-3">
              <span class="avatar-content">{{ $auth.user.user_letter }}</span>
            </div>
            {{ $auth.user.name }}
            <div class="text-center">
              <div
                class="btn-group mx-auto btn-group-sm mt-3"
                role="group"
                aria-label="Basic example"
              >
                <nuxt-link class="btn btn-primary" to="profile"
                  >Profile</nuxt-link
                >
                <button type="button" @click="logout" class="btn btn-danger">
                  Logout
                </button>
              </div>
            </div>
          </li>
          <template v-for="item in $store.state.sideBarItems">
            <li class="sidebar-title" v-if="item.isTitle" :key="item.key">
              {{ item.name }}
            </li>

            <li
              v-show="$can(item.permission)"
              class="sidebar-item"
              :class="{
                active: isActive(item.url) || subIsActive(item),
                'has-sub': isHasSub(item),
              }"
              v-else
              :key="item.key"
            >
              <template v-if="isHasSub(item)">
                <a class="sidebar-link">
                  <i :class="`bi bi-${item.icon}`"></i>
                  <span>{{ item.name }}</span>
                </a>
                <ul class="submenu" :class="{ active: subIsActive(item) }">
                  <template v-for="sub in item.submenu">
                    <li
                      class="submenu-item"
                      :class="{ active: isActive(sub.url) }"
                      :key="sub.key"
                      v-show="$can(item.permission)"
                    >
                      <nuxt-link :to="sub.url">{{ sub.name }}</nuxt-link>
                    </li>
                  </template>
                </ul>
              </template>
              <template v-else>
                <nuxt-link class="sidebar-link" :to="item.url">
                  <i :class="`bi bi-${item.icon}`"></i>
                  <span>{{ item.name }} {{ item.permission }}</span>
                </nuxt-link>
              </template>
            </li>
          </template>
        </ul>
      </div>
      <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
  </div>
</template>

<script>
import Vuebar from 'vuebar'

export default {
  components: {
    Vuebar,
  },
  mounted() {
    document.querySelector('.sidebar-hide').addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('active')
      console.log('cloked', document.getElementById('sidebar'))
    })
    function slideToggle(t, e, o) {
      0 === t.clientHeight ? j(t, e, o, !0) : j(t, e, o)
    }
    function slideUp(t, e, o) {
      j(t, e, o)
    }
    function slideDown(t, e, o) {
      j(t, e, o, !0)
    }
    function j(t, e, o, i) {
      void 0 === e && (e = 400),
        void 0 === i && (i = !1),
        (t.style.overflow = 'hidden'),
        i && (t.style.display = 'block')
      var p,
        l = window.getComputedStyle(t),
        n = parseFloat(l.getPropertyValue('height')),
        a = parseFloat(l.getPropertyValue('padding-top')),
        s = parseFloat(l.getPropertyValue('padding-bottom')),
        r = parseFloat(l.getPropertyValue('margin-top')),
        d = parseFloat(l.getPropertyValue('margin-bottom')),
        g = n / e,
        y = a / e,
        m = s / e,
        u = r / e,
        h = d / e
      window.requestAnimationFrame(function l(x) {
        void 0 === p && (p = x)
        var f = x - p
        i
          ? ((t.style.height = g * f + 'px'),
            (t.style.paddingTop = y * f + 'px'),
            (t.style.paddingBottom = m * f + 'px'),
            (t.style.marginTop = u * f + 'px'),
            (t.style.marginBottom = h * f + 'px'))
          : ((t.style.height = n - g * f + 'px'),
            (t.style.paddingTop = a - y * f + 'px'),
            (t.style.paddingBottom = s - m * f + 'px'),
            (t.style.marginTop = r - u * f + 'px'),
            (t.style.marginBottom = d - h * f + 'px')),
          f >= e
            ? ((t.style.height = ''),
              (t.style.paddingTop = ''),
              (t.style.paddingBottom = ''),
              (t.style.marginTop = ''),
              (t.style.marginBottom = ''),
              (t.style.overflow = ''),
              i || (t.style.display = 'none'),
              'function' == typeof o && o())
            : window.requestAnimationFrame(l)
      })
    }

    let sidebarItems = document.querySelectorAll('.sidebar-item.has-sub')
    for (var i = 0; i < sidebarItems.length; i++) {
      let sidebarItem = sidebarItems[i]
      sidebarItems[i]
        .querySelector('.sidebar-link')
        .addEventListener('click', function (e) {
          e.preventDefault()

          let submenu = sidebarItem.querySelector('.submenu')
          if (submenu.classList.contains('active'))
            submenu.style.display = 'block'

          if (submenu.style.display == 'none') submenu.classList.add('active')
          else submenu.classList.remove('active')
          slideToggle(submenu, 300)
        })
    }

    window.addEventListener('DOMContentLoaded', (event) => {
      var w = window.innerWidth
      if (w < 1200) {
        document.getElementById('sidebar').classList.remove('active')
      }
    })
    window.addEventListener('resize', (event) => {
      var w = window.innerWidth
      if (w < 1200) {
        document.getElementById('sidebar').classList.remove('active')
      } else {
        document.getElementById('sidebar').classList.add('active')
      }
    })

    // document.querySelector('.sidebar-hide').addEventListener('click', () => {
    //   document.getElementById('sidebar').classList.toggle('active')
    // })

    this.$nextTick(function () {
      // Scrollbar.init(document.querySelector('.sidebar-wrapper'))
      // Perfect Scrollbar Init
      // if (typeof PerfectScrollbar.default == 'function') {
      //   const container = document.querySelector('.sidebar-wrapper')
      //   const ps = new PerfectScrollbar.default(container, {
      //     wheelPropagation: false,
      //   })
      // }
      // const container = document.querySelector('.sidebar-wrapper')
      // const ps = new PerfectScrollbar.default(container, {
      //   wheelPropagation: false,
      // })
    })

    // const container = document.querySelector('.sidebar-wrapper')
    // if (container) {
    //   const ps = new PerfectScrollbar.default(container, {
    //     wheelPropagation: false,
    //   })
    // }

    // Scroll into active sidebar
    if (document.querySelector('.sidebar-item.active')) {
      document.querySelector('.sidebar-item.active').scrollIntoView(false)
    }
  },
  updated() {
    let a = document.querySelector('.sidebar-wrapper')
    // console.log(a)
  },
  methods: {
    async logout() {
      try {
        let response = await this.$auth.logout('laravelSanctum')
        console.log(response)
        this.$gates.setPermissions([])
      } catch (err) {
        console.log('err', err)
      }
    },
    subIsActive(item) {
      const paths = Array.isArray(item.submenu) ? item.submenu : []

      if (paths.length == 0 && window.location.pathname != item.url) {
        let currentUrl = window.location.pathname.split('/').filter(e => e != "");
        return currentUrl.some(e => e == item.url.substring(1));
      }

      return paths.some((path) => {
        return this.$route.path.indexOf(path.url) === 0
      })
    },

    isActive(url) {
      if (this.$route.path == url) {
        return true
      }
      return false
    },

    isHasSub(item) {
      if (item.hasOwnProperty('submenu')) {
        if (item.submenu.length > 0) {
          return true
        }
      }

      return false
    },
  },
}
</script>

<style lang="css" scoped>
[class^='bi-']::before,
[class*=' bi-']::before {
  vertical-align: text-top;
}

.sidebar-wrapper .sidebar-header {
  padding-top: 1rem;
  padding-bottom: 0rem;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgb(27, 27, 27) rgb(230, 224, 224);
  border-radius: 10px;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: rgba(87, 86, 85, 0.5);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(212, 219, 221, 0.3);
  border-radius: 20px;
  border: none;
}
</style>
