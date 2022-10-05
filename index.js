const express = require('express')
const app = express();
const PORT = 8081
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use(express.static("public"));

const server = app.listen(PORT, ()=>{
    console.log("Servidor iniciado")
})

const personas = []
const mascotas = []

const routerPersonas = express.Router();
const routerMascotas = express.Router();

routerMascotas.get("/", (req, res) => {
    res.json({ mascotas });
})

routerMascotas.post("/", (req, res) => {
    mascotas.push(req.body);
    res.json({mensaje: 'se agrego la Mascota'})
})

routerPersonas.get("/", (req, res) => {
    res.json({ personas });
})

routerPersonas.post("/", (req, res) => {
    personas.push(req.body);
    res.json({mensaje: 'se agrego la Persona'})
})

app.use("/personas", routerPersonas);
app.use("/mascotas", routerMascotas);