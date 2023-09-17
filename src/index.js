import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Countries from './features/Countries';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CountryDetail from './features/CountryDetails';
import Show from './features/Show';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
     
      {
        path: "/Countries",
        element:<Countries></Countries>,
        
      },
      {
        path: "/Countries/:cname",
    element:<CountryDetail></CountryDetail>,
      },
     
    ],
    
  },
  {
    path:'/Show',
    element:<Show></Show>
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();