

function idadeFinal() {
    var anoNascimento = prompt('Informe o ano do seu nascimento')

    while (anoNascimento >= 2021) {
        alert('Insira o ano corretamente!')
        anoNascimento = prompt('Informe o ano do seu nascimento')
    }
    var anoAtual = prompt('Informe a data do ano atual')
    var idade = anoAtual - anoNascimento

    alert('Sua idade é ' + idade + ' anos')
}
alert(idadeFinal())
