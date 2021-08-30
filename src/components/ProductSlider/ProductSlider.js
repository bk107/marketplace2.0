import React from 'react'
import './ProductSlider.css'
import ProductSliderCards from './ProductSliderCards'
import ProductSliderTitle from './ProductSliderTitle'

export default function ProductSlider({ products, title }) {

    let content = <> </>
    
    if (products.length > 0) {
        content =
            <div className="product-slider">
                <ProductSliderTitle title={title} />
                <ProductSliderCards products={products} />
            </div>
    }

    return content

}