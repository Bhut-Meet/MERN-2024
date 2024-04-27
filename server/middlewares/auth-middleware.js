const jwt = require('jsonwebtoken')
const User = require('../models/user-model')
const authMiddleware =async (req, res, next) =>{
    const token = req.header('Authorization');
    
    if(!token){
        //if you attempt to use an expired token ,you will recive a "401 Unauthorized HTTP" error response
        return res.status(401).json({msg:"Unauthorized HTTP , token is invalid"})
    }
    
    const jwtToken = token.replace("meet"," ").trim();
    console.log("token from auth middleware", jwtToken);

    try {
        
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECCTECT_KEY)
        
        const userData = await User.findOne({email:isVerified.email}). //we search for the email of the user in our database 
        select({
            // password:0,
        });
        console.log(userData);

        req.user = userData;
        req.token =token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({msg:"Unauthorized HTTP , token is invalid"})
    }   

}

module.exports = authMiddleware;