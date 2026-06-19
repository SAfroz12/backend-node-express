const express=require("express");
const mongoose=require("mongoose");
const app=express();
const studentRoutes=require("./routes/StudentsRoutes")
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/allstudents").
then(()=>console.log("mongoose connected"))
.catch((err)=>console.log(err))
app.use("/students",studentRoutes)
app.listen(3000,()=>{
    console.log("server connected")
})