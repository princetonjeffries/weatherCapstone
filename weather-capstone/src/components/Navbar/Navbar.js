import React from 'react'
import {Nav, NavLink, NavMenu} from './NavbarElements'
import {WeatherSunnyLow} from '@styled-icons/fluentui-system-filled/WeatherSunnyLow'
/* import Logo from '.WeatherStolen.png/images/public' */
//import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <>
            <Nav id='nav'>
                <NavLink to='/'>
                    <WeatherSunnyLow size='48'/> Arizona Weather 
                </NavLink>
                <NavMenu>
                    <NavLink to='/weather'>
                        Weather
                    </NavLink>
                    <NavLink to='/about'>
                        About Us
                    </NavLink>
                    <NavLink to='/stories'>
                        Stories
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
