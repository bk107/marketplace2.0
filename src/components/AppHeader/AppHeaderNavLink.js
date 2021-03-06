import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AppHeaderNavLink({ to, label, children }) {

    return (
        <NavLink exact to={to} activeClassName="selected">
            {label}
            {children}
        </NavLink>
    )
}