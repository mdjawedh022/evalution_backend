const express=require("express");
const { connection } = require("./config/db");
const { linkedinRouter } = require("./routes/linkedin.routes");
const { userRouter } = require("./routes/user.routes");
const app=express();
const cors = require("cors");
const { auth } = require("./middleware/auth.middleware");
require("dotenv").config();
app.use(express.json())
app.use(cors());


app.use("/users",userRouter)
app.use(auth);
app.use("/linkedin",linkedinRouter)

app.listen(process.env.port,async()=>{
try{
    await connection;
    console.log("connected to DB")
} catch(err){
    console.log({"msg":"Something wwent wrong!"})
}
console.log(`server running on ${process.env.port}`)
})

