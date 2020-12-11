const express=require('express')
const mysql=require('mysql2')
const router=express.Router()
const crypto=require('crypto-js')

router.post('/register',(req,res)=>{
    const {firstname,lastname,email,password}=req.body

    const connection=mysql.createConnection({


        host:'localhost',
        user:'root',
        password:'abhicompmit',
        port:3306,
        database:'mean'
    })


    const pwd=crypto.SHA256(password)

    const statement=`insert into user(firstname,lastname,email,password) values ('${firstname}','${lastname}','${email}','${pwd}')`
    
    connection.query(statement,(error,result)=>{
        connection.close()

        if(error){
            res.send(`error:${error}`)
        }

        else{
            res.send('ok')

        }
    })
   

  


})


module.exports=router