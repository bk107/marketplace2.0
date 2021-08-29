import React, { useEffect, useState } from 'react'
import OneColumnTemplate from '../../templates/OneColumnTemplate/OneColumnTemplate'
import ProductSlider from '../ProductSlider/ProductSlider'
import './Home.css'
import { IsOlderThan } from '../../utils/DateUtil'

export default function Home() {

    const [products, setProducts] = useState([])

    const fetchProducts = () => {

        const productsFromLocalStorage = localStorage.getItem("products")

        if(productsFromLocalStorage) {
            setProducts(JSON.parse(productsFromLocalStorage))
        } else {
            fetch(process.env.REACT_APP_MIDDLEWARE_SERVER + '/getAllProductsWithPrices')
            .then(res => res.json())
            .then(response => {
                console.log("products", response)
                setProducts(response)
                localStorage.setItem("products", JSON.stringify(response));
            })
        }

    }

    useEffect(fetchProducts, []);

    return (
        <OneColumnTemplate
            classNames={"Home"}
        >

            <ProductSlider title="Popular Products" products={products} />
            <ProductSlider title="Apple Products" products={products.filter(p => p.seller.name.includes("Apple"))} />
            <ProductSlider title="Bose Products" products={products.filter(p => p.seller.name.includes("Bose"))} />
            {/* <ProductSlider title="New Products" products={products.filter(p => p.productBean.releaseDate ? IsOlderThan(new Date(), new Date(p.productBean.releaseDate)) : false)} /> */}

        </OneColumnTemplate>
    )
}