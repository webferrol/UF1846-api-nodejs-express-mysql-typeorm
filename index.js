import express from 'express'
// import { test } from './routes/test.js'
import { ROUTES } from './constants.js';
import { provaidersRouter } from './routes/provedoresRoute.js';
import { articlesRouter } from './routes/artigosRoute.js';


const app = express();
const port = 4000

app.get(
    '/',
    (_, res) => {
        res.send('Imos ben')
    }
)


// app.use('/', test)
app.use(articlesRouter)
app.use(ROUTES.provaiders, provaidersRouter)


app.listen(
    port,
    () => {
        console.log(`Listen port ${port}`)
    }
)