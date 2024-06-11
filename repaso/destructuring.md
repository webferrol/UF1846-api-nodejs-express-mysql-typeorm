# Destructuring

## Defininción

El destructuring (o "desestructuración") es una característica de los lenguajes de programación modernos, como JavaScript, que permite extraer valores de arreglos u objetos y asignarlos a variables de manera más concisa y legible. Esta técnica mejora la legibilidad del código y reduce la cantidad de líneas necesarias para trabajar con estructuras de datos complejas.

## Ejercicios

### Ejercicio 1: Desestructuración de Arreglos Básica
Dado el siguiente arreglo, usa la desestructuración para asignar las primeras dos variables a `a` y `b`.
```javascript
const arr = [10, 20, 30, 40];
```

### Ejercicio 2: Ignorar Elementos
Desestructura el siguiente arreglo para obtener solo el tercer elemento.
```javascript
const arr = [1, 2, 3, 4, 5];
```

### Ejercicio 3: Desestructuración de Objetos
Desestructura el siguiente objeto para obtener las propiedades `name` y `age`.
```javascript
const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
};
```

### Ejercicio 4: Alias en Desestructuración de Objetos
Desestructura el siguiente objeto para obtener la propiedad `name` y asígnala a una variable llamada `nombre`.
```javascript
const user = {
  name: 'John',
  age: 30
};
```

### Ejercicio 5: Desestructuración de Arreglos Anidados
Usa la desestructuración para extraer el valor `7` del siguiente arreglo anidado.
```javascript
const nestedArr = [1, [2, 3, [4, 5, [6, 7]]]];
```

### Ejercicio 6: Valores por Defecto
Desestructura el siguiente objeto y asigna un valor por defecto de `10` a la propiedad `age` si no existe.
```javascript
const person = {
  name: 'Bob'
};
```

### Ejercicio 7: Desestructuración de Parámetros de Función
Escribe una función que tome un objeto con propiedades `width` y `height` y devuelva el área del rectángulo.
```javascript
const rectangle = {
  width: 10,
  height: 20
};

function getArea(/* desestructura aquí */) {
  // tu código aquí
}
```

### Ejercicio 8: Desestructuración en Retornos de Función
Escribe una función que devuelva un arreglo con dos elementos y usa la desestructuración para asignarlos a dos variables.
```javascript
function getCoordinates() {
  return [12.34, 56.78];
}

const [/* tu código aquí */] = getCoordinates();
```

### Ejercicio 9: Desestructuración en Bucle
Itera sobre el siguiente arreglo de objetos y usa la desestructuración para obtener las propiedades `id` y `name` de cada objeto.
```javascript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

for (const /* tu código aquí */ of users) {
  console.log(id, name);
}
```

### Ejercicio 10: Desestructuración de Múltiples Niveles
Desestructura el siguiente objeto para obtener el nombre de la empresa y la ciudad de la ubicación principal.
```javascript
const company = {
  name: 'TechCorp',
  locations: {
    main: {
      city: 'San Francisco',
      address: '123 Tech Street'
    },
    branch: {
      city: 'New York',
      address: '456 Tech Avenue'
    }
  }
};
```

### Ejercicio 11: Desestructuración con Rest Operator en Arreglos
Desestructura el siguiente arreglo para obtener el primer elemento y un nuevo arreglo con los restantes.
```javascript
const numbers = [1, 2, 3, 4, 5];
```

### Ejercicio 12: Desestructuración con Rest Operator en Objetos
Desestructura el siguiente objeto para obtener la propiedad `title` y un nuevo objeto con el resto de las propiedades.
```javascript
const book = {
  title: 'JavaScript Basics',
  author: 'John Doe',
  year: 2021
};
```

### Ejercicio 13: Desestructuración de Arreglos de Objetos
Desestructura el siguiente arreglo para obtener los nombres de los primeros dos usuarios.
```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
```

### Ejercicio 14: Desestructuración de Parámetros de Función con Valores por Defecto
Escribe una función que tome un objeto con propiedades `name` y `age`, y asigne `Unknown` y `0` como valores por defecto.
```javascript
function printUserInfo({ name = 'Unknown', age = 0 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printUserInfo({ name: 'Alice' });
printUserInfo();
```

### Ejercicio 15: Desestructuración en la Importación de Módulos
Importa las funciones `readFile` y `writeFile` del módulo `fs` usando desestructuración.
```javascript
const { readFile, writeFile } = require('fs');
```

Practica estos ejercicios para dominar la desestructuración en JavaScript. Cada uno de ellos te ayudará a comprender y aplicar esta poderosa característica del lenguaje.
