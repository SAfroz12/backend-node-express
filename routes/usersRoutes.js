const express=require("express");
const router=express.Router();
const {authmiddleware}=require("../authmiddlewares/authmiddleware")
const {post,loginpost,profile}=require("../controllers/userController")
router.post("/",post)
router.post("/login",loginpost)
 router.get("/profile",authmiddleware,profile)
// router.get("/allusers",getdata)
module.exports=router;