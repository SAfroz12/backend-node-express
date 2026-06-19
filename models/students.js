const mongoose= require("mongoose");
const studentSchema=new mongoose.Schema({

  name:{
    type:String,
    required:true,
    unique:true

  },
  age:{
    type:Number,
    required:true,
    min:18,
    max:90
  },
  email:{
    type:String,
    required:true,
    unique:true
  },

  status:{
    type:String,
    default:'active'
  }

})
module.exports=mongoose.model("Student",studentSchema)