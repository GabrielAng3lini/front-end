const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){
e.preventDefault();
const inputPeso = e.target.querySelector('#peso')
const inputAltura = e.target.querySelector('#altura')
const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)
console.log(inputPeso)
console.log(peso)
console.log(inputAltura)
console.log(altura)
const imc = calcularimc(peso,altura)
console.log(imc)
})
function calcularimc(peso, altura){
    let imc = (peso/ altura ** 2);
    return imc.toFixed(2);
}
