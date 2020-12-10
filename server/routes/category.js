
const express=require('express')

const router=express.Router()



router.get('/category',(req,res)=>{
    res.end("hello from GET category")
})



module.exports=router