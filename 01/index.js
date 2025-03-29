import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    
    res.send('<h1>Very Good: You are on home route</h1>');
})

app.listen(port, ()=>{
    console.log(`The server has started and is listening on ${port}`);
})
