const express = require("express");
const app = express();

app.get("/",(_,res)=>res.send("Hello Our Mode on"));

app.listen(process.env.PORT || 5000,()=>console.log("Server is running..."))