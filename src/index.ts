import express from "express";
import imc from "./controller/dados";


const listenPort = 3001;
const app = express();

app.use(express.json());

app.get ("/", (req,res) =>{
    return res.send("Hello World");
});



const rotas =[
    {
        rota:'/imc', controller: imc
    }
]

rotas.forEach((item) => {
    app.use(item.rota, item.controller);
});




app.listen(listenPort, () => {
    console.log('listening on http://localhost:' + listenPort);
});