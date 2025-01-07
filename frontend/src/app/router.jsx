import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const MainPage = React.lazy(() => import('../pages/MainPage/MainPage'));
const ErrorPage = React.lazy(() => import('../pages/errorPage/errorPage'));
const CardPage = React.lazy(() => import('../pages/HousePage/HousePage'));

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
  },
  {
    path: '/house page/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CardPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

export default Router;
