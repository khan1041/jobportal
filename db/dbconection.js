

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const uri=process.env.url
const conectedDb=async ()=>{

    try {
        await mongoose.connect(mongodb+srv://skshimul79977007:jVsznoSExXGEY71U@cluster0.czfbnjj.mongodb.net/jobportal)
        console.log("conceted done to db")
    } catch (error) {
        console.error("database connected faill")
        process.exit(0)
    } 
}

export default conectedDb
