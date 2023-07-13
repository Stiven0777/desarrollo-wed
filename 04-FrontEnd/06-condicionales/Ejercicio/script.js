let peso = prompt("escribe tu peso en kilogramos, solo coloca el numero");
let altura = prompt("escribe tu altura en metros, separados por puntos");
let resultado = peso / (altura * altura);
console.log(resultado);
let resultadofinal = resultado.toFixed(2);

if (resultadofinal < 18.5) {
  console.log("tu imc es" + resultadofinal + "tienes bajo peso");
} else if (resultadofinal >= 18.5 && resultadofinal < 25) {
  console.log("tu imc es" + resultadofinal + "tienes peso normal");
} else if (resultadofinal >= 25 && resultado < 30) {
  console.log("tu imc es" + resultadofinal + "tienes sobre peso");
}
