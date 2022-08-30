const num1 = Number(prompt("Insira um numero"))
const num2 = Number(prompt("Insira outro numero"))
console.log ("O primeiro numero é maior que o segundo?", num1>num2)
console.log ("O primeiro numero é igual ao segundo?", num1===num2)

const div1 = num1%num2===0
const div2 = (num2%num1)===0

console.log ("O primeiro numero é divisivel pelo segundo?", div1)
console.log ("O segundo numero é divisivel pelo primeiro?", div2)

