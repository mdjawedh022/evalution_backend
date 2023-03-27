const mongoose=require("mongoose");;

const linkedinSchema=mongoose.Schema({
title:String,
body:String,
device:String,
no_of_comments:Number
},{
    versionKey:false
})

const LinkedinModel=mongoose.model("linkedinUser",linkedinSchema)

module.exports={
    LinkedinModel
}




// title ==> String
// body ==> String
// device ==> String
// no_of_comments ==> Number
