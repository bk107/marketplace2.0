import React from 'react'
import './OneColumnTemplate.css'

export default function OneColumnTemplate({ classNames, title, children }) {
    return (
        <div className={classNames}>
            <div className="title">
                <h1> {title} </h1>
            </div>
            <div className="c">
                {children}
            </div>
        </div>
    )
}