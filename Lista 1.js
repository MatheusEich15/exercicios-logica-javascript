const prompt = require('prompt-sync')()

const menu = `
<>---MENU-PRINCIPAL---<>
1 - Verificar Número (Positivo/Negativo)
2 - Média e Situação do Aluno
3 - Múltiplos de 3
4 - Calcular de Fatorial
5 - Verificar Ano Bissexto
6 - Conversor Celsius -> Fahrenheit
7 - Verificar Palíndromo
8 - Soma de 1 / 100
9 - Tabuada do 5
10 - Contagem Regressiva
11 - Desafio FizzBuzz
12 - Formatar Sequência
13 - Desenhar Triângulo
14 - Inverter Texto
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
                verificarPositivoNegativo()
                break;
            }

            case 2: {
                calcularMedia()
                break;
            }

            case 3: {
                listarMultiplosTres()
                break;
            }

            case 4: {
                calcularFatorial()
                break;
            }

            case 5: {
                verificarAnoBissexto()
                break;
            }

            case 6: {
                converterTemperatura()
                break;
            }

            case 7: {
                verificarPalindromo()
                break;
            }

            case 8: {
                somarUmACem()
                break;
            }

            case 9: {
                exibirTabuadaCinco()
                break;
            }

            case 10: {
                contagemRegressiva()
                break;
            }

            case 11: {
                executarFizzBuzz()
                break;
            }

            case 12: {
                formatarSequencia()
                break;
            }

            case 13: {
                desenharTriangulo()
                break;
            }

            case 14: {
                inverterTexto()
                break;
            }

            case 0: {
                process.exit(0)
            }
        }
    }
}

function verificarPositivoNegativo() {
    console.log("")
    let numero = Number(prompt("Insira um número: "))
    console.log("\n<>-------------------------------<>")
    if (numero === 0) {
        console.log(`O número inserido é zero (nulo)`)
    } else if (numero > 0) {
        console.log(`O número ${numero} é positivo (+)`)
    } else {
        console.log(`O número ${numero} É negativo (-)`)
    }
    console.log("<>-------------------------------<>")
    console.log(`
Deseja verificar mais números: 
1 - SIM
2 - NÃO`)
    let confirma = Number(prompt("Insira: "))
    switch (confirma) {
        case 1: {
            verificarPositivoNegativo();
            break;
        }
        case 2: {
            console.log("Retornando ao menu...")
            return;
        }
        default: {
            console.log("ERRO!!!")
            break;
        }

    }
}

function calcularMedia() {
    let soma = 0
    let media = 0
    let situacao = ""
    console.log("\nInsira 3 notas\n")
    for (let i = 1; i <= 3; i++) {
        let nota = Number(prompt(`Insira a ${i}° nota: `))
        soma += nota
    }
    media = soma / 3
    if (media >= 7) {
        situacao = "APROVADO"
    } else if (media < 3) {
        situacao = "REPROVADO"
    } else {
        situacao = "EXAME"
    }
    console.log(`
Média: ${media.toFixed(2)}
Situação: ${situacao}`)
    console.log(`
Deseja calcular mais alguma média: 
1 - SIM
2 - NÃO`)
    let confirma = Number(prompt("Insira: "))
    switch (confirma) {
        case 1: {
            calcularMedia();
            break;
        }
        case 2: {
            console.log("Retornando ao menu...")
            return;
        }
        default: {
            console.log("ERRO!!!")
            break;
        }
    }
}

function listarMultiplosTres() {
    let numero = 3
    console.log("")
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

function calcularFatorial() {
    console.log("")
    let numero = Number(prompt("Insira um número: "))
    let fatorial = numero
    if (numero === 1 || numero === 0) {
        fatorial = 1
    } else if (numero < 0) {
        fatorial = "Infinito"
    } else {
        for (let i = numero - 1; i > 1; i--) {
            fatorial *= i
        }
    }
    console.log(`\nO fatorial de ${numero} é ${fatorial}`)
    console.log(`
Deseja calcular o fatorial de outro número: 
1 - SIM
2 - NÃO`)
    let confirma = Number(prompt("Insira: "))
    switch(confirma) {
        case 1: {
            calcularFatorial();
            break;
        }
        case 2: {
            console.log("Retornando ao menu...")
            return;
        }
        default: {
            console.log("ERRO!!!")
            break;
        }
    }
}

function verificarAnoBissexto() {
    console.log("")
    let ano = Number(prompt("Insira o ano para verificar: "))
    let anoString
    if (ano % 4 === 0 && ano % 100 != 0 || ano % 400 === 0) {
        anoString = "é bissexto"
    } else {
        anoString = "não é bissexto"
    }
    console.log(`\nO ano ${ano} ${anoString}`)
    console.log(`
Deseja verificar outro ano: 
1 - SIM
2 - NÃO`)
    let confirma = Number(prompt("Insira: "))
    switch(confirma) {
        case 1: {
            verificarAnoBissexto();
            break;
        }
        case 2: {
            console.log("Retornando ao menu...")
            return;
        }
        default: {
            console.log("ERRO!!!")
            break;
        }
    }
}

function converterTemperatura() {
    console.log("")
    let celsius = Number(prompt("Insira a temperatura em Celsius:"))
    let fahrenheit = (celsius * 1.8) + 32
    console.log(`
Celsius: ${celsius} -> Fahrenheit: ${fahrenheit.toFixed(2)}`)
    console.log(`
Deseja converter outra temperatura: 
1 - SIM
2 - NÃO`)
    let confirma = Number(prompt("Insira: "))
    switch(confirma) {
        case 1: {
            converterTemperatura();
            break;
        }
        case 2: {
            console.log("Retornando ao menu...")
            return;
        }
        default: {
            console.log("ERRO!!!")
            break;
        }
    }
}

function verificarPalindromo() {
    
}