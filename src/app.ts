//import compression from 'compression'
import cors from 'cors'
import express, { type Application, type Request, type Response } from 'express'
import swaggerUI from 'swagger-ui-express'
import { RegisterRoutes } from '../.tsoa/routes.js'
import config from './config/index.js'

const app: Application = express()
//app.use(compression)
app.use(cors({ origin: 'http://localhost' }))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Root url
app.get('/', (req: Request, res: Response) => {
  console.log('hello')
  res.send(`Tsoa + Express + Typescript Server ${req.query?.param}`)
})

app.use(
  '/docs',
  swaggerUI.serve,
  swaggerUI.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
)

RegisterRoutes(app)

app.listen(config.port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`,
  )
})
