import React from 'react'
import SellerProductSlider from '../SellerProductSlider/SellerProductSlider'

export default function SellerDetail(props) {



    return (
        <div className='seller-detail'>
            <h1> {props.seller.name} </h1>
            <p> {props.seller.description}</p>
            <SellerProductSlider seller={props.seller} title={"Products"}  />
        </div>
    )
}