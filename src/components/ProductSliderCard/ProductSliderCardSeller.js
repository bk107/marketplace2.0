import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductSliderCardSeller({ product }) {

    return (
        <div className="product-slider-card-product-seller">
            {'Sold By: '}
            <NavLink to={`/sellers/${product.seller.id}`}>
                {product.seller.name}
            </NavLink>
        </div>
    )
}


