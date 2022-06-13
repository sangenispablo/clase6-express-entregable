const { leerData } = require("../helpers/persistencia");

class Productos {
  constructor() {
    this._listado = leerData();
  }

  todosProductos() {
    return this._listado;
  }
  alAzarProducto() {
    const max = this._listado.length - 1;
    const min = 0;
    const indice = Math.floor(Math.random() * (max - min + 1)) + min;
    return this._listado[indice];
  }
}

module.exports = Productos;
