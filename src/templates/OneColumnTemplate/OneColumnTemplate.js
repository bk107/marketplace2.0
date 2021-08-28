import React from 'react'
import './OneColumnTemplate.css'

export default function OneColumnTemplate({ classNames, title, children }) {

    const getTitle = () => {
        
        let titleContent = ""

        if (title) {
            titleContent = (
                <div className="title">
                    <h1> {title} </h1>
                </div>
            )
        }

        return titleContent;
    }
    return (
        <div className={classNames}>
            {getTitle()}
            <div className="c">
                {children}
            </div>
        </div>
    )
}