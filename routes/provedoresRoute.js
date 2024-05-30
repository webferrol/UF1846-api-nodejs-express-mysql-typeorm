import express from 'express'

const route = express.Router()


route.get(
    '/',
    (_, res) => {
        res.json(
            {
                msg: 'GET'
            }
        )
    }
)

route.get(
    '/:id',
    (_, res) => {
        res.json({
            msg: 'Provedor con id'
        })
    }
)

route.post(
    '/',
    (_, res) => {
        res.json(
            {
                msg: 'POST'
            }
        )
    }
)

route.put(
    '/:id',
    (_, res) => {
        res.json(
            {
                msg: 'PUT'
            }
        )
    }
)

route.delete(
    '/:id',
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