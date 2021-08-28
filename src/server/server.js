const express = require("express");
const { default: fetch } = require("node-fetch");

const port = process.env.PORT || 5000;

const jsonServer = "http://localhost:3004"

const app = express();

const cors = require('cors');

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World!')
})

const enrichPriceListItemDataWithSellers = async(priceListItemData) => {
    for(let i = 0; i < priceListItemData.length; i++) {
        const seller = await fetchCompanyById(priceListItemData[i].priceList.companyId)
        priceListItemData[i].seller = seller;
    }
    return priceListItemData
}

const fetchCompanyById = async(companyId) => {

    let company
    let response

    try {
        response = await fetch(jsonServer + "/companies/"+companyId)
    } catch(ex) {
        console.error(ex)
    }

    company = await response.json()

    return company
}

app.get('/getAllProductsWithPrices', async function (req, res) {

    let response = [];

    try {
        response = await fetch(jsonServer + "/priceListItems?_expand=priceList&_expand=product")
    } catch(ex) {
        console.error(e)
    }

    let priceListItemData = await response.json()

    priceListItemData = await enrichPriceListItemDataWithSellers(priceListItemData)

    res.send(
        priceListItemData
    )

})

app.listen(port, () => console.log(`Listening on port ${port}`, `open http://localhost:${port}`));