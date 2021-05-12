import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements'
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Arizona Weather</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/weather' activeStyle>
                        Weather
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
