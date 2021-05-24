import styled from 'styled-components'
import {SunFill} from '@styled-icons/bootstrap/SunFill'
import {Water} from '@styled-icons/ionicons-solid/Water'
import {Wind} from '@styled-icons/fa-solid/Wind'
import React from 'react'
import {NavLink, Div} from './WElement'


const YSun = styled(SunFill)`
color: yellow;
width: 5rem;
`
const WTR = styled(Water)`
color: blue;
width: 3rem;
`
const W = styled(Wind)`
color: rgba(255, 255, 255, 0.548);
width: 3rem;
`

const Wcontain = () => {
    return(
        <>
        
        <div className="Listtemp" fluid>
            <Div id='weatherL'>
                <NavLink to="/weather">Today</NavLink>
                <NavLink to="/WC">10 Days</NavLink>
                <NavLink to="/MW">Monthly</NavLink>
            </Div>
                    <div className="Dtemp">
                        <YSun className="display" /><p id="popUpDays">Wednesday 19</p><p><img src="./images/Thermometer.png" id="Temp"></img>101°|70°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 14 mph/NE</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 11%</p>
                    </div>
                    <div className="Dtemp">
                        <img src="./images/Sun.png" id="CSun"></img><p id="popUpDays">Thursday 20</p><p><img src="./images/Thermometer.png" id="Temp"></img>97°|69°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 12 mph/NE</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 10%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun  className="display" /><p id="popUpDays">Friday 21</p><p><img src="./images/Thermometer.png" id="Temp"></img>88°|60°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 8 mph/NE</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 8%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun  className="display" /><p id="popUpDays">Saturday 22</p><p><img src="./images/Thermometer.png" id="Temp"></img>89°|59°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 5 mph/NNE</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 10%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun  className="display" /><p id="popUpDays">Sunday 23</p><p><img src="./images/Thermometer.png" id="Temp"></img>91°|61°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 3 mph/N</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 9%</p>
                    </div>
                    <div className="Dtemp">
                        <img src="./images/Sun.png" id="CSun"></img><p id="popUpDays">Monday 24</p><p><img src="./images/Thermometer.png" id="Temp"></img>97°|65°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 6 mph/N</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 10%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun className="display" /><p id="popUpDays">Tuesday 25</p><p><img src="./images/Thermometer.png" id="Temp"></img>98°|67°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 9 mph/NE</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 8%</p>
                    </div>
                    <div className="Dtemp">
                        <img src="./images/Sun.png" id="CSun"></img><p id="popUpDays">Wednesday 26</p><p><img src="./images/Thermometer.png" id="Temp"></img>98°|67°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 12 mph/N</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 10%</p>
                    </div>
                    <div className="Dtemp">
                        <img src="./images/Sun.png" id="CSun"></img><p id="popUpDays">Thursday 27</p><p><img src="./images/Thermometer.png" id="Temp"></img>96°|66°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 12 mph/N</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 11%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun className="display" /><p id="popUpDays">Friday 28</p><p><img src="./images/Thermometer.png" id="Temp"></img>94°|67°</p><p><WTR />Precipitation: 0%</p><p><W />Wind Speed: 12 mph/NNE</p><p><img src='./images/Humidity.png' id="Water"></img>Humdity: 12%</p>
                    </div>
                </div>
        </>
    )
}

export default Wcontain