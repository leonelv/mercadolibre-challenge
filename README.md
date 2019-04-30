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

- Me hubiese gustado tener tiempo para implementar testing.
- Hay otra branch que contiene elementos en la API que no fueron requeridos pero me parecieron necesarios.