import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductSliderCardSeller({ seller }) {

    return (
        <div className="product-slider-card-product-seller">
            {'Sold By: '}
            <NavLink to={`/company/${seller.id}`}>
                {seller.name}
            </NavLink>
        </div>
    )
}


