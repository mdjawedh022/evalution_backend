const express=require("express");
const userRouter=express.Router();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { UserModel } = require("../model/user.model");

//registration part
userRouter.post("/register",async(req,res)=>{
    const {name,email,gender,password,age,city,is_married}=req.body;
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            const user=new UserModel({name,email,gender,password:hash,age,city,is_married})
            await user.save();
            res.status(200).send({"msg":"Registration has been successfull!"})
        })
    } catch(err){
        res.status(400).send({"msg":err.message})
    }
})
userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await UserModel.findOne({email})
        if (user.length > 0) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({"msg":"Login Successfull!","token":jwt.sign({"userID":user.id},"link")})
                } else {
                    res.status(400).send({"msg":"Login failed!"})
                }
            });
        } 
        // else {
        //     res.send({ msg: "Wrong Credntials" });
        // }
        
        } catch (err) {
        res.send({ msg: err.message });
        }
        });
        
module.exports={userRouter}





   