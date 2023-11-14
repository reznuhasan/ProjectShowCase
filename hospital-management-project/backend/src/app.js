import express from "express";
import userRoute from "./routes/user.route.js"
const app=express();
app.use(express.json({
    limit:"16mb"
}));
app.use(express.static('public'))
app.use(express.urlencoded({
    limit:"16mb"
}))
app.use('/user/api/v1',userRoute);
app.get('/',(req,res)=>{
    res.send('server is connected successfully')
})

export default app;