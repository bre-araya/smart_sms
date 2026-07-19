const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());


app.get("/", (req,res)=>{
    res.json({
        message:"School Management API Running"
    });
});


module.exports = app;