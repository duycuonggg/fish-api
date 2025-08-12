import { StatusCodes } from 'http-status-codes'
// import { productService } from '~/services/productService'

const createNew = async (req, res, next) => {
  try {
    // const createProduct = await productService.createNew(req.body)
    // res.status(StatusCodes.CREATED).json(createProduct)
    console.log('req.body', req.body)
    res.status(StatusCodes.CREATED).json({ message: 'post from controller' })
  } catch (error) {
    // next(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: error.message
    })
  }
}

export const productController = {
  createNew
}

