Consigna final Sprint 3 y 4
Integrates: Grupo 14
Agustin Caceres Rapetti

Mis compañeros de grupo se bajaron del curso esta semana por lo que decidi realizar esta entrega solo.

Instrucciones de cómo instalar las dependencias y correr el proyecto:
Instalar npm en la carpeta backend con el comando: 
-npm install 
Instalar npm en la carpeta Client con el comando:
-npm install
correr el proyecto:
En la carpeta backend usar el comando npm run dev
En la carpeta backend usar el comando npm start

Arquitectura del proyecto:
Dos carpetas backend y client.
En el backend se utiliza Express para manejar las rutas y servir la información de los productos. Dentro de la carpeta middlewares se encuentra el middleware logging, encargado de registrar las peticiones que llegan al servidor. En la carpeta public se almacenan las imágenes de los productos, mientras que en el archivo data.js se encuentra el arreglo con todos los productos disponibles. 

En la carpeta client, se encuentra la aplicación de React dentro de src, donde la carpeta componentes contiene todos los componentes utilizados(Navbar, ProductList, ProductCard, ProductDetail, ContactForm y Footer). Dentro de esta misma carpeta hay un subdirectorio styles que contiene los archivos CSS correspondientes a cada componente, lo que facilita la organización.

El frontend se comunica con el backend mediante peticiones fetch, mostrando los productos de forma dinámica y gestionando estados con los hooks useState y useEffect. Además, se utilizan componentes reutilizables y renderizado condicional para mostrar el detalle de cada producto.