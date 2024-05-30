import express from 'express'

const route = express.Router()


route.get(
    '/provedores',
    (_, res) => {
        res.json(
            {
                msg: 'GET'
            }
        )
    }
)

route.post(
    '/provedores',
    (_, res) => {
        res.json(
            {
                msg: 'POST'
            }
        )
    }
)

route.put(
    '/provedores',
    (_, res) => {
        res.json(
            {
                msg: 'PUT'
            }
        )
    }
)

route.delete(
    '/provedores',
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