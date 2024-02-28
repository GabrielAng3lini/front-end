const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",function(e){
e.preventDefault();
const inputPeso = e.target.querySelector("#inputPeso");
const inputAltura = e.target.querySelector("#inputAltura");
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);
const imc=calcularimc(peso,altura);
const classificacao=tabelaImc(imc);
mostrarResultado(classificacao)
})
function calcularimc(peso, altura){
  let imc = peso/(altura ** 2);
  return imc.toFixed(2);
}
function tabelaImc(imc){
const classificacao = ["Magreza","Peso normal","Sobrepeso","Obesidade grau I","Obesidade grau II","Obesidade grau III"];
if (imc > 40)
{return classificacao[5]}
else if (imc >= 35 && imc <= 39.9)
{return classificacao[4];}
else if (imc >= 30 && imc <= 34.9)
{return classificacao[3];}
else if (imc >= 25 && imc <= 29.9)
{return classificacao[2];}
else if (imc >= 18.6 && imc <= 24.9)
{return classificacao[1];}
else if (imc < 18.5)
{return classificacao[0];}
}
function mostrarResultado(msg){
const resultado = document.querySelector("#resultado");
resultado.innerHTML ="Resultado: " + msg;
}