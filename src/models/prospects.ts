import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

export default class Prospects {
    static findMany = async () => {
        let prospects = null
        try {
            prospects = await prisma.prospects.findMany()
        } catch (e) {
            console.error(e)
        }
        return prospects
    }

    static findUnique = async (id: number) => {
        let prospect = null
        try {
            prospect = await prisma.prospects.findUnique({
                where: { id },
            })
        } catch (e) {
            console.error(e)
        }
        return prospect
    }

    static create = async (data: any) => {
        let prospects = null
        try {
            prospects = await prisma.prospects.create({
                data: data,
            })
        } catch (e) {
            console.error(e)
        }
        return prospects
    }

    static update = async (id: number, data: any) => {
        let prospect = null
        try {
            prospect = await prisma.prospects.update({
                where: { id },
                data: data,
            })
        } catch (e) {
            console.error(e)
        }
        return prospect
    }

    static delete = async (id: number) => {
        let prospect = null
        try {
            prospect = await prisma.prospects.delete({
                where: { id },
            })
        } catch (e) {
            console.error(e)
        }
        return prospect
    }
}
