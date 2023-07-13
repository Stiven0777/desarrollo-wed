const numero = [10, 8, 5, 6, 3];

function parimpar(numero) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  return { pares, impares };
}
console.log(parimpar([11, 2, 7, 6]));
