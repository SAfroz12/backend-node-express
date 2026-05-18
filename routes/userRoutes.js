const express=require("express");
const router=express.Router();
//Basic example//
router.get("/name",(req,res)=>{
    res.send('all users')
})
router.get("/:id/book/:bookid",(req,res)=>{

    res.send(`User ${req.params.id} and ${req.params.bookid}`);
})

// middleware for only one specific route

router.use((req,res,next)=>{
    console.log("user Router middleware")
    next();

})
// router.get("/",(req,res)=>{
//     res.send("users")
// })

router.get("/",(req,res)=>{
    res.send("welcome home")
})

router.get("/sum",(req,res)=>{
    const {a,b}=req.query;
    const sum=Number(a)+Number(b);
    res.send(` sum is ${sum}`)
})


module.exports=router;
