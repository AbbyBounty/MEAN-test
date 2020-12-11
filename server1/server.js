 const express=require('express')
 const bodyParser=require('body-parser')


 const app=express()
const userRouter=require('./routes/user')
const noteRouter=require('./routes/note')


app.use(bodyParser.json())


app.use('/user',userRouter)
app.use('/note',noteRouter)



 app.listen(8080,'0.0.0.0',()=>{
     console.log('server started')
 })