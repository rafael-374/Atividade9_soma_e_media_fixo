let n = 0
let i = 4
let soma = 0
let numero
while (n < i)
{
    n++
    numero = parseInt(prompt("Digite o número " +n))
    soma = soma + numero
}
let media = soma / i
alert("Soma dos valores: " + soma )
alert("Média dos valores: " + media)