import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import InDevelopment from '../pages/InDevelopment'

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <InDevelopment /> }]
  }
])

export default Router
