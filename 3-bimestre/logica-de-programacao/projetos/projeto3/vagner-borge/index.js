
// Dados do cliente
const nome = "Vagner Borges"
const idade = 21
const categoria = "comum"
const possuiIngresso = true
const bloqueado = false
const valorIngresso = 45
const valorPago = 45

// Verificação da idade
let idadeStatus

if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

// Verificação do nível de acesso
let nivelAcesso

if (categoria === "gerente" || categoria === "supervisor") {
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}

// Verificação da liberação de acesso
let acessoStatus

if (idade >= 18 && possuiIngresso && !bloqueado) {
    acessoStatus = "Entrada na sala liberada"
} else {
    acessoStatus = "Entrada na sala negada"
}

// Verificação do pagamento
let pagamentoStatus

if (valorPago >= valorIngresso) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

// Cálculo do troco
let troco

if (valorPago >= valorIngresso) {
    troco = valorPago - valorIngresso
} else {
    troco = 0
}

// Situação final
let statusSessao

if (acessoStatus === "Entrada na sala liberada" && pagamentoStatus === "Pagamento aprovado") {
    statusSessao = "Check-in da sessão confirmado"
} else {
    statusSessao = "Check-in da sessão não confirmado"
}

// Resumo usando template string
const resumo =(`
Nome: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}
Valor do ingresso: R$ ${valorIngresso}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusSessao}
`)

console.log(resumo)

// Exportação para os testes
module.exports = {
    nome,
    idade,
    categoria,
    possuiIngresso,
    bloqueado,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusSessao,
    resumo
}
