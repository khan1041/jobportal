

import express from 'express'
//const express=require('express')
import conectedDb from './db/dbconection.js'
//import router from './routes/userroutes.js'
import router from './routes/Userroutes.js';
import compnayroute  from './routes/company.route.js'
import jobroute from './routes/job.route.js'
import applicant from './routes/application.route.js'
import { v2 as cloudinary } from "cloudinary";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import cors from 'cors'
//import { errorMiddleware } from './midelware/errorhandel.js';
const app = express()
export default app
dotenv.config()
app.use(cookieParser())
app.use(express.json())

app.use(
  cors({
 origin:true,
credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],

  })
)
//app.use(cors(corsoption))
app.use(express.static('public'))
//import fileUpload from 'express-fileupload'

const port=8000


// app.use(fileUpload({

//   useTempFiles:true,
//   tempFileDir:"/tmp",
//  }))
 app.use("/app/auth",router)
 app.use("/app/auth",applicant)
app.use("/app/auth",compnayroute)
app.use("/app/auth",jobroute)
 cloudinary.config({ 
 cloud_name:process.env.CLOUD_NAME, 
 api_key:process.env. CLOUD_API_KEY, 
 api_secret:process.env.API_SECRET_KEY 
 // Click 'View API Keys' above to copy your API secret
}); 
//app.use(errorMiddleware)
conectedDb().then(()=>{
  app.listen(port,()=>{
   console.log(`surver is running at port:${port}`)    
  })
})