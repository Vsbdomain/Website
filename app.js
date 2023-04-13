//library dec
const express=require('express');
const ejs=require('ejs');
const pool=require("./db")
const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
// app.use(express.static("views"))
//Style
app.use(express.static("stylesheet"));

//db




let name;   
//HTTP Request specs
app.get("/",(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err)throw err
      
        connection.query("SELECT * from data",(err,row)=>{
            connection.release();
            if(!err){
               name=row[0].name;
               
            }else{
                console.log(err)
            }
        });
    
    })
    res.render("header");
})
app.get("/dashboard",(req,res)=>{
    res.render("dashboard",{name:name});
})
app.get("/course",(req,res)=>{
    res.render("course");
})
//port specification
app.listen(3000,()=>{
    console.log("Server connected!");
})