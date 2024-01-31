import React from 'react'
import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from '../pages/Home/Home';
import { Main } from '../Layout/Main';
import { Country } from '../components/Country/Country';
import { Magazine } from '../components/Magazine/Magazine';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/country/:id",
                element: <Country></Country>,
            },
            {
                path: "/magazine/:id",
                element: <Magazine></Magazine>
            }
        ]
    }
]);