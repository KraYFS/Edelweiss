import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    }
])

export default Router;
