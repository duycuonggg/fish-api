/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes'
import { env } from '~/config/environment'

export const errorHandlingMiddleware = (err, req, res, next) => {
  if (!err.StatusCodes) err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR

  const reponseError = {
    statusCode: err.statusCode,
    message: err.message || StatusCodes[err.statusCode],
    stack: err.stack
  }

  if (env.BUILD_MODE !== 'dev') delete reponseError.stack

  res.status(reponseError.statusCode).json(reponseError)
}