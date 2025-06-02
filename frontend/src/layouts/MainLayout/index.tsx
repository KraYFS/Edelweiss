import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Suspense fallback='тут компонент загрузки'>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MainLayout
