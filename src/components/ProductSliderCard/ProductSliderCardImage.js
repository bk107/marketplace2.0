import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductSliderCardImage({ product }) {
    return (
        <NavLink className='product-slider-card-image' to={"products/" + product.productId}>
            <img src={product.product.images[0].uri} />
        </NavLink>
    )
}