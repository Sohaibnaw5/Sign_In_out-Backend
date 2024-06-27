const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const SECRET_KEY = process.env.SECRET_KEY
const signup = async (req,res) => {        // any work related to database takes time, so use async
   

    const {username,email,password} = req.body;
    try{
        //Existing User
        const existingUser = await userModel.findOne({email: email})
        if(existingUser){
            return res.status(400).json({message: "User already Exist"});
        }

        //HashPassword
        const hashPassword = await bcrypt.hash(password, 10);
        //UserCreation
        const result = await userModel.create({
            email : email,
            password: hashPassword,
            username: username
        });
        //TokenGenerate
        const access_token = jwt.sign({email: result.email,
             id : result._id,
            }, SECRET_KEY);
            res.status(200).json({user: result, access_token : access_token});

    } catch(error){ 
            console.log(error);
            res.status(500).json({message: "ERRORRR"})

    }
}

const signin = async (req,res)=>{
    const {email,password} = req.body;

    try{
        const existingUser = await userModel.findOne({email: email});
        if(!existingUser){
            return res.status(404).json({message: "User not found"}); 
        }

        const matchPassword  =await bcrypt.compare(password, existingUser.password);

        if(!matchPassword){
            return res.status(404).json({message: "Invalid Credentials"});
        }

        const access_token = jwt.sign({email: existingUser.email,
            id : existingUser._id,
           }, SECRET_KEY);
           res.status(200).json({user: existingUser, access_token : access_token});

    } catch(error) {
        console.log(error);
        res.status(500).json({message: "ERRORRRRRRRRRRR"})
    }
}

module.exports = {
    signin,
    signup
}