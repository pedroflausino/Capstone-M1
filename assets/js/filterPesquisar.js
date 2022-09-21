arrayPesquisa = []

const input = document.getElementById('search')
const button = document.getElementById('button')

const pegarValorInput = () => {
    arrayPesquisa = []
    let valor = input.value
    for(let i = 0; i < array.length; i++){
        if(array[i].h2 === valor){
            ul.innerHTML = ''
            arrayPesquisa.push(array[i])
        }
    }
    createProduct(arrayPesquisa)
    catchAddCart(arrayPesquisa)
}

button.addEventListener('click', pegarValorInput)