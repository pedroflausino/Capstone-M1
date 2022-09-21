const ul = document.getElementById('list-products')

const filter = (event) => {
    const item = event.target.textContent
    const newArray = []
    if(item === 'Tudo'){
        ul.innerHTML = ''
        createProduct(array)
        catchAddCart(array)
    }else{
        ul.innerHTML = ''
        for(let i = 0; i < array.length; i++){
            if(item === array[i].span1){
                newArray.push(array[i])
            }
        }
        createProduct(newArray)
        catchAddCart(newArray)
    }
}

const filtros = document.getElementsByClassName('div-header')

const pegarTagsNavBar = (lista) => {
    for(let i = 0; i < lista.length; i++){
        lista[i].addEventListener('click', filter)
    }
}
pegarTagsNavBar(filtros)