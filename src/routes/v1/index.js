import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { productRouter } from './productRouter.js'

const Router = express.Router()

// Kiểm tra server
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs V1 are ready to use' })
})

Router.use('/products', productRouter)

export const APIs_V1 = Router
