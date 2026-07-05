const User=require("../models/User");
const bcyrpt=require("bcrypt");
const jwt=require("jsonwebtoken");
const post =async(req,res)=>{
    const {name,email,password,role}=req.body;
    const hashpassword=await bcyrpt.hash(password,10)
    const user=await User.create({
        name,
        email,
        password:hashpassword,
        role
    });
    res.status(200).json(user)
}
const loginpost=async(req,res)=>{
    const {email,password}=req.body;
    const user= await User.findOne({email});
    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }
    const isMatch= await bcyrpt.compare(password,user.password);
    if(!isMatch){
        return  res.status(404).json({
            message:"password incorrect"
        })
    }
    // res.json({token})
    const token=jwt.sign({id:user._id,role:user.role},"mysecretkey");
    res.status(200).json({
        message:"logged in successfully",
        token
    })

}
const profile= async (req,res)=>{
    const user=await User.findById(req.user.id).select("-password")
     res.status(200).json(user)
}
const getStudents=async (req,res) => {
    const {page=1,limit=1}=req.query;
  const pageNum=Number(page);
  const limitNum=Number(limit);

    const skip=(pageNum-1)*limit;
    const user=await User.find().skip(skip).limit(limitNum)
    res.status(200).json(user);
 
}
 const totalUsers=async (req,res) => {
    const user=await User.countDocuments();
    res.status(200).json(user)
 }

module.exports={
    post,
    loginpost,
    profile,
    getStudents,
    totalUsers
}