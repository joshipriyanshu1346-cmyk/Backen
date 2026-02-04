const model=require("mongoose")

const noteschema=model.Schema({
    email:String,
    password:String,
    
})

const mongomodel=model.model('Book',noteschema)

module.exports=mongomodel