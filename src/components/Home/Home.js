import React, { useEffect, useState } from 'react'

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
        <React.Fragment>
            <h1> Home </h1>
            {
                products.map(product => {
                    return (
                        <div className="product" key={product.productBean.name}>
                            <div> Name: {product.productBean.name}</div>
                            <div> Price: {product.price}</div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}