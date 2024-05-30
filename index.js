import express from 'express'
import { test } from './routes/test.js'
import { provedores } from './routes/provedoresRoute.js';
import { ROUTES } from './constants.js';


const app = express();
const port = 4000

app.get(
    '/',
    (_, res) => {
        res.send('Imos ben')
    }
)


app.use('/', test)
app.use(ROUTES.provaiders, provedores)


app.listen(
    port,
    () => {
        console.log(`Listen port ${port}`)
    }
)