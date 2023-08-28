/*- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números; 
- [ ]  Verifique se a soma dos dois números é par;
- [ ]  Verifique se os dois números inseridos são iguais */

alert("Olá pequeno(a) gafanhoto! Vamos inserir dois números de sua escolha para fazer operações matemáticas, vamos lá?!")

let numberOne = prompt("Insira o primeiro número de sua escolha: ")
let numberTwo = prompt("Insira o segundo número de sua escolha: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = (numberOne / numberTwo).toFixed(2) 
const rest = numberOne % numberTwo

alert("A sua soma foi: " + sum)
alert("A sua subtração foi: " + subtraction)
alert("A sua multiplicação foi: " + multiplication)
alert("A sua divisão foi: " + division)
alert("O resto da divisão foi: " + rest)


let evenOdd 

if(sum % 2 == 0) { 
    evenOdd = "par"
} else {
    evenOdd = "ímpar"
}

if(numberOne == numberTwo) {
    alert(`Os números inseridos são iguais! E o resultado da soma foi: ${sum}, um número ${evenOdd}!`)
 } else {
    alert(`Os números inseridos são diferentes! E o resultado da soma foi: ${sum}, um número ${evenOdd}!`)
 }

alert("Até Breve!")
