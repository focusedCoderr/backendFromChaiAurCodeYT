import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res)=>{
//     res.send("Server is ready on home route")
// })

// get a list of 5 jokes
app.get("/jokes", (req, res)=>{
    const jokes = [
        {
            id : 1,
            title : "A Joke",
            content : "This is a joke"
        },
    
        {
            id : 2,
            title : "Another Joke",
            content : "This is another joke"
        },
    
        {
            id : 3,
            title : "A third Joke",
            content : "This is a third joke"
        },
    
        {
            id : 4,
            title : "A fourth Joke",
            content : "This is a fourth joke"
        },
    
        {
            id : 5,
            title : "A fifth Joke",
            content : "This is a fight joke"
        },
    ];
    res.send(jokes);
})

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
    
})


