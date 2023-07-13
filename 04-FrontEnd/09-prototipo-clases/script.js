class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
  obtenerResultados() {
    console.log(this.modelo);
    console.log(this.marca);
    console.log(this.año);
  }
}

class automovil extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año, puertas);
  }
  obtenerResultados() {
    super(puertas);
    console.log(this.puertas);
  }
}
