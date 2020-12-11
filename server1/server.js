 const express=require('express')

 const app=express()
const bodyParser=require('body-parser')
const userRouter=require('./routes/user')
const noteRouter=require('./routes/note')


app.use('/user',userRouter)
app.use('/note',noteRouter)


app.use(bodyParser.json())

 app.listen(8080,'0.0.0.0',()=>{
     console.log('server started')
 })