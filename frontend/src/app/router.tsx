import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <MainPage /> }]
  }
])

export default Router
