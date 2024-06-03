const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("Inicio");
});

app.listen(8080, () => {
    console.log("Server em 8080 http://localhost:8080/");
});