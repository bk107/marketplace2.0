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

const getItemsForPriceList = async (priceList) => {

    let items = []
    let itemsResponse;

    try {
        itemsResponse = await fetch(jsonServer + `/priceListItems?priceList=${priceList.id}`)
    } catch (ex) {
        console.error(ex);
    }

    items = await itemsResponse.json()

    items = await getProductsForPriceListItems(items)
    
    const seller = await getSellerById(priceList.seller)

    items = await enrichPriceListItemsWithSellerName(items, seller);

    priceList.items = items;
}

const getSellerById = async (sellerId) => {
    let seller;
    let response;

    try {
        response = await fetch(jsonServer + `/companies/${sellerId}`)
    } catch (ex) {
        console.error(ex);
    }

    seller = await response.json();

    return seller;
}

const enrichPriceListItemsWithSellerName = async (priceListItems, seller) => {
    let enrichedPriceListItems = []
    for (let i = 0; i < priceListItems.length; i++) {
        let item = priceListItems[i];
        item.seller = seller;
        enrichedPriceListItems.push(item)
    }
    return enrichedPriceListItems;
}

const getProductsForPriceListItems = async (priceListItems) => {
    let enrichedPriceListItems = []
    for (let i = 0; i < priceListItems.length; i++) {
        let item = priceListItems[i];
        item.productBean = await getProductById(priceListItems[i].product)
        enrichedPriceListItems.push(item)
    }
    return enrichedPriceListItems;
}

const getProductById = async (productId) => {
    let product;
    let productResponse;

    try {
        productResponse = await fetch(jsonServer + `/products/${productId}`)
    } catch (ex) {
        console.error(ex);
    }

    product = await productResponse.json();

    return product[0];
}

const getAllItemsForPriceLists = async (priceLists) => {
    for (let i = 0; i < priceLists.length; i++) {
        await getItemsForPriceList(priceLists[i])
    }
}

app.get('/getAllProductsWithPrices', async function (req, res) {

    let priceListsResponse = await fetch(jsonServer + "/priceLists")

    if (!priceListsResponse.ok) {
        throw new Error(`HTTP error! status: ${priceListsResponse.status}`);
    }

    let priceLists = await priceListsResponse.json()

    await getAllItemsForPriceLists(priceLists)

    let responseData = []

    for(let i = 0; i < priceLists.length; i++) {
        responseData.push(...priceLists[i].items)
    }

    res.send(
        responseData
    )

})

app.listen(port, () => console.log(`Listening on port ${port}`, `open http://localhost:${port}`));