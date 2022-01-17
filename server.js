const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Here') 
    // res.status(500).send({message:"Hi"})
    res.download('server.js')

})

app.listen(3000)
