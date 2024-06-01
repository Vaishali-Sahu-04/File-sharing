import express from "express"
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();
//const __dirname = path.resolve();
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());


const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>console.log("Server Started"))