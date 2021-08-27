import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.css'

export default function AppHeader() {
    return (
        <div className="app-header">
            <ul>
                <li> <NavLink to="/"> Home </NavLink> </li>
            </ul>
            <ul className="jc-flex-end">
                <li> <NavLink to="/my-account"> My Account </NavLink> </li>
                <li> Cart </li>
                <li> Register </li>
            </ul>
        </div>
    )
}