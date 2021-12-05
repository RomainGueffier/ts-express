import express from 'express'
import { formattedRes } from '../libs/utilities.js'
import User from '../models/User.js'
import uuid4 from 'uuid4'

const router = express.Router()
router
    .get('/', async (req, res) => {
        try {
            const users = await User.findAll()
            res.json(users)
        } catch (error) {
            console.error(error)
            return res.json(formattedRes('Cannot connect to table User'))
        }
    })
    .post('/add', async (req, res) => {
        if (!req.body) return res.json()

        // maybe validate req.body?
        const now = Date.now()
        const data = {
            ...req.body,
            created: now,
            updated: now,
            enabled: false,
            key: uuid4(),
        }

        // insert into table user
        try {
            await User.create(data)
        } catch (error) {
            console.error(error)
            return res.json(
                formattedRes('Cannot create new entry in table User')
            )
        }
        res.json(data)
    })

export default router
