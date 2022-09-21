// função para tratar e definir o valor total do carrinho
const valorTotalCarrinho = (arr) => {
    let valorTotal = 0
    for(let i = 0; i < arr.length; i++){
        valorTotal += parseFloat(arr[i].spanPreco.substring(2).replace(',','.'))
    }
    return valorTotal.toFixed(2)
}

//pegando as tags span onde estao meus adiconar ao carrinho  
// funçaõ responsável por adicionar ao carrinho
const buttonAddCart = document.getElementsByClassName('span-add')

let arrayCart = []
let contador = 0

const catchAddCart = (arrObj) => {
    for(let i = 0; i < buttonAddCart.length; i++){
        buttonAddCart[i].addEventListener('click', () =>{
            pQuantidade.innerText = ''
            pTotal.innerText = ''
            const id = buttonAddCart[i].id
            arrayCart.push(arrObj[id])
            contador++
            pQuantidade.innerText = arrayCart.length
            pTotal.innerText = valorTotalCarrinho(arrayCart)
            addCart()
            if(contador === 1){
                blocoQtdTot()
            }
        })
    }
}
catchAddCart(array)


const motherDiv = document.getElementById('block-cart-empty')
const divProdutosDoCarrinho = document.getElementById('produtos-do-carrinho')

const addCart = () => {

    divProdutosDoCarrinho.innerHTML = ''
    motherDiv.id = 'block-cart-with-products'

    for(let i = 0; i < arrayCart.length; i++){
            
            const divProdutodoCarrinho = document.createElement('div')
            divProdutodoCarrinho.classList.add('product-cart')

            const divImagemCarrinho = document.createElement('div')
            divImagemCarrinho.id = 'cart-img'

            const imagemProduto = document.createElement('img')
            imagemProduto.src = arrayCart[i].imagem

            const divInformacoes = document.createElement('div')
            divInformacoes.id = 'info-cart'

            const infoTitle = document.createElement('h3')
            infoTitle.innerText = arrayCart[i].h2

            const infoPreco = document.createElement('span')
            infoPreco.innerText = arrayCart[i].spanPreco


            //remover produto do carrinho
            const infoRemove = document.createElement('p')
            infoRemove.id = 'botao-remover'
            infoRemove.innerText = 'Remover produto'
            infoRemove.addEventListener('click', () => {
                arrayCart.splice(i, 1)
                contador--
                pQuantidade.innerText = arrayCart.length
                pTotal.innerText = valorTotalCarrinho(arrayCart)
                addCart()
                if(contador === 0){
                    divMaeBlocoTotal.innerHTML = ''
                    carrinhoVazio()
                }
            })

            const adicionarProdutosAqui = document.createElement('div')
            adicionarProdutosAqui.classList.add('adicionar-produtos-aqui')

            motherDiv.appendChild(divProdutosDoCarrinho)
            divProdutosDoCarrinho.appendChild(adicionarProdutosAqui)
            adicionarProdutosAqui.appendChild(divProdutodoCarrinho)
            divProdutodoCarrinho.appendChild(divImagemCarrinho)
            divImagemCarrinho.appendChild(imagemProduto)
            divProdutodoCarrinho.appendChild(divInformacoes)
            divInformacoes.appendChild(infoTitle)
            divInformacoes.appendChild(infoPreco)
            divInformacoes.appendChild(infoRemove)

    }
}


const section = document.getElementById('search-cart')
const pTotal = document.createElement('p')
const pQuantidade = document.createElement('p')
const divMaeBlocoTotal = document.getElementById('bloco-total')

const blocoQtdTot = () => {
    const divTotal = document.createElement('div')
    divTotal.id = 'total'


    const divQtdTotal = document.createElement('div')
    divQtdTotal.id = 'qtd-total'

    const qtd = document.createElement('p')
    qtd.innerText = 'Quantidade:'

    const tot = document.createElement('p')
    tot.innerText = 'Total:'

    const divQtdTotalValues = document.createElement('div')
    divQtdTotalValues.id = 'qtd-total-values'

    
    pQuantidade.innerText = arrayCart.length

    
    pTotal.innerText = valorTotalCarrinho(arrayCart)


    section.appendChild(divMaeBlocoTotal)
    divMaeBlocoTotal.appendChild(divTotal)
    divTotal.appendChild(divQtdTotal)
    divTotal.appendChild(divQtdTotalValues)
    divQtdTotal.appendChild(qtd)
    divQtdTotal.appendChild(tot)
    divQtdTotalValues.appendChild(pQuantidade)
    divQtdTotalValues.appendChild(pTotal)
}


const carrinhoVazio = () => {

    const divMae = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    divMae.id = 'carrinho-vazio'
    h3.innerText = 'Carrinho vazio'
    p.innerText = 'adicione itens'

    divProdutosDoCarrinho.appendChild(divMae)
    divMae.appendChild(h3)
    divMae.appendChild(p)
}