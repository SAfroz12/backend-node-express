
const Student=require("../models/students");
 const postRouter=async  (req,res)=>{
      const {name,age,email}=req.body;
      const student=new Student({
        name,
        age,
        email
      });

      await student.save();
      res.status(200).json(student)
}
const getRouter=async (req,res)=>{
    const student=  await Student.find();
    res.status(200).json(student)
}
module.exports={
    postRouter,
    getRouter
}