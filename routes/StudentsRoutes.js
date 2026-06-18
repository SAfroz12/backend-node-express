const express=require("express");

const router=express.Router();
const { postRouter,
    getRouter}=require("../controllers/studentController");

    router.post("/",postRouter);
    router.get("/",getRouter);
  module.exports=router;
