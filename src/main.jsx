import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './containers/Root/Root';
import About from './others/About us/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
    path: "/about",
    element: <About></About>
    }]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
