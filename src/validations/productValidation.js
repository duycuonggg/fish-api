import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
// import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      'string.empty': 'Product name not empty',
      'string.min': 'Product name have least three words',
      'string.max': 'Product name not passed greater than onehunred words'
    }),
    price: Joi.number().greater(0).required().messages({
      'number.base': 'Product price must have number',
      'number.greater': 'Product price must have greater than zero',
      'any.required': 'Product price is obligatory'
    }),
    image: Joi.string().uri().required().messages({
      'string.uri': 'image must have valid path',
      'any.required': 'Product image is obligatory'
    })
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    // next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY), new Error(error).message)
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
}

export const productValidation = {
  createNew
}