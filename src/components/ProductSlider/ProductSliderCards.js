import React from 'react'
import ProductSliderCard from '../ProductSliderCard/ProductSliderCard'

export default function ProductSliderCards({ products }) {
    return (
        <div className="product-slider-cards">
            {
                products.map(product => {
                    return (
                        <ProductSliderCard product={product} key={product.productId} />
                    )
                })
            }
        </div>
    )
}