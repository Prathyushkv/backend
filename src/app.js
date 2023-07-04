const express=require("express")
const app=express();
app.use(express.json())
const AuthRoute=require('./routes/auth.js')
app.use("/",AuthRoute);

// //app.post("/",(req,res)=>{
// //res.send("Hello")
// //console.log(req.body);
// res.send(req.body);
// })po;.[l]

// app.get("/Login",(req,res)=>{
//     res.send("Hai")
// })

app.listen(8000,()=>{console.log("server listening at 8000")})