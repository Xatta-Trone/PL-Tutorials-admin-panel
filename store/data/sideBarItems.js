export default [
  {
    name: 'Menu',
    isTitle: true,
  },
  {
    name: 'Dashboard',
    url: '/',
    icon: 'grid-fill',
    permission: 'dashboard',
  },
  {
    name: 'User Data',
    url: '/userdata',
    icon: 'grid-fill',
    permission: 'dashboard',
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'grid-fill',
    permission: 'user_show',
  },
  {
    name: 'Components',
    key: 'components',
    icon: 'stack',
    permission: 'dashboard',
    submenu: [
      {
        name: 'Alert',
        url: '/login',
        permission: 'dashboard',
      },
      {
        name: 'Badge',
        url: '/components/badge',
      },
      {
        name: 'Breadcrumb',
        url: '/components/breadcrumb',
      },
      {
        name: 'Button',
        url: '/components/button',
      },
      {
        name: 'Card',
        url: '/components/card',
      },
      {
        name: 'Carousel',
        url: '/components/carousel',
      },
      {
        name: 'Dropdown',
        url: '/components/dropdown',
      },
      {
        name: 'List Group',
        url: '/components/list-group',
      },
      {
        name: 'Modal',
        url: '/components/modal',
      },
      {
        name: 'Navs',
        url: '/components/navs',
      },
      {
        name: 'Pagination',
        url: '/components/pagination',
      },
      {
        name: 'Progress',
        url: '/components/progress',
      },
      {
        name: 'Spinner',
        url: '/components/spinner',
      },
      {
        name: 'Tooltip',
        url: '/components/tooltip',
      },
    ],
  },
  {
    name: 'Extra Components',
    key: 'extra-component',
    icon: 'collection-fill',
    permission: 'dashboard',
    submenu: [
      {
        name: 'Avatar',
        url: '/extra-components/avatar',
      },
      {
        name: 'Sweet Alert',
        url: '/extra-components/sweetalert',
      },
      {
        name: 'Toastify',
        url: '/extra-components/toastify',
      },
      {
        name: 'Rating',
        url: '/extra-components/rating',
      },
      {
        name: 'Divider',
        url: '/extra-components/divider',
      },
    ],
  },
  {
    name: 'Layouts',
    key: 'layout',
    icon: 'grid-1x2-fill',
    submenu: [
      {
        name: 'Default Layout',
        url: '/layouts/default',
      },
      {
        name: '1 Column',
        url: '/layouts/1-column',
      },
      {
        name: 'Vertical with Navbar',
        url: '/layouts/vertical',
      },
      {
        name: 'Horizontal Menu',
        url: '/layouts/horizontal',
      },
    ],
  },
]
