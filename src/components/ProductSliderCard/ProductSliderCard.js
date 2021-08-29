import React from 'react'
import './ProductSliderCard.css'
import ProductSliderCardImage from './ProductSliderCardImage'
import ProductSliderCardName from './ProductSliderCardName'
import ProductSliderCardPrice from './ProductSliderCardPrice'
import ProductSliderCardSeller from './ProductSliderCardSeller'

export default function ProductSliderCard({ product }) {

    return (
        <div className="product-slider-card" key={product.product.name}>
            <ProductSliderCardImage product={product} />
            <ProductSliderCardName product={product} />
            <ProductSliderCardPrice product={product} />
            <ProductSliderCardSeller product={product} />
        </div>
    )

}