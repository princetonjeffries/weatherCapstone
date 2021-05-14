import React from 'react'
import {Nav, NavLink, NavMenu} from './NavbarElements'
import {WeatherSunnyLow} from '@styled-icons/fluentui-system-filled/WeatherSunnyLow'

const Navbar = () => {
    return (
        <>
            <Nav id='nav'>
                <NavLink to='/'>
                    <WeatherSunnyLow size='48'/> <h1>Arizona Weather</h1> 
                </NavLink>
                <NavMenu>
                    <NavLink to='/weather'>
                        Weather
                    </NavLink>
                    <NavLink to='/about'>
                        About Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
