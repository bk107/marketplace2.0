import React, { useEffect, useState } from 'react'
import SellerDetail from '../components/SellerDetail/SellerDetail'
import OneColumnTemplate from '../templates/OneColumnTemplate/OneColumnTemplate'

export default function SellerDetailPage(props) {

    const [seller, setSeller] = useState(null)

    useEffect(() => {

        fetch(process.env.REACT_APP_MIDDLEWARE_SERVER + "/company/" + props.match.params.id)
            .then(res => res.json())
            .then(response => {
                console.log("response", response)
                setSeller(response)
            })

    }, [props.match.params.id])

    return (
        <OneColumnTemplate
            classNames={'seller-detail-page'}
        >
            {
                seller ?
                    <SellerDetail seller={seller} />
                    : ""
            }
        </OneColumnTemplate>

    )
}