import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback='тут компонент загрузки'>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MainLayout
