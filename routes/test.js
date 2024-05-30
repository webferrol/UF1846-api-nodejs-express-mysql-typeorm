import express from 'express';

const route = express.Router()

route.get(
    '/test',
    (_, res) => {
        res.json({ msg: 'Test OK' })
    }
)

route.post(
    '/test-post',
    (_, res) => {
        res.json({ msg: 'Proba post' })
    }
)

export {
    route as test
}