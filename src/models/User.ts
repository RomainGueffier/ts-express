import _ from 'sequelize'
const { DataTypes } = _
import db from '../config/database.js'

const User = db.define('user', {
    firstName: {
        type: new DataTypes.STRING(25),
        allowNull: false,
    },
    lastName: {
        type: new DataTypes.STRING(25),
        allowNull: false,
    },
    birth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(25),
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    key: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
})

export default User
