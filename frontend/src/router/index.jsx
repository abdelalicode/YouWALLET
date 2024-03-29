import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import Register from './../pages/Register';
import Login from './../pages/Login';
import Transactions from '../pages/Transactions';
import NotFound from '../pages/NotFound';
import Layout from './../layouts/Layout';

export const router = createBrowserRouter([

    {
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
        
            {
                path: '/login',
                element: <Login/>
            },
        
            {
                path: '/signup',
                element: <Register/>
            },
        
            {
                path: '/transactions',
                element: <Transactions/>
            },
        
            {
                path: '*',
                element: <NotFound/>
            },
        ]
    }
    
    






])
