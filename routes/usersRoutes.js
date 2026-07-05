const express=require("express");
const router=express.Router();
const {authmiddleware}=require("../authmiddlewares/authmiddleware")
const {post,loginpost,profile,getStudents,totalUsers}=require("../controllers/userController")
router.post("/",post)
router.post("/login",loginpost)
 router.get("/profile",authmiddleware,profile)
 router.get("/getStudents",getStudents)
router.get("/totalUsers",totalUsers)
// router.get("/allusers",getdata)
module.exports=router;