import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements'
import styled from 'styled-components'
import {WeatherSunnyLow} from '@styled-icons/fluentui-system-filled/WeatherSunnyLow'
/* import Logo from '.WeatherStolen.png/images/public' */
//import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                   <WeatherSunnyLow size="48" />Arizona Weather
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
