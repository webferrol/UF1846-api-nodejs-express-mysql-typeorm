# import / export en nodejs
En JavaScript moderno podemos exportar e importar módulos. Muy útil para fraccionar, dividir o `modularizar` nuestro código.

Se pueden `importar` o `exportar` tanto variables (primitivos y no primitivos) como funciones


## Tipos

Hay dos tipos de importaciones.
El primero que surgió en **nodejs** fue el denominado `CommonJS`, que es el por defecto.
Posteriormente también se puede utilizar el más moderno ECMAScript Modules (ESM).


## CommonJS (Sistema de Módulos por Defecto en Node.js)

1. **Exportación**

   En un archivo `math.js`, puedes definir y exportar funciones utilizando `module.exports`:

   ```javascript
   // math.js
   function add(a, b) {
       return a + b;
   }

   function subtract(a, b) {
       return a - b;
   }

   module.exports = {
       add,
       subtract
   };
   ```

2. **Importación**

   En otro archivo `app.js`, puedes importar las funciones utilizando `require`:

   ```javascript
   // app.js
   const math = require('./math');

   const sum = math.add(5, 3);
   const difference = math.subtract(5, 3);

   console.log(`Sum: ${sum}`); // Sum: 8
   console.log(`Difference: ${difference}`); // Difference: 2
   ```

## ECMAScript Modules (ESM)

1. **Exportación**

   En un archivo `math.mjs`, puedes definir y exportar funciones utilizando `export`:

   ```javascript
   // math.mjs
   export function add(a, b) {
       return a + b;
   }

   export function subtract(a, b) {
       return a - b;
   }
   ```

2. **Importación**

   En otro archivo `app.mjs`, puedes importar las funciones utilizando `import`:

   ```javascript
   // app.mjs
   import { add, subtract } from './math.mjs';

   const sum = add(5, 3);
   const difference = subtract(5, 3);

   console.log(`Sum: ${sum}`); // Sum: 8
   console.log(`Difference: ${difference}`); // Difference: 2
   ```

## Configuración de `package.json` para ESM

Para que Node.js trate todos los archivos `.js` como módulos ECMAScript, debes agregar `"type": "module"` en tu `package.json`:

```json
{
  "name": "example",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {}
}
```

## Ejemplo Completo de un Proyecto con ESM

1. **Estructura de Archivos**:
   ```
   project/
   ├── package.json
   ├── math.mjs
   └── app.mjs
   ```

2. **Contenido de `package.json`**:
   ```json
   {
     "name": "example",
     "version": "1.0.0",
     "type": "module"
   }
   ```

3. **Contenido de `math.mjs`**:
   ```javascript
   // math.mjs
   export function add(a, b) {
       return a + b;
   }

   export function subtract(a, b) {
       return a - b;
   }
   ```

4. **Contenido de `app.mjs`**:
   ```javascript
   // app.mjs
   import { add, subtract } from './math.mjs';

   const sum = add(5, 3);
   const difference = subtract(5, 3);

   console.log(`Sum: ${sum}`); // Sum: 8
   console.log(`Difference: ${difference}`); // Difference: 2
   ```

5. **Ejecutar el Código**:
   ```bash
   node app.mjs
   ```

## Resumen

- **CommonJS**: Utiliza `require` para importar y `module.exports` para exportar.
- **ESM**: Utiliza `import` para importar y `export` para exportar.
- **Configuración ESM**: Asegúrate de tener `"type": "module"` en tu `package.json` o usa la extensión `.mjs` para los archivos de módulo.

Ambos métodos te permiten organizar y modularizar tu código de manera eficiente.