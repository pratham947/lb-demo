import express from "express"

const app = express();

let count = 0;

app.get("/",(req,res)=>{
    count++;
    res.json({
        count
    })
})

app.listen(3000);