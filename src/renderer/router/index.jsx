import { createHashRouter, Navigate } from 'react-router-dom'
import Login from '@/pages/login'
import Home from '@/pages/home'

export const globalRouters = createHashRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
])
