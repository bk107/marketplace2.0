import React from 'react'

export default function AppContent(props) {
    return (
        <div className="app-content">
            {props.children}
        </div>
    )
}