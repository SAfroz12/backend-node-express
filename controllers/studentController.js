const students = require("../models/students");
const Student=require("../models/students")

const postOne=async(req,res)=>{
try{

  const {name,age,email}=req.body;
  
    const student=new Student({
      name,
      age,
      email
    });
    await student.save();
    res.status(200).json(student)
}catch(err){
  res.status(500).json({
    message:err.message
  })
}
}
const getOne=async(req,res)=>{

  if(req.query.name){
    const students=await Student.find({
      name:req.query.name
    })

     return res.status(200).json(students)
  }
  else if(req.query.age){
    const student=await Student.find({
      age:req.query.age
    });
    return res.status(200).json(student)
  }
  else if(req.query.email){
    const student=await Student.find({
      email:req.query.email
    })
    return res.status(200).json(student)
  }else{

    const student= await Student.find();
    res.status(200).json(student)
  }
}
const getName=async(req,res)=>{
  const {name}=req.params
  const student=await Student.findOne({name:name});
  res.status(200).json(student)
}
const putOne=async(req,res)=>{
  const {name,age,email}=req.body;
  const student= await Student.findByIdAndUpdate(req.params.id,{
    name,
    age,email
  },{new:true});
  res.status(200).json(student)
}
const deleteOne=async(req,res)=>{
  const student=await Student.findByIdAndDelete(req.params.id);
  res.status(200).json(student)
}
module.exports={
    postOne,
    getOne,
    getName,
    putOne,
    deleteOne,
  
}