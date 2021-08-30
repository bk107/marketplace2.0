import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductSliderCardName({ product, withLink }) {

    return (
        <div className="product-slider-card-product-name">
            {
                withLink
                    ?
                    <NavLink to={`/products/${product.id}`}>
                        {product.name}
                    </NavLink>
                    :
                    product.name
            }

        </div>
    )
}