const prompt = require('prompt-sync')()

const menu = `
<>---MENU-PRINCIPAL---<>
1 - Função Adicionar
2 - Função Subtrair
3 - Multiplicar
4 - Verificar Número Par
5 - Calcular Média
6 - Para Maiúsculas
7 - Filtrar Números
8 - Contar Ocorrências
9 - Contar Vogais
10 - Criar Array
11 - Objeto Carro
12 - Número Aleatório
13 - Diferença de Dias
14 - Objeto Conta Bancária
15 - Manipular Frutas
0 - Sair
<>--------------------<>
`

let multiplicarParametros = (valor1, valor2) => valor1 * valor2

menuPrincipal()

function menuPrincipal() {
    while (true) {
        console.log(menu)
        let numero = Number(prompt("Insira a opção desejada: "))
        switch (numero) {
            case 1: {
                adicionar()
                break;
            }

            case 2: {
                subtrair()
                break;
            }

            case 3: {
                multiplicar()
                break;
            }

            case 4: {
                verificarNumeroPar()
                break;
            }

            case 5: {
                calcularMedia()
                break;
            }

            case 6: {
                converterParaMaiusculas()
                break;
            }

            case 7: {
                filtrarNumeros()
                break;
            }

            case 8: {
                contarOcorrencias()
                break;
            }

            case 9: {
                contarVogais()
                break;
            }

            case 10: {
                criarArray()
                break;
            }

            case 11: {
                manipularCarro()
                break;
            }

            case 12: {
                gerarNumeroAleatorio()
                break;
            }

            case 13: {
                calcularDiferencaDias()
                break;
            }

            case 14: {
                manipularContaBancaria()
                break;
            }

            case 15: {
                manipularFrutas()
                break;
            }

            case 0: {
                process.exit(0)
            }

            default: {
                console.log("ERRO!!!")
                break;
            }
        }
    }
}

//Funcões Principais

function adicionar() {
    console.log("")
    let valor1 = Number(prompt("Insira um número: "))
    let valor2 = Number(prompt("Insira outro número: "))
    let soma = somarParametros(valor1, valor2)
    console.log("\n<>-------------------------------<>")
    console.log(`Soma ${valor1} + ${valor2} = ${soma}`)
    console.log("<>-------------------------------<>")
}

function subtrair() {
    console.log("")
    let valor1 = Number(prompt("Insira um número: "))
    let valor2 = Number(prompt("Insira outro número: "))
    let subtracao = subtrairParametros(valor1, valor2)
    console.log("\n<>-------------------------------<>")
    console.log(`Subtração ${valor1} - ${valor2} = ${subtracao}`)
    console.log("<>-------------------------------<>")
}

function multiplicar() {
    console.log("")
    let valor1 = Number(prompt("Insira um número: "))
    let valor2 = Number(prompt("Insira outro número: "))
    let multiplicacao = multiplicarParametros(valor1, valor2)
    console.log("\n<>-------------------------------<>")
    console.log(`Multiplicação ${valor1} x ${valor2} = ${multiplicacao}`)
    console.log("<>-------------------------------<>")
}

function verificarNumeroPar() {
    console.log("")
    let numero = Number(prompt("Insira um número: "))
    let statusPar = ehParParametros(numero)
    let resultado = ""
    if (numero === 0) {
        resultado = "neutro"
    } else if (statusPar) {
        resultado = "par"
    } else {
        resultado = "ímpar"
    }
    console.log("\n<>-------------------------------<>")
    console.log(`O número ${numero} é ${resultado}`)
    console.log("<>-------------------------------<>")
}

function calcularMedia() {
    console.log("")
    let notas = []
    let continua = "1"
    do {
        notas.push(Number(prompt(`Insira a ${notas.length + 1}° nota: `)))
        continua = prompt("Continuar: 1-SIM 0-NÃO: ")
    } while (continua !== "0")
    
    let mediaResultado = calcularMediaParametros(notas)
    console.log("\n<>-------------------------------<>")
    console.log(`A média das notas inseridas é ${mediaResultado.toFixed(2)}`)
    console.log("<>-------------------------------<>")
}

function converterParaMaiusculas() {
    console.log("")
    let texto = prompt("Insira uma string: ")
    let textoMaiusculo = converterMaiusculasParametros(texto)
    console.log("\n<>-------------------------------<>")
    console.log(`String em maiúsculas: ${textoMaiusculo}`)
    console.log("<>-------------------------------<>")
}

function filtrarNumeros() {
    console.log("")
    let arrayBase = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(`Array base: [${arrayBase}]`)
    let numeroCorte = Number(prompt("Filtrar números maiores que: "))
    let resultado = filtrarMaioresParametros(arrayBase, numeroCorte)
    console.log("\n<>-------------------------------<>")
    console.log(`Resultado: [${resultado}]`)
    console.log("<>-------------------------------<>")
}

function contarOcorrencias() {
    console.log("")
    let arrayBase = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
    console.log(`Array base: [${arrayBase}]`)
    let valorBusca = Number(prompt("Contar ocorrências de qual valor? "))
    let quantidade = contarOcorrenciasParametros(arrayBase, valorBusca)
    console.log("\n<>-------------------------------<>")
    console.log(`O valor ${valorBusca} aparece ${quantidade} vezes.`)
    console.log("<>-------------------------------<>")
}

function contarVogais() {
    console.log("")
    let texto = prompt("Insira uma string: ")
    let quantidadeVogais = contarVogaisParametros(texto)
    console.log("\n<>-------------------------------<>")
    console.log(`A string contém ${quantidadeVogais} vogais.`)
    console.log("<>-------------------------------<>")
}

function criarArray() {
    console.log("")
    let limite = Number(prompt("Insira um número para criar um array de 1 até ele: "))
    let sequencia = gerarSequenciaParametros(limite)
    console.log("\n<>-------------------------------<>")
    console.log(`Array criado: [${sequencia}]`)
    console.log("<>-------------------------------<>")
}

function manipularCarro() {
    console.log("")
    let carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2022
    }
    
    console.log(`1. Marca: ${carro.marca}`)
    carro.ano = 2025
    console.log(`2. Propriedade 'ano' alterada para: ${carro.ano}`)
    
    carro.getIdade = function() {
        let anoAtual = new Date().getFullYear()
        return anoAtual - this.ano
    }
    
    carro.getDescricao = function() {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`
    }
    
    console.log(`3. Idade do carro: ${carro.getIdade()} anos`)
    console.log(`4. Descrição: ${carro.getDescricao()}`)
    console.log("<>-------------------------------<>")
}

function gerarNumeroAleatorio() {
    console.log("")
    let numeroAleatorio = obterNumeroAleatorioParametros()
    console.log("\n<>-------------------------------<>")
    console.log(`Número aleatório entre 1 e 100: ${numeroAleatorio}`)
    console.log("<>-------------------------------<>")
}

function calcularDiferencaDias() {
    console.log("")
    console.log("Insira as datas no formato AAAA-MM-DD")
    let dataInicio = prompt("Data 1: ")
    let dataFim = prompt("Data 2: ")
    let diferencaDias = calcularDiferencaDiasParametros(dataInicio, dataFim)
    console.log("\n<>-------------------------------<>")
    console.log(`Diferença: ${diferencaDias} dias`)
    console.log("<>-------------------------------<>")
}

function manipularContaBancaria() {
    console.log("")
    let conta = {
        titular: prompt("Nome do titular: "),
        saldo: 1000,
        depositar: function(valor) {
            this.saldo += valor
            console.log(`Depositado: R$${valor}. Novo saldo: R$${this.saldo}`)
        },
        sacar: function(valor) {
            if (valor <= this.saldo) {
                this.saldo -= valor
                console.log(`Sacado: R$${valor}. Novo saldo: R$${this.saldo}`)
            } else {
                console.log("Saldo insuficiente!")
            }
        },
        verSaldo: function() {
            console.log(`Saldo atual de ${this.titular}: R$${this.saldo}`)
        }
    }
    
    conta.verSaldo()
    let valorDeposito = Number(prompt("Valor para depósito: "))
    conta.depositar(valorDeposito)
    let valorSaque = Number(prompt("Valor para saque: "))
    conta.sacar(valorSaque)
    console.log("<>-------------------------------<>")
}

function manipularFrutas() {
    console.log("")
    let listaFrutas = ["maçã", "banana", "laranja"]
    console.log(`Array inicial: [${listaFrutas}]`)
    
    console.log(`1. Segundo elemento: ${listaFrutas[1]}`)
    
    listaFrutas.push("manga")
    console.log(`2. Adicionado 'manga': [${listaFrutas}]`)
    
    listaFrutas.shift()
    console.log(`3. Removido o primeiro elemento: [${listaFrutas}]`)
    
    console.log(`4. Tamanho do array: ${listaFrutas.length}`)
    
    console.log("5. Loop for:")
    for (let i = 0; i < listaFrutas.length; i++) {
        console.log(` - ${listaFrutas[i]}`)
    }
    
    console.log("6. forEach:")
    listaFrutas.forEach(fruta => console.log(` - ${fruta}`))
    
    let tamanhosFrutas = listaFrutas.map(fruta => fruta.length)
    console.log(`7. Tamanhos das frutas (map): [${tamanhosFrutas}]`)
    
    let frutasLongas = listaFrutas.filter(fruta => fruta.length > 5)
    console.log(`8. Mais de 5 caracteres (filter): [${frutasLongas}]`)
    
    let somaTamanhos = tamanhosFrutas.reduce((acc, curr) => acc + curr, 0)
    console.log(`9. Soma dos tamanhos (reduce): ${somaTamanhos}`)
    console.log("<>-------------------------------<>")
}

//Funcões Adicionais

function somarParametros(valor1, valor2) {
    return valor1 + valor2;
}

function subtrairParametros(valor1, valor2) {
    return valor1 - valor2;
}

function ehParParametros(numero) {
    return numero % 2 === 0
}

function calcularMediaParametros(notas) {
    let somaValores = 0
    notas.forEach(nota => {
        somaValores += nota
    });
    return somaValores / notas.length
}

let converterMaiusculasParametros = (texto) => texto.toUpperCase()

function filtrarMaioresParametros(array, limite) {
    return array.filter(elemento => elemento > limite)
}

function contarOcorrenciasParametros(array, valor) {
    return array.filter(elemento => elemento === valor).length
}

function contarVogaisParametros(texto) {
    let matches = texto.match(/[aeiouáéíóúàèìòùâêîôûãõ]/gi)
    return matches ? matches.length : 0
}

function gerarSequenciaParametros(tamanho) {
    let sequenciaGerada = []
    for (let i = 1; i <= tamanho; i++) {
        sequenciaGerada.push(i)
    }
    return sequenciaGerada
}

function obterNumeroAleatorioParametros() {
    return Math.floor(Math.random() * 100) + 1
}

function calcularDiferencaDiasParametros(data1, data2) {
    let d1 = new Date(data1)
    let d2 = new Date(data2)
    let diff = Math.abs(d1 - d2)
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
}