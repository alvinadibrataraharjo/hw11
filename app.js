var express = require('express')
var port = 3000
var app = express()
var router = require('./routes/index')

app.use(express.json())

app.use('/todo', router)

if(process.env.NODE_ENV != "test"){
app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})
}


module.exports = app