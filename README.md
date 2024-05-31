# Fuentes

[Crea una API con Node.js y Express - Curso desde cero](https://www.freecodecamp.org/espanol/news/aprende-a-crear-apis-desde-cero-con-node-js-y-express-curso-desde-cero/)

# UF 1846: DESENVOLVEMENTO DE APLICACIÓNS WEB DISTRIBUÍDAS  (60 Horas)

- APIs RESTful: Diseño y consumo de APIs RESTful, principios REST. (0-10)
- Desarrollo de Microservicios: Creación y gestión de microservicios utilizando Node.js, Express, Spring Boot, etc. (0-10)
- Bases de Datos SQL y NoSQL: Diferencias, casos de uso, y ejemplos (MySQL, PostgreSQL, MongoDB, Cassandra). (0-10)
- Seguridad en sistemas distribuidos. Cors (0-10)
- Despliegue en la nube (0-10).


# Contenidos

- [Importación y exportaciones de módulos](./doc/import-export.md)
- [Arquitectura Model-View-Controller](./doc/mvc.md)
- [Middleware](./doc/middleware.md)
- [Implenentación de una API Rest](./doc/api-rest.md) 
    - Rutas
        - Estáticas (GET, POST)
        - Dinámicas (GET, PUT, DELETE)

# Preparación de clase

## Creación del proyecto

1. Crea un directorio donde alojarás tu proyecto
2. npm init -y

## Instalaciones

```bash
npm i -E express cors

```

## Hello World

1. Utilizaremos la configuración `module` en vez de `commonjs`por ser más moderna
2. Crearemos el fichero `hello-world.js` donde explicaremos un poco lo que es express

## Implantación de la api

1. Creación de index.js
2. Establecimiento de las rutas
    - use
    - rutas de artigos
    - rutas de provedores más eficiente
3. Controladores
    3.1 Class
