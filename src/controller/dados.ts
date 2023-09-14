// import { Router } from "express";

import express from "express";

const imc = express.Router();

type TResultado = {
    imc: number;
    altura:number;
    peso: number;
};

imc.post("/", (req: express.Request,res: express.Response) => {
    const resultado: TResultado = req.body;

    resultado.imc = resultado.peso / (resultado.altura*resultado.altura);

    return res.send(resultado);
});

export default imc;
