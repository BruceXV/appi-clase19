//paso 2
const paisesData = require("../paises");
const { request ,response } = require("express");

let paises = paisesData.paises;

const getCountries = ( req = res, res = response) => {
    

    return res.json({
        ok:false,
        paises,
        statusCode : 200
    })

    
}

//paso 3
const getCountry = (req = request, res = response) => {
    const id = req.params.id;
    // busca el pais por su ID
    const pais = paisesData.find((pais) => {
            return parseInt(pais.id) === parseInt(id)
        });

        if (pais) {
            return res.json({
                ok: true,
                pais,
                statusCode:200
            });
        }else {
            return res.status(404).json({
                ok: false,
                message: "pais no econtrado",
                statusCode: 404
            })
        }
}

//esto viene entre paso 2 y 3
module.exports = {
    getCountries,
    getCountry
    
}