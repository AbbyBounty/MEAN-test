const express=require('express')
const db=require('../db')
const router=express.Router()
const crypto=require('crypto-js')

const mailer=require('nodemailer')

router.post('/register',(req,res)=>{
    const {firstname,lastname,email,password}=req.body

  


    const pwd=crypto.SHA256(password)

    const statement=`insert into user(firstname,lastname,email,password) values ('${firstname}','${lastname}','${email}','${pwd}')`
    
    db.query(statement,(error,result)=>{
     

        if(error){
            res.send(`error:${error}`)
        }

        else{
            res.send('ok')

        }
    })


})

router.post('/login',(req,res)=>{
    const {email,password}=req.body

    const pwd=crypto.SHA256(password)
const statement=`select * from user where email='${email}' and password='${pwd}'`
db.query(statement,(error,result)=>{
     

    if(error){
        res.send(`error:${error}`)
    }

    else{

        res.send(result)

    }
})

})





module.exports=router