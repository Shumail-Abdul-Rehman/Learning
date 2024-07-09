const express = require("express");

const app = express();

let port = 8080;

app.use(express.urlencoded({extended:true}));

app.use(express.json());


app.listen(port,()=>
{
    console.log(`Server is liv at port ${port}`);
});

app.get("/register",(req,res)=>
{
    let {username,password}=req.query;
    res.send(`hey ${username}`);
});

app.post("/register",(req,res)=>
{
    let {username,password}=req.body;
    res.send(`hey ${username}`);

});