// const express = require('express')


// const app = express()


// app.listen(8080, '0.0.0.0', (req, res) => {
//     console.log(`application started`)
// })

// app.get('/', (req, res) => {
//     res.send(`hello`)
// })

// app.post('/', (req, res) => {


//     res.send(req.body())

// })


// app.put('/', (req, res) => {


//     res.send(req.body())

// })

// app.delete('/', (req, res) => {


//     res.send(req.body())

// })


const express=require('express')

const app=express()



function log(req,res,next){
    next()
}

app.use(log)

app.get('/',(req,res)=>{
    res.end("hello from GET")
})

app.listen(8080,'0.0.0.0',()=>{
    console.log('server started')
})