const express=require('express');
const { LinkedinModel } = require('../model/linkedin.model');
const linkedinRouter=express.Router();


linkedinRouter.get('/',async(req,res)=>{
    try{
        const linkedin=await LinkedinModel.find();
        res.send({linkedin})
    }catch(err){
        res.status(400).send({"msg":'something went wrong!'})
    }
})

linkedinRouter.post("/add",async(req,res)=>{
    try{
        const linkedin=new LinkedinModel(req.body)
        await linkedin.save();
        res.status(200).send({"msg":"A new data has been added in linkedin !"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

linkedinRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    const p = req.body;
    try {
        await LinkedinModel.findByIdAndUpdate({ "_id": id }, p);
        res.send(`Linkiedin Updated with id ${id} `);
    } catch (error) {
        res.send({ "msg": "somthing went wrong", "error": error.message });
    }
});


linkedinRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await LinkedinModel.findByIdAndDelete({ "_id": id });
        res.send(`Linkiedin Deleted with id ${id}`);
    } catch (error) {
        res.send({ "msg": "somthing is wrong", "error": error.message });
    }
});


module.exports={linkedinRouter}