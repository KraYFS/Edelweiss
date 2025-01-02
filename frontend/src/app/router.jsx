import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import ErrorPage from '../pages/errorPage/errorPage';
import CardPage from '../pages/HousePage/HousePage';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/house page/:id',
        element: <CardPage />,
        errorElement: <ErrorPage />
    }
])

export default Router;
