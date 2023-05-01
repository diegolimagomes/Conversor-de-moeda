const button = document.getElementById('convert-button') /*chamar o button pelo id*/
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value //para pegar somente o valor do input
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')



    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar) //novo formato para formatar moeda no JS
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }


}



changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyimg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyimg.src = './assents/estados-unidos (1) 1.png'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyimg.src = './assents/Euro.png'
    }

    convertValues()
}
button.addEventListener('click', convertValues)//evento para saber assim que o botão for clicado, toda vez q o botão for clicado chama-se uma função
select.addEventListener('change', changeCurrency)