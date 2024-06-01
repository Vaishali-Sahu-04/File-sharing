import express from "express"
import router from "./routes/router.js";
import cors from 'cors';
import dotenv from 'dotenv'
import connectToMongoDb from './db/connect.js'
import path from 'path'

dotenv.config();
//const __dirname = path.resolve();
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/',router);

// app.use(express.static(path.join(__dirname,"/frontend/build")))

// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"frontend","build","index.html"))
// })

connectToMongoDb();
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>console.log("Server Started"))