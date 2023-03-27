const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decoded=jwt.verify(token,"link")
        if(decoded){
            req.body.userID=decoded.userID
            next();
        } else{
            res.status(400).send({"msg":"Please login 1st"})
        } 
    } else{
        res.status(400).send({"msg":"Please login 1st!"})
    }
}

module.exports={auth}