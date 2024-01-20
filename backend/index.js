const express = require('express');

const port = 8000;

const app = express();

const cors = require('cors')

const {connectDb} = require('./config/db');  

app.use(express.urlencoded());

app.use(cors());

connectDb();

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(`server is not start`);
        return false
    }
    console.log(`server is start on port :- ${port}`); 
})