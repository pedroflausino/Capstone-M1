// criando produtos dinamicamente
const createProduct = (arrObj) => {
    const ul = document.getElementById('list-products')

    for(let i = 0; i < arrObj.length; i++){
        const li = document.createElement('li')
        li.classList.add('product')

        const img = document.createElement('img')
        img.src = arrObj[i].imagem

        const span1 = document.createElement('span')
        span1.innerText = arrObj[i].span1
        span1.classList.add('categoria')

        const h2 = document.createElement('h2')
        h2.innerText = arrObj[i].h2

        const p = document.createElement('p')
        p.innerText = arrObj[i].p

        const preco = document.createElement('span')
        preco.innerText = arrObj[i].spanPreco

        //adicionando id no meu botao "adicionar ao carrinho"
        const spanAdd = document.createElement('span')
        spanAdd.innerText = arrObj[i].spanAdd
        spanAdd.id = i
        spanAdd.classList.add('span-add')

        ul.appendChild(li)
        li.appendChild(img)
        li.appendChild(span1)
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(preco)
        li.appendChild(spanAdd)
    }
}
createProduct(array)