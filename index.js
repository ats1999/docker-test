import express from "express";
const app = express();
const PORT = 5000;
app.get("/",(_,res)=>res.send("Hello Our Mode on"));

app.listen(process.env.PORT || PORT,()=>console.log("Server is running..."+PORT))