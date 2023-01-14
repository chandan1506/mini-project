const jwt = require("jsonwebtoken")

const authorised = (req,res,next)=>{
     token = req.headers.authorization
    //in case of bearer token, use :-
    // token = req.headers.authorization.split(" ")[1]
    // console.log(token)
    try{
         if(token){
        const decoded = jwt.verify(token,"secret")
         if(decoded){
            next()
        }else{
         res.send("plz login first")
        }
    }else{
        res.send("plz login")
    }
}catch(err){
    //console.log(err.message)
res.send("err.message")
}
}
module.exports = {authorised}