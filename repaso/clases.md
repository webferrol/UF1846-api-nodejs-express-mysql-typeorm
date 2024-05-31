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

