//  multer
const express=require("express");
const multer = require("multer");
const app=express();
const storage=multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,"uploads/");
    }
    ,
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:storage

})
console.log(upload)
app.post("/upload",upload.array("photo",5),(req,res)=>{
    // console.log(req)
    console.log(req.files);
    res.send("file uploaded") 
})
// app.listen(3000, () => {

//     console.log("Server Running");

// });

