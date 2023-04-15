import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import routes from './componets/routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
