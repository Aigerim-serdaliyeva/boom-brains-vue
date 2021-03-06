import { children } from './children'

export const layout = [
    {
        path: '/',
        name: "layout",
        component: () => import('../../components/layout/Layout.vue'),    
        children: [
          {
            path: '/profile',
            name: "profile",
            component: () => import('../../pages/Profile.vue'),
            children: children
          },
          {
            path: '/game',
            name: "game",
            component: () => import('../../pages/Game.vue')
          },
          {
            path: '/courses',
            name: "courses",
            component: () => import('../../pages/Courses.vue')
          },
          {
            path: '/faq',
            name: "faq",
            component: () => import('../../pages/FAQ.vue')
          },
          {
            path: '/boom-brains',
            name: "boom-brains",
            component: () => import('../../pages/BoomBrains.vue')
          }
        ]
      },
]