
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoConnect from './db/Connection.js';
import bookmarkRouter from './Routes/bookMarkRouter.js';
const app = express();
dotenv.config();
app.use(express.json())
app.use(cors());
app.use(bookmarkRouter);
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.status(201).json({ msg: "It's home page" })
})

app.listen(port, () => {
    console.log(`server is running at port ${port},\n Check here http://localhost:${port}`)
})