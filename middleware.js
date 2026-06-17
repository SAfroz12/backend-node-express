
//middlewares//
//  const express=require("express");
//  const app=express();
 const middleware=(req,res,next)=>{
    console.log("middleware is running");

    next();
 }
 app.use(middleware)
 app.get("/",(req,res)=>{
    res.send("started middleware")
 })

//  app.listen(3900)
// 1) without middleware

app.get("/profiled",(req,res)=>{
    console.log("request recieved");
    const loggedin=true;
    if(!loggedin){
     return  res.send("its unauthorized")
    }
    res.send("its authorized")
})
// app.listen(3000)
// 2)
app.get("/dash",(req,res)=>{
    console.log("request  recieved");
    const  loggedin=true;
    if(!loggedin){
     return  res.send("its unauthorized")
    }
    res.send("response sent")

})
// app.listen(3008)


// with middleware
const auth=(req,res,next)=>{
    console.log("request recieved");
    const loggedin=true;
     if(!loggedin){
        return res.send("its unauthorized")
     }
     
     next();
}
app.get("/profile",auth,(req,res)=>{
    res.send("profile")
})
app.get("/dashboard",auth,(req,res)=>{
    res.send("dashboard")
})
//practice//
// creating multiple middlewares
const auth1=(req,res,next)=>{
    console.log("auth1")
    next()
}
const auth2=(req,res,next)=>{
    console.log("auth2");
    next();
}
app.use(auth1,auth2)
app.get("/auth",auth1,auth2,(req,res)=>{
    res.send("auth1 and auth2 are alive ")
})
// app.listen(2000)

//built-in middlewares//

//  const app=express();
//  const express=require("express");\
//1)express.json();
//2)express.urlencoded({extended:true})
//3)express.static("public")
// app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.post("/user",(req,res)=>{
    console.log(req.body)
    res.send("data recieved")
})
// app.listen(2000)


// error handling
// example 1)

app.get("/add",(req,res,next)=>{
    const error=new Error("something failed");
    next(error);
    
})
app.use((req,res)=>{
    res.status(404).send("page not found")
})

app.use((err,req,res,next)=>{
    res.status(500).send({
        success:false,
        message:err.message
    })
})
