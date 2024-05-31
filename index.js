import express from 'express'
// import { test } from './routes/test.js'
import { HOST, PORT, ROUTES } from './constants.js';
import { provaidersRouter } from './routes/provedoresRoute.js';
import { articlesRouter } from './routes/artigosRoute.js';


const app = express();

app.get(
    '/',
    (_, res) => {
        res.send('Welcome!!!')
    }
)


// app.use('/', test)
app.use(articlesRouter)
app.use(ROUTES.provaiders, provaidersRouter)


app.listen(
    PORT,
    () => {
        console.log(`Listen port ${PORT} en ${HOST}`)
    }
)