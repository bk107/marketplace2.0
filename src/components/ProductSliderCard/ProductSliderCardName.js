import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductSliderCardName({ product }) {

    return (
        <div className="product-slider-card-product-name">
            <NavLink to={`/products/${product.id}`}>
                {product.productBean.name}
            </NavLink>
        </div>
    )
}