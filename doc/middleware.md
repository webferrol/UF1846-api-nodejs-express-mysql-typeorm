En Express.js, un middleware es una función que tiene acceso al objeto de solicitud (`req`), al objeto de respuesta (`res`), y a la siguiente función de middleware en el ciclo de solicitud-respuesta de la aplicación. La siguiente función de middleware se denota comúnmente con una variable denominada `next`.

### Funciones del Middleware

Un middleware puede realizar las siguientes tareas:
1. Ejecutar cualquier código.
2. Modificar el objeto de solicitud (`req`) y el objeto de respuesta (`res`).
3. Finalizar el ciclo de solicitud-respuesta.
4. Llamar a la siguiente función de middleware en la pila.

Si el middleware actual no termina el ciclo de solicitud-respuesta, debe llamar a `next()` para pasar el control a la siguiente función de middleware. De lo contrario, la solicitud quedará pendiente.

### Tipos de Middleware

1. **Middleware de aplicación**: Se aplica a la instancia de la aplicación Express.
2. **Middleware de enrutador**: Se aplica a instancias del enrutador.
3. **Middleware de error**: Se define con cuatro argumentos, en lugar de los tres habituales (err, req, res, next).
4. **Middleware incorporados**: Express proporciona middleware incorporados, como `express.static` y `express.json`.
5. **Middleware de terceros**: Middleware de terceros que puedes instalar y utilizar, como `morgan`, `body-parser`, `cors`, etc.

### Ejemplo de Uso del Middleware

Aquí hay algunos ejemplos para ilustrar cómo se utilizan los middleware en Express.js.

#### Middleware de Aplicación

```javascript
const express = require('express');
const app = express();

// Middleware de aplicación
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

En este ejemplo, el middleware se ejecuta para cada solicitud que llega al servidor. El middleware imprime la hora en la consola y luego llama a `next()` para pasar el control al siguiente middleware o ruta.

#### Middleware de Enrutador

```javascript
const express = require('express');
const app = express();
const router = express.Router();

// Middleware de enrutador
router.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
});

router.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.use('/api', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

Este middleware se ejecuta para cada solicitud que coincide con la ruta `/api`.

#### Middleware de Error

```javascript
const express = require('express'); // type: "commonjs"
const app = express();

// Middleware de error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
    throw new Error('BROKEN'); // Express llamará automáticamente a este middleware de error
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

Este middleware maneja los errores que ocurren en la aplicación. Se llama automáticamente cuando se lanza un error en cualquier parte del ciclo de solicitud-respuesta.

#### Middleware Incorporado

```javascript
const express = require('express');
const app = express();

// Middleware incorporado para servir archivos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

En este ejemplo, `express.static` es un middleware incorporado que sirve archivos estáticos desde el directorio `public`.

### Resumen

Un middleware en Express.js es una pieza de código que maneja solicitudes, respuestas y la lógica intermedia entre ellas. Los middleware son fundamentales para la funcionalidad de una aplicación Express, permitiendo modularidad y reutilización del código.