let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let msg = document.getElementById('res')
let valores = [] // variavel Array 
let limpar = document.getElementById('limpar')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        msg.innerHTML = ''
    }else {
        window.alert('Valor invalido ou já adicionado.')
    }
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione pelo menos um valor para finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor )
            menor = valores[pos]
        }

        msg.innerHTML = ''
        msg.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        msg.innerHTML += `<p> O maior elemento é o número ${maior}.</p>`
        msg.innerHTML += `<p> O menor elemento é o ${menor}.</p>`
        msg.innerHTML += `<p>Somando todos os elementos temos ${soma}.</p>`
        msg.innerHTML += `<p>A média de todos os elementos é ${soma/total}.</p>`
        
    }

}
