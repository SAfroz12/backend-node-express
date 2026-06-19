const express=require("express");
const router=express.Router();
const {postOne,getOne,getName,putOne,deleteOne}=require("../controllers/studentController")
router.post("/",postOne);
router.get("/",getOne);
router.get("/name/:name",getName);
router.put("/:id",putOne);
router.delete("/:id",deleteOne);

module.exports=router;