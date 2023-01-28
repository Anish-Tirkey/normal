const express    = require('express')
const mongoose   = require('mongoose')
// const bodyParser = require('body-parser')
 const app = express();


mongoose.connect("mongodb://localhost:27017/testdb")
const db = mongoose.connection
db.on('error',(err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})


app.get('/',(req,res) => {
    res.send('daskjkasd');
})

app.listen(3000, ()=>{
    console.log("server is open")
})