import React, { useEffect, useState } from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'

export default function SellerProductSlider({ seller, productIdToExclude, title }) {

    const [sellerProducts, setSellerProducts] = useState([])

    const sliderTitle = title ? title : "Products by "+seller.name

    useEffect(() => {

        fetch(process.env.REACT_APP_MIDDLEWARE_SERVER + "/getProductsBySellerId/" + seller.id)
            .then(res => res.json())
            .then(response => {
                console.log("response", response);
                setSellerProducts(response)
            })

    }, [seller])

    return (

        sellerProducts ?
            <ProductSlider 
                products={sellerProducts.filter(product => product.productId !== productIdToExclude)} 
                title={sliderTitle} />
            : ""

    )
}