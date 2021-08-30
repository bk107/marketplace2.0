import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductSliderCardImage({ product, withLink }) {
    return (

        withLink
            ?
            <NavLink className='product-slider-card-image' to={"products/" + product.id}>
                <img src={product.images[0].uri} />
            </NavLink>
            :
            <img src={product.images[0].uri} />


    )
}