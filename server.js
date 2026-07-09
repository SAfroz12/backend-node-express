const express=require("express");
const mongoose=require("mongoose");
const helmet=require("helmet")
const app=express();
app.use(helmet())
const studentRoutes=require("./routes/StudentsRoutes")
const userRoutes=require("./routes/usersRoutes")
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/allstudents").
then(()=>console.log("mongoose connected"))
.catch((err)=>console.log(err))
app.use("/students",studentRoutes);
// console.log(userRoutes)
app.use('/users',userRoutes)
app.listen(3000,()=>{
    console.log("server connected")
})