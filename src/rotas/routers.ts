import imc from "../controller/dados";

const express = require('express');
const app = express();


const rotas =[
    {
        rota:'/imc', controller: imc
    }
]

rotas.forEach((item) => {
    app.use(item.rota, item.controller);
});




module.exports = rotas;