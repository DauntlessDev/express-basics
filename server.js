const express = require('express')
const app = express()

app.set("view engine", "ejs")


app.get('/', (req, res) => {
    console.log('Here') 
    // res.status(500).send({message:"Hi"})
    // res.download('server.js')

    res.render('index', { text: "World"})

})

app.listen(3000)
