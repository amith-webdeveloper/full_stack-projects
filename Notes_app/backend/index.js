import express from 'express'
import dotenv from 'dotenv'
import { ConnectDB } from './DB/index.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.get('/' , function(req , res){
    res.send('hello')
})

app.listen(port , function(){
    console.log(`server is listening at port : ${port}`);
    ConnectDB()
    
})