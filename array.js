// Função para pedir ao usuário 4 números sem repetição
function pedirNumeros() {
    var numeros = [];
    for (var i = 0; i < 4; i++) {
        var num = parseInt(prompt("Digite o " + (i + 1) + "º número: "));
        // Verifica se o número já foi inserido e se está dentro do intervalo permitido (0 a 9999)
        if (numeros.includes(num) || num < 0 || num > 9999) {
            alert("Por favor, digite um número válido e não repetido.");
            i--; // Decrementa o índice para repetir a iteração
        } else {
            numeros.push(num);
        }
    }
    return numeros;
}

// Função para encontrar o índice do maior valor no array
function indiceMaiorValor(array) {
    var maior = array[0];
    var indice = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            indice = i;
        }
    }
    return indice;
}

// Função para encontrar o índice do menor valor no array
function indiceMenorValor(array) {
    var menor = array[0];
    var indice = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            indice = i;
        }
    }
    return indice;
}

// Pedir ao usuário para inserir 4 números sem repetição
var numeros = pedirNumeros();

// Encontrar o índice do maior e do menor valor
var indiceMaior = indiceMaiorValor(numeros);
var indiceMenor = indiceMenorValor(numeros);

// Exibir resultados
console.log("O índice do maior valor é: "  + numeros[indiceMaior]);
console.log("O índice do menor valor é: "  + numeros[indiceMenor]);
