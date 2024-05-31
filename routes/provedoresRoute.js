import express from 'express'
import provaiderController from '../controllers/Provaider.js'

const router = express.Router()


router.get(
    '/',
   provaiderController.query
)

router.post(
    '/',
    provaiderController.insert
)

router.route('/:id')
.get(
    provaiderController.detailQuery
)
.put(
    provaiderController.update
)
.delete(
    provaiderController.delete
)

export {
    router as provaidersRouter
}