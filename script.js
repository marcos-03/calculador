function somar(a, b) {
    return a + b; 
}

function multiplicar(a, b) {
    return  a * b; 
    
}

function calcularSoma() {
    const num1 = parseFloat(document.getElementById('num1').value); 
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = 'Insira Números válidos!';
    } else {
        const resultado = somar(num1, num2);
        document.getElementById('resultado').innerHTML = `Resultado da Soma: ${resultado}`;
    }
}

function calcularMultiplica() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = 'Insira Números válidos!';
    } else {
        const resultado = multiplicar(num1, num2); 
        document.getElementById('resultado').innerHTML = `Resultado da Multiplicação: ${resultado}`;
    }
}

function exibirMensagem() {
    document.getElementById('mensagem').innerHTML = "Olá, essa é uma mensagem simples!";
}
