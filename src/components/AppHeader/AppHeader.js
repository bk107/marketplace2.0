import React from 'react'
import './AppHeader.css'
import AppHeaderNavLink from './AppHeaderNavLink'

export default function AppHeader() {
    return (
        <div className="app-header">
            <ul>
                <li> <AppHeaderNavLink to="/" label="Home" /></li>
            </ul>
            <ul className="jc-flex-end">
                <li> <AppHeaderNavLink to="/my-account" label="My Account" /></li>
                <li> Cart </li>
                <li>
                    <AppHeaderNavLink to="/sign-up" label="Register / Login" />
                </li>
            </ul>
        </div>
    )
}