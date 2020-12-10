
const express=require('express')
const mysql2=require('mysql2')
const router=express.Router()

const categories=[
    {id:1,title:'category 1',description:'this is description'},
    {id:1,title:'category 1',description:'this is description'},
    {id:1,title:'category 1',description:'this is description'},
    {id:1,title:'category 1',description:'this is description'},
    {id:1,title:'category 1',description:'this is description'}
]

router.get('/category',(req,res)=>{
    const connection=mysql2.createConnection({
        host:'localhost',
        user:'root',
        password:'abhicompmit',
        port:3306,
        database:'mean'
    })
    
    const sql='select * from category'
    connection.query(sql,(error,result)=>{
        connection.close()
        res.send(result)
    })
   
})

router.post('/category',(req,res)=>{
    const {id,title,description}=req.body

categories.push(
    {
        id:id,
        title:title,
        description:description
    }
)

    res.send(categories)
})



module.exports=router