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
    name: 'Users',
    url: '/users',
    icon: 'grid-fill',
    permission: 'user_show',
    // submenu: [
    //   {
    //     name: 'List',
    //     url: '/users',
    //     permission: 'user_show',
    //   },
    //   {
    //     name: 'Add',
    //     url: '/users/add',
    //     permission: 'user_create',
    //   },
    // ],
  },
  {
    name: 'User Data',
    url: '/userdata',
    icon: 'grid-fill',
    permission: 'userdata_show',
  },

  {
    name: 'Activities',
    url: '/activities',
    icon: 'grid-fill',
    permission: 'activities_show',
  },

  {
    name: 'Bans Log',
    url: '/banhistory',
    icon: 'grid-fill',
    permission: 'user_show',
  },

  {
    name: 'Whitelisted',
    url: '/whitelisted',
    icon: 'grid-fill',
    permission: 'user_show',
  },

  {
    name: 'Contacts',
    url: '/contacts',
    icon: 'grid-fill',
    permission: 'contact_view',
  },

  {
    name: 'Posts',
    url: '/posts',
    icon: 'grid-fill',
    permission: 'post_show',
    // submenu: [
    //   {
    //     name: 'List',
    //     url: '/posts',
    //     permission: 'post_show',
    //   },
    //   {
    //     name: 'Add',
    //     url: '/posts/add',
    //     permission: 'post_create',
    //   },
    // ],
  },

  {
    name: 'Softwares',
    url: '/softwares',
    icon: 'grid-fill',
    permission: 'software_show',
    // submenu: [
    //   {
    //     name: 'List',
    //     url: '/softwares',
    //     permission: 'software_show',
    //   },
    //   {
    //     name: 'Add',
    //     url: '/softwares/add',
    //     permission: 'software_create',
    //   },
    // ],
  },
  {
    name: 'Books',
    url: '/books',
    icon: 'grid-fill',
    permission: 'book_show',
    // submenu: [
    //   {
    //     name: 'List',
    //     url: '/books',
    //     permission: 'book_show',
    //   },
    //   {
    //     name: 'Add',
    //     url: '/books/add',
    //     permission: 'book_create',
    //   },
    // ],
  },

  {
    name: 'UserTrace',
    url: '/usertraces',
    icon: 'grid-fill',
    permission: 'user_show',
  },

  {
    name: 'Departments',
    url: '/departments',
    icon: 'grid-fill',
    permission: 'department_show',
  },

  {
    name: 'Level Term',
    url: '/levelterms',
    icon: 'grid-fill',
    permission: 'level_term_show',
  },

  {
    name: 'Courses',
    url: '/courses',
    icon: 'grid-fill',
    permission: 'course_show',
  },

  {
    name: 'Pages',
    url: '/pages',
    icon: 'grid-fill',
    // permission: 'dashboard',
  },

  {
    name: 'Testimonials',
    url: '/testimonials',
    icon: 'grid-fill',
    permission: 'testimonial_show',
  },

  {
    name: 'Faq',
    url: '/faqs',
    icon: 'grid-fill',
    permission: 'faq_show',
  },

  {
    name: 'Admins',
    url: '/admins',
    icon: 'grid-fill',
    permission: 'admin_show',
  },
  {
    name: 'Roles',
    url: '/roles',
    icon: 'grid-fill',
    permission: 'role_show',
  },

  {
    name: 'Permissions',
    url: '/permissions',
    icon: 'grid-fill',
    permission: 'permission_show',
  },

  // {
  //   name: 'Chats',
  //   url: '/chats',
  //   icon: 'grid-fill',
  //   // permission: 'dashboard',
  // },
  {
    name: 'Bans',
    url: '/bans',
    icon: 'grid-fill',
    permission: 'ban_show',
  },

  {
    name: 'Ban Days',
    url: '/bandays',
    icon: 'grid-fill',
    permission: 'ban_show',
  },

  {
    name: 'Settings',
    url: '/settings',
    icon: 'grid-fill',
    permission: 'utilities_show',
  },
  {
    name: 'Bugs',
    url: '/bugs',
    icon: 'grid-fill',
    // permission: 'utilities_show',
  },
]
