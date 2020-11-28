import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Login: {
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/Login'))
  }
}
