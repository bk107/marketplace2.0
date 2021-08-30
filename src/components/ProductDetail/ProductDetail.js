import React from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import ProductSeller from '../ProductSeller/ProductSeller'
import SellerProductSlider from '../SellerProductSlider/SellerProductSlider'
import './ProductDetail.css'

export default function ProductDetail({ product }) {
    return (
        <div className='product-detail'>
            <div className="product-detail-hero">
                <div className="product-detail-image">
                    <ProductImage product={product} />
                </div>
                <div className="product-detail-info">
                    <ProductName product={product} />
                    <ProductPrice price={product.priceListItems[0].price} />
                    <ProductSeller seller={product.priceList[0].company} />
                </div>
            </div>

            <SellerProductSlider
                seller={product.priceList[0].company}
                productIdToExclude={product.id}
                title={"More products from " + product.priceList[0].company.name}
            />

        </div>
    )
}