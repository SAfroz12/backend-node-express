const express=require("express");
const router=express.Router();
const {postOne,getOne,getName,putOne,deleteOne}=require("../controllers/studentController")
const {authmiddleware,adminMiddleware}=require("../authmiddlewares/authmiddleware")
router.post("/",authmiddleware,postOne);
router.get("/",authmiddleware,getOne);
router.get("/name/:name",authmiddleware,getName);
router.put("/:id",authmiddleware,putOne);
router.delete("/:id",authmiddleware,adminMiddleware,deleteOne);

module.exports=router;