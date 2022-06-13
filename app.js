const express = require("express");

const Productos = require("./models/productos");

const app = express();

// instancia donde estan los productos
// la clase Productos es el Contenedor que use en la entrega anterior
const productos = new Productos();

app.get("/productos", (req, res) => {
  res.send(productos.todosProductos());
});
app.get("/productoRandom", (req, res) => {
  res.send(productos.alAzarProducto());
});

const server = app.listen(8080, () => {
  console.log(`Servidor escuchando en puerto ${server.address().port}`);
});

server.on("error", (err) => console.error(`Error en el servidor ${err}`));
