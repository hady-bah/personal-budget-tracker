import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import './index.css'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom"

import RootLayout from './RootLayout.jsx'

const router = createBrowserRouter(createRoutesFromElements(


  
  <Route path="/" element={<RootLayout/>}>
  <Route path="transactions" element={<App/>}/>
  <Route index element={<Home/>}/>
  </Route>
  
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
