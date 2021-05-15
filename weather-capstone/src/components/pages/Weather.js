import React from 'react'
import styled from 'styled-components'
import {SunFill} from '@styled-icons/bootstrap/SunFill'
/* import {Container} from 'react-bootsrap/Container'; */

const YSun = styled(SunFill)`
    color: yellow;
    width: 3rem;
    `
const XSun =styled(SunFill)`
    color: yellow;
    width: 13rem;`

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

const Weather = () => {
    return (
        <div>
            <div className="container">
                <div className="Ttemp">
                    <h2><XSun />99°F</h2>
                    <div className="timeCheck" id="time">{time}</div>
                </div>
                <div id="WP">
                    <p id="wpText">Precipitation: 0%</p>
                    <p id="wpText">Wind: 12mph</p>
                    <p id="wpText">Humidity: 6%</p>
                </div>
                <div className="Trrowtemp">
                    <p id="Ttext">Tomorrow Temp.</p>
                    <p id="TtempText">100°F</p>
                </div>

            </div>
                <div className="Listtemp" fluid>
                    <div className="Dtemp">
                        <YSun /><p>Saturday</p><p>96°|64°</p><p>Precipitation: 0%</p><p>Wind Speed: 9 mph</p><p>Humdity: 5%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun /><p>Sunday</p><p>88°|62°</p><p>Precipitation: 0%</p><p>Wind Speed: 11 mph</p><p>Humdity: 4%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun /><p>Monday</p><p>89°|65°</p><p>Precipitation: 0%</p><p>Wind Speed: 4 mph</p><p>Humdity: 6%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun /><p>Tuesday</p><p>95°|68°</p><p>Precipitation: 0%</p><p>Wind Speed: 4 mph</p><p>Humdity: 4%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun /><p>Wednsday</p><p>96°|69°</p><p>Precipitation: 0%</p><p>Wind Speed: 3 mph</p><p>Humdity: 5%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun /><p>Thursday</p><p>91°|61°</p><p>Precipitation: 0%</p><p>Wind Speed: 8 mph</p><p>Humdity: 4%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun /><p>Friday</p><p>85°|61°</p><p>Precipitation: 0%</p><p>Wind Speed: 9 mph</p><p>Humdity: 6%</p>
                    </div>
                </div>
        </div>
    )
}

export default Weather

