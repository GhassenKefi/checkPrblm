import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js'

const app = express();
app.use(cors());

app.get('/user',userRoutes);



const port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost/testaxios')
    .then(()=>app.listen(port,()=>console.log(`server running on port : ${port}`)))
    .catch((error)=>console.log(error.message));


