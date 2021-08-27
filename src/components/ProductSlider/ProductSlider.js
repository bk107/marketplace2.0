import React from 'react'
import ProductSliderCard from '../ProductSliderCard/ProductSliderCard'
import './ProductSlider.css'

export default function ProductSlider({ products, title }) {

    let content = <> </>

    if (products.length > 0) {
        content =
            <div className="product-slider">
                <div className="product-slider-title">
                    {title}
                </div>
                <div className="product-slider-cards">
                    {
                        products.map(product => {
                            return (
                                <ProductSliderCard product={product} key={product.id} />
                            )
                        })
                    }
                </div>
            </div>
    }

    return content

}