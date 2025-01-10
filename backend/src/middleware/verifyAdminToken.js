const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET_KEY

const verifyAdminToken = (req,res,next,err) =>{
    const token = req.headers['authorization']?.split(" ")[1];
    if(!token){
        return res.status(401).send({message : "Access Denied. No token provided"});
    }
    jwt.verify(token,jwtSecret,(err,user)=>{
        if(err){
            return res.status(403).send({messaeg : "Invalid credentials"});
        }
        req.user = user;
        next();
    })
}

module.exports  = verifyAdminToken