import React from 'react'

export default function ProductSliderCardPrice({ product }) {

    return (
        <div className="product-slider-card-product-price">
            Price: {product.price}
        </div>
    )
}