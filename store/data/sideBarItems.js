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
    icon: 'people-fill',
    permission: 'dashboard',
  },
  {
    name: 'Departments',
    url: '/userdata',
    icon: 'people-fill',
    permission: 'dashboard',
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'person-fill',
    permission: 'user_show',
    submenu: [
      {
        name: 'List',
        url: '/users',
        permission: 'user_show',
      },
      {
        name: 'Add',
        url: '/users/add',
        permission: 'user_create',
      },
    ],
  },
]
