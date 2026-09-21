
// Dados da permanência
const cliente = "Gustavo Pires"
const volume = "Mala de Viagem"
const valorBase = 25
const diasPermitidos = 2
const diasUtilizados = 6
const valorMultaPorDia = 15
const valorPago = 40

// Verificação do prazo
let prazoStatus

if (diasUtilizados <= diasPermitidos) {
    prazoStatus = "Dentro da tolerância"
} else {
    prazoStatus = "Excedeu a tolerância"
}

// Cálculo do atraso
let diasAtraso

if (diasUtilizados > diasPermitidos) {
    diasAtraso = diasUtilizados - diasPermitidos
} else {
    diasAtraso = 0
}

// Cálculo da multa
const multa = diasAtraso * valorMultaPorDia

// Cálculo do valor final
const valorFinal = valorBase + multa

// Verificação do pagamento
let pagamentoStatus

if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

// Cálculo do troco
let troco

if (valorPago >= valorFinal) {
    troco = valorPago - valorFinal
} else {
    troco = 0
}

// Situação da retirada
let statusRetirada

if (diasUtilizados <= diasPermitidos) {
    statusRetirada = "Retirada liberada"
} else {
    if (valorPago >= valorFinal) {
        statusRetirada = "Retirada liberada com multa paga"
    } else {
        statusRetirada = "Retirada bloqueada: pagamento não cobre a multa"
    }
}


const resumo =(`
Cliente: ${cliente}
Volume: ${volume}
Valor base: R$ ${valorBase}
Prazo: ${diasPermitidos} 
Permanência: ${diasUtilizados} 
Situação do prazo: ${prazoStatus}
Horas excedentes: ${diasAtraso}
Multa: R$ ${multa}
Valor final: R$ ${valorFinal}
Valor pago: R$ ${valorPago}
Pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Situação da retirada: ${statusRetirada}
`)

console.log(resumo)

module.exports = {
    cliente,
    volume,
    valorBase,
    diasPermitidos,
    diasUtilizados,
    valorMultaPorDia,
    valorPago,
    prazoStatus,
    diasAtraso,
    multa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusRetirada,
    resumo
}
