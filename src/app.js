const express=require("express")
const mongomodel=require("../Model/Model")
const cors=require("cors")
// const e = require("express")

const app=express()
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))

app.post("/api/data",async(req,res)=>{
    const{email,password}=req.body
    console.log('Data add successfully!!!');

    const data=await mongomodel.create({
        email,password
    })

    res.status(201).json({
        message:"data Inserted Successfuly!!",
        data
    })
    
})

app.get("/api/data",async(req,res)=>{
    const data= await mongomodel.find()
    res.status(200).json({
        message:"Data get successfully",
        data
    })

})

app.patch("/api/data/:idx",async(req,res)=>{
    const id=req.params.idx
    const {email,password}=req.body
    const data1=await mongomodel.findByIdAndUpdate(id,{email,password})
    res.status(200).json({
        message:'update successfully',
        
    })
    
})

app.delete("/api/data/:idx",async(req,res)=>{
    const id=req.params.idx
    const data=await mongomodel.findByIdAndDelete(id)
    res.status(200).json({
        message:"data deleted successfully"
    })
})
module.exports=app