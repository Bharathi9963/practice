import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Aboutus from './Aboutus';
import Courses from './Courses';
import Country from './Countries';
import Details from './Countrydetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/Aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/countries",
        element: <Country></Country>,
        children:[
          {
            path:'/countries/details/:fname',
            element:<Details></Details>
          }
        ]
      },
    ]
  },
  
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
