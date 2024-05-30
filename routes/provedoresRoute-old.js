import express from 'express'
import { ROUTES } from '../constants.js'

const route = express.Router()


route.get(
    ROUTES.provaiders,
    (_, res) => {
        res.json(
            {
                msg: 'GET'
            }
        )
    }
)

route.get(
    '/provedores/:id',
    (_, res) => {
        res.json({
            msg: 'Provedor con id'
        })
    }
)

route.post(
    ROUTES.provaiders,
    (_, res) => {
        res.json(
            {
                msg: 'POST'
            }
        )
    }
)

route.put(
    ROUTES.provaiders,
    (_, res) => {
        res.json(
            {
                msg: 'PUT'
            }
        )
    }
)

route.delete(
    ROUTES.provaiders,
    (_, res) => {
        res.json(
            {
                msg: 'DELETE'
            }
        )
    }
)

export {
    route as provedores
}