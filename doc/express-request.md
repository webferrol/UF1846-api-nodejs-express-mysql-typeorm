Express maneja la petición de datos a través de diferentes métodos HTTP, y permite acceder a esos datos de diversas maneras. Aquí te muestro cómo Express puede manejar y extraer datos de las peticiones:

1. **Parámetros de Ruta**: Los parámetros de ruta se definen en la URL y se pueden acceder usando `req.params`.

   ```javascript
   app.get('/user/:id', (req, res) => {
       const userId = req.params.id;
       res.send(`Usuario ID: ${userId}`);
   });
   ```

2. **Parámetros de Consulta (Query Params)**: Los parámetros de consulta se pasan en la URL después del signo de interrogación (?) y se pueden acceder usando `req.query`.

   ```javascript
   app.get('/search', (req, res) => {
       const query = req.query.q;
       res.send(`Buscando: ${query}`);
   });
   ```

3. **Cuerpo de la Solicitud (Request Body)**: Para acceder al cuerpo de una solicitud, especialmente en métodos POST, PUT, PATCH, necesitas un middleware como `body-parser` o el middleware integrado en Express a partir de la versión 4.16.0.

   ```javascript
   const express = require('express');
   const app = express();

   // Middleware para parsear JSON
   app.use(express.json());

   app.post('/login', (req, res) => {
       const { username, password } = req.body;
       res.send(`Usuario: ${username}, Contraseña: ${password}`);
   });

   app.listen(3000, () => {
       console.log('Servidor escuchando en el puerto 3000');
   });
   ```

4. **Cabeceras de la Solicitud (Request Headers)**: Las cabeceras de la solicitud se pueden acceder usando `req.headers`.

   ```javascript
   app.get('/headers', (req, res) => {
       const userAgent = req.headers['user-agent'];
       res.send(`User-Agent: ${userAgent}`);
   });
   ```

5. **Archivos Subidos**: Para manejar archivos subidos, se suele usar un middleware como `multer`.

   ```javascript
   const multer = require('multer');
   const upload = multer({ dest: 'uploads/' });

   app.post('/upload', upload.single('file'), (req, res) => {
       const file = req.file;
       res.send(`Archivo subido: ${file.originalname}`);
   });
   ```

6. **Cookies**: Para manejar cookies, se puede usar un middleware como `cookie-parser`.

   ```javascript
   const cookieParser = require('cookie-parser');
   app.use(cookieParser());

   app.get('/cookies', (req, res) => {
       const cookies = req.cookies;
       res.send(`Cookies: ${JSON.stringify(cookies)}`);
   });
   ```

Estas son las formas más comunes de manejar y acceder a los datos en las peticiones utilizando Express. Dependiendo de tus necesidades específicas, podrías utilizar una combinación de estas técnicas.
