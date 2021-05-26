let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let msg = document.querySelector('div#res')
let valores = []

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

function adcionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        document.alert('tudo ok')
    }else {
        document.alert('Valor invalido ou já encontrado.')
    }
}