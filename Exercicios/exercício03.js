var numero1 = prompt('Dígite o primeiro número')
var sinal = prompt('Dígite um sinal')

while (sinal != '-' && sinal != '+' && sinal != '*' && sinal != '/') {
    alert('Dígite um sinal válido');
    sinal = prompt('Dígite um sinal')
}

var numero2 = prompt('Dígite o segundo numero')

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)


var resultado = 0

if (sinal == '-') {
    resultado = numero1 - numero2
} else if (sinal == '+') {
    resultado = numero1 + numero2
} else if (sinal == '*') {
    resultado = numero1 * numero2
} else if (sinal == '/') {
    resultado = numero1 / numero2
}


alert('Oresultado da conta é ' + resultado)