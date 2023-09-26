import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import AdminDashBoard from './features/AdminDashboard/AdminDashBoard';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home/Home';
import AddHospital from './features/AdminDashboard/AddHospital';
import AddBed from './features/AdminDashboard/AddBed';
import HospitalDetails from './features/Hospital/Hospital Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/AdminDashBoard",
    element: <AdminDashBoard></AdminDashBoard>,
    children:[
      {
      path:'/AdminDashBoard/addhospital',
      element:<AddHospital></AddHospital>
    },
    {
      path:'/AdminDashBoard/addBed',
      element:<AddBed></AddBed>
    }
  ]

      },
      {
        path: "/details/:id",
        element: <HospitalDetails></HospitalDetails>,
      },
      {
        path: "",
    element: <Home></Home>,

      },

    ]
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
reportWebVitals();
