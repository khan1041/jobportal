
import express from 'express'
import { registerCompany,getCompany,getCompanyById,updateCompany } from '../controller/company.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
//import upload from '../middlewares/Multer.js'
import { singleUpload } from '../middlewares/multer.js'
const router=express.Router()
//router.post('/login',Login,)
router.post('/registercompany',isAuthenticated,registerCompany)
router.get("/get",isAuthenticated,getCompany)
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload, updateCompany);

//Blog router
export default router