document.getElementById('btn-copy').addEventListener('click', () => {
    let cnpj_gerado = document.getElementById("cnpj_gerado").value;
    navigator.clipboard.writeText(cnpj_gerado);
});

document.getElementById('gerar_cnpj').addEventListener('click', () => {
    let numero = Math.floor(Math.random() * 100_000_000)
    numero = numero.toString().padStart(8, '0')
    numero += '0001'

    digitos = gerar_digitos_verificadores(numero)
    numero = numero.concat(digitos)
    pontuacao = document.querySelector('input[name=pontuacao]:checked').value

    if (pontuacao == 'sim') {
        document.getElementById('cnpj_gerado').value = ''.concat(numero.slice(0, 2), '.', numero.slice(2, 5), '.', numero.slice(5, 8), '/', numero.slice(8, 12), '-', numero.slice(-2))
    } else {
        document.getElementById('cnpj_gerado').value = numero
    }
});


document.getElementById('validar_cnpj').addEventListener('click', () => {
    document.getElementById('resposta_cnpj').value = ''

    const cnpj_a_validar = document.getElementById('cnpj_a_validar').value;
    let numero = cnpj_a_validar.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '');
    const regex = /^[0-9]+$/;

    if (!regex.test(numero) || numero.length > 14 || numero.length < 12 || numero.length == 13) {
        document.getElementById('resposta_cnpj').value = cnpj_a_validar.concat(' - ', 'Inválido');
    }

    digitos = gerar_digitos_verificadores(numero.slice(0, 12));

    if (numero.length == 12) {
        numero = numero.concat(digitos)
    }

    if (numero.slice(-2) == digitos) {
        document.getElementById('resposta_cnpj').value = ''.concat(numero.slice(0, 2), '.', numero.slice(2, 5), '.', numero.slice(5, 8), '/', numero.slice(8, 12), '-', numero.slice(-2), ' - ', 'Válido')
    } else {
        document.getElementById('resposta_cnpj').value = cnpj_a_validar.concat(' - ', 'Inválido')
    }
});


function gerar_digitos_verificadores(numero) {
    const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [6].concat(pesos1);

    const digito_verificador_1 = calcular_digito_verificador(pesos1, numero)
    numero += digito_verificador_1.toString()
    const digito_verificador_2 = calcular_digito_verificador(pesos2, numero)

    return digito_verificador_1.toString() + digito_verificador_2.toString()
  }

function calcular_digito_verificador(pesos, numero) {
    const array_numero = numero.split("")
    const soma = array_numero.reduce((acc, val, i) => acc + val * pesos[i], 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}