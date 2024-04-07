const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const DB = require('./config/db');
dotenv.config()
DB();
const app = express();

const port = process.env.PORT;

const userRoute = require('./route/UserRoute')
const newsRoute = require("./route/NewsRoute");

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json("hello world");
})

app.use('/user',userRoute)
app.use('/news',newsRoute)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})