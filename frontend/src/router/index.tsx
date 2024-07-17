import { createBrowserRouter } from 'react-router-dom'
import MainPage from '@/pages/MainPage.tsx'
import AboutPage from '@/pages/AboutPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
])

export { router }
