const calculadora = document.querySelector("calculadora");
calculadora.addEventListener("submit",function(e){
e.preventDefault();
const inputPeso = e.target.querySelector("#peso")
const inputAltura = e.target.querySelector("#altura")
const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)
const classificação=tabelaImc(imc)
const imc = calcularimc(peso,altura)
mostrarResultado=(classificação)
console.log(inputPeso)
console.log(peso)
console.log(inputAltura)
console.log(altura)
console.log(imc)
console.log(classificação)
})
function calcularimc(peso, altura){
    let imc = (peso/ altura ** 2);
    return imc.toFixed(2);
}

function tabelaImc(imc){
   const classificação = ("magreza", "peso normal", "sobrepeso","obesidade grau I","obesidade grau II","obesidade grau III")
 if (imc > 40) return classificação[6];
 else if (imc >= 35 && imc <= 39.9) return classificação[5];
 else if (imc >= 30 && imc <= 34,9 ) return classificação[4];
 else if (imc >= 25 && imc <= 29.9 ) return classificação[3];
 else if (imc >= 18,6 && imc <= 24.9 ) return classificação[2];
 else  if (imc < 18,5 ) return classificação[1];
}
function mostrarResultado(msg){
 const resultado = document.write.querySelector("#resultado");
 resultado.innerHTML = msg
}
