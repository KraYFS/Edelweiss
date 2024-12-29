import express from "express"
import mongoose from "mongoose";
import router from "./Routers/router.js";
import cors from "cors";

const PORT = 3000;
const DB_URL = 'mongodb+srv://edelweissBack:edelweissBackPass@cluster0.txcsr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()

app.use(cors({
    origin: ['http://localhost:5173', 'https://edelweissbud.netlify.app']
}));
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started: localhost:${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApp()