# Creado con Vite

Este repositorio tendra los avances en el curso de React de juan de la torre en base al proyecto de CRM-REACT - en el README dejare un intento de diario en cuanto a progresiones y errores

## Temas Principales

- Routing: El routing nos permite navegar entre las diferentes paginas de nuestra aplicacion, lo que se traduce en tener diferentes URL´s y mostrar diferentes componentes, así como restringir acceso a ciertas páginas.
  - Un proyecto grande es mejor manejarlo en multiple pantallas

## Librerias de Routing

- React-router-dom (Usaremos para este proyecto)
- Reat Location
- NextJs, Remix Run, Gatsby, Astro, etc. Ya cuentan con su propio sistema de routing

## React Router Dom

Ya que en este proyecto usaremos RRD (No se si es la nomenclaruta pero lo escribire de esta manera de aqui en adelante)
vamos a explicar brevemente que es; RRD es una librería para crear aplicaciones con Routing estas diferentes rutas nos
darán un mejor orden, podemos seguir re-utilizando componentes y más.

# Comenzamos nuestro proyecto

- El primer commit que hare al repositorio será una base modificada para poder utilizarla en otros casos, esta tendrá
  la creación principal que nos hace Vite quitando los archivos comunes como el app.css y otros elementos, twambién agrega el modelo de RRD básico que es el siguiente

#######

### 1. importaciones de React Dom

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

### 2. Importacion de Componente Layout y las paginas

import Layout from './components/Layout';
import NuevoCliente from './pages/NuevoCliente';
import Index from './pages/Index';

### 3. Creacion de la variable que contendra nuestras rutas

`const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: '/ruta/secundaria', element: <NuevoCliente /> },
    ],
  },
]);`

### 4. Agregar el Router Provider

`<RouterProvider router={router} />`

### 5. Crear Nuestro Layour

      _obviamente si vamos a utilizar nuesto Layout debemos crearlo un ejemplo basico es el que tenemos en la ruta ./src/Layout
