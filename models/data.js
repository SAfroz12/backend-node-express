import mongoose from "mongoose";
const data= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
          required:true
    }

})
export default mongoose.model("Data",data);