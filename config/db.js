const mongo=require('mongoose')

function conndb(){
    mongo.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("databse is connected!!");
        
    })
}

module.exports=conndb