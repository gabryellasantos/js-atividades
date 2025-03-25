//questão 1
function adivinharNumero() {
    
    const numeroAleatorio = Math.floor(Math.random() * 20) + 1 //gera números aleatórios em JavaScript utilizando a função Math.
    let palpiteNumero;
    
    while (palpiteNumero !== numeroAleatorio) {
        palpiteNumero = parseInt(prompt("Adivinhe o número entre 1 e 20:"))

        if (palpiteNumero < numeroAleatorio) {
            console.log("Quase! Tente chutar um número maior.")
        } else if (palpiteNumero > numeroAleatorio) {
            console.log("Quase! Tente chutar um número menor.")
        } else {
            console.log("Parabéns! Você adivinhou o número!")
        }
    }
}

//questão 2
function pedraPapelTesoura() {

    //variaveis pedra, papel e tesoura e opcoes (que é um array com as opções pedra, papel e tesoura)
    const pedra = "pedra"
    const papel = "papel"
    const tesoura = "tesoura"
    const opcoes = [pedra, papel, tesoura] //array com as opções de escolha (com array o código fica bem mais fácil)

    const escolhaUsuario = prompt("Vamos jogar! Escolha entre pedra, papel ou tesoura:") //prompt pode ser usado na declaração de variáveis ou em qualquer lugar do código
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)]
    console.log(`O Computador escolheu: ${escolhaComputador}`)
    
    if (escolhaUsuario === escolhaComputador) {
        console.log("O jogo empatou!")
    } else if (
        (escolhaUsuario === pedra && escolhaComputador === tesoura) || // || significa "ou"
        (escolhaUsuario === papel && escolhaComputador === pedra) ||
        (escolhaUsuario === tesoura && escolhaComputador === papel)
    ) {
        console.log("Você ganhou o jogo!")
    } else {
        console.log("Você perdeu o jogo!")
    }
}

//questão 3
//calculadora básica
let numero = parseInt(prompt("Digite um número:"))

for (let i = 1; i <= 10; i++) {
     console.log(numero + " x " + i + " = " + (numero * i))
}

//questão 4
function trianguloDeAsteriscos() {

    const linhas = parseInt(prompt("Digite o número de linhas:"))
    let resultado = "" // "" significa que a variável está vazia

    for (let i = 1; i <= linhas; i++) {
        resultado += "*"
        console.log(resultado)
    }
}

//questão 5
function expressao() {

    const termos = parseInt(prompt("Digite a quantidade de termos para formar a expressão:"))
    let numero = ""
    let soma = 0
    let expressao = ""

    for (let i = 1; i <= termos; i++) {
        numero += "1"
        soma += parseInt(numero)
        if (i === 1) {
            expressao += numero
        } else {
            expressao += ` + ${numero}`
        }        
    }
    console.log(expressao);
    console.log("A soma dos termos é:", soma)
}


