const jwt=require("jsonwebtoken");
const authmiddleware=(req,res,next)=>{
     try{

        
         const token=req.headers.authorization;
        console.log(token)
      const decoded=jwt.verify(token,"mysecretkey");
      req.user=decoded;
      console.log(decoded)
    
    //   console.log(decoded.role)
      next()
     }  catch(err){
        return res.status(401).json({
            message:"invalid Token"
        })
     }
}
const adminMiddleware=(req,res,next)=>{
    if(req.user.role!=="admin"){
        return res.status(403).json({
            message:"access denied"
        })
    }
    next()
}
module.exports={authmiddleware,adminMiddleware}