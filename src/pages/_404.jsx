import React from 'react'
import { NavLink } from 'react-router-dom'
import OneColumnTemplate from '../templates/OneColumnTemplate/OneColumnTemplate'

export default function NotFoundPage(props) {

    const goBack = () => {
        window.history.back()
    }

    return (
        <OneColumnTemplate
            title="404 - Page Not found"
        >
            <p>
                The page you were looking for does not exist
            </p>
            <p>
                <button className="btn-default" onClick={goBack}> Go Back </button>
            </p>
        </OneColumnTemplate>
    )
}