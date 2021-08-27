import React, { useEffect, useState } from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'
import './Home.css'

export default function Home() {

    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        console.log("process.env.REACT_APP_JSON_SERVER", process.env.REACT_APP_MIDDLEWARE_SERVER)
        fetch(process.env.REACT_APP_MIDDLEWARE_SERVER + '/getAllProductsWithPrices')
            .then(res => res.json())
            .then(response => {
                setProducts(response)
            })
    }

    useEffect(fetchProducts, []);

    return (
        <div className="home">
              <ProductSlider title="Popular Products" products={products} />
        </div>
    )
}