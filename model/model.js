const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
    title:{type:String,required:true},
    status:{type:String,required:true}
},{
    versionKey:false
})

const Todomodel=mongoose.model("todo",todoSchema)

module.exports={Todomodel}