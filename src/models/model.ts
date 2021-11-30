import { DataTypes, Sequelize } from 'sequelize'

const dbConnection = async (): Promise<Sequelize> => {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'database/database.sqlite',
    })

    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.log('Unable to connect to the database:', error)
    }

    return sequelize
}

export const UserModel = async () => {
    const sequelize = await dbConnection()
    const User = sequelize.define(
        'User',
        {
            // Model attributes are defined here
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            birthDate: {
                type: DataTypes.INTEGER,
            },
        },
        {
            freezeTableName: true,
        }
    )
}
