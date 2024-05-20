//paso 0

const express = require("express");

const app = express();

const port = 2020;
//pas1.5
const paiesesData = require("./paises")
//paso1.5

const { getCountries , getCountry} = require("./controllers/getCountries");

app.get("/", getCountries)
// PASO 3.5 COLOCAR EL GET Country
app.get("/:id" , getCountry);



app.listen(port,()=> {
    console.log("me gusto node");
    console.log(`nos conectamos bien en el puerto: ${port}`)
})

