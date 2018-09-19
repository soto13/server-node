# Run Node in Background

# With forever

- npm install forever -g

- npm run prod

# Stop forever

- npm run list

- npm run stop PID

# Or

- forever stopall

# With nohup

- nohup npm start &

# See process

- ps ax1 | grep node

# Kill process
 
 - kill -9 idprocess

# Servidor de Node

Es un cascaron de un servidor de Node, éste está configurado para utilizar ES6

# Uso

# Para iniciar el servidor y pasar el código a JavaScript

npm start

creará un carpeta dist/ la cual contendrá el código en JS

# Para ejecutar el código usando ES6

npm run dev

contiene nodemon el cuál recargará el servidor cuando el desarrollador guarde un cambio

hay 2 rutas de pruebas:
http://localhost:3000/ -> página web
http://localhost:3000/api/saludo -> saludo con peticion GET desde postman

# Carpetas

# models

para los módelos de base de datos, ya sea usando ODM como Mongoose u ORM como Sequelize

# controllers

para los controladores del ORM/ODM ya sean create, find, delete, etc

# middlewares

serán los middlewares entre los controladores y las rutas

# routes

para las rutas de los API's

# public

para archivos como imágenes, js, etc

# views

para las vistas

# utils

para archivos utiles, que no necesariamente tengan que estar en los middlewares y se puedan usar de manera global en cualquier parte del código

