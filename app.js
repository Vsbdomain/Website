//library dec
const express=require('express');
const ejs=require('ejs');
const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
// app.use(express.static("views"))
//HTTP Request specs
app.get("/",(req,res)=>{
    res.render("header");
})
app.get("/dashboard",(req,res)=>{
    res.render("dashboard");
})
app.get("/course",(req,res)=>{
    res.render("course");
})
//port specification
app.listen(3000,()=>{
    console.log("Server connected!");
})