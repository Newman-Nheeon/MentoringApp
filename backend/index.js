import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { login } from "./routes/login";
import { register } from "./routes/register";



//middlewares
const app = express();
app.use (cors());
app.use(express.json())
dotenv.config()

//routes 
app.use("api/login", login);
app.use("api/register", register);


//Database Connection Setup
dotenv.config()
const CONNECTION_URL = process.env.DB;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));