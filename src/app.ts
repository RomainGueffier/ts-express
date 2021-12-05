import express, { Application, Request, Response } from 'express'
//import compression from 'compression'
import cors from 'cors'
import config from './config/index.js'
import db, { dbConnect } from './config/database.js'
import UsersRouter from './routes/users.js'

const app: Application = express()
//app.use(compression)
app.use(
    cors({
        origin: 'http://localhost',
    })
)
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Root url
app.get('/', (req: Request, res: Response) => {
    dbConnect(db)
    console.log('hello')
    res.send('GraphQL API with Express + Typescript Server ' + req.query?.param)
})

app.use('/users', UsersRouter)

app.get('/about', (req: Request, res: Response) =>
    res.send("It's all about me!")
)

app.listen(config.port, () => {
    console.log(
        `⚡️[server]: Server is running at http://localhost:${config.port}`
    )
})
