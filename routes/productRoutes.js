const express=require("express");
const routes=express.Router();;

// routes.get("/",(req,res)=>{
//     res.send("all products")
// })
// routes.get("/:id",(req,res)=>{
//     res.send(`iam the id ${req.params.id}`)
// });
routes.route("/").
get((req,res)=>{
    res.send("iam get method of route")
}).
post((req,res)=>{
res.send("iam put method of route")
})

module.exports=routes;
