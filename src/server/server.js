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
        console.log("priceListItem", priceListItems[i])
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

app.get('/product/:id', async (req, res) => {

    const result = await doFetch(`/products?id=${req.params.id}&_embed=images&_embed=priceListItems`)

    result[0].priceList = await doFetch(`/priceLists?id=${result[0].priceListItems[0].priceListId}&_expand=company`)

    res.send(
        result[0]
    )

})

app.get('/getProductsBySellerId/:sellerId', async (req, res) => {

    const priceLists = await doFetch("/priceLists?companyId=" + req.params.sellerId + "&_embed=priceListItems&_expand=company");

    let priceListItemData = []

    for (let i = 0; i < priceLists.length; i++) {
        const priceListItems = await doFetch("/priceListItems?_expand=priceList&_expand=product&priceListId=" + priceLists[i].id)
        priceListItemData.push(
            ...priceListItems
        )
    }

    console.log("priceListItemData", priceListItemData);

    priceListItemData = await enrichPriceListItemDataWithSellers(priceListItemData)

    priceListItemData = await enrichPriceListItemsWithProductImages(priceListItemData)

    res.send(
        priceListItemData
    )
    
})

app.listen(port, () => console.log(`Listening on port ${port}`, `open http://localhost:${port}`));