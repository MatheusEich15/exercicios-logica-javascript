const prompt = require('prompt-sync')()

const menu = `
<>---MENU-PRINCIPAL---<>
1 - Meu Perfil
2 - Produto em Estoque
3 - Detalhes do Filme
4 - Informacoes do Pet
5 - Atualizando Contato
6 - Cardapio do Dia
7 - Detalhes do Usuario
8 - Informacoes da Matricula
9 - Lista de Compras
10 - Catalogo da Loja
11 - Combinando Arrays
12 - Copiando um Objeto
13 - Mesclando Objetos
14 - Argumentos de Funcao
15 - Heranca Simples
16 - Construtor e Prototipo
17 - Compartilhando Metodos
18 - Apresentacao Pessoal
19 - Percorrendo Carro
20 - Chaves e Valores
21 - Objeto Imutavel
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
                meuPerfil()
                break;
            }

            case 2: {
                produtoEstoque()
                break;
            }

            case 3: {
                detalhesFilme()
                break;
            }

            case 4: {
                informacoesPet()
                break;
            }

            case 5: {
                atualizandoContato()
                break;
            }

            case 6: {
                cardapioDoDia()
                break;
            }

            case 7: {
                detalhesUsuario()
                break;
            }

            case 8: {
                informacoesMatricula()
                break;
            }

            case 9: {
                listaDeCompras()
                break;
            }

            case 10: {
                catalogoDaLoja()
                break;
            }

            case 11: {
                combinandoArrays()
                break;
            }

            case 12: {
                copiandoObjeto()
                break;
            }

            case 13: {
                mesclandoObjetos()
                break;
            }

            case 14: {
                argumentosDeFuncao()
                break;
            }

            case 15: {
                herancaSimples()
                break;
            }

            case 16: {
                construtorPrototipo()
                break;
            }

            case 17: {
                compartilhandoMetodos()
                break;
            }

            case 18: {
                apresentacaoPessoal()
                break;
            }

            case 19: {
                percorrendoCarro()
                break;
            }

            case 20: {
                chavesEValores()
                break;
            }

            case 21: {
                objetoImutavel()
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

function meuPerfil() {
    console.log("")
    let usuarioPerfil = {
        nome: "Matheus",
        idade: 28,
        cidade: "São Paulo"
    }
    console.log("Perfil:", usuarioPerfil)
    console.log("<>-------------------------------<>")
}

function produtoEstoque() {
    console.log("")
    let produtoObj = {
        nome: "Notebook",
        preco: 3500,
        emEstoque: true
    }
    console.log("Produto:", produtoObj)
    console.log("<>-------------------------------<>")
}

function detalhesFilme() {
    console.log("")
    let filmeObj = {
        titulo: "Inception",
        ano: 2010,
        diretor: "Christopher Nolan",
        genero: "Ficção Científica"
    }
    console.log(filmeObj.titulo)
    console.log(filmeObj.diretor)
    console.log("<>-------------------------------<>")
}

function informacoesPet() {
    console.log("")
    let petObj = {
        nome: "Rex",
        especie: "Cachorro",
        idade: 5,
        cor: "Marrom"
    }
    console.log(petObj["nome"])
    console.log(petObj["especie"])
    console.log("<>-------------------------------<>")
}

function atualizandoContato() {
    console.log("")
    let contatoObj = {
        nome: "Ana Silva",
        telefone: "98765-4321",
        cidade: "São Paulo"
    }
    contatoObj.telefone = "12345-6789"
    contatoObj.email = "contato@exemplo.com"
    console.log("Contato atualizado:", contatoObj)
    console.log("<>-------------------------------<>")
}

function cardapioDoDia() {
    console.log("")
    let lancheObj = {
        nome: "X-Burger",
        preco: 15.00,
        ingredientes: ["pão", "hambúrguer", "queijo", "alface"]
    }
    console.log(`O lanche ${lancheObj.nome} custa R$ ${lancheObj.preco.toFixed(2)}.`)
    lancheObj.preco = 17.50
    lancheObj.vegano = false
    console.log("Lanche final:", lancheObj)
    console.log("<>-------------------------------<>")
}

function detalhesUsuario() {
    console.log("")
    let usuarioObj = {
        nome: "Felipe",
        endereco: {
            rua: "Av. Paulista",
            numero: 1000,
            cidade: "São Paulo"
        }
    }
    console.log(`O usuário mora em ${usuarioObj.endereco.cidade}, na ${usuarioObj.endereco.rua}.`)
    console.log("<>-------------------------------<>")
}

function informacoesMatricula() {
    console.log("")
    let alunoObj = {
        nome: "Ricardo",
        matricula: {
            numero: 12345,
            curso: "Engenharia"
        }
    }
    alunoObj.matricula.numero = 54321
    console.log("Aluno atualizado:", alunoObj)
    console.log("<>-------------------------------<>")
}

function listaDeCompras() {
    console.log("")
    let carrinhoDeCompras = [
        { produto: { nome: "Arroz", preco: 25.50 }, quantidade: 2 },
        { produto: { nome: "Feijão", preco: 9.90 }, quantidade: 3 }
    ]
    console.log(`Primeiro produto: ${carrinhoDeCompras[0].produto.nome}`)
    console.log(`Preço do segundo: R$ ${carrinhoDeCompras[1].produto.preco.toFixed(2)}`)
    console.log("<>-------------------------------<>")
}

function catalogoDaLoja() {
    console.log("")
    let lojaObj = {
        nome: "Tech Store",
        categorias: {
            celulares: {
                produto1: { nome: "iPhone 14", preco: 7000 },
                produto2: { nome: "Samsung Galaxy S23", preco: 5000 }
            },
            notebooks: {
                produto1: { nome: "MacBook Air", preco: 9500 },
                produto2: { nome: "Dell XPS 13", preco: 8500 }
            }
        }
    }
    console.log("Nome do notebook:", lojaObj.categorias.notebooks.produto1.nome)
    console.log("<>-------------------------------<>")
}

function combinandoArrays() {
    console.log("")
    let primeiraLista = ["Maçã", "Banana"]
    let segundaLista = ["Laranja", "Uva"]
    let listaCompleta = [...primeiraLista, ...segundaLista]
    console.log("Todas as frutas:", listaCompleta)
    console.log("<>-------------------------------<>")
}

function copiandoObjeto() {
    console.log("")
    let configuracoesBase = { tema: "dark", idioma: "pt-br" }
    let novasConfiguracoes = { ...configuracoesBase }
    novasConfiguracoes.tema = "light"
    console.log("Original:", configuracoesBase)
    console.log("Cópia alterada:", novasConfiguracoes)
    console.log("<>-------------------------------<>")
}

function mesclandoObjetos() {
    console.log("")
    let dadosPessoais = { nome: "Matheus", idade: 28 }
    let dadosProfissionais = { cargo: "Dev", empresa: "Google" }
    let funcionarioCompleto = { ...dadosPessoais, ...dadosProfissionais }
    console.log("Funcionário Completo:", funcionarioCompleto)
    console.log("<>-------------------------------<>")
}

function argumentosDeFuncao() {
    console.log("")
    function mostrarNumeros(a, b, c) {
        console.log(`Valores: a=${a}, b=${b}, c=${c}`)
    }
    let listaNumeros = [10, 20, 30]
    mostrarNumeros(...listaNumeros)
    console.log("<>-------------------------------<>")
}

function herancaSimples() {
    console.log("")
    let veiculoBase = { rodas: 4 }
    let carroNovo = Object.create(veiculoBase)
    carroNovo.marca = "Ford"
    console.log(`Marca do carro: ${carroNovo.marca}`)
    console.log(`Rodas do carro (protótipo): ${carroNovo.rodas}`)
    console.log("<>-------------------------------<>")
}

function construtorPrototipo() {
    console.log("")
    function Produto(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    Produto.prototype.descrever = function() {
        console.log(`${this.nome} custa R$ ${this.preco.toFixed(2)}`)
    }
    let livroObj = new Produto("O Senhor dos Anéis", 80)
    livroObj.descrever()
    console.log("<>-------------------------------<>")
}

function compartilhandoMetodos() {
    console.log("")
    function Guerreiro(nome) {
        this.nome = nome
        this.vida = 100
    }
    Guerreiro.prototype.atacar = function() {
        console.log(`${this.nome} está atacando!`)
    }
    let primeiroGuerreiro = new Guerreiro("Arthur")
    let segundoGuerreiro = new Guerreiro("Lancelot")
    primeiroGuerreiro.atacar()
    segundoGuerreiro.atacar()
    console.log("<>-------------------------------<>")
}

function apresentacaoPessoal() {
    console.log("")
    let pessoaObj = {
        nome: "Matheus",
        anoNascimento: 1996,
        apresentar: function() {
            let idadePessoa = 2025 - this.anoNascimento
            return `Olá, meu nome é ${this.nome} e eu tenho ${idadePessoa} anos.`
        }
    }
    console.log(pessoaObj.apresentar())
    console.log("<>-------------------------------<>")
}

function percorrendoCarro() {
    console.log("")
    let carroObj = {
        marca: "Honda",
        modelo: "Civic",
        ano: 2022
    }
    for (let propriedade in carroObj) {
        console.log(`${propriedade}: ${carroObj[propriedade]}`)
    }
    console.log("<>-------------------------------<>")
}

function chavesEValores() {
    console.log("")
    let livroObj = {
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328
    }
    console.log("Chaves:", Object.keys(livroObj))
    console.log("Valores:", Object.values(livroObj))
    console.log("Entradas:", Object.entries(livroObj))
    console.log("<>-------------------------------<>")
}

function objetoImutavel() {
    console.log("")
    let configuracaoObj = { status: "ativo" }
    Object.freeze(configuracaoObj)
    configuracaoObj.status = "inativo"
    configuracaoObj.versao = 1.0
    console.log("Objeto após tentativa de alteração:", configuracaoObj)
    console.log("<>-------------------------------<>")
}
