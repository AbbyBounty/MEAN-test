
const express=require('express')

const router=express.Router()

const categories=[
    {id:1,title:'category 1',description:'this is description'},
    {id:1,title:'category 1',description:'this is description'},
    {id:1,title:'category 1',description:'this is description'},
    {id:1,title:'category 1',description:'this is description'},
    {id:1,title:'category 1',description:'this is description'}
]

router.get('/category',(req,res)=>{
    
    res.send(categories)
})



module.exports=router