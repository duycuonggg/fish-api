import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { productValidation } from '~/validations/productValidation'
import { productController } from '~/controllers/productController'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Apis get list products' })
  })
  .post(productValidation.createNew, productController.createNew)

export const productRouter = Router
