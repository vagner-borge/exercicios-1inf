const cliente = "Murilo Bastos"
const opcaoMenu = 4
const quantidade = 4
const formaPagamento = "cartao"
const statusPedido = "pendente"

let prato

switch (opcaoMenu) {
    case 1:
        prato = "Café"
        break
    case 2:
        prato = "Cappuccino"
        break
    case 3:
        prato = "Bolo"
        break
    case 4:
        prato = "Sanduíche"
        break
    default:
        prato = "Opção inválida"
}

let precoUnitario

switch (opcaoMenu) {
    case 1:
        precoUnitario = 6
        break
    case 2:
        precoUnitario = 12
        break
    case 3:
        precoUnitario = 15
        break
    case 4:
        precoUnitario = 20
        break
    default:
        precoUnitario = 0
}

const subtotal = precoUnitario * quantidade

const freteStatus = subtotal >= 80 ? "Frete grátis" : "Frete pago"
const frete = subtotal >= 80 ? 0 : 8

let pagamentoMensagem

switch (formaPagamento) {
    case "pix":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case "cartao":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        break
    default:
        pagamentoMensagem = "Forma de pagamento inválida"
}

let descontoPercentual

switch (formaPagamento) {
    case "pix":
    case "cartao":
        descontoPercentual = 5
        break
    case "dinheiro":
        descontoPercentual = 0
        break
    default:
        descontoPercentual = 0
}

const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete


let statusMensagem

switch (statusPedido) {
    case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "enviado":
        statusMensagem = "Pedido a caminho"
        break
    case "cancelado":
        statusMensagem = "Pedido cancelado"
        break
    default:
        statusMensagem = "Status desconhecido"
}

const resumo = (`
Cliente: ${cliente}
Item: ${prato}
Quantidade: ${quantidade}
Subtotal: R$ ${subtotal}
Frete: ${freteStatus} (R$ ${frete})
Pagamento: ${pagamentoMensagem}
Desconto: R$ ${desconto}
Total: R$ ${total}
Situação: ${statusMensagem}
`)

console.log(resumo)

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}