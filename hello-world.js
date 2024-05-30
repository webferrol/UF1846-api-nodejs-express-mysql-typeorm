import express from 'express'

const app = express() // Esta función retorna una instancia de la aplicación

// Express trabaja con "middlewares" de forma secuencial. Ver documentación anexa


// Nuestro servidor (app) responderá a diferentes verbos CRUD

app.get( // R --> Para leer
    '/',
    (_, res) => {
        res.send('Hello World')
    }
)


// Levantamos el servidor. Este médodo aunque lo veamos al final es el primero que utilizamos
app.listen(
    3000,
    () => {
        console.log(`Server on`)
    }
)