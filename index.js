const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){

        res.end("hello Backend");
    }else{
        res.end("iam good ")
    }

})
// server.listen(5002,()=>{
//     console.log("server running")
// })
//fsModules
const fs=require("fs");
fs.writeFile("abc.txt","abc",(err)=>{
 if(err){
    console.log(err)
 }else{
    console.log("file is there")
 }
})
fs.appendFile("abc.txt","\nappu123",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('iam good')
    }
})
fs.readFile("abc.txt","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
fs.unlink("abc.txt",(er)=>{
    if(er){
        console.log(er)
    }else{
        console.log('itsok')
    }
})
//Path
const path=require("path");
console.log(path.extname("index.js"))
console.log(__dirname)
const fr=require("fs");
fs.writeFile("text.txt","abc",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("abc is created")
    }
})
const path1=require("path");
const filename=path1.join(__dirname,"text.txt")
console.log(filename)

const data12=require("http");

//http module


const data={
    name:"afroz",
    age:23
}
const p=data12.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"application/json"
    })
    if(req.url==="/name"){
        res.end(JSON.stringify(data.name))
    }
    else if(req.url==="/age"){
      res.end(JSON.stringify(data.age))
    }else{
        res.end(JSON.stringify(data))
    }
    console.log(req.method)
})
// p.listen(5000,()=>{
//     console.log("start server")
// })

// Express Routes
// 1)
const express=require("express");
const app=express();
 const handle=require("./routes/userRoutes")
 app.use("/userone",handle);

 const handled=require("./routes/productRoutes");
 app.use("/products",handled)
 
 app.use((req,res,next)=>{
     res.status(404).send("its not found")
    })
    app.use((err,req,res,next)=>{
        res.status(500).send({
            status:"failed",
            message:err.message
        })
    })
    
    app.listen(1000,()=>{
       console.log("server is running")
    })

 
