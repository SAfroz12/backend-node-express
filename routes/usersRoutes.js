const express=require("express");
const router=express.Router();
const authmiddleware=require("../authmiddlewares/authmiddleware")
const {post,loginpost}=require("../controllers/userController")
router.post("/",post)
router.post("/login",loginpost)
// router.get("/allusers",getdata)
module.exports=router;