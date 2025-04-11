const express = require('express')
const myRouter = require('./routes/router')
const dbconnection = require("./DB/db")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors());
app.use(express.json());

dbconnection();

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use(myRouter)

app.listen(5000, () => console.log('server is running on 5000'))