# UF 1846: DESENVOLVEMENTO DE APLICACIÓNS WEB DISTRIBUÍDAS  (60 Horas)

- APIs RESTful: Diseño y consumo de APIs RESTful, principios REST. (0-10)
- Desarrollo de Microservicios: Creación y gestión de microservicios utilizando Node.js, Express, Spring Boot, etc. (0-10)
- Bases de Datos SQL y NoSQL: Diferencias, casos de uso, y ejemplos (MySQL, PostgreSQL, MongoDB, Cassandra). (0-10)
- Seguridad en sistemas distribuidos. Cors (0-10)
- Despliegue en la nube (0-10).

## Fuente

[🎥 Crea una <abbr title="Application Programming Interfaces">API</abbr> con Node.js y Express - Curso desde cero](https://www.freecodecamp.org/espanol/news/aprende-a-crear-apis-desde-cero-con-node-js-y-express-curso-desde-cero/)

## ¿Qué es una <abbr title="Application Programming Interfaces">API</abbr>?

Una `interfaz de programación de aplicaciones` (<abbr title="Application Programming Interfaces">API</abbr>) es un software que actúa como intermediario para permitir que dos aplicaciones se comuniquen.

Las APIs tienen un rol muy importante en la comunicación entre dos aplicaciones. Una de las aplicaciones envía datos y otra los recibe y procesa adecuadamente.

Los desarrolladores de la aplicación que enviará datos a otra aplicación implementan una  <abbr title="Application Programming Interfaces">API</abbr> y documentan su funcionalidad y endpoints, para que otros desarrolladores puedan usarla y acceder a sus datos y recursos.

>💡 Tip:</strong> un <em>endpoint</em> es una ubicación en la API que acepta solicitudes (*requests*) y envía respuestas (*responses*).

## Contenidos

1. Introducción a Node.js y Express
2. Arquitectura de la aplicación
3. Rutas dinámicas
4. Controladores
5. Estructura de la base de datos
6. Conexión de la API a una base de datos
7. Implementación de operaciones CRUD en TypeScript
8. Modelado con TypeORM
9. Implementación de controladores con TypeORM

## Antes de empezar. Te conviene repasar:

- [Ejercicios de destructuración](./repaso/destructuring.md)
- [Ejercicios de clases](./repaso/classes.md)

## Más información

- [Importación y exportaciones de módulos con ES Modules](./doc/import-export.md)
- [try...catch](./doc/try-catch.md)
- [Arquitectura Model-View-Controller](./doc/mvc.md)
- Express
    - [Middleware](./doc/middleware.md)
    - [Envío de datos](./doc/express-send.md)
    - [Petición de datos](./doc/express-request.md)
    - [Implenentación de una API Rest](./doc/api-rest.md) 
- MySQL2
  - [Dependencia de MySQL](https://sidorares.github.io/node-mysql2/docs)
  - [Using prepared statemens](https://sidorares.github.io/node-mysql2/docs#using-prepared-statements)
- Deployments
    - [Render](https://docs.render.com/deploy-node-express-app)
    - [Vercel](https://vercel.com/guides/using-express-with-vercel)

## Empezar

1. Crea un directorio donde alojarás tu proyecto
2. npm init -y

## Instalaciones

```bash
npm i -E express mysql2 cors
npm i -DE nodemon
```