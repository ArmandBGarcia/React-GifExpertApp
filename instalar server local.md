## Correr un servidor local para la aplicacion despues de crear el archivo build

1.- Comando de instalacion: `npm install --global http-server`

2.- Pararse en la carpeta  build y escribir el comando `http-server -o`

Esto levantara un local host con la aplicacion

## Pasos para subir aplicaciones a github

1.- Escribir el siguiente comando 
```
git init
``` 
para inicializar el directorio **.git**

2.- Preparar los archivos para crear una fotografia que sera el respaldo en caso de algun cambio indesperado. Escribir el comando: 
```
git add .
```  
Luego 
```
git commit -m
```
Para dejar el mensaje del cambio realizado

3.- El archivo `build` no se sube a git con ese nombre,  primero se le cambia el nombre a 
```
docs
``` 
que es la carpeta que el servidor de github buscara.

4.- Se crea el `repositorio` en la pagina de github que sera donde subiremos la aplicacion.

5.- Se escriben los comandos:
```
git remote add origin https://github.com/ArmandBGarcia/React-GifExpertApp.git 
```
`https://github.com/ArmandBGarcia/React-GifExpertApp.git` esta url es la que se crea en el repositorio creado en github
```
git push -u origin main
```

6.- Hacer algunas correcciones en el archivo html del bundle en la carpeta docs, en este caso hace falta colocar un punto antes en cada ``href`` que no comience con https: Esto para que busque los archivos en la  raiz correcta


