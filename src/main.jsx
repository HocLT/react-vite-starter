import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import ProductPage from './pages/product.jsx';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/users",
    element: <UserPage />
  },
  {
    path: "/products",
    element: <ProductPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
