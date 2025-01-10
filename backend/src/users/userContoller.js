const jwt = require("jsonwebtoken");
const User = require("./usermodel");

module.exports.adminLogin = async(req,res)=>{
    const {username , password} = req.body;
    const jwtSecret = process.env.JWT_SECRET_KEY;
    try{
        const admin = await User.findOne({username})
        if(!admin){
            return res.status(404).send({message : "Admin not found!"})
        }
        if(password!==admin.password){
           return  res.status(401).send({message : "Invalid password!"})
        }
        const token = jwt.sign({id: admin._id,username : admin.username,role : admin.role},
            jwtSecret,
            {expiresIn : "1h"}
        )
        return res.status(200).send({message : "Authentication successfull",token:token,user : {
            username : admin.username,
            role : admin.role
        }})
    }catch(err){
        console.log("Failed to login the admin",err);
        res.status(500).send({message : "Failed to login the admin"});
    }
}