const express = require("express");
const app = express();

const Tipo_de_Carne = require("./models/Tipo_de_Carne");

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("pagina inicial");
    console.log(req);
});

// app.post("/cadastrar", async (req, res)=> {
    

//     res.send("Página cadastrar");
// });

app.listen(8080, () => {
    console.log("\n\nServidor em 8080\n\n");
});