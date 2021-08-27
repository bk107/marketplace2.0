import React from 'react'
import './AppContent.css'

export default function AppContent(props) {
    return (
        <div className="app-content">
            {props.children}
        </div>
    )
}