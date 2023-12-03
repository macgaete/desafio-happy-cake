import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import Root from "./routes/root"
import Contacto from './routes/contacto';
import Navbar from "./components/navbar"

const router_inst = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "contacto",
    element: <Contacto />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router_inst}/>
  </React.StrictMode>,
)