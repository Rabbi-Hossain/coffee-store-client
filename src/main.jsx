import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffees from './components/UpdateCoffees.jsx';
import AddCoffees from './components/AddCoffees.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import SingUp from './components/SingUp.jsx';
import SingIn from './components/SingIn.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffe-server-desthmeiy-rabbi-hossains-projects-5ba9f176.vercel.app/coffees')
  },
  {
    path: '/addcoffee',
    element: <AddCoffees></AddCoffees>
  },
  {
    path: '/updatecoffee/:id',
    element: <UpdateCoffees></UpdateCoffees>,
    loader: ({ params }) => fetch(`https://coffe-server-desthmeiy-rabbi-hossains-projects-5ba9f176.vercel.app/coffees/${params.id}`)
  },
  {
    path:'/signup',
    element:<SingUp></SingUp>
  },
  {
    path:'/signin',
    element:<SingIn></SingIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('https://coffe-server-desthmeiy-rabbi-hossains-projects-5ba9f176.vercel.app/users')
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
