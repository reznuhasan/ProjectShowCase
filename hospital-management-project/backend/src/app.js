import express from "express";

const app=express();

app.get('/',(req,res)=>{
    res.send('server is connected successfully')
})

export default app;