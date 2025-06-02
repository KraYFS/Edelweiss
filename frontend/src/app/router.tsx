import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import MainPage from '../pages/MainPage'

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <MainPage /> }]
  }
])

export default Router
