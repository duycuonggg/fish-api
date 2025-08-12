/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'
import cors from 'cors'
import { corsOptions } from './config/cors'

const START_SERVER = () => {
  const app = express()

  app.use(cors(corsOptions))

  app.use(express.json())

  app.use('/v1', APIs_V1)

  app.use(errorHandlingMiddleware)

  if (env.BUILD_MODE === 'production') {
    app.listen(process.env.PORT, () => {
      console.log(`Production Hello ${env.AUTHOR}, Back-end server is running successfully at Port ${process.env.PORT}`)
    })
  } else {
    app.listen(env.LOCAL_DEV_APP_PORT, env.LOCAL_DEV_APP_HOST, () => {
      console.log(`Local Dev Hello ${env.AUTHOR}, Back-end server is running successfully at Host ${env.LOCAL_DEV_APP_HOST} and Port: ${env.LOCAL_DEV_APP_PORT}`)
    })
  }

  // clean trước khi dừng server
  exitHook(() => {
    console.log('disconnecting')
    CLOSE_DB()
    console.log('disconnected')
  })
}

// kết nối mongodb thành công mới start server
(async () => {
  try {
    console.log('Connecting to MongoDB Cloud Atlas!')
    await CONNECT_DB()
    console.log('Connected to MongoDB Cloud Atlas!')

    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
})()