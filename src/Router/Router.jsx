import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';

const Router = createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[{
        path: '/',
        element:<Home></Home>
    }]
}])


export default Router;