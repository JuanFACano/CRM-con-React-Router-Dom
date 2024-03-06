import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ClienteNuevo from './pages/ClienteNuevo';
import Base from './components/Base';
import Index from './pages/Index';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      { index: true, element: <Index />},
      { path: '/clientes/nuevo', element: <ClienteNuevo /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
