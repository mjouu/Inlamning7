import dotenv from 'dotenv'
import mongoose from 'mongoose'

/* dotenv.config()
const { PORT, 
    DEV_DATABASE_URL,
    PROD_DATABASE_URL,
    ENVIRONMENT } = process.env */

const PORT = process.env.PORT || 3001

const connectToPort = async (application) => {

    try {
        await application.listen(PORT, () => {
            console.log(`✔️ SERVER IS RUNNING ON PORT: ${PORT}`)
        })
    } catch (error) {
        console.error('✖️ ERROR OCCURED WHILE TRYING TO CONNECT TO PORT')
    }
}

const connectToDatabase = async () => {
    /* const DATABASE_URL = ENVIRONMENT === 'DEVELOPMENT' ? DEV_DATABASE_URL : PROD_DATABASE_URL */
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ehandeljsf",
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true
            })
        console.log(`✔️ SUCCESSFULLY CONNECTED TO DATABASE`)
    } catch (error) {
        console.error('✖️ ERROR OCCURED WHILE TRYING TO CONNECT TO DATABASE..')
        process.exit()
    }
}

export default {
    connectToPort,
    connectToDatabase
}