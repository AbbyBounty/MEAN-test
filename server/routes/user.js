const express=require('express')

const router=express.Router()



router.get('/user',(req,res)=>{
    res.end("hello from GET user")
})


module.exports=router