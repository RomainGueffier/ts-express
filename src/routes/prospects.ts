import express from 'express'
import { formattedRes } from '../libs/utilities.js'
import Prospects from '../models/prospects.js'
import uuid4 from 'uuid4'

const router = express.Router()
router
    .get('/', async (req, res) => {
        try {
            const prospects = await Prospects.findMany()
            res.json(prospects)
        } catch (error) {
            console.error(error)
            return res.json(formattedRes('Cannot connect to table User'))
        }
    })
    .get('/:id', async (req, res) => {
        if (!req.params.id) return res.sendStatus(404)

        const id = parseInt(req.params.id)
        try {
            const prospect = await Prospects.findUnique(id)
            if (!prospect) return res.sendStatus(404)
            res.json(prospect)
        } catch (error) {
            console.error(error)
            return res.json(formattedRes('Cannot connect to table User'))
        }
    })
    .post('/', async (req, res) => {
        if (!req.body) return res.json(formattedRes('Empty body'))

        // insert into table prospect
        let prospect
        try {
            prospect = await Prospects.create(req.body)
        } catch (error) {
            console.error(error)
            return res.json(
                formattedRes('Cannot create new entry, bad formatted data')
            )
        }
        res.json(prospect)
    })
    .put('/:id', async (req, res) => {
        if (!req.params.id) return res.sendStatus(404)
        if (!req.body) return res.json(formattedRes('Empty body'))

        // insert into table prospects
        const id = parseInt(req.params.id)
        let prospect
        try {
            prospect = await Prospects.update(id, req.body)
            res.json(req.body)
        } catch (error) {
            console.error(error)
            return res.json(formattedRes('Cannot update User ' + req.params.id))
        }
    })
    .delete('/:id', async (req, res) => {
        if (!req.params.id) return res.sendStatus(404)

        // insert into table user
        const id = parseInt(req.params.id)
        try {
            await Prospects.delete(id)
            res.json(formattedRes(`User ${req.params.id} has been deleted`))
        } catch (error) {
            console.error(error)
            return res.json(formattedRes('Cannot delete User ' + req.params.id))
        }
    })

export default router
