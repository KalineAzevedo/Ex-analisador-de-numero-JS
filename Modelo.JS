let num = document.querySelector('input#fnum') //declaraçao das variaveis 
let lista = document.querySelector('select#flista')// pode ser usado o getelementbyid ou o queryselect
let res = document.querySelector('div#res') 
let valores = [] // vetor com os valores, é ele q vai analisar os dados a partir do array

//essas function foram criadas para verificar se os numeros digitados estao ok

function isNumero(n) { // essa function recebe um parametro (numero)
    if(Number(n) >= 1 && Number(n) <= 100){ // verificar se o numero digitado estar entre 0 e 100
        return true
    } else {
        return false
    }
        
}
function inLista(n, l) { // essa fuction recebe 2 parametros (numero e lista)
    if (l.indexOf(Number(n)) != -1) { // verificar se o valor n for encontrado na lista 
        return true
    }else {
        return false
    }
}
//essa parte vai adicionar os valores a lista
function adicionar () { // ! = não . (se o valor n estar na listar, faça )
    if (isNumero(num.value) && !inLista(num.value,valores)) { // o valor q for digitado é um numero e estar dentro do q foi pedido
        valores.push(Number(num.value))  // o push vai add um elemento no vetor
        let item = document.createElement('option') // aq foi criado o 'item' com o elemento option q é ele q vai fazer com q possa ser adicionado os numeros
        item.text = `Valor ${num.value} adicionado.` // aq é para exibir a mensagem com o numero adicionado
        lista.appendChild(item) // aq foi adicionado a lista 
        res.innerHTML = '' // dps que add um elemento ele limpa a mensagem de resultado 

    } else { // se n for add oq pedu, ele da erro
        window.alert ('Valor invalido ou já encontrado na lista')
    }
    
    num.value = '' // aq apaga o numero dps q é adicionado, para q ele possa ficar vazio
    num.focus () // aq estar selecionado o focus da digitação, ou seja n preciso clicar de novo p poder digitar 
}
function finalizar () { // aq funciona o botão finalizar 
    if (valores.length == 0){ // verificar se os valores/vetores estao vazios 
        window.alert('Adicione valores antes de finalizar !')
    } else {
        let tot = valores.length // saber quantos elementos o vetor tem
        let maior = valores[0] // aq salva os valores p dps ser verifcado se é o maior ou menor
        let menor = valores[0]
        let soma = 0 // aq verifica a soma
        let media = 0 // aq verifica a media ( os valores sempre tem q começar p 0)

        for (let pos in valores) {
            soma += valores[pos] // aq soma os valores
            if (valores[pos] > maior) // aq verifica quem é o maior valor
              maior = valores[pos]
              if (valores[pos] < menor) // aq verificar quem foi o menor valor 
                menor = valores[pos]
        }
        media = soma/ tot // aq verifica a media 
        
        res.innerHTML = '' // aq zera o valor 
        // aq em baixo sao os codigos para exibirem as mensagens na tela com os valores 
        res.innerHTML+= `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML+= `<p>Maior valor informado foi ${maior} </p>`
        res.innerHTML+= `<p> Menor valor informado foi ${menor}</p>`
        res.innerHTML+= `<p> Somando todos os valores, temos ${soma}</p>`
        res.innerHTML+= `<p> A média dos valores digitados é ${media}</p>`
    }
}

