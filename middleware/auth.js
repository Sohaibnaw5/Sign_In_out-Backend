const jwt = require("jsonwebtoken")
const  SECRET_KEY = process.env.SECRET_KEY
const auth = (req,res, next)=>{
    try {
        
        let access_token = req.headers.authorization;
        if(access_token){
            access_token= access_token.split (" ")[1];
            let user = jwt.verify(access_token,SECRET_KEY );
            req.userId = user.id;


        }
        else{
            return res.status(401).json({message: "Unauthorized User"});
        }

        next();

    } catch (error) {
        
    }
}

module.exports = auth;