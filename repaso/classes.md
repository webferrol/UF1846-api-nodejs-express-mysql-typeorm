# Repaso

1. Recordar que en un lenguaje de programación una `clase` no es más que una plantilla, por tanto abstracto y no se carga en memoria.
2. Para `cargar` una **clase** en memoria, es decir, cobre vida, hay que instanciarla con la palabra reservada **new**
3. Otras características: propiedades , métodos, modificadores de acceso (públic, privado, protegido), herencia, métodos y clases estáticas

# Sintaxis

```js
class Perro {
    private nombre
    constructor (nombre) {
      this.nombre = nombre
    }

    comer () {
        console.log(`${this.nombre} está comiendo`)
    }
}

const lily = new Perro('Lily');
lily.comer()
```

¡Claro! Aquí tienes un ejercicio básico de clases en JavaScript para ayudarte a entender cómo funcionan:

# Ejercicio: Crear una clase `Persona`

1. **Crear la clase `Persona`**:
    - La clase debe tener las siguientes propiedades:
        - `nombre` (string)
        - `edad` (número)
    - La clase debe tener un método llamado `saludar` que imprima un mensaje en la consola que diga "Hola, mi nombre es [nombre] y tengo [edad] años."
