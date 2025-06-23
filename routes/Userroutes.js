



import express from 'express'
import { Login,register,logout,updateProfile } from '../controller/Usercontoler.js'
//import upload from '../middlewares/Multer.js'
import { singleUpload } from '../middlewares/multer.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

//import { isAuthenticated } from '../middlewares/isAdmin.js'
//import { blogstart,updateBlog,allBlog,getSingleBlogs,blogimageCange,deleteBlog,Myblogs} from '../controllers/Blogcrate.js'
const router=express.Router()

router.post('/login',Login,)
router.post('/register',singleUpload,register)
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

//Blog router

export default router