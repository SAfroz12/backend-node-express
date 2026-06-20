const jwt=require("jsonwebtoken");
const authmiddleware=(req,res,next)=>{
     try{

        
         const token=req.headers.authorization;
        console.log(token)
      const decoded=jwt.verify(token,"mysecretkey");
      console.log(decoded.role)
      next()
     }  catch(err){
        return res.status(401).json({
            message:"invalid Token"
        })
     }
}
module.exports=authmiddleware