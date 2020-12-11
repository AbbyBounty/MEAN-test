const express=require('express')
const mysql=require('mysql2')
const router=express.Router()

router.post('/register',(req,res)=>{
    const {firstname,lastname,email,password}=req.body

    const connection=mysql.createConnection({


        host:'localhost',
        user:'root',
        password:'abhicompmit ',
        port:3306,
        database:'mean'
    })

    const statement=`insert into user(firstname,lastname,email,password) values ('${firstname}','${lastname}','${email}','${password}')`
    
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