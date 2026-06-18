const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/students");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB").then(() => {
    console.log("mongodb connected")
}).catch((err) => {
    console.log(err)
});
// 1) example  of post and get api request and storing in mongodb 

app.post("/students", async (req, res) => {

    const { name, age, email } = req.body;
    const student = new Student({
        name, age, email
    });
    await student.save();
    res.status(201).json({
        message: "student created", student
    })
});
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        console.log(students)
        res.status(200).json(students)
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    } 
})
app.get("/students/:id", async (req, res) => {
    try{
        const student = await Student.findById(req.params.id);
        
        res.status(200).json(student);
    } catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})
app.put("/students/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    const { name, age, email } = req.body;
    student.name = name
    student.age = age
    student.email = email;
    await student.save();
    res.status(200).json(student);

})
app.delete("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
        return res.status(404).json({
            message: "student Not found"
        })
    }
    res.status(200).json({
        message: "student Deleted succesfully",
        student
    })
})
// create document 
app.post("/studentnewOne", async (req, res) => {
    const { name, age, email } = req.body;
    const student = await Student.create({
        name, age, email
    });
    await student.save()
    res.status(200).json(student)


})
app.get("/studentnewOne", async (req, res) => {
    const student = await Student.find();

    res.status(200).json(student)
})
app.listen(3000, () => {
    console.log("server Running")
})