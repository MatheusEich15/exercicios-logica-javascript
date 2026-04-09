const prompt = require('prompt-sync')()

const menu = `
<>---MENU-PRINCIPAL---<>
1 - Sucessor e Antecessor
2 - Reajuste de Quinze Porcento
3 - Distancia Percorrida
4 - Metade de Maior que Vinte
5 - Soma Maior que Dez
6 - Emprestimo
7 - Lucro Comerciante
8 - Classe Eleitoral
9 - Ordenar Tres Numeros
10 - Inverter Tres Numeros
11 - Ordenar Array
12 - Juntar Dois Arrays
13 - Retorno de Investimento
14 - Contar Caractere
15 - Objeto Pessoa
16 - Objeto Pessoa com Hobbies
17 - Manipular Nomes
18 - Manipular Numeros
19 - Verificar Maiores de Dezoito
20 - Valor de PI
21 - Raiz Quadrada
22 - Manipular Frutas Avancado
23 - Gerar Senha
24 - Numero Aleatorio Customizado
25 - Calculadora String
26 - Converter Codigo Morse
27 - Criar Matriz Aleatoria
0 - Sair
<>--------------------<>
`

menuPrincipal()

function menuPrincipal() {
    while (true) {
        console.log(menu)
        let numero = Number(prompt("Insira a opção desejada: "))
        switch (numero) {
            case 1: {
                sucessorAntecessor()
                break;
            }

            case 2: {
                reajusteQuinzePorCento()
                break;
            }

            case 3: {
                distanciaPercorrida()
                break;
            }

            case 4: {
                metadeMaiorVinte()
                break;
            }

            case 5: {
                somaMaiorDez()
                break;
            }

            case 6: {
                verificarEmprestimo()
                break;
            }

            case 7: {
                lucroComerciante()
                break;
            }

            case 8: {
                classeEleitoral()
                break;
            }

            case 9: {
                ordenarTresNumeros()
                break;
            }

            case 10: {
                inverterTresNumeros()
                break;
            }

            case 11: {
                ordenarArray()
                break;
            }

            case 12: {
                juntarDoisArrays()
                break;
            }

            case 13: {
                retornoInvestimento()
                break;
            }

            case 14: {
                contarCaractere()
                break;
            }

            case 15: {
                objetoPessoa()
                break;
            }

            case 16: {
                pessoaHobbies()
                break;
            }

            case 17: {
                manipularNomes()
                break;
            }

            case 18: {
                manipularNumeros()
                break;
            }

            case 19: {
                verificarMaioresDezoito()
                break;
            }

            case 20: {
                valorPi()
                break;
            }

            case 21: {
                raizQuadrada()
                break;
            }

            case 22: {
                manipularFrutasAvancado()
                break;
            }

            case 23: {
                gerarSenha()
                break;
            }

            case 24: {
                numeroAleatorioMinMax()
                break;
            }

            case 25: {
                calculadora()
                break;
            }

            case 26: {
                converterMorse()
                break;
            }

            case 27: {
                criarMatriz()
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

function sucessorAntecessor() {
    console.log("")
    let numero = Number(prompt("Insira um número inteiro: "))
    console.log(`Antecessor: ${numero - 1}`)
    console.log(`Número: ${numero}`)
    console.log(`Sucessor: ${numero + 1}`)
    console.log("<>-------------------------------<>")
}

function reajusteQuinzePorCento() {
    console.log("")
    let valor = Number(prompt("Insira um valor: "))
    let reajuste = valor * 1.15
    console.log(`Valor com reajuste de 15%: R$${reajuste.toFixed(2)}`)
    console.log("<>-------------------------------<>")
}

function distanciaPercorrida() {
    console.log("")
    let tempoInput = Number(prompt("Tempo em horas: "))
    let velocidadeMedia = Number(prompt("Velocidade média (km/h): "))
    let distanciaTotal = tempoInput * velocidadeMedia
    console.log(`Distância percorrida: ${distanciaTotal} km`)
    console.log("<>-------------------------------<>")
}

function metadeMaiorVinte() {
    console.log("")
    let numero = Number(prompt("Insira um número: "))
    if (numero > 20) {
        console.log(`A metade de ${numero} é ${numero / 2}`)
    } else {
        console.log("Número não é maior que 20.")
    }
    console.log("<>-------------------------------<>")
}

function somaMaiorDez() {
    console.log("")
    let valor1 = Number(prompt("Insira o primeiro número: "))
    let valor2 = Number(prompt("Insira o segundo número: "))
    let somaValores = valor1 + valor2
    if (somaValores > 10) {
        console.log(`A soma ${valor1} + ${valor2} = ${somaValores}`)
    } else {
        console.log("A soma não é maior que 10.")
    }
    console.log("<>-------------------------------<>")
}

function verificarEmprestimo() {
    console.log("")
    let valorSalario = Number(prompt("Salário: "))
    let valorPrestacao = Number(prompt("Prestação: "))
    if (valorPrestacao > valorSalario * 0.2) {
        console.log("Empréstimo não pode ser concedido.")
    } else {
        console.log("Empréstimo pode ser concedido.")
    }
    console.log("<>-------------------------------<>")
}

function lucroComerciante() {
    console.log("")
    let custoProduto = Number(prompt("Valor do produto: "))
    let percentualLucro = custoProduto < 20 ? 0.45 : 0.30
    let valorVenda = custoProduto * (1 + percentualLucro)
    console.log(`Valor da venda: R$${valorVenda.toFixed(2)}`)
    console.log("<>-------------------------------<>")
}

function classeEleitoral() {
    console.log("")
    let idadeEleitor = Number(prompt("Idade: "))
    if (idadeEleitor < 16) {
        console.log("Classe: Não-eleitor")
    } else if (idadeEleitor >= 18 && idadeEleitor <= 65) {
        console.log("Classe: Eleitor obrigatório")
    } else {
        console.log("Classe: Eleitor facultativo")
    }
    console.log("<>-------------------------------<>")
}

function ordenarTresNumeros() {
    console.log("")
    let listaNumeros = []
    for (let i = 0; i < 3; i++) {
        listaNumeros.push(Number(prompt(`Insira o ${i + 1}° número: `)))
    }
    let listaOrdenada = ordenarTresParametros(listaNumeros)
    console.log(`Números em ordem crescente: [${listaOrdenada}]`)
    console.log("<>-------------------------------<>")
}

function inverterTresNumeros() {
    console.log("")
    let listaOriginal = []
    for (let i = 0; i < 3; i++) {
        listaOriginal.push(Number(prompt(`Insira o ${i + 1}° número: `)))
    }
    console.log(`Array original: [${listaOriginal}]`)
    let listaInvertida = [...listaOriginal].reverse()
    console.log(`Array invertido: [${listaInvertida}]`)
    console.log("<>-------------------------------<>")
}

function ordenarArray() {
    console.log("")
    let arrayParaOrdenar = [5, 2, 9, 1, 5, 6]
    console.log(`Array original: [${arrayParaOrdenar}]`)
    let resultadoOrdenado = ordenarQualquerParametros(arrayParaOrdenar)
    console.log(`Array ordenado: [${resultadoOrdenado}]`)
    console.log("<>-------------------------------<>")
}

function juntarDoisArrays() {
    console.log("")
    let primeiroArray = [1, 2, 3]
    let segundoArray = [4, 5, 6]
    let arrayUnido = juntarArraysParametros(primeiroArray, segundoArray)
    console.log(`Array 1: [${primeiroArray}]`)
    console.log(`Array 2: [${segundoArray}]`)
    console.log(`Array unido: [${arrayUnido}]`)
    console.log("<>-------------------------------<>")
}

function retornoInvestimento() {
    console.log("")
    let capitalInicial = Number(prompt("Capital inicial: "))
    let taxaMensal = Number(prompt("Taxa de juros mensal (%): ")) / 100
    let tempoMeses = Number(prompt("Tempo (meses): "))
    let montanteFinal = capitalInicial * Math.pow((1 + taxaMensal), tempoMeses)
    console.log(`Montante final: R$${montanteFinal.toFixed(2)}`)
    console.log("<>-------------------------------<>")
}

function contarCaractere() {
    console.log("")
    let textoBase = prompt("Insira a string: ")
    let caractereBusca = prompt("Caractere a contar: ")
    let totalOcorrencias = contarOcorrenciaCharParametros(textoBase, caractereBusca)
    console.log(`O caractere '${caractereBusca}' aparece ${totalOcorrencias} vezes na string.`)
    console.log("<>-------------------------------<>")
}

function objetoPessoa() {
    console.log("")
    let pessoaObj = {
        nome: "João",
        idade: 25,
        profissao: "Desenvolvedor"
    }
    console.log("Objeto Pessoa:", pessoaObj)
    console.log("<>-------------------------------<>")
}

function pessoaHobbies() {
    console.log("")
    let pessoaObj = {
        nome: "Maria",
        idade: 30,
        profissao: "Designer"
    }
    pessoaObj.hobbies = ["Leitura", "Cinema", "Viagens"]
    console.log("Objeto Pessoa com Hobbies:", pessoaObj)
    console.log("<>-------------------------------<>")
}

function manipularNomes() {
    console.log("")
    let listaNomes = ["Ana", "Beto", "Carla"]
    console.log("1. Original:", listaNomes)
    listaNomes.push("Daniel")
    console.log("2. Adicionado final:", listaNomes)
    listaNomes.pop()
    console.log("3. Removido último:", listaNomes)
    listaNomes.unshift("Zeca")
    console.log("4. Adicionado início:", listaNomes)
    listaNomes.shift()
    console.log("5. Removido primeiro:", listaNomes)
    console.log("<>-------------------------------<>")
}

function manipularNumeros() {
    console.log("")
    let arrayNumeros = [1, 2, 3, 4, 5]
    console.log("1. Original:", arrayNumeros)
    console.log("2. String join:", arrayNumeros.join(", "))
    console.log("3. Invertido:", [...arrayNumeros].reverse())
    console.log("4. Slice (2 primeiros):", arrayNumeros.slice(0, 2))
    
    let nomesExemplo = ["Beto", "Ana", "Carla"]
    console.log("5. Ordenando nomes:", [...nomesExemplo].sort())
    
    console.log("6. Filtro (pares):", arrayNumeros.filter(n => n % 2 === 0))
    console.log("7. Map (quadrado):", arrayNumeros.map(n => n * n))
    console.log("8. Reduce (soma):", arrayNumeros.reduce((acc, curr) => acc + curr, 0))
    
    console.log("9. forEach nomes:")
    nomesExemplo.forEach(n => console.log(` - ${n}`))
    console.log("<>-------------------------------<>")
}

function verificarMaioresDezoito() {
    console.log("")
    let idadesArray = [20, 18, 25, 30]
    let todosMaiores = idadesArray.every(idade => idade >= 18)
    console.log(`Idades: [${idadesArray}]`)
    console.log(`Todos são maiores de 18? ${todosMaiores ? "Sim" : "Não"}`)
    console.log("<>-------------------------------<>")
}

function valorPi() {
    console.log("")
    let numeroPi = Math.PI
    console.log(`Valor de PI: ${numeroPi}`)
    console.log("<>-------------------------------<>")
}

function raizQuadrada() {
    console.log("")
    let resultadoRaiz = Math.sqrt(64)
    console.log(`Raiz quadrada de 64: ${resultadoRaiz}`)
    console.log("<>-------------------------------<>")
}

function manipularFrutasAvancado() {
    console.log("")
    let arrayFrutas = ["maçã", "banana", "laranja"]
    console.log("1. Original:", arrayFrutas)
    console.log("2. Segundo elemento:", arrayFrutas[1])
    arrayFrutas.push("morango")
    console.log("3. Adicionado morango:", arrayFrutas)
    arrayFrutas.shift()
    console.log("4. Removido primeiro:", arrayFrutas)
    
    let listaValores = [1, 2, 3]
    listaValores.push(4)
    console.log("5. Push em números:", listaValores)
    listaValores.pop()
    console.log("6. Pop em números:", listaValores)
    listaValores.unshift(0)
    console.log("7. Unshift em números:", listaValores)
    listaValores.shift()
    console.log("8. Shift em números:", listaValores)
    
    let outrasFrutas = ["manga", "abacaxi", "melancia"]
    let listaCompleta = arrayFrutas.concat(outrasFrutas)
    console.log("9. Concat (todas):", listaCompleta)
    console.log("10. Slice (2 primeiros):", listaCompleta.slice(0, 2))
    
    listaCompleta.splice(1, 1)
    console.log("11. Splice (removeu 2°):", listaCompleta)
    console.log("12. IndexOf 'banana':", listaCompleta.indexOf("banana"))
    console.log("13. Filter 'm':", listaCompleta.filter(f => f.startsWith("m")))
    console.log("14. Map (dobro números):", listaValores.map(n => n * 2))
    
    console.log("15. forEach todas:")
    listaCompleta.forEach(f => console.log(` - ${f}`))
    console.log("<>-------------------------------<>")
}

function gerarSenha() {
    console.log("")
    let tamanhoDesejado = Number(prompt("Tamanho da senha: "))
    let senhaGerada = gerarSenhaParametros(tamanhoDesejado)
    console.log(`Senha gerada: ${senhaGerada}`)
    console.log("<>-------------------------------<>")
}

function numeroAleatorioMinMax() {
    console.log("")
    let valorMinimo = Number(prompt("Mínimo: "))
    let valorMaximo = Number(prompt("Máximo: "))
    let resultadoAleatorio = gerarNumeroEntreParametros(valorMinimo, valorMaximo)
    console.log(`Número aleatório entre ${valorMinimo} e ${valorMaximo}: ${resultadoAleatorio}`)
    console.log("<>-------------------------------<>")
}

function calculadora() {
    console.log("")
    let expressaoMatematica = prompt("Insira uma expressão (ex: 2+3*4): ")
    try {
        let resultadoExpressao = eval(expressaoMatematica)
        console.log(`Resultado de ${expressaoMatematica} = ${resultadoExpressao}`)
    } catch (e) {
        console.log("Expressão inválida!")
    }
    console.log("<>-------------------------------<>")
}

function converterMorse() {
    console.log("")
    let codigoMorse = prompt("Insira o código Morse (separado por espaço): ")
    let textoTraduzido = morseParaTextoParametros(codigoMorse)
    console.log(`Tradução: ${textoTraduzido}`)
    console.log("<>-------------------------------<>")
}

function criarMatriz() {
    console.log("")
    let totalLinhas = Number(prompt("Linhas: "))
    let totalColunas = Number(prompt("Colunas: "))
    let matrizGerada = criarMatrizAleatoriaParametros(totalLinhas, totalColunas)
    console.log("Matriz gerada:")
    console.table(matrizGerada)
    console.log("<>-------------------------------<>")
}

//Funcões Adicionais

function ordenarTresParametros(arr) {
    return arr.sort((a, b) => a - b)
}

function ordenarQualquerParametros(arr) {
    return arr.sort((a, b) => a - b)
}

function juntarArraysParametros(a1, a2) {
    return a1.concat(a2)
}

function contarOcorrenciaCharParametros(str, char) {
    let contador = 0
    for (let c of str) {
        if (c === char) contador++
    }
    return contador
}

function gerarSenhaParametros(tamanho) {
    let caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let senhaFinal = ""
    for (let i = 0; i < tamanho; i++) {
        senhaFinal += caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length))
    }
    return senhaFinal
}

function gerarNumeroEntreParametros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function morseParaTextoParametros(codigoMorse) {
    const dicionarioMorse = {
        ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e", "..-.": "f", "--.": "g",
        "....": "h", "..": "i", ".---": "j", "-.-": "k", ".-..": "l", "--": "m", "-.": "n",
        "---": "o", ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t", "..-": "u",
        "...-": "v", ".--": "w", "-..-": "x", "-.--": "y", "--..": "z", " ": " "
    }
    return codigoMorse.split(" ").map(char => dicionarioMorse[char] || "").join("")
}

function criarMatrizAleatoriaParametros(linhas, colunas) {
    let matrizResultado = []
    for (let i = 0; i < linhas; i++) {
        let linhaArray = []
        for (let j = 0; j < colunas; j++) {
            linhaArray.push(Math.floor(Math.random() * 100))
        }
        matrizResultado.push(linhaArray)
    }
    return matrizResultado
}
