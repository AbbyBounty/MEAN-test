const express = require('express')


const app = express()


app.listen(8080, '0.0.0.0', (req, res) => {
    console.log(`application started`)
})

app.get('/', (req, res) => {
    res.send(`hello`)
})

app.post('/{id}', (req, res) => {


    res.send(req.query(id))

})