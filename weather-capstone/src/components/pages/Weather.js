import React from 'react'
import styled from 'styled-components'
import {SunFill} from '@styled-icons/bootstrap/SunFill'
import {PartlySunny} from '@styled-icons/ionicons-sharp/PartlySunny'
import Container from 'react-bootstrap/Container'



const YSun = styled(SunFill)`
    color: yellow;
    width: 5rem;
    `
const XSun =styled(SunFill)`
    color: yellow;
    width: 10rem;`

const CSun = styled(PartlySunny)`
    color: yellow;
    width: 5rem;
    background-color: white;
    `

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

/* import {Container} from 'react-bootsrap/Container'; */


const Weather = () => {
    return (
        <Container fluid>
            <div className="container">
                <div className="Ttemp">
                    <p id="TempText"><XSun />88°F</p>
                    <div id="time">{time}</div>
                </div>
                <div id="WP">
                    <p id="wpText">Precipitation: 0%</p>
                    <p id="wpText">Wind: 9mph</p>
                    <p id="wpText">Humidity: 14%</p>
                </div>
                <div className="Trrowtemp">
                    <p id="Ttext">Tomorrow Temp.</p>
                    <p id="TtempText">82°F</p>
                </div>

            </div>
                <div className="Listtemp" fluid>
                    <div className="Dtemp">
                        <img src="./images/Sun.png" id="CSun"></img><p id="popUpDays">Tuesday</p><p>94°|69°</p><p>Precipitation: 0%</p><p>Wind Speed: 6 mph/NE</p><p>Humdity: 5%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun className="display" /><p id="popUpDays">Wednsday</p><p>99°|68°</p><p>Precipitation: 0%</p><p>Wind Speed: 6 mph/NE</p><p>Humdity: 4%</p>
                    </div>
                    <div className="Dtemp">
                    <img src="./images/Sun.png" id="CSun"></img><p id="popUpDays">Thursday</p><p>96°|67°</p><p>Precipitation: 0%</p><p>Wind Speed: 4 mph/NE</p><p>Humdity: 6%</p>
                    </div>
                    <div className="Dtemp">
                    <img src="./images/Sun.png" id="CSun"></img><p id="popUpDays">Friday</p><p>87°|59°</p><p>Precipitation: 0%</p><p>Wind Speed: 3 mph/NEE</p><p>Humdity: 4%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun  className="display" /><p id="popUpDays">Saturday</p><p>88°|59°</p><p>Precipitation: 0%</p><p>Wind Speed: 5 mph/NNE</p><p>Humdity: 5%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun className="display" /><p id="popUpDays">Sunday</p><p>92°|62°</p><p>Precipitation: 3%</p><p>Wind Speed: 8 mph/NE</p><p>Humdity: 4%</p>
                    </div>
                    <div className="Dtemp">
                        <YSun className="display" /><p id="popUpDays">Monday</p><p>97°|65°</p><p>Precipitation: 1%</p><p>Wind Speed: 12 mph/NE</p><p>Humdity: 6%</p>
                    </div>
                </div>
        </Container>
    )
}

export default Weather

