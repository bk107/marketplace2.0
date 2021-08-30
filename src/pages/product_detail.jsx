import React, { useEffect, useState } from 'react'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import OneColumnTemplate from '../templates/OneColumnTemplate/OneColumnTemplate'

export default function ProductDetailPage(props) {

    const [product, setProduct] = useState(null)

    useEffect(() => {

        fetch(process.env.REACT_APP_MIDDLEWARE_SERVER + "/product/" + props.match.params.id)
            .then(res => res.json())
            .then(response => {
                console.log("response", response)
                setProduct(response)
            })

    }, [props.match.params.id])

    return (
        <OneColumnTemplate
            classNames={'product-detail-page'}
        >
            {
                product ?
                    <ProductDetail product={product} />
                    : ""
            }
        </OneColumnTemplate>

    )
}