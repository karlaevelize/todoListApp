const express = require("express");
const app = express();
const port = 3000;


const loggingMiddleware = (req, res, next) => {
    const time = new Date()
    // console.log(`today is ${time}`)
    res.setHeader("X-Codaisseur-Time", time)
    next();
};

app.use(loggingMiddleware)

app.get("/", (req, res) => res.send("Hello"));

  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));