const User=require("../models/User");
const bcyrpt=require("bcrypt");
const jwt=require("jsonwebtoken");
const post =async(req,res)=>{
    const {name,email,password}=req.body;
    const hashpassword=await bcyrpt.hash(password,10)
    const user=await User.create({
        name,
        email,
        password:hashpassword
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
module.exports={
    post,
    loginpost,
    profile
}