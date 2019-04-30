# Challenge MercadoLibre

En este repo se encuentra el ejercicio para el challenge de Mercado Libre.

## Cliente

El lado del cliente está hecho con React, Redux y SCSS modules, para optimizar el SEO se utiliza react-helmet y prerendering con react-snapshot.

## Servidor

Es un servidor muy simple que adapta nuestra API con la de MercadoLibre.

El frontend y el backend corren en procesos separados, para mejor manejo de errores, y están manejados por pm2 para tener nuestro server siempre corriendo, y en caso de que haya errores que se recupere automáticamente. También pm2 nos permite elegir cuantas instancias queremos correr, permitiéndonos escalar, ya que tiene un load balancer incorporado.

## Instalación

Solo hay que poner

```bash
$ npm i
```

o

```bash
$ yarn install
```

## Iniciar

```bash
$ npm start
```

o

```bash
$ yarn start
```

## Notas

- Me hubiese gustado tener tiempo para implementar testing y documentar todo.
- La otra branch contiene el atributo "address" en la API que no fue requerido pero me parecio necesario.
- Es importante hacer un build y borrar el cache del navegador despues de cambiar de branch, asi podemos ver la diferencia.
