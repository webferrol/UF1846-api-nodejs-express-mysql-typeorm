import express from 'express'
import { ROUTES } from '../constants.js'

export const articlesRouter = express.Router()

articlesRouter.get(
    ROUTES.articles,
    (_, res) => {
        res.json('GET Articles')
    }
)

articlesRouter.post(
    ROUTES.articles,
    (_, res) => {
        res.json('POST Articles')
    }
)

articlesRouter.get(
    `${ROUTES.articles}/:cod`,
    (_, res) => {
        res.json('GET 1 article')
    }
)

articlesRouter.put(
    `${ROUTES.articles}/:cod`,
    (_, res) => {
        res.json('PUT 1 article')
    }
)


articlesRouter.delete(
    `${ROUTES.articles}/:cod`,
    (_, res) => {
        res.json('Delete Articles')
    }
)
