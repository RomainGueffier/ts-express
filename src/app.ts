import express, { Application, Request, Response } from 'express'
import compression from 'compression'
import cors from 'cors'
import config from './config/index.js'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    res.send('GraphQL API with Express + Typescript Server ' + req.query.param)
})

app.get('/about', (req: Request, res: Response) =>
    res.send("It's all about me!")
)

app.use(compression)
app.use(cors())
app.listen(config.port, () => {
    console.log(
        `⚡️[server]: Server is running at http://localhost:${config.port}`
    )
})
