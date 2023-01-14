const express = require("express");
const todoRouter = express.Router();
const { Todomodel } = require("../model/model");
const jwt = require("jsonwebtoken")
const {authorised} = require("../middleware/authorisation")


todoRouter.post("/todo/create", async (req, res) => {
 const body = req.body;
 try {
    const todo = new Todomodel(body)
    await todo.save()
    let token = jwt.sign({name:"ram"},"secret",{expiresIn:'1h'})
    console.log(token)
    res.send({msg:"data is added","token":token})
 } catch (error) {
    console.log(error)
 }
})

//todoRouter.use(authorised)

todoRouter.get("/todo",authorised,async (req,res)=>{
    const allData = await Todomodel.find();
    res.send(allData)

})

module.exports = { todoRouter }
