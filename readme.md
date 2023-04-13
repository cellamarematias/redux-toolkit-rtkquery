# Proyecto de autenticación con Redux Toolkit y RTK Query
Este proyecto consiste en un formulario de autenticación de usuario utilizando React, Redux Toolkit y RTK Query.

## Instalación
Para instalar el proyecto, se deben seguir los siguientes pasos:

Clonar el repositorio en tu máquina local.
Abrir una terminal en el directorio del proyecto.
Ejecutar el comando npm install para instalar las dependencias.
Ejecutar el comando npm start para iniciar el servidor.

## Descripción
El proyecto consta de una página de inicio de sesión donde el usuario puede ingresar sus credenciales. Al enviar el formulario, se realiza una consulta a una API utilizando RTK Query para verificar si las credenciales son válidas. Si la respuesta es exitosa, el usuario es redirigido a la página principal de la aplicación.

El estado de la aplicación es gestionado por Redux Toolkit, utilizando un slice llamado loginFormSlice que contiene los campos username, password, loading y error. Estos campos son actualizados a través de actions que son enviados al reducer correspondiente.

## Tecnologías utilizadas
React
Redux Toolkit
RTK Query
TypeScript

## Estructura del proyecto
src/components: contiene los componentes de la aplicación, incluyendo el formulario de inicio de sesión.
src/store: contiene los slices de Redux Toolkit y la configuración de RTK Query.
src/apis: contiene los servicios de RTK Query que interactúan con la API.
src/App.tsx: archivo principal de la aplicación.
src/index.tsx: archivo de entrada de la aplicación.
