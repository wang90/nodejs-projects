const express = require('express')
const mongoose = require('mongoose');
const app = express();
const templateRouter = require('./routes/template');
const api  = require("./middleware/api")
const bodyParser =require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false,
}))

app.use(api);
app.use('/xhr/v1',templateRouter)

app.listen(8080, ()=>{
    console.log('8080 is running');
})