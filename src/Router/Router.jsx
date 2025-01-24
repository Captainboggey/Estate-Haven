import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import EstateDetails from '../Pages/EstateDetails/EstateDetails';

const Router = createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[{
        path: '/',
        element:<Home></Home>
    },{
      path: '/estate/:id',
      element:<EstateDetails></EstateDetails>,
      loader:()=> fetch('/estate.json')
    }]
}])


export default Router;