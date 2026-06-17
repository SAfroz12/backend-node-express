const express=require("express");
const mongoose=require("mongoose");
const Student=require("./models/students");
const app=express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB").then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log(err)
});
// 1) example  of post and get api request and storing in mongodb 

app.post("/students",async (req,res)=>{

    const {name,age,email}=req.body;
    const student=new Student({
        name,age,email
    });
    await student.save();
    res.status(201).json({
        message:"student created",student
    })
});
app.get("/students",async (req,res)=>{
    const students =await Student.find();
    console.log(students)
    res.status(200).json(students)
})
app.listen(3000,()=>{
    console.log("server Running")
})