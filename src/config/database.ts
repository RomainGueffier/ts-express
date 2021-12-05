import { Sequelize } from 'sequelize'

const db: Sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/db.sqlite',
})

export const dbConnect = async (connector: Sequelize): Promise<boolean> => {
    let connected = true
    try {
        await connector.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.log('Unable to connect to the database:', error)
        connected = false
    }
    return connected
}

export default db
