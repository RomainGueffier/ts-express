import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()
if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

dotenv.config()

const config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 7777,
}
export default config
