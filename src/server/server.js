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

const enrichPriceListItemDataWithSellers = async (priceListItems) => {
    for (let i = 0; i < priceListItems.length; i++) {
        const seller = await fetchCompanyById(priceListItems[i].priceList.companyId)
        priceListItems[i].seller = seller;
    }
    return priceListItems
}

const doFetch = async (endpoint) => {
    let records
    let response

    try {
        response = await fetch(jsonServer + endpoint)
    } catch (ex) {
        console.error(ex)
    }

    records = await response.json()

    return records
}

const fetchCompanyById = async (companyId) => {
    return await doFetch("/companies/" + companyId)
}

const enrichPriceListItemsWithProductImages = async (priceListItems) => {
    for (let i = 0; i < priceListItems.length; i++) {
        const images = await fetchProductImagesByProductId(priceListItems[i].productId)
        priceListItems[i].product.images = images;
    }
    return priceListItems
}

const fetchProductImagesByProductId = async (productId) => {
    return await doFetch("/images?productId=" + productId)
}

app.get('/getAllProductsWithPrices', async function (req, res) {

    let priceListItemData = await doFetch("/priceListItems?_expand=priceList&_expand=product")

    priceListItemData = await enrichPriceListItemDataWithSellers(priceListItemData)
    
    priceListItemData = await enrichPriceListItemsWithProductImages(priceListItemData)

    res.send(
        priceListItemData
    )

})

app.listen(port, () => console.log(`Listening on port ${port}`, `open http://localhost:${port}`));