import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './containers/Root/Root';
import About from './others/About us/About';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Addproduct from './components/Addproduct/Addproduct';
import Home from './components/Home/Home';
import Carlist from './others/Carlist/Carlist';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:
      [  
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/addproduct",
          element: <Addproduct></Addproduct>,
        },
        {
          path: "/carlist",
          element: <Carlist></Carlist>,
        },
      ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
