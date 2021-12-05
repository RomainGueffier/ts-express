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
    .get('/:id', async (req, res) => {
        const userId = req.params.id?.toString()
        try {
            const user = await User.findByPk(userId)
            if (!user) return res.sendStatus(404)
            res.json(user)
        } catch (error) {
            console.error(error)
            return res.json(formattedRes('Cannot connect to table User'))
        }
    })
    .post('/', async (req, res) => {
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
    .put('/:id', async (req, res) => {
        if (!req.body) return res.json()

        // insert into table user
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            res.json(req.body)
        } catch (error) {
            console.error(error)
            return res.json(formattedRes('Cannot update User ' + req.params.id))
        }
    })
    .delete('/:id', async (req, res) => {
        if (!req.params.id) return res.sendStatus(404)

        // insert into table user
        try {
            await User.destroy({
                where: {
                    id: req.params.id,
                },
            })
            res.json(formattedRes(`User ${req.params.id} has been deleted`))
        } catch (error) {
            console.error(error)
            return res.json(formattedRes('Cannot delete User ' + req.params.id))
        }
    })

export default router
