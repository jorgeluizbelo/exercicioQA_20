// Função para calcular o MDC
function calcularMDC(numero1, numero2) {
    // Caso o segundo número seja zero, o MDC é o próprio primeiro número
    if (numero2 === 0) {
        return numero1;
    } else {
        // Caso contrário, chamamos recursivamente a função com os números trocados
        return calcularMDC(numero2, numero1 % numero2);
    }
}


// Solicita ao usuário dois números
var num1 = parseInt(prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digite o segundo número: "));

// Calcula o MDC usando a função e exibe o resultado
var mdc = calcularMDC(num1, num2);
console.log("O MDC entre " + num1 + " e " + num2 + " é: " + mdc);
