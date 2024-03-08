import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useFormAction,
} from 'react-router-dom';

import ClienteNuevo, { action } from './pages/ClienteNuevo';
import { action as nuevoClienteAction } from './pages/ClienteNuevo';
import Base from './components/Base';
import Index, { loader as clientesLoader } from './pages/Index';

import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      { index: true, element: <Index />, loader: clientesLoader },
      {
        path: '/clientes/nuevo',
        element: <ClienteNuevo />,
        action: nuevoClienteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
