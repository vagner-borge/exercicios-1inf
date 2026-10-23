
const prompt = require("prompt-sync")()

const quantidadeDeDias = Number(prompt("Digite a quantidade de dias da semana: "))
const metaDiaria = Number(prompt("Digite a meta de vendas diaria: "))
const metaSemanal = Number(prompt("Digite a meta de vendas da semana: "))

let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0

for (let dia = 1; dia <= quantidadeDeDias; dia++) {
    const vendaDoDia = Number(prompt(`Venda do dia ${dia}: `))

    totalVendido = totalVendido + vendaDoDia

    if (vendaDoDia >= metaDiaria) {
        diasAcimaDaMeta++
    }

    if (vendaDoDia > melhorDia) {
        melhorDia = vendaDoDia
    }
}

const mediaVendas = totalVendido / quantidadeDeDias

const situacaoSemana = totalVendido >= metaSemanal
    ? "Meta semanal atingida"
    : "Meta semanal não atingida"

const resumo = (`
===== RELATORIO DE VENDAS DA FARMACIA =====

Total vendido: R$ ${totalVendido.toFixed(2)}
Media de vendas por dia: R$ ${mediaVendas.toFixed(2)}
Dias acima da meta: ${diasAcimaDaMeta}
Melhor dia de vendas: R$ ${melhorDia.toFixed(2)}
Situacao da semana: ${situacaoSemana}
`)

console.log(resumo)

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}
