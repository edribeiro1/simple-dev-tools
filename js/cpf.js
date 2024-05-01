document.getElementById('btn-copy').addEventListener('click', () => {
    let cpf_gerado = document.getElementById("cpf_gerado").value;
    navigator.clipboard.writeText(cpf_gerado);
});

document.getElementById('gerar_cpf').addEventListener('click', () => {
    numero = Math.floor(Math.random() * 1000000000)
    numero = numero.toString().padStart(9, '0')

    digitos = gerar_digitos_verificadores(numero)
    numero = numero.concat(digitos)
    pontuacao = document.querySelector('input[name=pontuacao]:checked').value

    if (pontuacao == 'sim') {
        document.getElementById('cpf_gerado').value = ''.concat(numero.slice(0, 3), '.', numero.slice(3, 6), '.', numero.slice(6, 9), '-', numero.slice(-2))
    } else {
        document.getElementById('cpf_gerado').value = numero
    }
});


document.getElementById('validar_cpf').addEventListener('click', () => {
    document.getElementById('resposta_cpf').value = ''

    cpf_a_validar = document.getElementById('cpf_a_validar').value
    numero = cpf_a_validar.replaceAll('.', '').replaceAll('-', '')
    const regex = /^[0-9]+$/

    if (!regex.test(numero) || numero.length > 11 || numero.length < 9 ||  numero.length == 10) {
        document.getElementById('resposta_cpf').value = cpf_a_validar.concat(' - ', 'Inválido')
    }

    digitos = gerar_digitos_verificadores(numero)

    if (numero.length == 9) {
        numero = numero.concat(digitos)
    }

    if (numero.slice(-2) == digitos) {
        document.getElementById('resposta_cpf').value = ''.concat(numero.slice(0, 3), '.', numero.slice(3, 6), '.', numero.slice(6, 9), '-', numero.slice(-2), ' - ', 'Válido')
    } else {
        document.getElementById('resposta_cpf').value = cpf_a_validar.concat(' - ', 'Inválido')
    }
});


function gerar_digitos_verificadores(numero) {
    numero = numero.slice(0,9)
    digito_1 = 0
    for (let i=0; i < numero.length; i++) {
        digito_1 += parseInt(numero[i]) * (parseInt(i) + 1)
    }
    digito_1 = digito_1 % 11
    digito_1 = digito_1.toString().slice(-1)
    numero = numero.concat(digito_1)

    digito_2 = 0
    for (let i=0; i < numero.length; i++) {
        digito_2 += parseInt(numero[i]) * (parseInt(i))
    }
    digito_2 = digito_2 % 11
    digito_2 = digito_2.toString().slice(-1)

    return digito_1.concat(digito_2);
  }