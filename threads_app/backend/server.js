import express from "express";
import dotenv from 'dotenv'


dotenv.config()
const app = express()
const port = process.env.PORT || 5000



app.listen(port , function(){
    console.log(`server started at https://localhost:${port}`);
    
})

