const express= require("express");

const app= express();

const port= 8080;

const path= require("path");

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));


app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.listen(port,()=>
{
    console.log("server is live at port: "+port);
});

let posts=[
    {
        id:"1a",
        username:"shumail",
        content:"i love coding"
    },
    {
        id:"2a",
        username:"arham",
        content:"i hate coding"
    },
    {
        id:"3a",
        username:"ahsan",
        content:"i dont know what i am doing with my life <3"
    }
];

app.get("/posts",(req,res)=>
{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>
{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>
{
    let {username,content}=req.body;
    res.redirect("/posts");
    posts.push({username,content});
});

app.get("/posts/:id",(req,res)=>
{
    let {id}=req.params;
    let post2= posts.find((p)=> id===p.id);
    res.render("post.ejs",{post2});

});
