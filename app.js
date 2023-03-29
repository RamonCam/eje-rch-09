//Declaraciones
const express = require("express");
const app = express(); //Responder solicitudes de clientes: chrome, safari
const port = process.env.PORT || 3000; //Para cuando realizemos en Deploy (despliege)

//Configuraciones
//Para obtener un recurso del servidor web (http://localhost:3000)
app.get("/", (req, res) => {
    res.send("Hola Mundo de los Servidores Web"); 
})

//Para obtener un recurso del servidor web (http://localhost:3000/productos)
app.get("/productos", (req, res) => {
    res.send("Esta seria en teoria la pàgina de productos"); //
})

app.get("*", (req, res) => {
    res.send("404 | Pagina no encontrada"); //
})


//Proceso
app.listen(port, (req, res) => {
    console.log("Servidor en Node.js con express escuchando en el puerto", port);
})
