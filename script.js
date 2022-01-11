var items = []

document.querySelector('input[type=submit]')
    .addEventListener('click', () => {
        var productName = document.querySelector('input[name=product_name]')
        var productPrice = document.querySelector('input[name=product_value]')

        items.push({
            name: productName.value,
            value: productPrice.value.replace(/,/g, '.')
        })

        let productsList = document.querySelector('.products-list')
        let sum = 0

        productsList.innerHTML = ''

        items.map(function(val) {
            sum += parseFloat(val.value)
            productsList.innerHTML += `
            <div class="single-products-list">
                <h3>`+val.name+`</h3>
                <h3 class="product-price"><span>R$`+val.value+`</span></h3>
            </div>
            `
        })

        sum = sum.toFixed(2)
        productName.value = ''
        productPrice.value = ''

        let sumElement = document.querySelector('.total-sum h1')
        sumElement.innerHTML = `R$`+sum.replace(/,/g, '.')

})

document.querySelector('button[name=clear]')
.addEventListener('click', () => {
    items = []

    document.querySelector('.products-list').innerHTML = ''
    document.querySelector('.total-sum h1').innerHTML = 'R$0,00'
})