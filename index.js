const express=require("express")
const app=express()
app.use(express.json())

require("dotenv").config();

const {todoRouter} = require("./router.js/todoRouter")
app.use("/",todoRouter)


//-------------Connection---------------//
const PORT=process.env.port
const {connection}=require("./config/db")
app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Connected to DB")
        console.log(`Server running at ${PORT}`)
    }catch(e){
        console.log("error",e)
    }
})