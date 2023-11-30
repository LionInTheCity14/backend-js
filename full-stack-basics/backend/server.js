// const express = require("express");
// or 
import express from "express";
const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });

// jokes
app.get("/jokes", (req, res) => {
    const jokes = [
        {
            id : 1,
            title: "A joke",
            content: "This is a joke",
        },{
            id : 2,
            title : "second joke",
            content : "hello joke 2",
        },{
            id : 3,
            title : "third joke",
            content : "hello joke 3",
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http:localhost:${port}`);
});