import express from "express";
const app = express();
const PORT = process.env.PORT || 6000;
app.get("/", (_, res) => res.send("Hello Our Mode on"));

app.listen(PORT, () => console.log("Server is running..." + PORT));
