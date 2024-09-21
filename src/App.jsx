import React from 'react'

import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/// i need to create routes 
// /
// /register/talents
// register/companies
// /login
// dashboard
// dashboard/profile
// dashboard/AI
//
const App = () => {
 // routes 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register/talents",
      element: <h2>Register Talents</h2>,
    },
    {
      path: "/register/companies",
      element: <h2>Register Companies</h2>,
    },
    {
      path: "/login",
      element: <h2>Login</h2>,
    },
    {
      path: "/dashboard",
      element: <h2>Dashboard</h2>,
    },
    {
      path: "/dashboard/profile",
      element: <h2>Profile</h2>,
    },
    {
      path: "/dashboard/AI",
      element: <h2>AI</h2>,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App