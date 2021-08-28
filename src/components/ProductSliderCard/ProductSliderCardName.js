import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductSliderCardName({ product }) {

    return (
        <div className="product-slider-card-product-name">
            <NavLink to={`/products/${product.productId}`}>
                {product.product.name}
            </NavLink>
        </div>
    )
}