import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.get('/db/model', async (req: Request, res: Response) => {
    const { name } = req.query
    if (!name) {
        res.status(500).json({
            error: true,
            message: 'no valid params or model name given !',
        })
    }
    res.json({ query: req.query })
})
