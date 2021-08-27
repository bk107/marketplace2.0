import React from 'react'
import './ProductSliderCard.css'
import ProductSliderCardName from './ProductSliderCardName'
import ProductSliderCardPrice from './ProductSliderCardPrice'
import ProductSliderCardSeller from './ProductSliderCardSeller'

export default function ProductSliderCard({ product }) {

    return (
        <div className="product-slider-card" key={product.productBean.name}>
            <ProductSliderCardName product={product} />
            <ProductSliderCardPrice product={product} />
            <ProductSliderCardSeller product={product} />
        </div>
    )

}