import styled from 'styled-components'
import {SunFill} from '@styled-icons/bootstrap/SunFill'
import Container from 'react-bootstrap/Container'
import React from 'react'
import {NavLink, Div} from './WElement'

const XSun = styled(SunFill)`
    color: yellow;
    width: 10rem;`



var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

/* import {Container} from 'react-bootsrap/Container'; */


const Weather = () => {
    return (
        <div className='Listtemp2 text-center'>
            <Div id='weatherL'>
                <NavLink to="/weather">Today</NavLink>
                <NavLink to="/WC">10 Days</NavLink>
                <NavLink to="/MW">Monthly</NavLink>
            </Div>
            <div className="containerHanad" fluid>
                <div className="Ttemp">
                    <p id="TempText"><XSun />95°F</p>
                    <div id="time">{time}</div>
                </div>
                <div id="WP">
                    <p id="wpText">Precipitation: 0%</p>
                    <p id="wpText">Wind: 14mph</p>
                    <p id="wpText">Humidity: 14%</p>
                </div>
                <div className="Trrowtemp">
                    <p id="Ttext">Tomorrow Temp.</p>
                    <p id="TtempText">85°F</p>
                </div>

            </div>
        </div>
    )
}

export default Weather

