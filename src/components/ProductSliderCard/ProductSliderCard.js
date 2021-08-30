import React from 'react'
import './ProductSliderCard.css'
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import ProductSeller from '../ProductSeller/ProductSeller'

export default function ProductSliderCard({ product }) {

    return (
        <div className="product-slider-card" key={product.product.name}>
            <ProductImage product={product.product} withLink={true} />
            <ProductName product={product.product} withLink={true} />
            <ProductPrice price={product.price} />
            <ProductSeller seller={product.seller} />
        </div>
    )

}