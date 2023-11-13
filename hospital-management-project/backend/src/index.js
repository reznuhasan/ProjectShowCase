import dotenv from 'dotenv'
import app from './app.js';
dotenv.config({
    path:'./env'
});
const port=process.env.PORT || 5000;

app.listen(port,()=>{
   console.log(`server is running successfully at http://localhost:${port}`);
})