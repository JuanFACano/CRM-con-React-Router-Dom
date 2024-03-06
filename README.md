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

```
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: '/ruta/secundaria', element: <NuevoCliente /> },
    ],
  },
]);
```

### 4. Agregar el Router Provider

        <RouterProvider router={router} />

### 5. Crear Nuestro Layout

obviamente si vamos a utilizar nuesto Layout debemos crearlo un ejemplo basico es el que tenemos en la ruta ./src/Layout

---

# Creando El Layout / Base (Actualizado)

1.  Realizamos cambios simples en cuanto a diseño, no se explicará en gran detalle debido a que los conocimientos de HTML, CSS (tailwind) daremos por sentado que ya se tienen

2.  Agregamos una navegación simple para ir de nuestra pagina principal (index.jsx) a nuestra página de Cliente Nuevo; en este navegacion no utilizamos los enlaces directos (<a>Enlace</a>) debido a que RRD nos da un componente conocido como Link (<Link>Super Enlace</Link>) que nos da un mejor rendimiento en cuanto a cambiar de pestaña, para este nuevo componente cambiaremos la etiqueta `href="./ruta"` por un atributo conocido como `to="ruta"`

3.  El siguiente paso fue darle una mejor esperiencia al usuario resaltando el enlace correspondiente a la pagina en la que se encuentra para este caso utilizamos el Hook useloction de RRD que mediante su atributo pathName nos permite saber en que ruta estamos y por consiguiente nos permite validar si estamos en esa ruta tendriamos por ejemplo: el enlace 'Clientes' de un color Azul (text-blue-300/tailwind) de los contrario un color blanco (text-white/tailwind)

# Crando la página de clientes

1. Creamos una seccion simple con un titulo y un subtitulo
2. Si queremos tener un listado de clientes usualmente lo manejariamos con un State (Hook useEffect) pero en el caso de RRD desde la version 6.4.0 lo manejamos con un Loader

> .[!TIP].
> Es recomendado que tengas el Loader dentro del archivo en el cual necesitas manejar es estado

    export function loader() {
      return "retorno"
    }

Para llamar este loader que viene directo desde nuestra pagina principal, vamos a ir a nuestro punto de partida de nuestro proyecto (main.jsx) y lo llamaremos de esta manera { loader }

> .[!TIP].
> Es recomendado que le pongas un alias a tu loader debido a que puedes tener gran cantidad de los mimos en una aplicación algo como esto

`{ loader as clientesLoader }`

Para manejar ese clientesLoader lo tenemos que pasar como atributo loader a nuestro arreglo children en el punto de partida de nuestro proyecto donde definimos las rutas como en el siguiente ejemplo

    children: [
      { index: true, element: <Index />, loader: clientesLoader }
    ]

Para poder tomar lo que la funcion loader nos retorna usaremos un nuevo Hook llamado `useLoaderData`que importamos en el archivo de nuestra pagina principal

    import { useLoaderData } from 'react-router-dom'

    const index = () => {

      const datos = useLoaderData();
      return (
        <>
          <h1>Clientes</h1>
        </>
      )
    }

con el loader podemos acceder al loader de manera global y con el `useLoaderData()` nos aseguramos de obtener los datos para poder utilizarlos en nuestra aplicaciòn -

3. Creando el componente Cliente y Pasandole Datos
   > .[!NOTE].
   > Para poder mostras algunos clientes agregamos un arreglo con unos datos base para poder realizar algunas acciones / materiales del curso [Clientes](https://gist.github.com/codigoconjuan/e8157b390eee8a7d7bb861343340b3a0)

Para esta parte creamos una tabla con sus respectivos estilos para mostrar la información, luego creamos un componente llamado Cliente para estructurar de buena manera nuestro arbol de componentes y realizamos la iteracion de los datos que obtuvimos con useLoaderData en el anterior punto (Punto 2) esto no cambia a lo anteriormente visto; la iteracion se maneja con el metodo Map de los arreglos pasamos el id como key debido a que no se repite y enviamos una prop llamada cliente con el dato individual que nos devuelve la funcion para trabajar con sus atributos en el componente Cliente

4. Aqui Terminados de diseñar la forma en la que queremos que se muestren los datos

---

## Actualizaciones / Simples

1. Tuvimos que cambiar el nombre del archivo Layout.jsx a Base.jsx debido a un problema de EsLint
2. Para mejorar el orden de mis archivos decidi cambiar el nombre de `NuevoCliente` a `ClientesNuevos` para mejorar la nomenclatura

## Actualizaciones / Complejas
