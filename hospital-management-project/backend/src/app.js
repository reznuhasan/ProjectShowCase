import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/user.route.js"
import phoneRoute from "./routes/phone.route.js"
import cors from "cors"
const app=express();

app.use(cors())
app.use(bodyParser.json({
    limit:"16mb"
}));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    limit:"16mb",
    extended:true
}))
app.use('/api/v1/users',userRoute);
app.use("/api/v1/phone",phoneRoute);
app.get('/',(_req,res)=>{
    res.send('server is connected successfully')
})

export default app;